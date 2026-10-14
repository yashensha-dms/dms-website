# dms.family: Design System

Authoritative design system reference for all UI components, typography, color tokens, and page sections.  
Stack: Next.js 15, Tailwind CSS v4, Geist, Motion, Lenis.

---

## 1. Core Principles

1. **Light Mode First: Clean, Fast, Credible**  
   DMS buyers are business owners, DOOH network operators, and media planners, not developers. Every design decision prioritizes clarity, data transparency, and credibility over decorative noise.

2. **Strict Red Mark: Zero Monospace Fonts (Absolute Prohibition)**  
   **NEVER use monospace fonts (`font-mono`, `Geist Mono`, code typefaces) anywhere on the website or in product design.** Monospace fonts are an absolute red mark. All typography, display metrics, statistics, numbers, badges, timestamps, and technical indicators MUST use **Geist** (`font-sans`). When numerical column alignment is required, use tabular figures: `tabular-nums font-sans`.

3. **Architectural Restraint: No Generic AI Tropes**  
   Strictly avoid generic AI aesthetics. Never use random background gradient boxes, gratuitous sparkle icons, neon glow cards, or gimmicky floating card wrappers where clean typography belongs. Visual elements must feel deliberate, technical, and architectural, inspired by high-end design systems (such as Linear, Vercel, and PageCoder).

4. **High-Impact Data Telemetry**  
   Information architecture must present metrics with unmistakable hierarchy: bold Geist display numbers with tabular figures, distinct category tags, performance delta indicators, and concise plain speech context copy.

---

## 2. Color System

### CSS Variables (`src/app/globals.css`)

```css
:root {
  /* Canvas Surfaces */
  --color-bg:            #FFFFFF;
  --color-bg-secondary:  #F8FAFC;
  --color-bg-subtle:     #F1F5F9;
  --color-bg-dark:       #030712;

  /* Primary Action: Electric Cobalt Blue */
  --color-brand:         #0052FF;
  --color-brand-hover:   #0043CC;
  --color-button-dark:   #030712;

  /* Tech Accent: Electric Cobalt Blue Layer */
  --color-accent:        #0052FF;
  --color-accent-hover:  #0043CC;
  --color-accent-subtle: #EFF6FF;
  --color-accent-glow:   rgba(0, 82, 255, 0.12);

  /* Status and Signal */
  --color-green:         #22C55E;
  --color-red:           #EF4444;

  /* Text Typography */
  --color-text:          #0F172A;
  --color-text-muted:    #64748B;
  --color-text-subtle:   #94A3B8;
  --color-text-inverse:  #F8FAFC;

  /* Borders and Dividers */
  --color-border:        #E2E8F0;
  --color-border-hover:  #94A3B8;
  --color-border-accent: #BFDBFE;
}
```

### Color Usage Rules

| Token | Hex Value | Allowed Usage | Forbidden Usage |
|---|---|---|---|
| `--color-bg` | `#FFFFFF` | Page canvas, hero section, primary cards | Heavy saturation, tints |
| `--color-bg-secondary` | `#F8FAFC` | Alternating section backgrounds, trust bar, soft card fills | Dark mode elements |
| `--color-bg-subtle` | `#F1F5F9` | Secondary card fills, category pill containers | Large section canvases |
| `--color-bg-dark` | `#030712` | Footer, final CTA strip, high-contrast dark cards | General content canvases |
| `--color-brand` | `#0052FF` | High-intent conversion CTA buttons only | Background panels, cards, text body |
| `--color-brand-hover` | `#0043CC` | Hover state on brand CTA buttons | Text, borders |
| `--color-accent` | `#0052FF` | Big metric numerals, headline focus keywords, active index cards, focal badges | Generic full-page backgrounds |
| `--color-accent-subtle` | `#EFF6FF` | Soft blue badge fills, active card background highlights | Large section canvases |
| `--color-green` | `#22C55E` | Active screen indicators, live status pulse dots, positive performance deltas (`▲`) | Large background panels |
| `--color-red` | `#EF4444` | Negative metric deltas (`▼`), destructive alerts | General borders or text |
| `--color-text` | `#0F172A` | Primary headlines, titles, active labels, body copy | Inverted dark containers |
| `--color-text-muted` | `#64748B` | Secondary copy, metadata, metric labels, subtitles | Primary headings |
| `--color-text-subtle` | `#94A3B8` | Micro metadata, corner indexes, timestamps | Body text |
| `--color-text-inverse` | `#F8FAFC` | Text on dark footer and final CTA strip | Light canvas body text |
| `--color-border` | `#E2E8F0` | Card outlines, section dividers, table rows | Text color |
| `--color-border-hover` | `#94A3B8` | Card hover border, secondary button hover | Default borders |

### Tailwind Configuration Integration (`@theme` in `globals.css`)

```css
@theme {
  --color-bg: var(--color-bg);
  --color-bg-secondary: var(--color-bg-secondary);
  --color-bg-subtle: var(--color-bg-subtle);
  --color-bg-dark: var(--color-bg-dark);

  --color-brand: var(--color-brand);
  --color-brand-hover: var(--color-brand-hover);
  --color-button-dark: var(--color-button-dark);

  --color-accent: var(--color-accent);
  --color-accent-hover: var(--color-accent-hover);
  --color-accent-subtle: var(--color-accent-subtle);
  --color-accent-glow: var(--color-accent-glow);

  --color-green: var(--color-green);
  --color-red: var(--color-red);

  --color-text: var(--color-text);
  --color-text-muted: var(--color-text-muted);
  --color-text-subtle: var(--color-text-subtle);
  --color-text-inverse: var(--color-text-inverse);

  --color-border: var(--color-border);
  --color-border-hover: var(--color-border-hover);
  --color-border-accent: var(--color-border-accent);

  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
}
```

---

## 3. Typography System

Typography uses **Geist** (`font-sans`) exclusively across the entire application. Monospace fonts are strictly prohibited (red mark rule).

### Font Integration (`src/app/layout.tsx`)

```tsx
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="font-sans antialiased bg-[#FFFFFF] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
```

### Type Scale Hierarchy

| Token | Size | Line Height | Letter Spacing | Weight | Typical Element |
|---|---|---|---|---|---|
| `display` | 72px (4.5rem) | 1.05 | -0.04em | 700 | Hero primary headline only |
| `h1` | 48px (3.0rem) | 1.1 | -0.03em | 700 | Page level main heading |
| `h2` | 36px (2.25rem) | 1.15 | -0.03em | 600 | Major section headline |
| `h3` | 24px (1.5rem) | 1.25 | -0.02em | 600 | Card title, feature group heading |
| `h4` | 20px (1.25rem) | 1.35 | -0.01em | 600 | Sub-section, feature headline |
| `body` | 16px (1.0rem) | 1.5 | 0 | 400 | Standard paragraph copy |
| `small` | 14px (0.875rem) | 1.5 | 0 | 400 | Captions, card microcopy, labels |
| `stat` | 36px-48px | 1.0 | -0.03em | 700 | Hero metrics and data numbers (`tabular-nums font-sans`) |
| `tag` | 11px-12px | 1.4 | 0.04em | 600 | Technical tags and category labels (`font-sans`) |

### Two-Tone Headline Pattern

Major landing headlines use a deliberate two-tone chromatic treatment to focus viewer attention on the value proposition:
- **Base Proposition**: Rendered in dark slate `#0F172A` font weight 700.
- **Focal Value Keyword**: Rendered in Electric Cobalt Blue `#0052FF` font weight 700.

```tsx
// Two-Tone Headline Example
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1]">
  Next-Generation DOOH Network{" "}
  <span className="text-[#0052FF]">& Digital Signage Software</span>
</h1>
```

---

## 4. Spacing and Grid Rules

Base unit: **4px**. All spacing, paddings, and margins use strict multiples of 4.

| Token | Value | Tailwind Utility | Primary Usage |
|---|---|---|---|
| Section Padding Y | 96px | `py-24` | Standard top and bottom section padding |
| Compact Section Y | 48px | `py-12` | Trust bar, metric strip, logo ticker |
| Footer Padding Y | 64px | `py-16` | Global footer container |
| Gutter Mobile | 24px | `px-6` | Mobile viewport page margins |
| Gutter Desktop | 80px | `px-20` (or `lg:px-8 xl:px-12`) | Desktop viewport page margins |
| Card Padding Standard | 32px | `p-8` | Primary feature cards, case studies |
| Card Padding Compact | 24px | `p-6` | Financial metric cards, stat items |
| Grid Gap Standard | 24px | `gap-6` | 3-column and 4-column card grids |
| Grid Gap Relaxed | 32px-40px | `gap-8 lg:gap-10` | Alternating 2-column split sections |
| Max Container Width | 1280px | `max-w-7xl mx-auto` | Standard content wrapper |
| Compact Container Width | 1024px | `max-w-5xl mx-auto` | Lead capture forms, focused content |

---

## 5. Architectural Wireframe and Grid Elements

To achieve the technical, high-end agency aesthetic observed in the reference designs, use deliberate architectural cues:

### Corner Brackets and Coordinate Crosses
Use subtle wireframe symbols to frame technical sections or metric modules:
```tsx
// Corner Bracket Framing
<div className="relative p-6 border border-slate-200 rounded-xl">
  {/* Top Left Bracket */}
  <span className="absolute -top-1.5 -left-1.5 text-xs text-slate-400 select-none">┌</span>
  {/* Top Right Bracket */}
  <span className="absolute -top-1.5 -right-1.5 text-xs text-slate-400 select-none">┐</span>
  {/* Bottom Left Bracket */}
  <span className="absolute -bottom-1.5 -left-1.5 text-xs text-slate-400 select-none">└</span>
  {/* Bottom Right Bracket */}
  <span className="absolute -bottom-1.5 -right-1.5 text-xs text-slate-400 select-none">┘</span>

  {/* Card Content */}
</div>
```

### Technical Section Identifiers
Use clean sans uppercase badges in square brackets above section headlines:
- `[ 01 / DOOH NETWORK ]`
- `[ 02 / CLOUD CMS ]`
- `[ TELEMETRY LIVE ]`

### Dotted Vector Map Underlays
For metric sections verifying geographical reach (such as Kerala and South India commercial screen footprints), incorporate a subtle vector dot-matrix map underlay with low opacity (`opacity-15` or `#E2E8F0`) positioned behind stat cards.

---

## 6. Canonical Component Catalog

### 1. Action Buttons (`src/components/ui/Button.tsx`)

Buttons use Class Variance Authority (CVA). The flagship button shape is the pill (`rounded-full`).

| Variant | Tailwind Classes | Purpose |
|---|---|---|
| `primary` | `bg-[#0052FF] text-white hover:bg-[#0043CC] shadow-sm rounded-full` | Flagship primary conversion action |
| `brand` | `bg-[#0052FF] text-white hover:bg-[#0043CC] shadow-sm rounded-full` | High-intent conversion action (Request Demo, Launch Campaign) |
| `dark` | `bg-[#030712] text-white hover:bg-[#1E293B] shadow-sm rounded-full` | Dark contrast action |
| `secondary` | `bg-transparent border border-slate-200 text-slate-800 hover:border-slate-400 hover:bg-slate-50 rounded-full` | Secondary navigation or alternative choices |
| `white` | `bg-white text-[#0A0E17] hover:bg-slate-100 shadow-md rounded-full` | Actions over dark canvases or unscrolled floating navbar |
| `ghost` | `bg-transparent text-slate-700 hover:text-[#0052FF] hover:bg-slate-100/60 rounded-full` | Minimal inline links and tertiary actions |

### 2. Performance Metric Card (d.local Pattern)

Used in financial highlights, network performance grids, and verified business metrics:

```tsx
export function PerformanceMetricCard({
  category,
  value,
  delta,
  deltaType = "positive",
  description,
}: {
  category: string;
  value: string;
  delta?: string;
  deltaType?: "positive" | "negative";
  description: string;
}) {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl hover:border-[#94A3B8] hover:shadow-md transition-all duration-200">
      {/* Category Header */}
      <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold">
        {category}
      </div>

      {/* Hero Numeral in Electric Cobalt Blue with Tabular Figures */}
      <div className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#0052FF] tabular-nums">
        {value}
      </div>

      {/* Delta Tag */}
      {delta && (
        <div className="mt-2 flex items-center gap-1.5">
          <span
            className={`inline-flex items-center text-xs font-semibold ${
              deltaType === "positive" ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {deltaType === "positive" ? "▲" : "▼"} {delta}
          </span>
        </div>
      )}

      {/* Explanatory Microcopy */}
      <p className="mt-3 text-xs sm:text-sm text-[#64748B] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
```

### 3. Architectural Notch Metric Card (Diacon Pattern)

Used in milestone showcases, trust proof blocks, and architectural stat grids:

```tsx
export function ArchitecturalNotchCard({
  index,
  value,
  label,
  description,
}: {
  index?: string;
  value: string;
  label: string;
  description?: string;
}) {
  return (
    <div className="relative group p-6 sm:p-8 bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl hover:border-[#94A3B8] transition-all duration-200">
      {/* Top Left Geometric Corner Notch */}
      <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-[#0052FF] notch-accent" />

      {/* Optional Sequential Index */}
      {index && (
        <span className="text-xs text-[#94A3B8] font-semibold">
          {index}
        </span>
      )}

      {/* Value with Tabular Figures */}
      <div className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#0052FF] transition-colors tabular-nums">
        {value}
      </div>

      {/* Label */}
      <div className="mt-1.5 text-sm sm:text-base font-semibold text-[#0F172A]">
        {label}
      </div>

      {/* Description */}
      {description && (
        <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
```

### 4. Milestone Circular Focal Badge (Diacon Pattern)

Used for major historical milestones (such as 17 Years of Operation or 2,500 Executed Campaigns):

```tsx
export function MilestoneFocalBadge({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#0052FF] text-white flex flex-col items-center justify-center p-6 text-center shadow-xl shadow-blue-500/20">
      {Icon && <Icon className="w-8 h-8 mb-2 text-white/90" />}
      <div className="text-3xl sm:text-4xl font-bold tracking-tight leading-none tabular-nums">
        {value}
      </div>
      <div className="mt-2 text-xs sm:text-sm font-medium text-blue-100 max-w-[140px]">
        {label}
      </div>
    </div>
  );
}
```

### 5. Ambient Telemetry and Callout Card (Sinesubs Pattern)

Used for technical callouts, data insights, and telemetry modules:

```tsx
export function TelemetryCalloutCard({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative overflow-hidden p-6 sm:p-8 bg-[#FFFFFF] border-l-4 border-[#0052FF] border border-[#E2E8F0] rounded-r-2xl shadow-sm">
      {/* Subtle Luminous Radial Aura in Corner */}
      <div
        aria-hidden="true"
        className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-[#0052FF]/10 blur-2xl pointer-events-none"
      />

      {/* Category Pill Tag */}
      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#0052FF] border border-[#BFDBFE]">
        {tag}
      </span>

      <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#0F172A]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
        {body}
      </p>
    </div>
  );
}
```

### 6. Live Indicator Dot (Green)

Used exclusively for active screen counts and real-time operational status:
- **Geometry**: 8px circular indicator (`w-2 h-2 rounded-full`).
- **Color**: `#22C55E` (`bg-[#22C55E]`).
- **Animation**: Continuous subtle pulse (`animate-pulse`).
- **Placement**: Directly to the left of the status text or screen count label.

```tsx
<div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
  <span>130+ Displays Live</span>
</div>
```

### 7. Continuous Logo Ticker (`src/components/ui/LogoTicker.tsx`)

Enterprise social proof marquee featuring seamless infinite scroll and gradient edge masks:
- **Label**: Clean sans uppercase header (`text-[11px] tracking-[0.2em] text-slate-400 uppercase font-semibold`).
- **Logos**: Grayscale SVG vectors with hover transition to full opacity (`opacity-60 hover:opacity-100 transition-opacity duration-150`).
- **Fade Masks**: Left and right linear gradient masks matching canvas token (`from-white to-transparent`).

---

## 7. Hero Section Archetypes

### Archetype A: Centered Technical Aperture Hero (Hero A Pattern)
- **Structure**: Centered two-tone display headline, centered explanatory subtext, high-contrast action CTA button, flanked symmetrically by 3D precision hardware or portal graphics.
- **Header Tag**: Technical identifier `[ 01 / DOOH NETWORK TELEMETRY ]`.
- **Bottom Anchor**: Monochrome logo ticker anchored to bottom edge.

### Archetype B: Split Architectural Grid Hero (Hero B Pattern)
- **Structure**: Left 7-column layout with two-tone display headline, subtext, and dual CTA buttons. Right 5-column layout displaying authentic high-resolution commercial screen photograph or fluid technical 3D element.
- **Grid Guides**: Subtle dashed or hair-thin slate guidelines running vertically through the section canvas.
- **Corner Marks**: Technical corner brackets (`┌ ┘`) demarcating viewport boundaries.

---

## 8. Section Alternation Rhythm

Page sections follow a strict alternating background pattern to maintain structural cadence:

```
[ Canvas Map: Homepage Rhythm ]

1. HERO SECTION
   Canvas: #FFFFFF (Pure White)
   Height: lg:min-h-[700px] flex items-center
   Pattern: Two-tone headline, high-contrast CTA, hardware display visual

2. TRUST BAR & SOCIAL PROOF
   Canvas: #F8FAFC (Secondary Slate)
   Padding: py-12
   Pattern: 4 Geist stat columns with vertical dividers, logo ticker

3. PRIME ADS (Advertisers)
   Canvas: #FFFFFF (White)
   Padding: py-24
   Pattern: Copy left, interactive screen simulator right

4. MSTREAM CMS (Publishers)
   Canvas: #F8FAFC (Secondary Slate)
   Padding: py-24
   Pattern: Screen dashboard visual left, feature copy right

5. MWORLD APPS
   Canvas: #FFFFFF (White)
   Padding: py-24
   Pattern: 3-column architectural feature card grid

6. HARDWARE SOLUTIONS
   Canvas: #F8FAFC (Secondary Slate)
   Padding: py-24
   Pattern: Specs table and hardware visual

7. INTERACTIVE & NEAR ME ADS
   Canvas: #FFFFFF (White)
   Padding: py-24
   Pattern: Split showcase with QR and mobile trigger demonstrations

8. CASE STUDIES & PERFORMANCE
   Canvas: #F8FAFC (Secondary Slate)
   Padding: py-24
   Pattern: 3-column performance metric card grid (d.local style)

9. FRANCHISE OPPORTUNITY
   Canvas: #FFFFFF (White)
   Padding: py-24
   Pattern: Split economic breakdown and investment calculator

10. FINAL LEAD CAPTURE STRIP
   Canvas: #030712 (Dark Inversion)
   Padding: py-24
   Pattern: White headline, consultation form, high-contrast CTA

11. FOOTER
   Canvas: #030712 (Dark Inversion)
   Padding: py-16
   Pattern: Multi-column navigation, legal CIN, KSUM accreditation badge
```

---

## 9. Plain Speech and Brand Copy Directives

Content tone adheres strictly to `/brand-guidelines` and Sentry Plain Speech standards:

### 1. Plain Speech Tone (Default)
- **Be Concise**: Use the fewest words required to communicate value.
- **Be Direct**: Instruct users with active verbs ("Request a Demo", "Launch Campaign", "Book Consultation").
- **Avoid Jargon**: Replace empty marketing buzzwords with verifiable factual statements.
- **Be Specific**: State verified metrics ("130+ Commercial Displays", "2,500+ Executed Campaigns") rather than vague claims ("Thousands of screens").

### 2. Strict Punctuation and Grammar Rules
- **ZERO EM-DASHES**: Under no circumstances use em-dashes in headlines, body copy, or metadata. Use commas, hyphens, colons, or clean phrasing.
- **No Exclamation Marks**: Keep interface copy calm and authoritative.
- **American English Spelling**: Use "color", "programmatic", "catalog", "license".
- **Title Case for Headings**: Capitalize primary words in headings and section titles.
- **Sentence Case for Body and Buttons**: Use sentence case for paragraphs, descriptions, and action labels ("Request a demo", "Explore network").

---

## 10. Motion and Animation Rules

### Lenis Root Smooth Scroll
- Applied only at root layout (`src/components/providers/LenisProvider.tsx`).
- Duration: 1.2 seconds, exponential out easing.
- Never use Lenis for scroll-jacking, section locking, or custom hijacking.

### Motion Scroll Transitions (`FadeIn.tsx`)
- Standard fade transition: `opacity: 0 -> 1`, `y: 24 -> 0`.
- Duration: 0.5s with `ease: "easeOut"`.
- **Viewport Rule**: Always specify `viewport: { once: true }` to prevent elements from re-animating when scrolling upwards.

### Never Animate List
- Never animate width, height, top, or left properties (triggers expensive layout reflow).
- Never animate canvas background colors on scroll.
- Never animate above-the-fold Hero content (violates Largest Contentful Paint target).
- Never use WebGL particle meshes or gratuitous 3D canvas libraries.

---

## 11. Performance and Accessibility Standards

### Core Web Vitals Targets
- **Largest Contentful Paint (LCP)**: `< 2.5s`
- **Cumulative Layout Shift (CLS)**: `< 0.1`
- **Interaction to Next Paint (INP)**: `< 200ms`

### Accessibility (WCAG 2.2 AA Compliance)
- **Color Contrast**: Normal text minimum contrast ratio of `4.5:1` against its canvas background. Headlines and large text minimum ratio of `3.0:1`.
- **Touch Targets**: Minimum interactive touch target size of `44x44px` on all mobile clickable elements.
- **Icon Standards**: Strictly use SVG icons from Lucide or official brand vectors. Emojis as icons are strictly forbidden.
- **Focus Rings**: Interactive elements must present visible keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none`).
- **Image Optimization**: All images must use `next/image` with explicit `width`, `height`, and descriptive `alt` tags. Above-the-fold hero image uses `priority`.

---

## 12. Component Build Sequence

When constructing or modifying UI components, follow this dependency order:

```
1. globals.css                CSS variables, theme tokens, typography setup
2. src/components/ui/Button    CVA action button primitive (pill, dark, brand, outline)
3. src/components/ui/FadeIn    Subtle scroll motion wrapper with once: true
4. src/components/ui/StatCard  Performance metric and architectural stat primitives
5. src/components/ui/LogoTicker Continuous passive social proof marquee
6. src/components/layout/Header Plain, full-width white navigation with desktop dropdowns
7. src/components/layout/Footer Dark inverted footer, legal CIN, accreditation badge
8. src/components/home/Hero    Two-tone display headline with commercial visual
9. Product & Feature Sections  Alternating canvas rhythm sections
10. Lead Capture Forms         Validated consultation booking inputs
```
