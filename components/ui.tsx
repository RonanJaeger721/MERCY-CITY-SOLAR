"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import type { ReactNode, PointerEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Pause,
  Play,
  Plus,
  Minus,
  Phone,
  MapPin,
  Maximize2,
} from "lucide-react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { business, projects, categories, services, faqs } from "@/lib/business";

export function Button({
  children,
  href = "/contact",
  secondary = false,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "secondary" : ""} ${className}`}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function Photo({
  id,
  alt,
  priority = false,
  className = "",
  position = "50% 50%",
}: {
  id: string;
  alt: string;
  priority?: boolean;
  className?: string;
  position?: string;
}) {
  return (
    <Image
      src={`/images/${id}.webp`}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 80vw, 65vw"
      className={className}
      style={{ objectFit: "cover", objectPosition: position }}
    />
  );
}
export function SectionReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { y: [20, 0], opacity: [0.72, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function WaveDivider({
  fill = "#F4F8FA",
  flip = false,
}: {
  fill?: string;
  flip?: boolean;
}) {
  return (
    <svg
      className={`wave ${flip ? "flip" : ""}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 35C230 105 390 10 650 35S1110 110 1440 30V90H0Z"
        fill={fill}
      />
    </svg>
  );
}
const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["How It Works", "/#how-it-works"],
  ["Contact", "/contact"],
];
export function GlassNavbar() {
  const [open, setOpen] = useState(false),
    [hidden, setHidden] = useState(false);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      if (y !== previous)
        setHidden(
          y > window.innerHeight * 0.7 &&
            y > previous &&
            !open &&
            !nav.current?.contains(document.activeElement),
        );
      previous = y;
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", escape);
    };
  }, [open]);
  return (
    <header
      ref={nav}
      className={`navbar ${hidden && !open ? "nav-hidden" : ""}`}
      onFocus={() => setHidden(false)}
    >
      <Link
        href="/"
        className="brand"
        aria-label="Mercy City home"
        onClick={() => setOpen(false)}
      >
        <Image
          src="/images/logo.png"
          alt="Mercy City Borehole Drilling logo"
          width={60}
          height={60}
          priority
        />
        <span>
          MERCY CITY<small>SOLAR & BOREHOLES</small>
        </span>
      </Link>
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={open ? "nav-links open" : "nav-links"}
      >
        {links.map(([label, href]) => (
          <Link href={href} key={label} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
      <Link
        className="nav-quote"
        href="/contact"
        onClick={() => setOpen(false)}
      >
        GET A QUOTE <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
      <button
        className="menu-toggle icon-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
export function HeroSlider() {
  const slides = [projects[0], projects[1], projects[2]];
  const [index, setIndex] = useState(0),
    [paused, setPaused] = useState(false),
    [hover, setHover] = useState(false),
    [visible, setVisible] = useState(true);
  const reduced = useReducedMotion(),
    ref = useRef<HTMLElement>(null),
    start = useRef(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (paused || hover || reduced || !visible) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      3000,
    );
    return () => clearInterval(timer);
  }, [paused, hover, reduced, visible, slides.length]);
  const change = (n: number) => {
    setPaused(true);
    setIndex((n + slides.length) % slides.length);
  };
  return (
    <section
      ref={ref}
      className="hero"
      aria-label="Introduction and image showcase"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocusCapture={() => setPaused(true)}
      onTouchStart={(e) => (start.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const delta = start.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 45) change(index + (delta > 0 ? 1 : -1));
      }}
    >
      <div className="hero-media">
        {slides.map((p, i) => (
          <div
            key={p.id}
            className={`hero-slide ${i === index ? "active" : ""}`}
            aria-hidden={i !== index}
          >
            <Photo
              id={p.id}
              alt={p.alt}
              priority={i === 0}
              position={i === 0 ? "50% 53%" : p.position}
            />
          </div>
        ))}
      </div>
      <div className="hero-shade" />
      <div className="hero-content container">
        <div className="eyebrow light">
          <span /> MERCY CITY SOLAR & BOREHOLES
        </div>
        <h1>
          Reliable Water.
          <br />
          <span>Smarter Energy.</span>
        </h1>
        <p>
          From groundwater surveys and borehole drilling to solar-powered water
          systems, we help turn water needs into practical infrastructure
          solutions.
        </p>
        <div className="button-row">
          <Button href="/services">EXPLORE OUR SERVICES</Button>
          <Button secondary>REQUEST A QUOTE</Button>
        </div>
        <div className="hero-location">
          <MapPin size={15} aria-hidden="true" /> ROOTED IN TYNWALD SOUTH,
          ZIMBABWE
        </div>
      </div>
      <div className="hero-caption">
        <span className="tiny">A CLOSER LOOK AT THE WORK</span>
        <span>{slides[index].title}</span>
        <div className="slider-controls">
          <button
            className="icon-button"
            onClick={() => change(index - 1)}
            aria-label="Previous hero image"
          >
            <ArrowLeft size={17} />
          </button>
          <div className="dots">
            {slides.map((p, i) => (
              <button
                key={p.id}
                aria-label={`Show image ${i + 1}: ${p.title}`}
                aria-pressed={i === index}
                onClick={() => change(i)}
                className={i === index ? "active" : ""}
              />
            ))}
          </div>
          <button
            className="icon-button"
            onClick={() => {
              setPaused(!paused);
              setHover(false);
            }}
            aria-label={
              paused || reduced ? "Play slideshow" : "Pause slideshow"
            }
            disabled={!!reduced}
          >
            {paused || reduced ? <Play size={15} /> : <Pause size={15} />}
          </button>
          <button
            className="icon-button"
            onClick={() => change(index + 1)}
            aria-label="Next hero image"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="hero-strip">
        <span>GROUNDWATER SURVEYS</span>
        <i />
        <span>BOREHOLE DRILLING</span>
        <i />
        <span>SOLAR PUMPS</span>
        <i />
        <span>WATER INFRASTRUCTURE</span>
      </div>
      <WaveDivider />
    </section>
  );
}
export function ServiceCard({
  number,
  title,
  copy,
  image,
  href,
  className = "",
}: {
  number: string;
  title: string;
  copy: string;
  image: string;
  href: string;
  className?: string;
}) {
  return (
    <SectionReveal className={`service-card ${className}`}>
      <Link href={href} className="service-photo">
        <Photo
          id={image}
          alt={projects.find((p) => p.id === image)?.alt || title}
        />
        <span className="service-number">{number}</span>
        <span className="round-arrow">
          <ArrowUpRight aria-hidden="true" />
        </span>
      </Link>
      <div className="service-copy">
        <h3>{title}</h3>
        <p>{copy}</p>
        <Link className="text-link" href={href}>
          LEARN MORE <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </SectionReveal>
  );
}
export function ServiceList() {
  return (
    <details className="complete-services">
      <summary>
        Explore our complete range of services{" "}
        <Plus size={19} aria-hidden="true" />
      </summary>
      <div>
        {services.map((s) => (
          <Link href={`/services#${s.id}`} key={s.id}>
            {s.title}
            <ArrowUpRight size={16} />
          </Link>
        ))}
      </div>
    </details>
  );
}

export function GroundToWater() {
  const stages = [
    {
      name: "Read the ground",
      tag: "01 / DISCOVER",
      id: "survey",
      title: "Begin with understanding.",
      copy: "Groundwater intelligence and underground water surveys help shape the conversation around your site.",
      service: "underground-water-survey",
    },
    {
      name: "Access the water",
      tag: "02 / ACCESS",
      id: "drilling",
      title: "Move from insight to infrastructure.",
      copy: "Discuss borehole drilling requirements, site access and the scope of your water project.",
      service: "borehole-drilling",
    },
    {
      name: "Connect the system",
      tag: "03 / CONNECT",
      id: "solar-tanks",
      title: "Bring water and energy together.",
      copy: "Explore solar pump installation and suitable water-storage configurations for your requirements.",
      service: "solar-pump-installation",
    },
  ];
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return (
    <div className="ground-explorer">
      <div
        className="explorer-tabs"
        role="group"
        aria-label="Explore the water infrastructure journey"
      >
        {stages.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
          >
            <span>0{i + 1}</span>
            {s.name}
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="explorer-scene">
        <div className="explorer-photo">
          <Photo
            id={stage.id}
            alt={projects.find((p) => p.id === stage.id)!.alt}
          />
        </div>
        <div className="explorer-copy" key={stage.id}>
          <span className="eyebrow">{stage.tag}</span>
          <h3>{stage.title}</h3>
          <p>{stage.copy}</p>
          <Link href={`/services#${stage.service}`} className="text-link">
            EXPLORE THE SERVICE <ArrowUpRight size={16} />
          </Link>
        </div>
        <svg
          className="flow-lines"
          viewBox="0 0 800 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 35Q180 110 400 40T800 35" />
          <path d="M0 55Q180 130 400 60T800 55" />
        </svg>
      </div>
    </div>
  );
}

export function HorizontalCarousel() {
  const ref = useRef<HTMLDivElement>(null),
    drag = useRef({ x: 0, left: 0, active: false, moved: false });
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const delta = e.clientX - drag.current.x;
    if (Math.abs(delta) > 7) {
      drag.current.moved = true;
      ref.current!.scrollLeft = drag.current.left - delta;
    }
  };
  return (
    <div>
      <div className="carousel-controls">
        <span className="tiny">
          DRAG TO EXPLORE / CLIENT-PROVIDED PHOTOGRAPHY
        </span>
        <div>
          <button
            className="icon-button"
            aria-label="Previous projects"
            onClick={() =>
              ref.current?.scrollBy({ left: -480, behavior: "smooth" })
            }
          >
            <ArrowLeft />
          </button>
          <button
            className="icon-button"
            aria-label="Next projects"
            onClick={() =>
              ref.current?.scrollBy({ left: 480, behavior: "smooth" })
            }
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div
        className="project-track"
        ref={ref}
        onPointerDown={(e) => {
          if (e.pointerType === "mouse") {
            drag.current = {
              x: e.clientX,
              left: ref.current!.scrollLeft,
              active: true,
              moved: false,
            };
          }
        }}
        onPointerMove={move}
        onPointerUp={() => (drag.current.active = false)}
        onPointerLeave={() => (drag.current.active = false)}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            drag.current.moved = false;
          }
        }}
      >
        {projects
          .filter((p) => p.id !== "drilling-team")
          .map((p, i) => (
            <article className="project-card" key={p.id}>
              <Link
                href={`/projects?image=${p.id}`}
                className="project-photo"
                draggable={false}
              >
                <Photo id={p.id} alt={p.alt} position={p.position} />
                <span className="image-index">0{i + 1}</span>
                <span className="round-arrow">
                  <ArrowUpRight />
                </span>
              </Link>
              <span className="eyebrow">{p.category}</span>
              <h3>{p.title}</h3>
              <Link
                href={`/contact?project=${encodeURIComponent(p.title)}`}
                className="text-link"
              >
                ENQUIRE ABOUT A SIMILAR SYSTEM <ArrowUpRight size={15} />
              </Link>
            </article>
          ))}
      </div>
    </div>
  );
}
export function ProcessTimeline() {
  const timeline = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timeline,
    offset: ["start 85%", "end 40%"],
  });
  return (
    <section
      ref={timeline}
      id="how-it-works"
      className="section process container"
    >
      <SectionReveal>
        <div className="section-top">
          <div>
            <div className="eyebrow">A CLEAR WAY FORWARD</div>
            <h2>
              From a conversation
              <br />
              to your next step.
            </h2>
          </div>
          <p>
            A starting point for your enquiry. The precise journey depends on
            the service and your site’s requirements.
          </p>
        </div>
      </SectionReveal>
      <div className="process-line">
        <svg
          viewBox="0 0 1200 55"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 25Q150 -10 300 25T600 25T900 25T1200 25" />
          <motion.path
            className="process-progress"
            d="M0 25Q150 -10 300 25T600 25T900 25T1200 25"
            style={{ pathLength: reduced ? 1 : scrollYProgress }}
          />
        </svg>
        {[
          [
            "Tell Us Your Requirements",
            "Share your water needs, project location and the service you are considering.",
          ],
          [
            "Site Assessment & Consultation",
            "Discuss the site and the information needed to understand your enquiry.",
          ],
          [
            "Recommended Solution",
            "Review a proposed scope suited to your requirements.",
          ],
          [
            "Installation / Project Execution",
            "Agree the details and next steps for the relevant service.",
          ],
        ].map(([title, copy], i) => (
          <SectionReveal key={title} className="process-step">
            <span className="step-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
export function FAQAccordion() {
  return (
    <div className="faqs">
      {faqs.map(([q, a], i) => (
        <details key={q}>
          <summary>
            <span className="faq-number">0{i + 1}</span>
            {q}
            <Plus className="faq-plus" size={20} aria-hidden="true" />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function ProjectGallery() {
  const [category, setCategory] = useState("All Images"),
    [index, setIndex] = useState<number | null>(null);
  const filtered = projects.filter(
      (p) => category === "All Images" || p.category === category,
    ),
    dialog = useRef<HTMLDialogElement>(null),
    close = useRef<HTMLButtonElement>(null),
    trigger = useRef<HTMLElement | null>(null),
    touch = useRef(0);
  const show = useCallback((i: number) => {
    trigger.current = document.activeElement as HTMLElement;
    setIndex(i);
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }, []);
  const dismiss = () => {
    dialog.current?.close();
    setIndex(null);
    document.body.style.overflow = "";
    trigger.current?.focus();
  };
  useEffect(() => {
    const image = new URLSearchParams(window.location.search).get("image");
    const i = projects.findIndex((p) => p.id === image);
    if (i >= 0) show(i);
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);
  const shift = (dir: number) =>
    setIndex((i) =>
      i === null ? 0 : (i + dir + filtered.length) % filtered.length,
    );
  const current = index === null ? null : filtered[index];
  return (
    <>
      <div
        className="filters"
        role="group"
        aria-label="Filter portfolio images"
      >
        {categories.map((c) => (
          <button
            key={c}
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filtered.map((p, i) => (
          <SectionReveal className={`gallery-item item-${i % 5}`} key={p.id}>
            <button
              className="gallery-image"
              onClick={() => show(i)}
              aria-label={`View ${p.title} fullscreen`}
            >
              <Photo id={p.id} alt={p.alt} position={p.position} />
              <span className="round-arrow">
                <Maximize2 size={20} />
              </span>
            </button>
            <div>
              <span className="eyebrow">{p.category}</span>
              <h3>{p.title}</h3>
              <Link
                href={`/contact?project=${encodeURIComponent(p.title)}`}
                className="text-link"
              >
                ENQUIRE <ArrowUpRight size={15} />
              </Link>
            </div>
          </SectionReveal>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Portfolio image viewer"
        onCancel={(e) => {
          e.preventDefault();
          dismiss();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) dismiss();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") shift(1);
          if (e.key === "ArrowLeft") shift(-1);
        }}
      >
        <button
          ref={close}
          className="icon-button lightbox-close"
          onClick={dismiss}
          aria-label="Close fullscreen image"
        >
          <X />
        </button>
        {current && (
          <div
            className="lightbox-inner"
            onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const d = touch.current - e.changedTouches[0].clientX;
              if (Math.abs(d) > 40) shift(d > 0 ? 1 : -1);
            }}
          >
            <div className="lightbox-image">
              <Image
                src={`/images/${current.id}.webp`}
                alt={current.alt}
                fill
                sizes="95vw"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="lightbox-caption">
              <button
                className="icon-button"
                onClick={() => shift(-1)}
                aria-label="Previous image"
              >
                <ArrowLeft />
              </button>
              <div aria-live="polite">
                <strong>{current.title}</strong>
                <span>
                  {index! + 1} / {filtered.length} · Client-provided portfolio
                  image
                </span>
              </div>
              <button
                className="icon-button"
                onClick={() => shift(1)}
                aria-label="Next image"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <WaveDivider fill="#102A43" flip />
      <div className="container">
        <div className="eyebrow light">LET’S MAKE THE NEXT STEP PRACTICAL</div>
        <h2>
          Let’s talk about your
          <br />
          next water project.
        </h2>
        <p>Tell us what you need, and we’ll help you take the next step.</p>
        <div className="button-row">
          <Button>REQUEST A QUOTE</Button>
          <Button secondary href={`https://wa.me/${business.whatsapp}`}>
            CONTACT MERCY CITY
          </Button>
        </div>
      </div>
      <svg className="cta-contours" viewBox="0 0 600 400" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={i}
            cx="350"
            cy="230"
            rx={140 + i * 40}
            ry={70 + i * 30}
          />
        ))}
      </svg>
    </section>
  );
}
export function SiteFooter() {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <Image
              src="/images/logo.png"
              alt="Mercy City logo"
              width={72}
              height={72}
            />
            <span>
              MERCY CITY<small>SOLAR & BOREHOLES</small>
            </span>
          </Link>
          <p>
            Grounded in understanding.
            <br />
            Connected by water.
          </p>
        </div>
        <div>
          <span className="eyebrow">EXPLORE</span>
          {links
            .filter((l) => l[0] !== "How It Works")
            .map(([label, href]) => (
              <Link href={href} key={label}>
                {label}
              </Link>
            ))}
        </div>
        <div>
          <span className="eyebrow">OUR EXPERTISE</span>
          {[
            "Groundwater Surveys",
            "Borehole Drilling",
            "Solar Pump Installation",
            "GIS, Earth Observation & GPR",
          ].map((s) => (
            <Link href="/services" key={s}>
              {s}
            </Link>
          ))}
        </div>
        <div>
          <span className="eyebrow">LET’S CONNECT</span>
          <p>{business.location}</p>
          <a href={`tel:+${business.whatsapp}`}>{business.phone}</a>
          <a href={`https://wa.me/${business.whatsapp}`}>
            Start a WhatsApp conversation <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mercy City Solar & Boreholes.</span>
        <Link href="/privacy">Privacy</Link>
        <a href="https://wa.me/263789937251">
          Website Designed & Developed by Jaeger Media
        </a>
      </div>
      <a className="mobile-contact" href={`https://wa.me/${business.whatsapp}`}>
        <Phone size={16} /> Enquire on WhatsApp <ArrowUpRight size={16} />
      </a>
    </footer>
  );
}
