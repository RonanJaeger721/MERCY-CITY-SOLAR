import type { Metadata } from "next";
import {
  Button,
  Photo,
  SectionReveal,
  FinalCTA,
  ProcessTimeline,
} from "@/components/ui";
export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <>
      <section className="page-heading container">
        <div className="eyebrow">ABOUT MERCY CITY</div>
        <h1>
          A practical approach
          <br />
          to water access.
        </h1>
        <p>
          Groundwater understanding. Drilling. Solar-powered pumping.
          <br /> Connected services for real infrastructure needs.
        </p>
      </section>
      <section className="about-banner">
        <Photo
          id="agriculture"
          alt="Water storage tanks overlooking cultivated agricultural fields"
          priority
        />
      </section>
      <section className="section container about-body">
        <SectionReveal>
          <div className="eyebrow">GROUNDED IN YOUR REQUIREMENTS</div>
          <h2>
            Reliable water begins
            <br />
            with understanding.
          </h2>
        </SectionReveal>
        <SectionReveal>
          <p>
            Based in Tynwald South, Zimbabwe, Mercy City Solar & Boreholes
            offers groundwater intelligence, underground water surveys, borehole
            drilling and solar pump installation.
          </p>
          <p>
            Our service offering also includes GIS, earth observation and
            ground-penetrating radar. These technical services create
            opportunities to discuss a site’s requirements from different
            perspectives.
          </p>
          <p>
            Every enquiry starts with the information you share. The relevant
            assessment, proposed scope and next steps depend on your project and
            the service required.
          </p>
          <Button href="/services">EXPLORE OUR CAPABILITIES</Button>
        </SectionReveal>
      </section>
      <section className="section capability-band">
        <div className="container">
          <div className="eyebrow">A CONNECTED SERVICE OFFERING</div>
          <div className="capability-list">
            <h3>Understand the site.</h3>
            <h3>Access the water.</h3>
            <h3>Connect the system.</h3>
          </div>
          <p>
            Our website features client-provided portfolio photographs. Image
            descriptions reflect what is visible; they do not establish project
            ownership, locations or technical performance.
          </p>
        </div>
      </section>
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}
