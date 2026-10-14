import { defineType, defineField } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Studies",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Case Study Title",
      type: "string",
      description: "Format: Client Name + Outcome / Measurable Result",
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
      name: "clientName",
      title: "Client Name",
      type: "string",
      description: "e.g., Aster Medcity, Volkswagen, Toyota",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry Vertical",
      type: "string",
      description: "e.g., Healthcare, Automotive, Retail, Hospitality",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "productUsed",
      title: "Product / Platform Deployed",
      type: "string",
      options: {
        list: [
          { title: "Prime Ads (DOOH)", value: "Prime Ads" },
          { title: "mStream Digital Signage CMS", value: "mStream" },
          { title: "Commercial Signage Hardware", value: "Hardware" },
          { title: "mWorld Creative Solutions", value: "mWorld" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Featured Case Study Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "metrics",
      title: "Key Quantifiable Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "metric", title: "Metric / Number", type: "string" }),
            defineField({ name: "label", title: "Description", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "problem",
      title: "The Problem / Challenge",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "solution",
      title: "The Solution Implemented",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "result",
      title: "The Measurable Results",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Detailed Narrative & Gallery",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
});
