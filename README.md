# Mercy City Solar & Boreholes

Next.js App Router / TypeScript / Motion / Lucide / Next Image.

## Run

`npm ci`, `npm run dev`. Production: `npm run build`, `npm start`.

## Content and media

Business details, services, image captions, FAQs and categories live in `lib/business.ts`. Source originals remain untouched in the client's supplied folder. See `ASSETS.md` for classification. Photographs are client-provided portfolio imagery; ownership, locations, dimensions, capacities and performance have not been established. Do not change captions into completion claims without confirmation.

The client logo is cropped from its original white-background image without redrawing. It intentionally retains white to preserve all details. All eight photographs are optimized WebP copies. Video has no audio, is user-controlled, and does not preload.

## Enquiries

The client confirmed +263783602491 in this chat. Central phone and WhatsApp values are in `lib/business.ts`. Hours and email are unconfirmed and omitted. The business-hours screenshot is not evidence that the schedule remains current.

`POST /api/enquiry` is an actual server handler. It checks same-origin requests, size, schema, a honeypot and a minimum form-fill interval. It does not store or log personal information. Its default response contains an encoded WhatsApp message addressed to the confirmed number. The visitor must click the returned link, review the message and send it. **A successful API response is not delivery to the business.** The UI explicitly says so. No automatic WhatsApp message is sent.

Optional direct delivery is supported with server-only `ENQUIRY_WEBHOOK_URL` (HTTPS) and `ENQUIRY_WEBHOOK_SECRET`. The endpoint must durably accept the JSON and return 2xx. Do not configure a test/untrusted endpoint. Before enabling it, update the form explanation and privacy page for the actual recipient and retention, add provider-backed rate limiting if needed, and verify delivery. Honeypot/timing protection discourages basic bots; it is not a distributed rate limiter.

## Publishing

Set `NEXT_PUBLIC_SITE_URL` to the actual public production origin before rebuilding if the hostname changes. The value feeds metadata, structured data, sitemap and robots. GitHub repository: `RonanJaeger721/MERCY-CITY-SOLAR`. Vercel project: `mercy-city-solar`.

## Accessibility

Semantic routes, skip link, visible focus rings, labeled required fields, keyboard operable navigation, native disclosure elements, reduced-motion alternatives, slideshow stop/play and offscreen pause, gallery arrow navigation and a native modal dialog with focus restoration. No fabricated testimonials or performance metrics.
