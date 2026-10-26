# Plan — masadanorder.com landing site

**Status: scaffold only.** Astro builds `/` (TR) and `/en/` (EN) with the hero
headline and nothing else. Nothing is deployed and there is no git remote.

The spec is [`docs/landing-brief.md`](docs/landing-brief.md): copy, sections,
SEO and tech choices all come from it. This file covers order and status;
when the two disagree, the brief wins on content and this file on sequencing.

---

## Where the site actually is

| | |
|---|---|
| Framework | Astro 7.4, static output, no UI framework, no client JS yet |
| i18n | `astro.config.mjs` — `tr` default unprefixed at `/`, `en` at `/en/` |
| Layout | `src/layouts/Base.astro` — `lang`, title, description, canonical, `hreflang` tr/en/x-default |
| Tokens | `src/styles/global.css` — copied from `Restaurant_app/src/app/globals.css` |
| Favicon | `public/favicon.svg` — the app's icon (amber dot on ink) |
| Font | Archivo variable, self-hosted via Astro `fonts` (local provider, files from `@fontsource-variable/archivo`) |
| Hosting | Cloudflare Pages planned (build `npm run build`, output `dist`) — not set up |

**Relationship to the app:** the product lives in `/Users/nedim/REPO/Restaurant_app`
(Next.js, Hetzner VPS, venue bridge). The two repos share no code. Brand tokens
and the icon were copied by hand; if the app's theme changes, update
`global.css` here too. Don't add a dependency on the app repo.

---

## Phase 1 — Foundation

- [x] Self-host Archivo (woff2, `latin` + `latin-ext` for ç ğ ı İ ö ş ü),
      `font-display: swap`, preload the main weight. No Google Fonts request.
- [x] Copy dictionary: `src/i18n/tr.ts` and `src/i18n/en.ts` with the same
      keys, filled from the brief. Pages pick a dictionary by `lang`, so the
      two locales can't drift structurally.
- [x] Header: logo · How it works · Features · FAQ · TR|EN toggle · primary
      CTA. The toggle links to the same section in the other locale.
      **Open:** the toggle goes to the other locale's top. Keeping the section
      needs a few lines of JS (no-JS links can't read the current hash), which
      conflicts with the zero-JS rule in Acceptance. Section ids are shared
      across locales (`how-it-works`, `features`, `faq`, `contact`) so either
      way works.
- [x] Footer: logo · © 2026 Masadan · Privacy · KKTC · TR | EN.
- [x] Sticky mobile bottom bar: [WhatsApp] [Demo talep et], hidden ≥ tablet.
- [x] Config constants in one place (`src/config.ts`): WhatsApp number,
      contact email, demo URL — all placeholders for now.

## Phase 2 — Sections

In brief order. Each section is one component in `src/components/`, taking
the dictionary as a prop.

- [ ] 1. Hero — headline, sub, primary CTA + "Try the live demo" →
      `https://demo.masadanorder.com`, phone mockup
- [ ] 2. Problem → Solution
- [ ] 3. How it works — 3 steps; slot for the 10–15 s loop video
- [ ] 4. Features — 6 items
- [ ] 5. Social proof — "In use at Heaven Restaurant"; quote slot stays
      empty until Heaven gives permission
- [ ] 6. Demo CTA band → demo venue
- [ ] 7. FAQ — native `<details>`/`<summary>`, no JS
- [ ] 8. Contact — WhatsApp primary, form, email, success message

## Phase 3 — Contact form and WhatsApp

- [ ] WhatsApp link: `https://wa.me/<NUMBER>?text=<encoded>`, with prefilled
      text per locale.
- [ ] Form fields: name, venue name, town, table count, phone. Works without JS
      (plain POST); JS only to show the success message inline.
- [ ] Backend: Cloudflare Pages Function (`functions/api/demo.ts`) sending an
      email notification. Formspree is the fallback if email from Workers is
      a hassle. Add a honeypot field and server-side validation.
- [ ] Decide with the owner: where notifications go, and whether to store
      submissions anywhere besides email.

## Phase 4 — SEO, social and analytics

- [ ] Open Graph + Twitter tags per locale in `Base.astro`.
- [ ] OG image 1200×630 (logo + phone mockup), one per locale. **This matters a lot** —
      it's what WhatsApp shows when the link is shared.
- [ ] `sitemap.xml` (`@astrojs/sitemap` with i18n) and `robots.txt`.
- [ ] JSON-LD `SoftwareApplication` or `Organization` — keep it minimal.
- [ ] Cloudflare Web Analytics beacon (no cookies → no banner).
- [ ] Privacy page, TR + EN (the footer links to it; the form collects phone numbers).

## Phase 5 — Media

Blocked on assets from the app (see Placeholders).

- [ ] Screenshots of the demo venue menu and order desk → AVIF/WebP via
      `astro:assets` `<Picture>`, inside phone and desktop frames.
- [ ] Ordering-flow loop: muted, autoplay, `playsinline`, loop, WebM + MP4,
      poster image, under ~1 MB. Respect `prefers-reduced-motion`.

## Phase 6 — Deploy

- [ ] Create GitHub repo, add remote, push `main`.
- [ ] Cloudflare Pages project → connect repo; build `npm run build`, output `dist`.
- [ ] DNS (Cloudflare): apex `masadanorder.com` → Pages; `www` → 301 to apex;
      `demo` and `*` stay pointed at the Hetzner VPS. Check that the explicit
      apex/www records don't get swallowed by the wildcard, and that the
      wildcard still covers `heaven.` and `demo.`.
- [ ] Verify after go-live: `heaven.masadanorder.com` and
      `demo.masadanorder.com` still reach the VPS.

---

## Claims to verify against the app before launch

The copy makes promises the app has to keep. Check each in `Restaurant_app`
and soften the wording if the code doesn't back it:

- **"Sadece mekândan sipariş / On-site ordering only"** — how is it enforced
  (QR token, geofence, venue network)? Can a photo of the QR be used from home?
- **"Mevcut yazıcınızla çalışır / No new hardware"** — the bridge
  (`bridge/agent.mjs`) speaks ESC/POS over TCP. Does a USB-only printer count?
  The FAQ says "a printer and a computer" — the bridge needs that computer.
- **"İnternet kesilirse…"** — the honest answer is that Masadan stops and staff
  fall back to manual orders. Make sure the wording doesn't imply more.
- **"Fotoğraflı, Türkçe ve İngilizce menü"** — confirm the menu supports both
  languages per item.
- **"Birkaç gün içinde kurulum"** — matches the onboarding steps in
  `ONPREM_SETUP.md` / `DEPLOY_CHECKLIST.md`?

## Placeholders

| Item | Source | Status |
|---|---|---|
| WhatsApp number | owner | missing |
| Contact email | owner | missing |
| Logo (SVG wordmark) | app has only `icon.svg` | missing — use icon + text for now |
| Demo screenshots | `demo.masadanorder.com` | missing |
| Screen recording | demo venue | missing |
| Heaven quote + table count | Heaven, after permission | blocked |

## Acceptance

- Lighthouse mobile ≥ 95 in all four categories, both locales.
- No layout break with the longest Turkish strings at 320 px width.
- Zero client JS except the form enhancement and the analytics beacon.
- Every link in the header/footer works in both locales; the TR|EN toggle
  keeps the current section.
- WhatsApp preview of `https://masadanorder.com` shows the OG image and TR title.
