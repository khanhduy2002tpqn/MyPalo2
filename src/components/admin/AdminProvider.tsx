"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { clearSession, getDatabase, getSessionUserId, saveDatabase, setSessionUserId } from "@/lib/admin/storage";
import type { AdminDatabase, AdminRole, AdminUser } from "@/lib/admin/types";

type AdminContextValue = {
  db: AdminDatabase;
  user: AdminUser | null;
  ready: boolean;
  login: (email: string, password: string) => boolean;
  register: (payload: { name: string; email: string; password: string; role: AdminRole }) => boolean;
  logout: () => void;
  refresh: () => void;
};

const AdminContext = createContext<AdminContextValue | null>(null);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [db, setDb] = useState<AdminDatabase>(() => getDatabase());
  const [user, setUser] = useState<AdminUser | null>(null);
  const [ready, setReady] = useState(false);

  const refresh = () => {
    const nextDb = getDatabase();
    const sessionId = getSessionUserId();
    setDb(nextDb);
    setUser(nextDb.users.find((candidate) => candidate.id === sessionId) || null);
  };

  useEffect(() => {
    window.setTimeout(() => {
      refresh();
      setReady(true);
    }, 0);
  }, []);

  const value = useMemo<AdminContextValue>(
    () => ({
      db,
      user,
      ready,
      login(email, password) {
        const nextDb = getDatabase();
        const matched = nextDb.users.find(
          (candidate) => candidate.email.toLowerCase() === email.toLowerCase() && candidate.password === password
        );
        if (!matched) return false;
        setSessionUserId(matched.id);
        setDb(nextDb);
        setUser(matched);
        return true;
      },
      register(payload) {
        const nextDb = getDatabase();
        const exists = nextDb.users.some((candidate) => candidate.email.toLowerCase() === payload.email.toLowerCase());
        if (exists) return false;
        const nextUser: AdminUser = {
          id: `user-${Date.now()}`,
          createdAt: new Date().toISOString(),
          ...payload
        };
        nextDb.users = [nextUser, ...nextDb.users];
        saveDatabase(nextDb);
        setSessionUserId(nextUser.id);
        setDb(nextDb);
        setUser(nextUser);
        return true;
      },
      logout() {
        clearSession();
        setUser(null);
      },
      refresh
    }),
    [db, ready, user]
  );

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used inside AdminProvider");
  return context;
}
