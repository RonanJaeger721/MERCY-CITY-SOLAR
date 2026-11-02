import type { Metadata } from "next";
import { business } from "@/lib/business";
export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  return (
    <article className="page-heading prose container">
      <div className="eyebrow">YOUR ENQUIRY INFORMATION</div>
      <h1>Privacy information.</h1>
      <p>
        The enquiry form asks for your name, contact number, optional email,
        service, project location and description to help you contact Mercy City
        Solar & Boreholes.
      </p>
      <h2>How the form works</h2>
      <p>
        The website’s server validates the details and prepares a WhatsApp link.
        The website does not persist or log your form contents. The message
        reaches Mercy City only when you open WhatsApp and send it. WhatsApp
        then processes the conversation under its own privacy terms.
      </p>
      <h2>Your choices</h2>
      <p>
        Share only information relevant to your enquiry. Avoid identity
        documents, financial details or other sensitive information. You can
        edit the prepared message before sending it, or contact Mercy City by
        phone instead.
      </p>
      <h2>Hosting and local storage</h2>
      <p>
        The hosting provider may process standard request information for
        delivery and security. This site does not use advertising cookies,
        analytics trackers or browser storage for enquiry details.
      </p>
      <h2>Questions</h2>
      <p>
        For questions about information you send to the business, contact Mercy
        City on <a href={`tel:+${business.whatsapp}`}>{business.phone}</a>.
      </p>
    </article>
  );
}
