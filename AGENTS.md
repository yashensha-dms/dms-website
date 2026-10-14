<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# DMS Project Agent Rules & Execution Directives

> **CRITICAL DIRECTIVE**: You MUST check and enforce the project rules in `docs/design-system.md`, `docs/dmsg-b2b-seo-geo-strategy.md`, `docs/seo-rules.md`, and `docs/project-setup.md` **EVERY TIME** you write, modify, or review any code, component, page, schema, metadata, or documentation.

---

## 1. Mandatory Pre-Write Rule Check

Before writing or editing ANY file in this repository, you MUST cross-reference:
1. **[`docs/design-system.md`](file:///d:/Work/dmswebsite/dms-web/docs/design-system.md)**:
   - For all UI components, color tokens, type scale, spacing, layouts, button variants, motion constraints, and component build order.
2. **[`docs/components.md`](file:///d:/Work/dmswebsite/dms-web/docs/components.md)**:
   - For canonical UI component library APIs, CVA variants, and strict reuse guidelines.
3. **[`docs/dmsg-b2b-seo-geo-strategy.md`](file:///d:/Work/dmswebsite/dms-web/docs/dmsg-b2b-seo-geo-strategy.md)**:
   - For all high-converting keyword clusters, fastest-to-rank terms, buyer friction matrix, on-page content hierarchy, 90-day blog sprint, and GEO/LLM answer capsules.
4. **[`docs/seo-rules.md`](file:///d:/Work/dmswebsite/dms-web/docs/seo-rules.md)**:
   - For technical SEO rules, JSON-LD schemas, sitemaps, robots, and Next.js metadata configs.
5. **[`docs/project-setup.md`](file:///d:/Work/dmswebsite/dms-web/docs/project-setup.md)**:
   - For architecture, tech stack (Next.js 15+, Tailwind CSS v4, Lenis, Motion, Sanity), component patterns, and environment variables.
6. **Next.js App Router Docs** (`node_modules/next/dist/docs/`):
   - For all routing, server/client component boundaries, and Next.js APIs.

Never write code or content from assumptions or generic templates. Always align with the established patterns in this repository.

---

## 2. Invariant Brand & Entity Rules

Every piece of content and metadata must uphold verified company facts to disambiguate from unrelated entities:
- **Legal Entity Name**: `DMSG Private Limited` (mandatory in all JSON-LD `Organization` schemas).
- **Brand Domain**: `dms.family` (canonical domain, absolute URLs in metadata and `llms.txt`).
- **Headquarters**: `Ernakulam, Kerala, India`.
- **Verified Metrics (Never Invent or Exaggerate)**:
  - `150+` Active Customers
  - `130+` DOOH Spaces
  - `2,500+` Executed Campaigns
  - `3,500+` CMS Subscriptions
- **Entity Authority**:
  - Always link product schemas back to organization via `provider: { "@id": "https://dms.family/#organization" }`.
  - Maintain `sameAs` links to LinkedIn and Kerala Startup Mission listing.
  - **Leadership / Founder**: Only list `Achuthanand Neelambaran` (CEO / Founder). Do not mention or include any other founder names.
- **Punctuation & Copy Rule (Strict)**: NEVER use em-dashes (`—`) anywhere in copy, headlines, or metadata. Always use commas (`,`) or clean phrasing instead.
- **Monospace Font Prohibition (Strict Red Mark Rule)**: NEVER use monospace fonts (`font-mono`, `Geist Mono`, code fonts) anywhere in typography, copy, metrics, tags, numbers, or metadata. Monospace is strictly forbidden across the entire platform. All typography, metrics, tags, numbers, and copy MUST use **Geist** (`font-sans`). If tabular alignment is required for numbers, use `tabular-nums font-sans`.

---

## 3. Design System & UI Directives (Strict Enforcement)

All visual interfaces must strictly adhere to [`docs/design-system.md`](file:///d:/Work/dmswebsite/dms-web/docs/design-system.md):

### Core Philosophy
- **Light mode first. Clean, fast, credible.**
- DMS buyers are business owners and media planners, not developers.
- Every design decision prioritizes **readability and trust over visual decoration**.

### Color System & Strict Token Usage
| CSS Variable | Hex Value | Allowed Usage | FORBIDDEN Usage |
|---|---|---|---|
| `--color-bg` | `#FFFFFF` | Page canvas, hero, primary cards | Heavy saturation |
| `--color-bg-secondary` | `#F8FAFC` | Alternating section backgrounds, trust bar | Cards (cards must be white `#FFFFFF`) |
| `--color-bg-dark` | `#030712` | Footer, final CTA strip | Product sections, content areas |
| `--color-brand` | `#0052FF` | **Primary CTA buttons only** | Backgrounds, decorative panels, cards |
| `--color-brand-hover`| `#0043CC` | Primary CTA button hover state | Text, borders |
| `--color-green` | `#22C55E` | **Active state dots, live indicators only** | Heavy backgrounds, gradients, borders |
| `--color-text` | `#0F172A` | Primary headlines, titles, body copy | Inverted containers |
| `--color-text-muted` | `#64748B` | Secondary copy, metadata, metric labels | Primary headings |
| `--color-text-inverse`| `#F8FAFC` | Text on dark footer / final CTA strip | Light canvas body text |
| `--color-border` | `#E2E8F0` | Card outlines, section dividers | Text color |
| `--color-border-hover`| `#94A3B8` | Card hover border, secondary button hover | Default borders |

### Typography System
- **Fonts**: **Geist** (`font-sans`) exclusively for all headlines, copy, metrics, numbers, and tags. **Monospace fonts are strictly forbidden (red mark).**
- **Type Scale**:
  - `display`: 72px / line-height 1.0 / tracking -0.04em / weight 700 (**Hero headline only**)
  - `h1`: 48px / line-height 1.0 / tracking -0.03em / weight 700 (**Page H1**)
  - `h2`: 36px / line-height 1.1 / tracking -0.03em / weight 600 (**Section headlines**)
  - `h3`: 24px / line-height 1.2 / tracking -0.02em / weight 600 (**Card headlines**)
  - `h4`: 20px / line-height 1.3 / tracking -0.01em / weight 600 (**Sub-sections**)
  - `body`: 16px / line-height 1.5 / weight 400 (**Body copy**)
  - `small`: 14px / line-height 1.5 / weight 400 (**Captions, labels**)
  - `stat`: 36px-48px / line-height 1.0 / tracking -0.03em / weight 700 (`tabular-nums font-sans` for metrics and numbers)

### Spacing & Layout Tokens (Multiples of 4px)
- **Section Y Padding**: `py-24` (96px) standard; `py-12` (48px) for trust bar; `py-16` (64px) for footer.
- **Section X Padding**: mobile `px-6` (24px), desktop `px-20` (80px).
- **Card Padding**: `p-8` (32px).
- **Card Gap**: `gap-6` (24px).
- **Max Content Container**: `max-w-7xl` (1280px) centered (`mx-auto`).
- **Section Alternation Rhythm**: Hero (`#FFFFFF`) → Trust Bar (`#F8FAFC`) → Prime Ads (`#FFFFFF`, copy left / visual right) → mStream (`#F8FAFC`, visual left / copy right) → mWorld (`#FFFFFF`) → Hardware (`#F8FAFC`) → Interactive Ads (`#FFFFFF`) → Near Me (`#F8FAFC`) → Case Studies (`#F8FAFC`) → Franchise (`#FFFFFF`) → CTA Strip (`#030712`) → Footer (`#030712`).

### Component Rules & Component Locking (STRICT)
- **Zero Generic AI Tropes (MANDATORY)**:
  - DO NOT create generic AI-generated interfaces: no random background gradient boxes, no gratuitous sparkle icons (`Sparkles`), no decorative fluff, no gimmicky floating card wrappers where clean typography belongs.
  - Follow the quiet luxury, architectural, high-end agency/developer aesthetic (e.g., PageCoder.ai / Linear / Vercel style) demonstrated in user reference designs.
  - Every element must feel deliberate, restrained, and meticulously typeset.
- **Component Reuse & Uniformity Law (STRICT)**:
  - ALWAYS inspect `src/components/ui/` and [`docs/components.md`](file:///d:/Work/dmswebsite/dms-web/docs/components.md) before writing any UI.
  - If a canonical component exists (e.g., `Button`, `FadeIn`), you MUST reuse it. NEVER write inline ad-hoc `<button>` or `<Link className="...">` for action buttons.
  - If a needed shared component does not exist, create it in `src/components/ui/` using Class Variance Authority (`cva`) variants and document it in `docs/components.md`.
- **Main Action Button**: Locked in `Button.tsx` using CVA. Flagship design is the pill (`rounded-full`) with optional `showArrow`. Variants: `primary` (cobalt blue `#0052FF`), `brand` (cobalt blue `#0052FF`), `dark` (dark pill `#030712`), `secondary` (outline), `white` (contrast white), `ghost`.
- **Cards**: `bg-[#FFFFFF] border border-[#E2E8F0] rounded-none p-8 hover:border-[#0052FF] hover:-translate-y-0.5 transition duration-150 ease` (0 border radius, no shadow while hover, subtle animation only).
- **Navigation**: Locked in `Header.tsx` (plain, full-width white navbar, crisp bottom border, Geist typography, clean popover menus, vector SVG logo).
- **Footer**: Locked in `Footer.tsx` (dark `#08090A` / `#030712`, restrained PageCoder-inspired layout, letterspaced headers, razor divider, copyright left, CIN right).
- **Trust Bar Metrics**: Geist Sans 36px weight 700 color `#0F172A` with `tabular-nums`, labels 14px weight 400 color `#64748B`, 4 columns with vertical dividers.
- **Live Indicator**: 8px circle `#22C55E` with `animate-pulse` placed to the left of active screen/status metrics.

### Motion & Animation Directives
- **Smooth Scroll**: Lenis used only for root smooth scroll (duration 1.2s, exponential out). Never use for section locking or scroll-jacking.
- **Scroll Animations (Motion)**: Subtle fade-in on scroll (`initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} viewport={{ once: true }}`).
- **NEVER ANIMATE**:
  - Hero content (must render instantly to preserve LCP < 2.5s).
  - Width, height, top, left properties (causes layout thrashing).
  - Background color shifts on scroll.
  - WebGL, canvas particles, or gimmicky 3D effects.

### Component Build Sequence (Build strictly in this order)
1. `globals.css` (tokens, CSS variables)
2. `tailwind.config.ts` (extended theme tokens)
3. `FadeIn.tsx` (motion wrapper with once: true)
4. `LenisProvider.tsx` (smooth scroll wrapper)
5. `Button.tsx` (primary, secondary, ghost)
6. `Header.tsx` (sticky navigation + CTA)
7. `Footer.tsx` (dark #030712, links, legal)
8. `TrustBar.tsx` (4 metrics in Geist Sans)
9. `ProductSection.tsx` (alternating copy/visual layout)
10. `Card.tsx` (bordered white card)
11. `CaseStudyCard.tsx` (metric-driven card variant)
12. `CTAStrip.tsx` (dark #030712 bottom lead banner)
13. `DemoForm.tsx` (lead capture)
14. Page routes (Homepage first, followed by product spokes)

---

## 4. SEO & Metadata Rules (Strict Enforcement)

Every page in `src/app/` MUST strictly comply with `docs/seo-rules.md` and `docs/dmsg-b2b-seo-geo-strategy.md`:

### Title Tags
- Format: `{Page Topic} | DMSG — {Short Value Prop}`
- Length: **Maximum 60 characters** (hard limit, never truncate in SERPs).
- Uniqueness: Every page must have a distinct, non-duplicate title.

### Meta Descriptions
- Format: Exactly one sentence — **what this page does + who it is for**, ending with an implicit or explicit action.
- Length: **Maximum 155 characters** (hard limit).
- Include the page's primary target keyword naturally.

### Headings
- Exactly **ONE `<h1>` per page**, matching search intent and strictly distinct from the title tag.
- `<h2>` and `<h3>` must establish a clear logical hierarchy and include secondary keywords naturally. Do NOT use headings for visual styling.

### Canonical URLs & Metadata
- Every page must define `alternates: { canonical: ... }` using `process.env.NEXT_PUBLIC_SITE_URL || "https://dms.family"`.
- No trailing slashes, except for the root homepage (`https://dms.family`).
- Export Next.js `metadata` object or `generateMetadata` function.

### JSON-LD Structured Data
- Inject schema for each page type as specified in `docs/seo-rules.md`:
  - `/`: `Organization` + `WebSite`
  - `/advertisers/prime-ads`: `SoftwareApplication` or `Service`
  - `/publishers/mstream`: `SoftwareApplication`
  - `/publishers/hardware`: `Product` (with `offers`)
  - `/publishers/franchise`: `Service`
  - `/marketplace`: `Service`
  - `/blog/[slug]`: `BlogPosting` (with real `Person` author)
  - `/case-studies/[slug]`: `Article`
  - `/contact`: `ContactPage`
- Add `BreadcrumbList` schema to all pages below root.

---

## 5. Code & Architecture Standards

### Next.js & React Conventions
- **App Router Only**: All pages and routes go inside `src/app/`.
- **Server Components by Default**: Only add `"use client"` when component requires client state (`useState`), effects (`useEffect`), browser events/APIs, or client-only libraries. Push client boundaries as deep down the component tree as possible.
- **Images**: Always use `next/image`. Every image MUST have a descriptive `alt` attribute. Use `priority` ONLY for the hero above-the-fold image. For Sanity images, use `@sanity/image-url`.
- **Navigation**: Always use `next/link` for internal links.

### Performance Standards
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **INP**: < 200ms
- No render-blocking scripts; external fonts loaded via `next/font`.

---

## 6. Every-Time Verification Checklist

Whenever you write or edit code or content, run this 8-point verification before completing your task:

| Check | Requirement | Verified? |
|---|---|---|
| **1. Design System Tokens** | Light mode first, `#0052FF` on primary CTAs only, `#22C55E` on live dots only, Geist font only (ZERO monospace fonts - strict red mark), `py-24` section spacing | [ ] |
| **2. Layout & Colors** | Cards are `#FFFFFF` with 1px `#E2E8F0` border; `#030712` used ONLY on Footer & Final CTA strip; alternating section backgrounds | [ ] |
| **3. Performance & Motion** | Hero renders immediately without animation (LCP < 2.5s); Motion uses `viewport={{ once: true }}`; Lenis on root only | [ ] |
| **4. SEO Metadata** | Title ≤ 60 chars, Description ≤ 155 chars (1 sentence + action), Canonical URL set without trailing slash | [ ] |
| **5. Heading Hierarchy** | Exactly 1 `<h1>` (intent-matched, differs from Title), semantic `<h2>`/`<h3>` without skipping levels | [ ] |
| **6. Entity Facts** | "DMSG Private Limited", "dms.family", Ernakulam, verified stats accurate; only Achuthanand Neelambaran as Founder | [ ] |
| **7. Schema Markup** | JSON-LD schema injected, provider `@id` linked to organization | [ ] |
| **8. Code Integrity** | TypeScript types defined, ESLint passing (`npm run lint`), Server Component by default, no placeholders | [ ] |
