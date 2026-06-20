import { defineField, defineType } from "sanity";

export const program = defineType({
  name: "program",
  title: "Program / Course",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", validation: (Rule) => Rule.required() }),
    defineField({ name: "thumbnail", title: "Thumbnail", type: "image", options: { hotspot: true } }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
    defineField({
      name: "instructors",
      title: "Instructors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "instructor" }] }]
    }),
    defineField({ name: "schedule", title: "Schedule", type: "localeString" }),
    defineField({ name: "registrationUrl", title: "Registration URL", type: "url", validation: (Rule) => Rule.uri({ allowRelative: true }) }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "Vietnamese", value: "vi" },
          { title: "English", value: "en" },
          { title: "Vietnamese / English", value: "vi-en" }
        ]
      }
    }),
    defineField({ name: "category", title: "Category", type: "string" })
  ]
});
