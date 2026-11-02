import { ArrowUpRight, Check } from "lucide-react";
import {
  Button,
  Photo,
  SectionReveal,
  HeroSlider,
  ServiceCard,
  ServiceList,
  GroundToWater,
  HorizontalCarousel,
  ProcessTimeline,
  WaveDivider,
  FAQAccordion,
  FinalCTA,
} from "@/components/ui";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <HeroSlider />
      <section className="section intro container" id="about">
        <SectionReveal className="intro-visual">
          <div className="intro-photo">
            <Photo
              id="agriculture"
              alt="Elevated water tanks overlooking agricultural fields"
              position="50% 50%"
            />
          </div>
          <div className="image-note">
            <span className="line-mark" />
            <span>
              WATER ACCESS.
              <br />
              <strong>REAL-WORLD PURPOSE.</strong>
            </span>
          </div>
          <span className="vertical-note">
            FROM THE CLIENT’S IMAGE COLLECTION
          </span>
        </SectionReveal>
        <SectionReveal className="intro-copy">
          <div className="eyebrow">THE GROUNDWORK FOR SOMETHING BETTER</div>
          <h2>
            Built around
            <br />
            <span className="blue">reliable water.</span>
          </h2>
          <p>
            Reliable water infrastructure begins with understanding the ground
            beneath us.
          </p>
          <p>
            Mercy City Solar & Boreholes brings together groundwater surveying,
            borehole drilling, solar pump installation and technical services to
            support practical water access solutions.
          </p>
          <div className="button-row">
            <Button href="/services">OUR SERVICES</Button>
            <Link className="text-link" href="/projects">
              VIEW PROJECTS <ArrowUpRight size={16} />
            </Link>
          </div>
        </SectionReveal>
      </section>
      <section className="section services-section">
        <div className="container">
          <SectionReveal className="section-top">
            <div>
              <div className="eyebrow">CONNECTED EXPERTISE</div>
              <h2>
                Understanding the ground.
                <br />
                Connecting the possibilities.
              </h2>
            </div>
            <p>
              From the first survey to the pumping system, explore the services
              that bring your water project into focus.
            </p>
          </SectionReveal>
          <div className="service-grid">
            <ServiceCard
              number="01"
              title="Groundwater Surveying"
              copy="Groundwater intelligence, underground water surveys and site assessment services."
              image="survey"
              href="/services#underground-water-survey"
              className="survey-card"
            />
            <ServiceCard
              number="02"
              title="Borehole Drilling"
              copy="Borehole drilling solutions, with project scope determined through consultation."
              image="drilling"
              href="/services#borehole-drilling"
              className="drill-card"
            />
            <ServiceCard
              number="03"
              title="Solar Pump Installations"
              copy="Solar-powered pumping systems designed around the requirements of each installation."
              image="solar-tanks"
              href="/services#solar-pump-installation"
              className="solar-card"
            />
            <ServiceCard
              number="04"
              title="Technical Survey Services"
              copy="GIS, earth observation and ground-penetrating radar services for project-specific requirements."
              image="agriculture"
              href="/services#gis-services"
              className="technical-card"
            />
          </div>
          <ServiceList />
        </div>
      </section>
      <section className="section showcase">
        <div className="container">
          <SectionReveal className="section-top">
            <div>
              <div className="eyebrow light">IN FOCUS / THE INFRASTRUCTURE</div>
              <h2>
                Engineered for
                <br />
                the real world.
              </h2>
            </div>
            <div>
              <p>
                A closer look at drilling, solar water systems and storage
                infrastructure through client-provided portfolio imagery.
              </p>
              <Link href="/projects" className="text-link">
                EXPLORE ALL IMAGES <ArrowUpRight size={16} />
              </Link>
            </div>
          </SectionReveal>
          <HorizontalCarousel />
        </div>
        <WaveDivider fill="#fff" />
      </section>
      <ProcessTimeline />
      <section className="section solar-section">
        <div className="container">
          <SectionReveal className="section-top">
            <div>
              <div className="eyebrow">FROM THE GROUND TO THE EVERYDAY</div>
              <h2>
                Water infrastructure
                <br />
                meets solar power.
              </h2>
            </div>
            <p>
              See how the services connect. Select a stage to explore the
              journey from site understanding to a water system.
            </p>
          </SectionReveal>
          <GroundToWater />
          <div className="solar-bottom">
            <p>
              Solar pump installation is part of our technical offering. Discuss
              water pumping infrastructure and integration with suitable
              water-storage configurations.
            </p>
            <div>
              <ul>
                {[
                  "Solar pump installation",
                  "Water pumping infrastructure",
                  "Suitable water-storage integration",
                ].map((s) => (
                  <li key={s}>
                    <Check size={16} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <Button href="/contact?service=Solar%20Pump%20Installation">
                DISCUSS YOUR SOLAR PUMP PROJECT
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="image-story">
        <Photo
          id="solar-single"
          alt="Elevated water tank and solar panels in an open rural landscape"
          position="50% 35%"
        />
        <div className="story-shade" />
        <div className="container story-content">
          <SectionReveal className="story-glass">
            <div className="eyebrow light">WATER. ENERGY. EVERYDAY LIFE.</div>
            <h2>
              Practical infrastructure.
              <br />
              Built around your needs.
            </h2>
            <Button secondary>LET’S DISCUSS YOUR PROJECT</Button>
          </SectionReveal>
          <span className="tiny">CLIENT-PROVIDED PORTFOLIO PHOTOGRAPHY</span>
        </div>
      </section>
      <section className="section why container">
        <SectionReveal>
          <div className="eyebrow">WHY MERCY CITY</div>
          <h2>
            One conversation.
            <br />A connected perspective.
          </h2>
          <p>
            Water projects bring different questions together. Our range of
            services gives you a place to start.
          </p>
          <Link className="text-link" href="/about">
            GET TO KNOW MERCY CITY <ArrowUpRight size={17} />
          </Link>
        </SectionReveal>
        <div className="why-list">
          {[
            [
              "Multiple Water-Related Services",
              "Surveying, drilling and solar pump installation within one service offering.",
            ],
            [
              "Surveying & Technical Capability",
              "Groundwater intelligence alongside GIS, earth observation and GPR services.",
            ],
            [
              "Solar Pump Solutions",
              "An opportunity to discuss pumping and storage as a connected system.",
            ],
            [
              "Project-Focused Consultation",
              "Start with your site, requirements and the questions that matter to you.",
            ],
          ].map(([title, copy], i) => (
            <SectionReveal key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-layout">
          <SectionReveal>
            <div className="eyebrow">A LITTLE MORE CLARITY</div>
            <h2>
              Good questions.
              <br />A clearer beginning.
            </h2>
            <p>Looking for something more specific?</p>
            <Link className="text-link" href="/contact">
              LET’S TALK <ArrowUpRight size={16} />
            </Link>
          </SectionReveal>
          <FAQAccordion />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
