"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../admin.module.css";

export default function PostsManagerPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  async function loadPosts() {
    try {
      const res = await fetch("/api/admin/posts");
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (err) {
      console.error("Failed to load posts", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function handleDelete(slug, title) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/posts/${slug}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.slug !== slug));
      } else {
        alert("Failed to delete post.");
      }
    } catch (err) {
      alert("Error deleting post.");
    }
  }

  async function togglePublishStatus(post) {
    try {
      const updatedPost = { ...post, published: !post.published };
      const res = await fetch(`/api/admin/posts/${post.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });

      if (res.ok) {
        setPosts((prev) =>
          prev.map((p) => (p.slug === post.slug ? { ...p, published: !post.published } : p))
        );
      }
    } catch (err) {
      alert("Error toggling status.");
    }
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase());

    if (statusFilter === "published") return matchesSearch && post.published;
    if (statusFilter === "draft") return matchesSearch && !post.published;
    return matchesSearch;
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
            Blog Articles Manager
          </h1>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
            Create, edit, publish, or delete blog posts and MDX articles.
          </p>
        </div>

        <Link href="/admin/posts/editor/new" className={styles.primaryBtn}>
          <span>+</span> Create New Post
        </Link>
      </div>

      {/* Filter Bar */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
          background: "rgba(30, 41, 59, 0.4)",
          padding: "1rem",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <input
          type="text"
          placeholder="Search by title or category..."
          className={styles.input}
          style={{ flex: 1, minWidth: "240px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className={styles.select}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="published">Published Only</option>
          <option value="draft">Drafts Only</option>
        </select>
      </div>

      {/* Posts Table */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Author</th>
              <th>Date</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                  Loading articles...
                </td>
              </tr>
            ) : filteredPosts.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No matching articles found.
                </td>
              </tr>
            ) : (
              filteredPosts.map((post) => (
                <tr key={post.slug}>
                  <td style={{ fontWeight: 600, color: "#f1f5f9" }}>{post.title}</td>
                  <td>{post.category}</td>
                  <td>{post.author}</td>
                  <td>{post.date}</td>
                  <td>
                    <button
                      onClick={() => togglePublishStatus(post)}
                      className={`${styles.badge} ${
                        post.published ? styles.badgeSuccess : styles.badgeWarning
                      }`}
                      style={{ cursor: "pointer", border: "none" }}
                      title="Click to toggle publish status"
                    >
                      {post.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                      <Link
                        href={`/admin/posts/editor/${post.slug}`}
                        className={styles.secondaryBtn}
                        style={{ padding: "0.3rem 0.65rem", fontSize: "0.8rem" }}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post.slug, post.title)}
                        className={styles.secondaryBtn}
                        style={{
                          padding: "0.3rem 0.65rem",
                          fontSize: "0.8rem",
                          color: "#ef4444",
                          borderColor: "rgba(239, 68, 68, 0.2)",
                        }}
                      >
                        Delete
                      </button>
                    </div>
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
