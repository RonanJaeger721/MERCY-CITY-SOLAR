import type { Metadata } from "next";
import { ProjectGallery, FinalCTA } from "@/components/ui";
export const metadata: Metadata = {
  title: "Project Imagery",
  alternates: { canonical: "/projects" },
};
export default function Projects() {
  return (
    <>
      <section className="page-heading container">
        <div className="eyebrow">THE INFRASTRUCTURE / IN FOCUS</div>
        <h1>
          A closer look at
          <br />
          the real world.
        </h1>
        <p>
          Drilling, solar water systems, storage and site surveys.
          <br /> Explore the client-provided image collection.
        </p>
        <small className="portfolio-note">
          Images are described by visible content. Project ownership, locations
          and technical specifications have not been verified.
        </small>
      </section>
      <section className="container gallery-section">
        <ProjectGallery />
      </section>
      <section className="section container field-film">
        <div>
          <div className="eyebrow">FROM THE FIELD</div>
          <h2>
            Infrastructure
            <br />
            in motion.
          </h2>
          <p>
            Short, client-provided footage. Use the player controls to watch the
            site activity.
          </p>
        </div>
        <video
          controls
          preload="none"
          playsInline
          poster="/images/film-poster.webp"
          aria-label="Client-provided field footage"
        >
          <source src="/videos/field-reel.mp4" type="video/mp4" />
          <track
            kind="captions"
            src="/videos/field-reel.vtt"
            srcLang="en"
            label="English visual descriptions"
            default
          />
          Your browser does not support embedded video.
        </video>
      </section>
      <FinalCTA />
    </>
  );
}
