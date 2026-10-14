import { defineType, defineField } from "sanity";

export const page = defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
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
      name: "seoTitle",
      title: "SEO Title Tag",
      type: "string",
      description: "Format: {Page Topic} | DMSG, {Short Value Prop} (Max 60 chars)",
      validation: (rule) => rule.max(60).warning("Should be under 60 characters for SEO"),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "1 sentence: what this page does + who it is for, ending with an action (Max 155 chars)",
      validation: (rule) => rule.max(155).warning("Should be under 155 characters for SEO"),
    }),
    defineField({
      name: "content",
      title: "Page Content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
