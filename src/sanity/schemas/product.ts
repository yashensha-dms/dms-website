import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Hardware Products",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Model Name",
      type: "string",
      description: "e.g., Grand, Mini, Outlook, Titan, Aspire",
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
      name: "category",
      title: "Display Form Factor",
      type: "string",
      options: {
        list: [
          { title: "Floor Standing Standee", value: "standee" },
          { title: "Wall Mount Commercial Display", value: "wall-mount" },
          { title: "Interactive Touch Kiosk", value: "touch-kiosk" },
          { title: "Tabletop Kiosk", value: "tabletop" },
          { title: "A-Frame Standee", value: "a-frame" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "screenSizes",
      title: "Available Screen Sizes",
      type: "array",
      of: [{ type: "string" }],
      description: 'e.g. 24", 32", 43", 50", 55", 65"',
    }),
    defineField({
      name: "tagline",
      title: "Short Tagline",
      type: "string",
      description: "e.g. Ultra-slim commercial floor-standing digital standee",
    }),
    defineField({
      name: "description",
      title: "Product Overview",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "specifications",
      title: "Technical Specifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Specification Name", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "images",
      title: "Product Showcase Images",
      type: "array",
      of: [
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
          ],
        },
      ],
    }),
  ],
});
