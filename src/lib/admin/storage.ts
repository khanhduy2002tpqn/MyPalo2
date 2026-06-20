"use client";

import type { AdminCollection, AdminDatabase, AdminItem, AdminMedia, AdminRole, AdminUser } from "./types";

const DB_KEY = "mypalo-admin-db";
const SESSION_KEY = "mypalo-admin-session";

const now = () => new Date().toISOString();

export const collectionLabels: Record<AdminCollection, string> = {
  posts: "Bài viết",
  pages: "Trang",
  media: "Media",
  courses: "Khóa học",
  instructors: "Giảng viên"
};

export const rolePermissions: Record<AdminRole, AdminCollection[]> = {
  admin: ["posts", "pages", "media", "courses", "instructors"],
  author: ["posts", "media"]
};

export const seedDatabase: AdminDatabase = {
  users: [
    {
      id: "user-admin",
      name: "MyPalo Admin",
      email: "admin@mypalo.vn",
      password: "admin123",
      role: "admin",
      createdAt: now()
    },
    {
      id: "user-author",
      name: "MyPalo Author",
      email: "author@mypalo.vn",
      password: "author123",
      role: "author",
      createdAt: now()
    }
  ],
  posts: [
    {
      id: "post-1",
      title: "PSET Bootcamp 2026 chuẩn bị tuyển sinh",
      slug: "pset-bootcamp-2026-chuan-bi-tuyen-sinh",
      status: "published",
      updatedAt: now(),
      summary: "Thông tin tuyển sinh và nội dung trọng tâm của PSET Bootcamp 2026."
    }
  ],
  pages: [
    {
      id: "page-home",
      title: "Trang chủ",
      slug: "trang-chu",
      status: "published",
      updatedAt: now(),
      summary: "Hero, giới thiệu, đối tác, tác động và chương trình nổi bật."
    },
    {
      id: "page-about",
      title: "Về Chúng Tôi",
      slug: "ve-chung-toi",
      status: "published",
      updatedAt: now(),
      summary: "Câu chuyện, sứ mệnh, tầm nhìn và giá trị cốt lõi."
    }
  ],
  media: [
    {
      id: "media-1",
      title: "MyPalo Horizontal Logo",
      slug: "mypalo-horizontal-logo",
      status: "published",
      updatedAt: now(),
      summary: "Logo chính dùng trên header.",
      type: "image",
      url: "/assets/logos/mypalo-colored.svg"
    }
  ],
  courses: [
    {
      id: "course-1",
      title: "PSET Global Entrepreneurship & Leadership Bootcamp 2026",
      slug: "pset-global-entrepreneurship-leadership-bootcamp-2026",
      status: "published",
      updatedAt: now(),
      summary: "Bootcamp khởi nghiệp và lãnh đạo chuẩn quốc tế."
    }
  ],
  instructors: [
    {
      id: "instructor-1",
      title: "Ms. Minh Chau Nguyen",
      slug: "ms-minh-chau-nguyen",
      status: "published",
      updatedAt: now(),
      summary: "Education Leader & Program Advisor."
    }
  ]
};

export function getDatabase(): AdminDatabase {
  if (typeof window === "undefined") return seedDatabase;
  const raw = window.localStorage.getItem(DB_KEY);
  if (!raw) {
    window.localStorage.setItem(DB_KEY, JSON.stringify(seedDatabase));
    return seedDatabase;
  }
  return JSON.parse(raw) as AdminDatabase;
}

export function saveDatabase(db: AdminDatabase) {
  window.localStorage.setItem(DB_KEY, JSON.stringify(db));
}

export function getSessionUserId() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(SESSION_KEY);
}

export function setSessionUserId(userId: string) {
  window.localStorage.setItem(SESSION_KEY, userId);
}

export function clearSession() {
  window.localStorage.removeItem(SESSION_KEY);
}

export function canAccess(user: AdminUser | null, collection: AdminCollection) {
  if (!user) return false;
  return rolePermissions[user.role].includes(collection);
}

export function createItem(collection: AdminCollection, item: Pick<AdminItem, "title" | "slug" | "summary" | "status">) {
  const db = getDatabase();
  const nextItem: AdminItem = {
    id: `${collection}-${Date.now()}`,
    updatedAt: now(),
    ...item
  };

  if (collection === "media") {
    const mediaItem: AdminMedia = {
      ...nextItem,
      type: "image",
      url: "/assets/logos/mypalo-colored.svg"
    };
    db.media = [mediaItem, ...db.media];
  } else {
    db[collection] = [nextItem, ...(db[collection] as AdminItem[])];
  }

  saveDatabase(db);
  return db;
}

export function updateItem(collection: AdminCollection, id: string, patch: Partial<AdminItem>) {
  const db = getDatabase();
  const items = db[collection] as AdminItem[];
  db[collection] = items.map((item) => (item.id === id ? { ...item, ...patch, updatedAt: now() } : item)) as never;
  saveDatabase(db);
  return db;
}

export function deleteItem(collection: AdminCollection, id: string) {
  const db = getDatabase();
  db[collection] = (db[collection] as AdminItem[]).filter((item) => item.id !== id) as never;
  saveDatabase(db);
  return db;
}
