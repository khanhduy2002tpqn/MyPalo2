import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", validation: (Rule) => Rule.required() }),
    defineField({ name: "hero", title: "Hero", type: "heroBanner" }),
    defineField({
      name: "sections",
      title: "Content sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "localeString" }),
            defineField({ name: "body", title: "Body", type: "localeText" }),
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
            defineField({ name: "cta", title: "CTA", type: "cta" })
          ]
        }
      ]
    }),
    defineField({ name: "seoTitle", title: "SEO title", type: "localeString" }),
    defineField({ name: "seoDescription", title: "SEO description", type: "localeText" })
  ]
});
