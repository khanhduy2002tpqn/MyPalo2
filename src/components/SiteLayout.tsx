import Image from "next/image";
import Link from "next/link";
import { withLocale } from "@/lib/content";
import type { Locale } from "@/lib/types";
import { Header } from "./Header";

type SiteLayoutProps = {
  locale: Locale;
  currentPath?: string;
  children: React.ReactNode;
};

export function SiteLayout({ locale, currentPath = "/", children }: SiteLayoutProps) {
  const usefulLinks = ["Course portal", "Coaching Life", "School", "FAQs", "Sitemap", "News"];
  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Instructors", href: "/instructors" },
    { label: "Partners", href: "/partners" },
    { label: "News", href: "/news" }
  ];

  return (
    <div className="site-shell">
      <Header locale={locale} currentPath={currentPath} />
      {children}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Image src="/assets/logos/mypalo-white.svg" alt="MyPalo" width={160} height={55} />
              <p>Unpack Your Potential. Unlock Your Future.</p>
              <Link className="button secondary footer-cta" href={withLocale(locale, "/contact")}>
                {locale === "vi" ? "Liên hệ" : "Contact us"}
              </Link>
            </div>
            <div className="footer-links">
              <h3>USEFUL LINKS</h3>
              {usefulLinks.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
            <div className="footer-links">
              <h3>COMPANY</h3>
              {companyLinks.map((item) => (
                <Link key={item.href} href={withLocale(locale, item.href)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="footer-contact">
              <h3>CONTACT</h3>
              <p>info@mypalo1.com</p>
              <p>222 Dien Bien Phu, Xuan Hoa, Ho Chi Minh city.</p>
              <p>167 Phan Chau Trinh, Hai Chau, Da Nang city.</p>
              <p>(+84) 935 371 423</p>
            </div>
          </div>
          <div className="copyright">
            <span>Copyright © 2026 Mypalo . All Rights Reserved.</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
            <span>Security</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
