import { defineField, defineType } from "sanity";

export const instructor = defineType({
  name: "instructor",
  title: "Instructor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } }),
    defineField({ name: "position", title: "Position", type: "localeString" }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" })
          ]
        }
      ]
    })
  ]
});
