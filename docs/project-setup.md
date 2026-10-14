# dms.family — Project Setup Guide

**Stack:** Next.js 15 · Sanity v3 · Tailwind CSS v4 · Lenis · Motion (Framer Motion)

---

## 1. Next.js

Use the App Router. No Pages Router.

```bash
npx create-next-app@latest dms-web \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

**Required config in `next.config.ts`:**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
```

---

## 2. Sanity

Initialize Sanity inside the same repo as a studio.

```bash
npm create sanity@latest -- \
  --project <your-project-id> \
  --dataset production \
  --template clean \
  --output-path studio
```

Install the Next.js Sanity toolkit:

```bash
npm install next-sanity @sanity/image-url
```

**`/src/lib/sanity.ts` — client config:**

```ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});
```

**Required env vars:**

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
```

---

## 3. Tailwind CSS v4

Tailwind v4 ships with Next.js 15 by default via `create-next-app`.

Verify `tailwind.config.ts` content paths include src:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

---

## 4. Lenis (Smooth Scroll)

```bash
npm install lenis
```

Create a provider component at `/src/components/providers/LenisProvider.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

Wrap in `layout.tsx`:

```tsx
import LenisProvider from "@/components/providers/LenisProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
```

---

## 5. Motion (Framer Motion)

```bash
npm install motion
```

Use the `motion` package directly (Framer Motion v11+ ships as `motion`).

Basic usage example:

```tsx
import { motion } from "motion/react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 6. Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                        # Homepage
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── advertisers/
│   │   └── prime-ads/page.tsx
│   ├── publishers/
│   │   ├── mstream/page.tsx
│   │   ├── hardware/page.tsx
│   │   └── franchise/page.tsx
│   ├── marketplace/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── privacy-policy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── providers/
│   │   └── LenisProvider.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/                             # Reusable UI primitives
│   └── sections/                       # Page sections
├── lib/
│   └── sanity.ts
├── sanity/
│   └── schemas/                        # Sanity schema files
└── types/                              # TypeScript types
```

---

## 7. Sanity Schema Files

Place these inside `/src/sanity/schemas/`:

```
schemas/
├── page.ts
├── post.ts
├── caseStudy.ts
├── product.ts
├── service.ts
└── faq.ts
```

Register all schemas in `/studio/sanity.config.ts`:

```ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { page } from "../src/sanity/schemas/page";
import { post } from "../src/sanity/schemas/post";
import { caseStudy } from "../src/sanity/schemas/caseStudy";
import { product } from "../src/sanity/schemas/product";
import { service } from "../src/sanity/schemas/service";
import { faq } from "../src/sanity/schemas/faq";

export default defineConfig({
  name: "dms-studio",
  title: "DMS Studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [page, post, caseStudy, product, service, faq],
  },
});
```

---

## 8. Environment Variables

Create `.env.local` at root:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Site
NEXT_PUBLIC_SITE_URL=https://dms.family
```

Add `.env.local` to `.gitignore`. Never commit tokens.

---

## 9. Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "studio": "cd studio && sanity dev"
  }
}
```

Run dev and studio together:

```bash
# Terminal 1
npm run dev

# Terminal 2
npm run studio
```
