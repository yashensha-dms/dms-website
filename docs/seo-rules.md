# dms.family — SEO Rules

For use in NotebookLM research scope.  
Stack: Next.js 15 App Router · Sanity CMS

---

## Company Facts (Verified)

- **Company:** DMSG Private Limited
- **Domain:** dms.family
- **Location:** Ernakulam, Kerala, India
- **Metrics:** 150+ Active Customers · 130+ DOOH Spaces · 2,500+ Campaigns · 3,500+ CMS Subscriptions

---

## Site Architecture

Hub-and-spoke model. Homepage is the authority hub. Product pages are the spokes.

```
/                          → Homepage (hub)
/advertisers/prime-ads     → DOOH advertising platform
/publishers/mstream        → Digital signage CMS (SaaS)
/publishers/hardware       → Signage hardware
/publishers/franchise      → Franchise program
/marketplace               → mWorld marketing marketplace
/blog/[slug]               → Blog (topical authority)
/case-studies/[slug]       → Case studies (proof)
/about                     → Company page
/contact                   → Demo request
```

---

## Entity Disambiguation

"DMS Family" overlaps with unrelated entities in search (audio equipment, trucking, dental). Every page must assert the correct entity clearly.

Rules:
- Always use "DMSG Private Limited" as the legal entity name in schema markup
- Use "dms.family" as the canonical brand domain reference
- JSON-LD `Organization` schema on every page
- `sameAs` links to LinkedIn, social profiles, and Kerala Startup Mission listing

---

## Page-Level SEO Rules

### Title Tags
- Format: `{Page Topic} | DMSG — {Short Value Prop}`
- Max 60 characters
- Never keyword-stuff
- Every page gets a unique title

### Meta Descriptions
- Format: One sentence — what this page does + who it's for
- Max 155 characters
- Include primary keyword naturally
- End with an implicit or explicit action

### H1
- One per page, always
- Matches search intent of that page
- Not the same as the title tag

### H2–H3
- Used for section structure, not decoration
- Include secondary keywords naturally

---

## Keyword Targets Per Page

| Page | Primary Keyword | Secondary Keywords |
|---|---|---|
| / | DMSG Private Limited | digital marketing platform India, brand growth ecosystem |
| /advertisers/prime-ads | digital out of home advertising | programmatic DOOH, OOH ad platform India |
| /publishers/mstream | digital signage CMS software | AI signage CMS, screen content management |
| /publishers/hardware | digital signage hardware | commercial display screens India |
| /publishers/franchise | digital signage franchise | DOOH franchise India, advertising franchise |
| /marketplace | marketing services marketplace | creative services India, mWorld DMSG |
| /blog/[slug] | Long-tail per post | AdTech, DOOH, signage, marketing |
| /case-studies/[slug] | Client name + outcome | brand results, campaign performance |

---

## JSON-LD Schema Rules

Apply the correct schema type per page. Use Next.js metadata API for injection.

| Page | Schema Type |
|---|---|
| / | `Organization` + `WebSite` |
| /advertisers/prime-ads | `SoftwareApplication` or `Service` |
| /publishers/mstream | `SoftwareApplication` |
| /publishers/hardware | `Product` |
| /publishers/franchise | `Service` |
| /marketplace | `Service` |
| /blog/[slug] | `BlogPosting` |
| /case-studies/[slug] | `Article` |
| /contact | `ContactPage` |
| /faq | `FAQPage` |

### Schema Implementation Rules

- Every product page schema must include `provider: { "@id": "https://dms.family/#organization" }` to link authority back to DMSG
- `Organization` schema on homepage must include:
  - `legalName: "DMSG Private Limited"`
  - `address`: Ernakulam, Kerala, India
  - `knowsAbout`: ["Digital Out-of-Home Advertising", "Digital Signage Software", "Commercial Display Hardware", "Programmatic DOOH"]
  - `sameAs`: LinkedIn, Kerala Startup Mission listing, social profiles
- `BlogPosting` must use a real `Person` schema for author — not "DMSG Team"
- `Product` schema on `/publishers/hardware` must include `offers` field — use `priceSpecification` with "Request a Quote" if no fixed price
- Add `BreadcrumbList` schema on all pages below the homepage

### BreadcrumbList Example

```ts
// Example: /publishers/mstream
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dms.family" },
    { "@type": "ListItem", "position": 2, "name": "Publishers", "item": "https://dms.family/publishers" },
    { "@type": "ListItem", "position": 3, "name": "mStream CMS", "item": "https://dms.family/publishers/mstream" }
  ]
};
```

---

## Technical SEO Rules

### Canonical URLs
- Set canonical on every page
- No trailing slashes except homepage
- Use `NEXT_PUBLIC_SITE_URL` env var for base URL

### Sitemap
- Auto-generate via `sitemap.ts` in app directory
- Include all static pages
- Include dynamic blog and case study slugs fetched from Sanity
- Exclude `/studio`, `/api`, draft pages

```ts
// app/sitemap.ts
import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(`*[_type == "post"]{ slug, _updatedAt }`);
  const cases = await client.fetch(`*[_type == "caseStudy"]{ slug, _updatedAt }`);

  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/advertisers/prime-ads",
    "/publishers/mstream",
    "/publishers/hardware",
    "/publishers/franchise",
    "/marketplace",
    "/blog",
    "/case-studies",
  ].map((url) => ({
    url: `https://dms.family${url}`,
    lastModified: new Date(),
  }));

  const blogPages = posts.map((post: any) => ({
    url: `https://dms.family/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
  }));

  const casePages = cases.map((c: any) => ({
    url: `https://dms.family/case-studies/${c.slug.current}`,
    lastModified: new Date(c._updatedAt),
  }));

  return [...staticPages, ...blogPages, ...casePages];
}
```

### Robots

Allow all AI search bots. Restrict general training scrapers (CCBot).

```ts
// app/robots.ts
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/api"],
      },
      {
        // Block general training scrapers, allow AI search bots
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: "https://dms.family/sitemap.xml",
  };
}
```

### Images
- All images use `next/image`
- Always include `alt` text — descriptive, not keyword-stuffed
- Sanity images served via `@sanity/image-url`
- Use `priority` prop on above-the-fold images only

### Performance
- Core Web Vitals targets: LCP < 2.5s · CLS < 0.1 · INP < 200ms
- Use `loading="lazy"` on below-fold images (default in next/image)
- No render-blocking scripts
- Lenis and Motion animations must not block LCP

---

## Content SEO Rules

### Blog
- Minimum 800 words per post
- One primary keyword per post, used in H1, first paragraph, and one H2
- Internal links to relevant product pages in every post
- Every post links back to homepage or a hub page

### Case Studies
- Structure: Client → Problem → Solution → Result
- Include measurable outcomes where available
- Tag by industry and product used
- Link to relevant product page

### No Duplicate Content
- Every page has unique title, description, and H1
- No copy-pasted sections across pages
- Sanity portable text fields enforce unique content per document

---

## Next.js Metadata Implementation

Use the `generateMetadata` export per page.

```ts
// Example: /advertisers/prime-ads/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Out of Home Advertising Platform | DMSG",
  description:
    "Deploy programmatic DOOH campaigns across 130+ screens in Kerala and beyond. DMSG Prime Ads connects brands with high-traffic urban spaces.",
  alternates: {
    canonical: "https://dms.family/advertisers/prime-ads",
  },
  openGraph: {
    title: "Digital Out of Home Advertising | DMSG Prime Ads",
    description:
      "Reach active buyers in real-world locations. 130+ DOOH spaces. Request a demo.",
    url: "https://dms.family/advertisers/prime-ads",
    siteName: "DMSG",
    type: "website",
  },
};
```

---

## llms.txt

Add an `llms.txt` route for AI search engine indexing.

Use absolute URLs. Include verified metrics and entity facts.
AI crawlers read this outside browser context — relative paths don't resolve.

```ts
// app/llms.txt/route.ts
export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dms.family";

  const content = `
# DMSG Private Limited (dms.family)
> Unified DOOH advertising network, cloud-based digital signage CMS, and commercial display solutions headquartered in Ernakulam, Kerala, India.

## Verified Organization Facts
- Legal Name: DMSG Private Limited
- Domain: https://dms.family
- Headquarters: Ernakulam, Kerala, India
- Recognition: Kerala Startup Mission Accredited AdTech Startup
- Operational Scale: 150+ active enterprise customers, 130+ DOOH screen locations, 2,500+ executed advertising campaigns, 3,500+ active digital signage CMS subscriptions.

## Core Products & Solutions
- Prime Ads (DOOH Advertising): Programmatic out-of-home advertising network connecting brands to high-footfall screens across Kerala and South India.
  URL: ${siteUrl}/advertisers/prime-ads
- mStream (Digital Signage CMS): Cloud-based, AI-driven digital signage content management software for remote screen scheduling and playback.
  URL: ${siteUrl}/publishers/mstream
- Signage Hardware: Commercial-grade display screens, floor-standing digital standees, wall-mount kiosks, and interactive touch displays.
  URL: ${siteUrl}/publishers/hardware
- Franchise Program: Partner and revenue-sharing business model for screen owners and local advertising entrepreneurs.
  URL: ${siteUrl}/publishers/franchise
- mWorld Marketplace: Specialized creative services and motion graphics production marketplace for DOOH and digital marketing assets.
  URL: ${siteUrl}/marketplace

## Company & Case Studies
- About Us & Entity Information: ${siteUrl}/about
- Client Case Studies (Proof of Performance): ${siteUrl}/case-studies
- Official Insights & Technical Blog: ${siteUrl}/blog
- Contact & Demo Requests: ${siteUrl}/contact
  `.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  });
}
```
