import { defineType, defineField } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      description: "Buyer or user search query",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      description: "Concise, factual answer (40-60 words ideal for AI search extraction)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Prime Ads (DOOH)", value: "prime-ads" },
          { title: "mStream (Signage CMS)", value: "mstream" },
          { title: "Signage Hardware", value: "hardware" },
          { title: "Franchise Program", value: "franchise" },
          { title: "mWorld Marketplace", value: "marketplace" },
          { title: "General & Company", value: "general" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});
