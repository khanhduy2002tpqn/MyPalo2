import { defineField, defineType } from "sanity";

export const partner = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "website", title: "Website", type: "url" }),
    defineField({ name: "description", title: "Description", type: "localeText" })
  ]
});
