import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services & Platforms",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service / Platform Name",
      type: "string",
      description: "e.g., Prime Ads, mStream, Franchise Program, mWorld Marketplace",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "h1Title",
      title: "Page H1 Headline",
      type: "string",
      description: "Matches search intent (distinct from title tag)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortValueProp",
      title: "Short Value Proposition",
      type: "text",
      rows: 2,
      description: "One clear sentence for hero section and AI answer blocks",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "targetAudience",
      title: "Target Audience",
      type: "string",
      description: "e.g., Brands & Media Buyers, Retailers & Facility Managers, Business Partners",
    }),
    defineField({
      name: "features",
      title: "Key Capabilities & Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Feature Title", type: "string" }),
            defineField({ name: "description", title: "Feature Description", type: "text", rows: 2 }),
            defineField({ name: "highlight", title: "Key Metric / Highlight", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "faqs",
      title: "Buyer FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
  ],
});
