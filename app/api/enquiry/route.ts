import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { business, enquiryOptions } from "@/lib/business";
export const runtime = "nodejs";
const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(30)
    .regex(/^[+\d\s().-]+$/),
  email: z.union([z.email().max(150), z.literal("")]).optional(),
  service: z.enum(enquiryOptions as [string, ...string[]]),
  location: z.string().trim().min(2).max(180),
  description: z.string().trim().min(10).max(3000),
  website: z.string().max(0),
  startedAt: z.number().positive(),
});
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  // Next may bind to 0.0.0.0 behind a proxy; compare with the actual request host.
  let sameOrigin = false;
  try {
    sameOrigin =
      !!origin && new URL(origin).host === request.headers.get("host");
  } catch {
    /* Invalid origin remains rejected. */
  }
  if (!sameOrigin)
    return NextResponse.json(
      { error: "Please submit your enquiry from this website." },
      { status: 403 },
    );
  const raw = await request.text();
  if (raw.length > 12000)
    return NextResponse.json(
      { error: "Your enquiry is too long. Please shorten the description." },
      { status: 413 },
    );
  let input;
  try {
    input = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { error: "Please check your enquiry and try again." },
      { status: 400 },
    );
  }
  const parsed = schema.safeParse(input);
  if (!parsed.success)
    return NextResponse.json(
      {
        error:
          "Please check all required fields, your phone number and email. The description needs at least 10 characters.",
      },
      { status: 400 },
    );
  if (Date.now() - parsed.data.startedAt < 2500)
    return NextResponse.json(
      { error: "Please take a moment to review your details, then try again." },
      { status: 429 },
    );
  const { name, phone, email, service, location, description } = parsed.data;
  // No personal data is persisted or logged. Optional direct delivery must use a server-only HTTPS webhook.
  if (process.env.ENQUIRY_WEBHOOK_URL) {
    try {
      const endpoint = new URL(process.env.ENQUIRY_WEBHOOK_URL);
      if (endpoint.protocol !== "https:") throw new Error("HTTPS required");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.ENQUIRY_WEBHOOK_SECRET
            ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_SECRET}` }
            : {}),
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          service,
          location,
          description,
        }),
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) throw new Error("Delivery failed");
      return NextResponse.json({ delivered: true });
    } catch {
      return NextResponse.json(
        {
          error:
            "Direct delivery is temporarily unavailable. Please contact us using the WhatsApp link or phone number on this page.",
        },
        { status: 502 },
      );
    }
  }
  const message = `Hello Mercy City, I would like to enquire about ${service}.\n\nName: ${name}\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}\nProject location: ${location}\n\n${description}`;
  return NextResponse.json(
    {
      delivered: false,
      url: `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
