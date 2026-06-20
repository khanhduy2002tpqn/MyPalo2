import { defineType } from "sanity";

export const localeText = defineType({
  name: "localeText",
  title: "Localized long text",
  type: "object",
  fields: [
    { name: "vi", title: "Vietnamese", type: "text", rows: 4 },
    { name: "en", title: "English", type: "text", rows: 4 }
  ]
});
