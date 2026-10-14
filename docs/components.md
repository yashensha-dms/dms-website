# Canonical UI Component Reference (`docs/components.md`)

This document defines all shared, reusable UI primitives for the DMS website (`dms.family`).
**Every engineer and AI agent MUST reuse these components to ensure 100% visual and behavioral uniformity across the entire platform.**

---

## 1. Golden Rules of Component Uniformity

1. **Always Check Here First**: Before writing any new UI element or styling an ad-hoc container, inspect `src/components/ui/` and this document.
2. **Zero Inline Buttons**: NEVER write inline `<button className="...">` or `<Link className="...">` for action buttons. Always import `{ Button } from "@/components/ui/Button"`.
3. **Use CVA (Class Variance Authority)**: All interactive primitives in `src/components/ui/` must use CVA to cleanly manage variants, sizes, and compound styles.
4. **Create & Document First**: If a needed canonical primitive does not exist (e.g., Badge, Card, Modal, Input), build it cleanly inside `src/components/ui/` with CVA, and append it to this document before using it across routes.

---

## 2. Component Catalog

### `Button`
**File**: [`src/components/ui/Button.tsx`](file:///d:/Work/dmswebsite/dms-web/src/components/ui/Button.tsx)  
**Description**: The primary action element across all sections, navigation bars, and forms. Supports standard buttons, polymorphic Next.js `Link` navigation, arrow animations, and customizable CVA variants.

#### Props (`ButtonProps`)
| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"primary"` \| `"brand"` \| `"secondary"` \| `"white"` \| `"ghost"` | `"primary"` | Visual style token |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Button dimensions and text scale |
| `shape` | `"pill"` \| `"rounded"` | `"pill"` | Outer curvature (`pill` = `rounded-full`, `rounded` = `rounded-lg`) |
| `href` | `string` | `undefined` | When provided, automatically renders Next.js `<Link>` |
| `showArrow` | `boolean` | `false` | Automatically appends animated `ArrowRight` icon to the right |
| `icon` | `ReactNode` | `undefined` | Custom icon element |
| `iconPosition` | `"left"` \| `"right"` | `"right"` | Placement of custom icon |
| `className` | `string` | `""` | Additional Tailwind utility overrides |

#### CVA Variant Details
- **`primary`** (Default): Electric Cobalt Blue pill (`bg-[#0052FF] text-white hover:bg-[#0043CC] shadow-sm`). The flagship CTA button.
- **`brand`**: Cobalt Blue button (`bg-[#0052FF] text-white hover:bg-[#0043CC] shadow-sm`). Used for high-intent conversion actions.
- **`dark`**: High-contrast dark pill (`bg-[#030712] text-white hover:bg-[#1E293B] shadow-sm`).
- **`secondary`**: Clean outline pill (`border border-slate-200 text-slate-800 hover:border-slate-400 hover:bg-slate-50`).
- **`white`**: High-contrast white pill (`bg-white text-[#0A0E17] hover:bg-slate-100 hover:shadow-lg`). Used on dark canvases.
- **`ghost`**: Minimalist text button (`bg-transparent text-slate-800 hover:text-[#0052FF] hover:bg-slate-100/60`).

#### Code Examples
```tsx
import { Button } from "@/components/ui/Button";

// Flagship Primary CTA with animated arrow
<Button href="/contact" variant="primary" showArrow>
  Book a Consultant
</Button>

// Brand Orange Action
<Button href="/advertisers/prime-ads" variant="brand" showArrow>
  Launch Campaign
</Button>

// Secondary Outline
<Button variant="secondary" onClick={handleReset}>
  Reset Filters
</Button>

// White Pill (for Dark Backdrops)
<Button href="/contact" variant="white" showArrow>
  Schedule Demo
</Button>

// Custom Icon
<Button icon={<Play className="w-4 h-4" />} iconPosition="left">
  Watch Video
</Button>
```

---

### `FadeIn`
**File**: [`src/components/ui/FadeIn.tsx`](file:///d:/Work/dmswebsite/dms-web/src/components/ui/FadeIn.tsx)  
**Description**: Canonical Motion wrapper for subtle scroll animations. Enforces `viewport: { once: true }` to avoid scroll-jacking or repeated triggers.

#### Props (`FadeInProps`)
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | required | Child elements to animate |
| `delay` | `number` | `0` | Delay before animation starts (seconds) |
| `duration` | `number` | `0.5` | Duration of fade transition (seconds) |
| `className` | `string` | `""` | Container styling classes |

#### Code Example
```tsx
import { FadeIn } from "@/components/ui/FadeIn";

<FadeIn delay={0.1}>
  <div className="bg-white p-8 rounded-xl border border-slate-200">
    <h3>Enterprise DOOH CMS</h3>
  </div>
</FadeIn>
```

---

### `StatItem`
**File**: [`src/components/ui/StatItem.tsx`](file:///d:/Work/dmswebsite/dms-web/src/components/ui/StatItem.tsx)  
**Description**: Architectural metric column primitive featuring sequential index, geometric accent notch, Geist sans numbers with tabular figures, and supporting credibility context.

#### Props (`StatItemProps`)
| Prop | Type | Default | Description |
|---|---|---|---|
| `index` | `string` | required | Two-digit sequential index (e.g. `"01"`) |
| `value` | `string` | required | Main metric string formatted in Geist sans with tabular numbers (e.g. `"150+"`) |
| `label` | `string` | required | Metric classification headline |
| `description` | `string` | `undefined` | Supporting contextual line |
| `align` | `"left"` \| `"center"` | `"left"` | Text and notch alignment |
| `className` | `string` | `""` | Container styling overrides |

#### Code Example
```tsx
import { StatItem } from "@/components/ui/StatItem";

<StatItem
  index="01"
  value="150+"
  label="Active Customers"
  description="Direct brand and media planning partnerships across South India."
/>
```

---

### `LogoTicker`
**File**: [`src/components/ui/LogoTicker.tsx`](file:///d:/Work/dmswebsite/dms-web/src/components/ui/LogoTicker.tsx)  
**Description**: Continuous, seamless horizontal logo marquee primitive with left and right gradient fade masks for passive enterprise social proof.

#### Props (`LogoTickerProps`)
| Prop | Type | Default | Description |
|---|---|---|---|
| `logos` | `LogoItem[]` | required | Array of `{ name: string, svg: ReactNode }` |
| `fadeColor` | `string` | `"#F8FAFC"` | CSS background color token for left/right gradient fade masks |
| `className` | `string` | `""` | Container styling overrides |

#### Code Example
```tsx
import { LogoTicker } from "@/components/ui/LogoTicker";

<LogoTicker logos={PARTNER_LOGOS} fadeColor="#F8FAFC" />
```

---

## 3. Directory Standards for UI Primitives

All future shared UI components must be placed in `src/components/ui/`:
```
src/components/ui/
├── Button.tsx       # Main action buttons & links (CVA)
├── FadeIn.tsx       # Motion scroll fade-in wrapper
├── StatItem.tsx     # Architectural numbered metric column (CVA)
├── LogoTicker.tsx   # Continuous passive logo marquee
├── Card.tsx         # Bordered content cards
├── Badge.tsx        # Status & categorization tags
└── Input.tsx        # Standard forms & lead capture inputs
```

Whenever a new component is added:
1. Export its CVA variants object (e.g. `export const badgeVariants = cva(...)`).
2. Include complete JSDoc comments on the component, props interface, and examples.
3. Implement with `React.forwardRef` and proper TypeScript types.
4. Update this document (`docs/components.md`) with its API and examples.
