"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./admin.module.css";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    async function checkAuth() {
      if (isLoginPage) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/admin/auth");
        const data = await res.json();
        if (data.authenticated) {
          setAuthed(true);
        } else {
          router.push("/admin/login");
        }
      } catch (err) {
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, [pathname, isLoginPage, router]);

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className={styles.adminContainer} style={{ alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "#94a3b8", fontSize: "1rem" }}>Loading CCA CMS Portal...</div>
      </div>
    );
  }

  if (!authed) {
    return null;
  }

  const navItems = [
    { label: "Dashboard Overview", href: "/admin", icon: "📊" },
    { label: "Blog Posts", href: "/admin/posts", icon: "📝" },
    { label: "Create New Post", href: "/admin/posts/editor/new", icon: "➕" },
    { label: "Study Resources", href: "/admin/resources", icon: "📚" },
    { label: "Programs & Pricing", href: "/admin/programs", icon: "💰" },
    { label: "Testimonials & Ranks", href: "/admin/testimonials", icon: "⭐" },
    { label: "Events & Seminars", href: "/admin/events", icon: "📅" },
    { label: "FAQs & Notice Bar", href: "/admin/faqs", icon: "❓" },
    { label: "Lead Capture Inbox", href: "/admin/leads", icon: "📥" },
    { label: "Site Settings & Uploads", href: "/admin/settings", icon: "⚙️" },
  ];

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandTitle}>CCA CMS</div>
          <span className={styles.brandBadge}>Pro v2.0</span>
        </div>

        <nav className={styles.navGroup}>
          <div className={styles.navSectionLabel}>Management</div>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className={styles.navSectionLabel}>External</div>
          <Link href="/" target="_blank" className={styles.navItem}>
            <span>🌐</span>
            <span>View Public Website</span>
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>Academic Content Management Portal</div>
          <div className={styles.headerActions}>
            <Link href="/admin/posts/editor/new" className={styles.primaryBtn}>
              <span>+</span> New Post
            </Link>
          </div>
        </header>

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
