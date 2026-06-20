import assert from "node:assert/strict";
import test from "node:test";
import { alternateLocalePath, content, localeLabels, withLocale } from "../src/lib/content.ts";

test("content contains both supported locales", () => {
  assert.equal(localeLabels.vi, "Tiếng Việt");
  assert.equal(localeLabels.en, "English");
  assert.ok(content.vi.programs.length >= 3);
  assert.ok(content.en.programs.length >= 3);
});

test("withLocale prefixes English internal routes only", () => {
  assert.equal(withLocale("vi", "/programs"), "/programs");
  assert.equal(withLocale("en", "/programs"), "/en/programs");
  assert.equal(withLocale("en", "/"), "/en");
  assert.equal(withLocale("vi", "https://mypalo.vn"), "https://mypalo.vn");
});

test("alternateLocalePath maps between Vietnamese and English routes", () => {
  assert.equal(alternateLocalePath("vi", "/news"), "/en/news");
  assert.equal(alternateLocalePath("en", "/en/news"), "/news");
  assert.equal(alternateLocalePath("en", "/en"), "/");
});
