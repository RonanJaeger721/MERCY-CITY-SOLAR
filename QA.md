# Release verification — 2 November 2026

- Production build and TypeScript checks pass. No package audit vulnerabilities reported during installation.
- Home, About, Services, Projects, Contact, Privacy, sitemap, robots, logo, Open Graph image and field video return HTTP 200 locally.
- Home measured with no horizontal document overflow at 320, 375, 390, 430, 768, 1024 and 1440 CSS-pixel viewport targets. Additional routes measured at 320, 390 and 1440. These are desktop browser viewport checks, not physical-device tests.
- Mobile navigation opens, closes after navigation and supports Escape. Scroll-down hides the navbar beyond the hero; scrolling up reveals it.
- Project category filtering, next/previous lightbox navigation, Escape close and focus return verified. Native modal provides focus containment.
- Horizontal carousel arrow movement verified at 480px per click. Drag and touch handlers reviewed in source; physical touch-device testing not performed.
- Ground-to-water explorer updates image, explanation, selected state and service link together.
- Required-field browser validation and server validation verified. Enquiry UI prepares a message to +263783602491 and accurately states that the visitor must send it in WhatsApp. No test message sent.
- API tests: invalid input 400; honeypot 400; cross-origin 403; too-fast submission 429; valid enquiry 200 with `delivered: false` and the confirmed WhatsApp destination.
- Reduced-motion handling reviewed in CSS and Motion hooks: no autoplay, static animation fallbacks and manual slideshow navigation. Browser preference emulation and real-device performance scores were not run.
- All client-provided images classified; all three videos inspected. No unverified project ownership, statistics, certifications, technical capacities, business hours or email published.

The default enquiry workflow does not retain leads or deliver email. Optional HTTPS webhook delivery is documented but not configured or tested. Business hours still require client confirmation.
