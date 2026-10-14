# Landing Page Relaunch — Design

**Date:** 2026-10-14
**Status:** Approved by user, implementing directly

## Context

Fresh Nuxt 4 + Nuxt Content 3 + Nuxt UI 4 project (stock starter, untouched). Replaces the previous portfolio (`mascam97.nuxt3.com`): drops the book-review blog, drops i18n (English only), and repositions around the current role (Software Engineer, PHP/Laravel, Fintech high-volume systems, AWS Cloud — Evertec). Blog (weekly technical articles) is an explicit future phase, not in this scope.

## Decisions

- **Stack:** Nuxt UI 4 Page kit (`PageHero`, `PageFeature`, `PageSection`, `PageCard`, `PageCTA`) + Tailwind for fine-tuning. Dark mode via existing `@nuxtjs/color-mode`.
- **Brand color:** red (`#dc2626` light / `#ef4444` dark), continuity with the old site, set as Nuxt UI `primary` color in `app.config.ts`.
- **Single-page landing** at `/`, no `/about` route. Removes stock `[...slug].vue`, `content/index.md`, `content/about.md`, `Alert.vue`, `Counter.vue`. `@nuxt/content` / `content.config.ts` stay installed untouched for the future blog phase.
- **Data:** structured portfolio data (projects, certifications, why-hire-me features) lives in `app/data/portfolio.ts` (typed TS, not markdown) — this isn't blog content.
- **Profile photo:** `public/photo.jpg` (already provided), used in hero avatar and as OG image.
- **SEO:** `useSeoMeta` with title/description/OG image. No sitemap/robots yet (revisit once the blog adds routes).
- **Contact:** primary CTA is `mailto:mascam97@gmail.com`. Social links limited to GitHub (`mascam97`) and LinkedIn (`mascam97`) — no X/Discord (professional-only positioning).
- **Bio:** current role is Evertec / Fintech high-volume systems / AWS Cloud (per LinkedIn). Placetopay is referenced only as past project experience, not current employer.

## Page sections (in order)

1. **Header** — name, dark/light toggle. No nav menu (single page, scroll).
2. **Hero** — avatar photo, "Open to work · Remote · Mexico" badge, name + role subtitle, short bio paragraph, primary CTA (email) + secondary CTA (GitHub).
3. **Why hire me** — 3 feature cards adapted from the old site's categories to the current context:
   - High Availability (100M+ transactions/year fintech platforms)
   - Architecture & Resilience (TDD, scalable AWS APIs)
   - Technical Leadership (QA/Product/Mobile collaboration, internal PHP bootcamp mentoring)
4. **Featured projects** — 4 cards reused from the old site (Placetopay, Laravel API Quotes, Laravel Livewire Publications, NestJS API Store), copy adjusted so Placetopay reads as past experience.
5. **Certifications** — curated, verifiable only: AWS, English B2 (EF SET), Laravel, PHP, Docker, Git, MySQL. Each links to its public credential. AWS uses the `simple-icons:amazonaws` icon.
6. **Final CTA** — "Let's build something reliable together" + email button + GitHub/LinkedIn links.
7. **Footer** — copyright, GitHub, LinkedIn.

## Out of scope

- Blog / weekly articles system (next phase, separate spec).
- i18n (dropped entirely, English only).
- Sitemap/robots/structured data (revisit with blog phase).
