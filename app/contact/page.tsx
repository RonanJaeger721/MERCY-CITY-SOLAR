import type { Metadata } from "next";
import { Phone, ArrowUpRight, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { business } from "@/lib/business";
import { Photo } from "@/components/ui";
export const metadata: Metadata = {
  title: "Contact & Enquiries",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  return (
    <>
      <section className="page-heading container">
        <div className="eyebrow">LET’S START WITH YOUR REQUIREMENTS</div>
        <h1>
          Your next water project
          <br />
          starts with a conversation.
        </h1>
        <p>
          Tell us about your site, your water needs and the service you have in
          mind.
        </p>
      </section>
      <section className="contact-layout container">
        <aside>
          <div className="contact-photo">
            <Photo
              id="three-tanks"
              alt="Three elevated water storage tanks on steel structures"
              priority
            />
          </div>
          <div className="contact-info">
            <div>
              <MapPin size={20} aria-hidden="true" />
              <span>
                <small>FIND US</small>
                {business.location}
              </span>
            </div>
            <a href={`tel:+${business.whatsapp}`}>
              <Phone size={20} aria-hidden="true" />
              <span>
                <small>CALL MERCY CITY</small>
                {business.phone}
              </span>
              <ArrowUpRight size={18} />
            </a>
            <a href={`https://wa.me/${business.whatsapp}`}>
              <span>
                <small>WHATSAPP</small>Start a conversation
              </span>
              <ArrowUpRight size={18} />
            </a>
            <div className="hours-note">
              <small>BUSINESS HOURS</small>
              <p>
                Please contact us to confirm availability before planning a
                visit.
              </p>
            </div>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
