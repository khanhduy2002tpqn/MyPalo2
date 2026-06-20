"use client";

import { FormEvent, useMemo, useState } from "react";
import { canAccess, collectionLabels, createItem, deleteItem, updateItem } from "@/lib/admin/storage";
import type { AdminCollection, AdminItem } from "@/lib/admin/types";
import { AccessDenied, AdminLayout } from "./AdminLayout";
import { useAdmin } from "./AdminProvider";

export function AdminCollectionPage({ collection }: { collection: AdminCollection }) {
  const { db, user, refresh } = useAdmin();
  const [editing, setEditing] = useState<AdminItem | null>(null);
  const [status, setStatus] = useState<"draft" | "published">("draft");

  const items = useMemo(() => db[collection] as AdminItem[], [collection, db]);

  if (!canAccess(user, collection)) {
    return <AccessDenied collection={collection} />;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      title: String(form.get("title") || ""),
      slug: String(form.get("slug") || ""),
      summary: String(form.get("summary") || ""),
      status
    };

    if (editing) {
      updateItem(collection, editing.id, payload);
    } else {
      createItem(collection, payload);
    }

    setEditing(null);
    setStatus("draft");
    event.currentTarget.reset();
    refresh();
  }

  return (
    <AdminLayout>
      <div className="admin-page-head">
        <div>
          <p className="admin-kicker">Content Management</p>
          <h1>Quản lý {collectionLabels[collection].toLowerCase()}</h1>
        </div>
        <span>{items.length} mục</span>
      </div>

      <div className="admin-grid">
        <form className="admin-panel admin-form" onSubmit={onSubmit}>
          <h2>{editing ? "Cập nhật nội dung" : "Thêm nội dung mới"}</h2>
          <input key={editing?.id || "new-title"} name="title" placeholder="Tiêu đề" required defaultValue={editing?.title || ""} />
          <input key={`${editing?.id || "new"}-slug`} name="slug" placeholder="slug" required defaultValue={editing?.slug || ""} />
          <textarea
            key={`${editing?.id || "new"}-summary`}
            name="summary"
            placeholder="Mô tả ngắn"
            rows={5}
            defaultValue={editing?.summary || ""}
          />
          <label className="field-label">
            Trạng thái
            <select value={status} onChange={(event) => setStatus(event.target.value as "draft" | "published")}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
          <button type="submit">{editing ? "Lưu thay đổi" : "Tạo mới"}</button>
          {editing ? (
            <button className="ghost-button" type="button" onClick={() => setEditing(null)}>
              Hủy sửa
            </button>
          ) : null}
        </form>

        <div className="admin-panel">
          <h2>Danh sách</h2>
          <div className="admin-table">
            {items.map((item) => (
              <article key={item.id}>
                <div>
                  <strong>{item.title}</strong>
                  <span>/{item.slug}</span>
                  <small>{item.status} · {new Date(item.updatedAt).toLocaleString("vi-VN")}</small>
                  <p>{item.summary}</p>
                </div>
                <div className="row-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setEditing(item);
                      setStatus(item.status);
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    className="danger"
                    type="button"
                    onClick={() => {
                      deleteItem(collection, item.id);
                      refresh();
                    }}
                  >
                    Xóa
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
