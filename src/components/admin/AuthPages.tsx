"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import type { AdminRole } from "@/lib/admin/types";
import { useAdmin } from "./AdminProvider";

export function AuthShell({ mode }: { mode: "login" | "register" }) {
  const { login, register, ready, user } = useAdmin();
  const router = useRouter();
  const [error, setError] = useState("");
  const [role, setRole] = useState<AdminRole>("author");

  useEffect(() => {
    if (ready && user) router.replace("/admin");
  }, [ready, router, user]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");
    const name = String(form.get("name") || "");

    const ok =
      mode === "login"
        ? login(email, password)
        : register({
            name,
            email,
            password,
            role
          });

    if (!ok) {
      setError(mode === "login" ? "Email hoặc mật khẩu không đúng." : "Email đã tồn tại.");
      return;
    }

    router.replace("/admin");
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={onSubmit}>
        <p className="admin-kicker">MyPalo CMS</p>
        <h1>{mode === "login" ? "Đăng nhập" : "Tạo tài khoản"}</h1>
        <p className="auth-hint">
          Demo admin: `admin@mypalo.vn / admin123` hoặc `author@mypalo.vn / author123`.
        </p>
        {mode === "register" ? <input name="name" placeholder="Tên hiển thị" required /> : null}
        <input name="email" placeholder="Email" required type="email" />
        <input name="password" placeholder="Mật khẩu" required type="password" />
        {mode === "register" ? (
          <label className="field-label">
            Role
            <select value={role} onChange={(event) => setRole(event.target.value as AdminRole)}>
              <option value="author">Author</option>
              <option value="admin">Admin</option>
            </select>
          </label>
        ) : null}
        {error ? <div className="auth-error">{error}</div> : null}
        <button type="submit">{mode === "login" ? "Đăng nhập" : "Đăng ký"}</button>
        <Link href={mode === "login" ? "/admin/register" : "/admin/login"}>
          {mode === "login" ? "Chưa có tài khoản? Đăng ký" : "Đã có tài khoản? Đăng nhập"}
        </Link>
      </form>
    </main>
  );
}
