"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./admin.module.css";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalResources: 0,
    totalFaqs: 0,
  });
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [postsRes, resourcesRes, faqsRes] = await Promise.all([
          fetch("/api/admin/posts"),
          fetch("/api/admin/resources"),
          fetch("/api/admin/faqs"),
        ]);

        const postsData = await postsRes.json();
        const resourcesData = await resourcesRes.json();
        const faqsData = await faqsRes.json();

        const posts = postsData.posts || [];
        const resources = resourcesData.resources || [];
        const faqs = faqsData.faqs || [];

        const published = posts.filter((p) => p.published).length;
        const drafts = posts.filter((p) => !p.published).length;

        setStats({
          totalPosts: posts.length,
          publishedPosts: published,
          draftPosts: drafts,
          totalResources: resources.length,
          totalFaqs: faqs.length,
        });

        setRecentPosts(posts.slice(0, 5));
      } catch (err) {
        console.error("Error loading dashboard data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  if (loading) {
    return <div style={{ color: "#94a3b8" }}>Loading statistics...</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
          Dashboard Overview
        </h1>
        <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
          Manage your academic articles, study resources, and student FAQs in real-time.
        </p>
      </div>

      {/* Stat Cards Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📝</div>
          <div className={styles.statInfo}>
            <h4>Total Articles</h4>
            <p>{stats.totalPosts}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80" }}>
            ✅
          </div>
          <div className={styles.statInfo}>
            <h4>Published</h4>
            <p>{stats.publishedPosts}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ background: "rgba(245, 158, 11, 0.15)", color: "#fbbf24" }}>
            ✏️
          </div>
          <div className={styles.statInfo}>
            <h4>Drafts</h4>
            <p>{stats.draftPosts}</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ background: "rgba(168, 85, 247, 0.15)", color: "#c084fc" }}>
            📚
          </div>
          <div className={styles.statInfo}>
            <h4>Study Resources</h4>
            <p>{stats.totalResources}</p>
          </div>
        </div>
      </div>

      {/* Recent Posts Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <h3>Recent Blog Articles</h3>
          <Link href="/admin/posts" className={styles.secondaryBtn}>
            View All Posts ({stats.totalPosts})
          </Link>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentPosts.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No articles found. Create your first post!
                </td>
              </tr>
            ) : (
              recentPosts.map((post) => (
                <tr key={post.slug}>
                  <td style={{ fontWeight: 600, color: "#f1f5f9" }}>{post.title}</td>
                  <td>{post.category}</td>
                  <td>
                    <span
                      className={`${styles.badge} ${
                        post.published ? styles.badgeSuccess : styles.badgeWarning
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td>{post.date}</td>
                  <td>
                    <Link href={`/admin/posts/editor/${post.slug}`} className={styles.secondaryBtn} style={{ padding: "0.3rem 0.75rem", fontSize: "0.8rem" }}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
