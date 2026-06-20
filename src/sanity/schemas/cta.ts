import { defineField, defineType } from "sanity";

export const cta = defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "localeString" }),
    defineField({ name: "href", title: "URL", type: "url", validation: (Rule) => Rule.uri({ allowRelative: true }) })
  ]
});
