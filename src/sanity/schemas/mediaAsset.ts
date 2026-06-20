import { defineField, defineType } from "sanity";

export const mediaAsset = defineType({
  name: "mediaAsset",
  title: "Media",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "asset", title: "Asset", type: "file" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "alt", title: "Alt text", type: "localeString" }),
    defineField({ name: "category", title: "Category", type: "string" })
  ]
});
