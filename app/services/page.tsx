import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/business";
import { Button, Photo, SectionReveal, FinalCTA } from "@/components/ui";
export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
};
const option = (id: string) =>
  id.includes("groundwater") || id === "underground-water-survey"
    ? "Groundwater Survey"
    : id === "borehole-drilling"
      ? "Borehole Drilling"
      : id === "solar-pump-installation"
        ? "Solar Pump Installation"
        : id === "gpr-services"
          ? "GPR Services"
          : "GIS / Earth Observation";
export default function Services() {
  return (
    <>
      <section className="page-heading container">
        <div className="eyebrow">OUR SERVICES</div>
        <h1>
          From site insight
          <br />
          to water infrastructure.
        </h1>
        <p>
          Explore the service that fits your requirements.
          <br />
          The right scope begins with a conversation.
        </p>
      </section>
      <nav className="service-index container" aria-label="Service index">
        {services.map((s, i) => (
          <Link key={s.id} href={`#${s.id}`}>
            <span>0{i + 1}</span>
            {s.title}
          </Link>
        ))}
      </nav>
      <div className="container service-details">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`service-detail ${i % 2 ? "reverse" : ""}`}
          >
            <SectionReveal className="detail-photo">
              <Photo
                id={s.image}
                alt={
                  s.image === "survey"
                    ? "Client-provided photograph of groundwater survey equipment"
                    : s.image === "drilling"
                      ? "Drilling rig beside borehole casing pipes"
                      : s.image === "agriculture"
                        ? "Agricultural water storage in a cultivated landscape"
                        : "Solar panels beneath elevated water tanks"
                }
              />
              <span className="photo-label">
                {["gis-services", "earth-observation", "gpr-services"].includes(
                  s.id,
                )
                  ? "RELATED CLIENT-PROVIDED IMAGERY"
                  : "CLIENT-PROVIDED PORTFOLIO IMAGE"}
              </span>
            </SectionReveal>
            <SectionReveal>
              <div className="eyebrow">
                0{i + 1} / {s.category}
              </div>
              <h2>{s.title}</h2>
              <h3>{s.short}</h3>
              <p>{s.description}</p>
              <Button
                href={`/contact?service=${encodeURIComponent(option(s.id))}`}
              >
                ENQUIRE ABOUT THIS SERVICE
              </Button>
            </SectionReveal>
          </section>
        ))}
      </div>
      <FinalCTA />
    </>
  );
}
