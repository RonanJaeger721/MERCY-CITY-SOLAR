"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { enquiryOptions } from "@/lib/business";
export function ContactForm() {
  const [service, setService] = useState(""),
    [project, setProject] = useState(""),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [result, setResult] = useState<{
      url?: string;
      delivered?: boolean;
    } | null>(null);
  const started = useRef(0),
    status = useRef<HTMLDivElement>(null);
  useEffect(() => {
    started.current = Date.now();
    const params = new URLSearchParams(window.location.search);
    const s = params.get("service");
    if (s && enquiryOptions.includes(s)) setService(s);
    const p = params.get("project");
    if (p) setProject(`I would like to discuss a system similar to: ${p}.`);
  }, []);
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setResult(null);
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(form.entries()),
          startedAt: started.current,
        }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          data.error || "Your enquiry could not be prepared. Please try again.",
        );
      setResult(data);
      setTimeout(() => status.current?.focus(), 30);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Please try again or contact us by phone.",
      );
      setTimeout(() => status.current?.focus(), 30);
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="eyebrow">YOUR PROJECT STARTS HERE</div>
      <h2>Tell us what you have in mind.</h2>
      <p>
        Complete your details to prepare an enquiry. You’ll review and send it
        in WhatsApp.
      </p>
      <div className="form-grid">
        <label>
          Full name <span>*</span>
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Phone / WhatsApp number <span>*</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            minLength={7}
            maxLength={30}
          />
        </label>
        <label>
          Email <small>(optional)</small>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={150}
          />
        </label>
        <label>
          Service required <span>*</span>
          <select
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select a service</option>
            {enquiryOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="full">
          Project location <span>*</span>
          <input
            name="location"
            autoComplete="address-level2"
            required
            maxLength={180}
          />
        </label>
        <label className="full">
          Project description <span>*</span>
          <textarea
            name="description"
            rows={5}
            required
            minLength={10}
            maxLength={3000}
            value={project}
            onChange={(e) => setProject(e.target.value)}
            placeholder="Tell us about your water needs, site or existing system."
          />
        </label>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="form-note">
        Your details will be included in a message to Mercy City. Please avoid
        sending sensitive information.{" "}
        <a href="/privacy">Privacy information</a>.
      </p>
      <button type="submit" className="button" disabled={busy}>
        {busy ? (
          <>
            <Loader2 size={17} className="spin" /> PREPARING ENQUIRY
          </>
        ) : (
          <>
            CONTINUE TO WHATSAPP <ArrowUpRight size={17} />
          </>
        )}
      </button>
      <div
        ref={status}
        tabIndex={-1}
        aria-live="polite"
        className={error || result ? "form-status" : ""}
      >
        {error && <p role="alert">{error}</p>}
        {result &&
          (result.delivered ? (
            <p>
              <CheckCircle2 size={20} /> Your enquiry was received. Thank you
              for getting in touch.
            </p>
          ) : (
            <>
              <p>
                <CheckCircle2 size={20} /> Your enquiry is ready. Open WhatsApp,
                review the message and press Send.
              </p>
              <a
                className="button"
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                REVIEW & SEND IN WHATSAPP <ArrowUpRight size={17} />
              </a>
              <small>
                Your message has not been sent yet. Your form details remain
                here if you need to edit them.
              </small>
            </>
          ))}
      </div>
    </form>
  );
}
