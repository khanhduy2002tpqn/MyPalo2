import { defineType } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Localized text",
  type: "object",
  fields: [
    { name: "vi", title: "Vietnamese", type: "string" },
    { name: "en", title: "English", type: "string" }
  ]
});
