"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { alternateLocalePath, content, localeLabels, withLocale } from "@/lib/content";
import type { Locale } from "@/lib/types";

type HeaderProps = {
  locale: Locale;
  currentPath: string;
};

export function Header({ locale, currentPath }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const t = content[locale];
  const alternate = alternateLocalePath(locale, currentPath);

  return (
    <header className="site-header">
      <div className="header-accent" />
      <div className="container nav">
        <Link className="brand" href={withLocale(locale, "/")} aria-label="MyPalo home" onClick={() => setOpen(false)}>
          <Image src="/assets/logos/mypalo-colored.svg" alt="MyPalo" width={168} height={58} priority />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={open ? "nav-panel open" : "nav-panel"}>
          <nav className="nav-links" aria-label="Primary navigation">
            {t.nav.map((item) => {
              const href = withLocale(locale, item.href);
              const isActive = currentPath === item.href || (item.href !== "/" && currentPath.startsWith(item.href));
              return (
                <Link className={isActive ? "active" : ""} key={item.href} href={href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="nav-actions">
            <Link className="button secondary language-button" href={alternate} onClick={() => setOpen(false)}>
              {localeLabels[locale === "vi" ? "en" : "vi"]}
            </Link>
            <Link className="button header-cta" href={withLocale(locale, t.cta.href)} onClick={() => setOpen(false)}>
              {t.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
