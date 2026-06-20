export type AdminRole = "admin" | "author";

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: AdminRole;
  createdAt: string;
};

export type AdminStatus = "draft" | "published";

export type AdminItem = {
  id: string;
  title: string;
  slug: string;
  status: AdminStatus;
  updatedAt: string;
  summary: string;
};

export type AdminMedia = AdminItem & {
  type: "image" | "document" | "video";
  url: string;
};

export type AdminCollection = "posts" | "pages" | "media" | "courses" | "instructors";

export type AdminDatabase = {
  users: AdminUser[];
  posts: AdminItem[];
  pages: AdminItem[];
  media: AdminMedia[];
  courses: AdminItem[];
  instructors: AdminItem[];
};
