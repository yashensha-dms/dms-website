import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "H1 Title",
      type: "string",
      description: "H1 of the blog post, matches search intent",
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
      name: "primaryKeyword",
      title: "Primary Target Keyword",
      type: "string",
      description: "Target keyword to be used in H1, first paragraph, and one H2",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title Tag",
      type: "string",
      description: "Format: {Post Title} | DMSG, {Short Value Prop} (Max 60 chars)",
      validation: (rule) => rule.max(60).warning("Keep title under 60 characters for SERPs"),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "One sentence: what it does + who it's for, ending with an action (Max 155 chars)",
      validation: (rule) => rule.max(155).warning("Keep description under 155 characters"),
    }),
    defineField({
      name: "author",
      title: "Author Details",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Author Name", type: "string" }),
        defineField({ name: "role", title: "Job Title / Role", type: "string" }),
        defineField({ name: "linkedIn", title: "LinkedIn Profile URL", type: "url" }),
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Descriptive alt text for accessibility & image SEO (never keyword stuff)",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "linkedProductPage",
      title: "Target Product Page (Internal Link)",
      type: "string",
      options: {
        list: [
          { title: "Prime Ads (/advertisers/prime-ads)", value: "/advertisers/prime-ads" },
          { title: "mStream CMS (/publishers/mstream)", value: "/publishers/mstream" },
          { title: "Signage Hardware (/publishers/hardware)", value: "/publishers/hardware" },
          { title: "Franchise Program (/publishers/franchise)", value: "/publishers/franchise" },
          { title: "mWorld Marketplace (/marketplace)", value: "/marketplace" },
        ],
      },
    }),
    defineField({
      name: "body",
      title: "Article Body Content (Min 800 words)",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
