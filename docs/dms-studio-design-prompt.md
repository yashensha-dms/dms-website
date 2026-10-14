# DMS Studio — Master Design Prompt for Gemini Flash 2.0

Drop this prompt before asking Gemini to build any section of the `/studio` subpage.

---

## Master Prompt

You are building a subpage (`/studio`) for DMS Studio, a premium international creative and engineering studio operating under DMSG Private Limited at `dms.family`.

This page targets high-value international clients. The aesthetic is quiet, architectural, and confident. It does not try to impress. It does not decorate. Every element earns its place.

Study these references before building anything:
- someoneinlondon.com — editorial confidence, minimal copy, work as proof
- thisaway.co — typographic weight, restrained color, manifesto energy
- bureauborsche.com — radical silence, image primacy, zero marketing language

Follow every rule below without exception.

---

## Design System

### Colors
- Canvas: `#FFFFFF`
- Secondary canvas: `#F8FAFC` (alternating sections only)
- Dark sections: `#030712`
- Brand cobalt: `#0052FF` (card labels, active accordion chevron, primary CTA only)
- Border: `#E2E8F0`
- Body text: `#0F172A`
- Muted text: `#64748B`

No other colors. No gradients on light sections. No decorative tints.

### Typography
- Font: Geist Sans exclusively. No exceptions.
- No monospace fonts anywhere.
- Display headlines: heavy weight, `letter-spacing: -0.03em`, large scale
- Body: regular weight, `line-height: 1.6`, max width `680px`
- Section labels (01, 02, 03): small, uppercase, `letter-spacing: 0.08em`, cobalt `#0052FF`
- Muted labels: `#64748B`, small, uppercase, wide tracking
- All numbers: `font-variant-numeric: tabular-nums`

### Punctuation
- Zero em-dashes anywhere in copy or components
- Commas and periods only

---

## Layout

- Section padding: `py-24` desktop, `py-16` mobile
- Content max width: `max-w-7xl`, centered, `px-6` horizontal padding
- Body paragraph max width: `max-w-2xl`
- Card grid gap: `gap-6`
- Service cards: 3-column desktop, 1-column mobile
- How We Work steps: horizontal flex desktop, vertical stack mobile

---

## Motion

- Scroll reveals: `opacity 0 to 1`, `translateY 20px to 0`, `0.5s ease-out`, `once: true`
- No scroll-jacking
- No parallax
- No spring or bounce animations
- Lenis is already initialized globally. Do not re-initialize.
- Hero content: renders immediately, no animation delay (LCP)
- Subheadline: fades in at `0.3s`
- CTA: fades in at `0.5s`

---

## Interactions

### Buttons
- Primary: cobalt `#0052FF` background, white text, forward arrow
- Forward arrow slides `4px` right on hover, `0.2s ease`
- Ghost: transparent, `#E2E8F0` border, dark text

### Cards
- Default: white, `1px solid #E2E8F0`, `border-radius: 12px`, `padding: 32px`
- Hover: `box-shadow: 0 4px 24px rgba(0,0,0,0.08)`, `transition: 0.2s ease`
- No background color change on hover
- No scale transform

### Accordion
- Default: all collapsed
- One open at a time
- Expand: smooth `max-height` transition, `0.3s ease`
- Chevron: rotates `180deg` on open, cobalt when active
- No bounce

---

## Dark Sections

Both dark sections (Manifesto and Closing CTA) follow identical rules:
- Background: `#030712`
- All text: white
- Cobalt radial glow: `radial-gradient(ellipse at center, rgba(0,82,255,0.06) 0%, transparent 70%)` — subtle, barely visible
- No other color accents
- No borders, no cards, no dividers

---

## What to Never Do

- No metric bars or trust strips
- No live status dots or indicators
- No client logo grids
- No icons inside service cards
- No bullet point feature lists inside cards
- No illustrations or decorative graphics
- No background patterns or textures
- No gradients on white sections
- No pricing anywhere
- No placeholder copy or lorem ipsum
- No `100vh` section heights, use padding only
- No loading spinners
- No more than two font weights per section
- No social proof callouts on this page

---

## Component Output Format

- One `.tsx` file per section
- Tailwind CSS v4 classes only, no inline styles unless unavoidable
- Copy pulled from `dms-studio-page.md` exactly as written
- Mobile-first responsive classes throughout
- Next.js 16 App Router compatible
- No third party UI libraries

