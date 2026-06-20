import { defineField, defineType } from "sanity";

export const heroBanner = defineType({
  name: "heroBanner",
  title: "Hero Banner",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "localeString" }),
    defineField({ name: "title", title: "Title", type: "localeString", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
    defineField({ name: "image", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "primaryCta", title: "Primary CTA", type: "cta" }),
    defineField({ name: "secondaryCta", title: "Secondary CTA", type: "cta" })
  ]
});
