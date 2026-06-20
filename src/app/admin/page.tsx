"use client";

import Link from "next/link";
import { BookOpen, FileText, GraduationCap, ImageIcon, Newspaper, Users } from "lucide-react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { canAccess, collectionLabels } from "@/lib/admin/storage";
import type { AdminCollection } from "@/lib/admin/types";
import { useAdmin } from "@/components/admin/AdminProvider";

const cards: { collection: AdminCollection; href: string; icon: React.ReactNode }[] = [
  { collection: "posts", href: "/admin/posts", icon: <Newspaper size={22} /> },
  { collection: "pages", href: "/admin/pages", icon: <FileText size={22} /> },
  { collection: "media", href: "/admin/media", icon: <ImageIcon size={22} /> },
  { collection: "courses", href: "/admin/courses", icon: <BookOpen size={22} /> },
  { collection: "instructors", href: "/admin/instructors", icon: <GraduationCap size={22} /> }
];

export default function AdminPage() {
  const { db, user } = useAdmin();

  return (
    <AdminLayout>
      <div className="admin-page-head">
        <div>
          <p className="admin-kicker">Dashboard</p>
          <h1>MyPalo Admin</h1>
        </div>
        <span>{user?.role === "admin" ? "Admin" : "Author"}</span>
      </div>

      <div className="admin-summary">
        <div className="admin-panel">
          <Users size={24} />
          <strong>{db.users.length}</strong>
          <span>Tài khoản</span>
        </div>
        {cards.map((card) => (
          <Link className="admin-panel admin-card-link" href={card.href} key={card.collection}>
            {card.icon}
            <strong>{db[card.collection].length}</strong>
            <span>{collectionLabels[card.collection]}</span>
            {!canAccess(user, card.collection) ? <small>Không có quyền truy cập</small> : null}
          </Link>
        ))}
      </div>

      <div className="admin-panel">
        <h2>Phân quyền</h2>
        <div className="role-grid">
          <div>
            <strong>Admin</strong>
            <p>Quản lý bài viết, trang, media, khóa học và giảng viên.</p>
          </div>
          <div>
            <strong>Author</strong>
            <p>Quản lý bài viết và media. Không truy cập trang, khóa học, giảng viên.</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
