import { defineField, defineType } from "sanity";

export const news = defineType({
  name: "news",
  title: "News",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", validation: (Rule) => Rule.required() }),
    defineField({ name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "content", title: "Content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "publishDate", title: "Publish Date", type: "datetime", validation: (Rule) => Rule.required() })
  ]
});
