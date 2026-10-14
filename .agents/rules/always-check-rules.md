---
description: Mandatory pre-write rule check and verification workflow for every file modification
globs: ["**/*"]
alwaysApply: true
---

# Mandatory Project Rules Verification Workflow

This rule is **ALWAYS ACTIVE** and must be consulted **EVERY TIME** you write, modify, or review code, components, pages, schemas, metadata, or documentation in this repository.

## Non-Negotiable Pre-Execution Check

Before taking any write action (`write_to_file`, `replace_file_content`, `multi_replace_file_content`):

1. **Check SEO & Entity Standards**:
   - Inspect [`docs/seo-rules.md`](file:///d:/Work/dmswebsite/dms-web/docs/seo-rules.md).
   - Ensure title tags (≤ 60 chars: `{Topic} | DMSG — {Value Prop}`), meta descriptions (≤ 155 chars: 1 sentence + action), unique `<h1>`, canonical URLs (`NEXT_PUBLIC_SITE_URL` without trailing slashes), and JSON-LD schemas match specs.
   - Use verified company entity: **DMSG Private Limited**, domain **dms.family**, located in Ernakulam, Kerala, India (150+ customers, 130+ DOOH spaces, 2,500+ campaigns, 3,500+ CMS subscriptions).

2. **Check Architecture & Stack Standards**:
   - Inspect [`docs/project-setup.md`](file:///d:/Work/dmswebsite/dms-web/docs/project-setup.md).
   - Stack: Next.js 15+ App Router (`src/app/`), React 19, Tailwind CSS v4, Lenis smooth scrolling, `motion/react` (Framer Motion v11+), Sanity CMS v3.
   - Server Components by default; `"use client"` only where strictly necessary.

3. **Check Next.js Rules**:
   - Verify App Router conventions in [`AGENTS.md`](file:///d:/Work/dmswebsite/dms-web/AGENTS.md) and `node_modules/next/dist/docs/`.

## Post-Write Quality Gate

Before completing any task where files were edited:
- [ ] Checked against all items in the Every-Time Verification Checklist in [`AGENTS.md`](file:///d:/Work/dmswebsite/dms-web/AGENTS.md).
- [ ] Confirmed zero lint or TypeScript errors (`npm run lint`).
- [ ] Guaranteed no placeholders, mock omissions, or generic unstyled code.
