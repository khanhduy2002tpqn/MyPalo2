"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { BookOpen, FileText, GraduationCap, ImageIcon, LayoutDashboard, LogOut, Newspaper, UserRound } from "lucide-react";
import { canAccess, collectionLabels } from "@/lib/admin/storage";
import type { AdminCollection } from "@/lib/admin/types";
import { useAdmin } from "./AdminProvider";

const navItems: { href: string; label: string; collection?: AdminCollection; icon: React.ReactNode }[] = [
  { href: "/admin", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { href: "/admin/posts", label: "Quản lý bài viết", collection: "posts", icon: <Newspaper size={18} /> },
  { href: "/admin/pages", label: "Quản lý trang", collection: "pages", icon: <FileText size={18} /> },
  { href: "/admin/media", label: "Quản lý media", collection: "media", icon: <ImageIcon size={18} /> },
  { href: "/admin/courses", label: "Quản lý khóa học", collection: "courses", icon: <BookOpen size={18} /> },
  { href: "/admin/instructors", label: "Quản lý giảng viên", collection: "instructors", icon: <GraduationCap size={18} /> }
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, ready, logout } = useAdmin();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (ready && !user) router.replace("/admin/login");
  }, [ready, router, user]);

  if (!ready || !user) {
    return <div className="admin-loading">Đang kiểm tra phiên đăng nhập...</div>;
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" href="/admin">
          MyPalo Admin
        </Link>
        <div className="admin-user">
          <UserRound size={20} />
          <div>
            <strong>{user.name}</strong>
            <span>{user.role}</span>
          </div>
        </div>
        <nav className="admin-nav">
          {navItems
            .filter((item) => !item.collection || canAccess(user, item.collection))
            .map((item) => (
              <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
                {item.icon}
                {item.label}
              </Link>
            ))}
        </nav>
        <button
          className="admin-logout"
          type="button"
          onClick={() => {
            logout();
            router.replace("/admin/login");
          }}
        >
          <LogOut size={18} />
          Đăng xuất
        </button>
      </aside>
      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <span>Role: {user.role}</span>
            <strong>{user.role === "admin" ? "Toàn quyền quản trị" : "Quyền tác giả"}</strong>
          </div>
          <Link href="/" target="_blank">
            Xem website
          </Link>
        </header>
        {children}
      </section>
    </div>
  );
}

export function AccessDenied({ collection }: { collection: AdminCollection }) {
  return (
    <AdminLayout>
      <div className="admin-panel">
        <p className="admin-kicker">Không đủ quyền</p>
        <h1>{collectionLabels[collection]}</h1>
        <p>Role hiện tại không được truy cập chức năng này.</p>
      </div>
    </AdminLayout>
  );
}
