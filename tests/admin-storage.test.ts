import assert from "node:assert/strict";
import test from "node:test";
import {
  canAccess,
  clearSession,
  createItem,
  deleteItem,
  getDatabase,
  getSessionUserId,
  saveDatabase,
  seedDatabase,
  setSessionUserId,
  updateItem
} from "../src/lib/admin/storage.ts";

function installLocalStorageMock() {
  const store = new Map<string, string>();
  globalThis.window = {
    localStorage: {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
      removeItem: (key: string) => {
        store.delete(key);
      }
    }
  } as unknown as Window & typeof globalThis;
}

test("admin and author permissions are separated", () => {
  const admin = seedDatabase.users.find((user) => user.role === "admin")!;
  const author = seedDatabase.users.find((user) => user.role === "author")!;

  assert.equal(canAccess(admin, "pages"), true);
  assert.equal(canAccess(admin, "courses"), true);
  assert.equal(canAccess(author, "posts"), true);
  assert.equal(canAccess(author, "media"), true);
  assert.equal(canAccess(author, "pages"), false);
});

test("session helpers persist and clear the current user id", () => {
  installLocalStorageMock();

  setSessionUserId("user-admin");
  assert.equal(getSessionUserId(), "user-admin");
  clearSession();
  assert.equal(getSessionUserId(), null);
});

test("admin collections can create, update, and delete records", () => {
  installLocalStorageMock();
  saveDatabase(structuredClone(seedDatabase));

  createItem("posts", {
    title: "Unit Test Post",
    slug: "unit-test-post",
    summary: "Created from unit test",
    status: "draft"
  });

  let db = getDatabase();
  const created = db.posts.find((post) => post.slug === "unit-test-post");
  assert.ok(created);
  assert.equal(created.status, "draft");

  updateItem("posts", created.id, { status: "published", title: "Updated Unit Test Post" });
  db = getDatabase();
  assert.equal(db.posts.find((post) => post.id === created.id)?.status, "published");
  assert.equal(db.posts.find((post) => post.id === created.id)?.title, "Updated Unit Test Post");

  deleteItem("posts", created.id);
  db = getDatabase();
  assert.equal(db.posts.some((post) => post.id === created.id), false);
});
