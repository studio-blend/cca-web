"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../../../admin.module.css";

export default function PostEditorPage({ params }) {
  const resolvedParams = use(params);
  const slugParam = resolvedParams.slug;
  const isNew = slugParam === "new";

  const router = useRouter();

  const [formData, setFormData] = useState({
    originalSlug: "",
    slug: "",
    title: "",
    category: "NEET Prep",
    author: "CCA Academic Team",
    date: new Date().toISOString().split("T")[0],
    excerpt: "",
    readTime: "5 min read",
    published: true,
    coverImage: "",
    tags: "",
    content: "",
  });

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("split"); // "split" | "write" | "preview"

  useEffect(() => {
    if (!isNew) {
      async function fetchPost() {
        try {
          const res = await fetch(`/api/admin/posts/${slugParam}`);
          const data = await res.json();
          if (data.post) {
            const p = data.post;
            setFormData({
              originalSlug: p.slug,
              slug: p.slug,
              title: p.title || "",
              category: p.category || "NEET Prep",
              author: p.author || "CCA Academic Team",
              date: p.date || new Date().toISOString().split("T")[0],
              excerpt: p.excerpt || "",
              readTime: p.readTime || "5 min read",
              published: p.published !== undefined ? p.published : true,
              coverImage: p.coverImage || "",
              tags: Array.isArray(p.tags) ? p.tags.join(", ") : p.tags || "",
              content: p.content || "",
            });
          }
        } catch (err) {
          setMessage("Failed to load post data.");
        } finally {
          setLoading(false);
        }
      }

      fetchPost();
    }
  }, [slugParam, isNew]);

  function handleTitleChange(val) {
    const updates = { title: val };
    if (isNew || !formData.originalSlug) {
      updates.slug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }
    setFormData((prev) => ({ ...prev, ...updates }));
  }

  async function handleSave(publishState = null) {
    setSaving(true);
    setMessage("");

    const payload = {
      ...formData,
      published: publishState !== null ? publishState : formData.published,
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    const endpoint = isNew ? "/api/admin/posts" : `/api/admin/posts/${formData.originalSlug || formData.slug}`;
    const method = isNew ? "POST" : "PUT";

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage("Post saved successfully!");
        if (isNew && data.post?.slug) {
          router.push(`/admin/posts/editor/${data.post.slug}`);
        } else if (data.post?.slug) {
          setFormData((prev) => ({ ...prev, originalSlug: data.post.slug }));
        }
      } else {
        setMessage(data.error || "Failed to save post.");
      }
    } catch (err) {
      setMessage("Error saving post.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div style={{ color: "#94a3b8" }}>Loading post editor...</div>;
  }

  return (
    <div>
      {/* Header bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <Link href="/admin/posts" style={{ color: "#60a5fa", fontSize: "0.85rem", textDecoration: "none" }}>
            ← Back to Posts List
          </Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0.4rem 0 0 0", color: "#f8fafc" }}>
            {isNew ? "Create New Blog Post" : `Editing: ${formData.title}`}
          </h1>
        </div>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className={styles.secondaryBtn}
          >
            Save Draft
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className={styles.primaryBtn}
          >
            {saving ? "Publishing..." : "Save & Publish Live"}
          </button>
        </div>
      </div>

      {message && (
        <div
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            background: message.includes("success") ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)",
            border: message.includes("success") ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(239, 68, 68, 0.3)",
            color: message.includes("success") ? "#4ade80" : "#f87171",
            marginBottom: "1.5rem",
          }}
        >
          {message}
        </div>
      )}

      <div className={styles.editorGrid}>
        {/* Main Content Area */}
        <div className={styles.editorMain}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Article Title</label>
            <input
              type="text"
              className={styles.input}
              placeholder="e.g. Master Biology Diagrams for NEET 2026"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            />
          </div>

          {/* View Mode Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", pb: "0.5rem" }}>
            <button
              onClick={() => setActiveTab("split")}
              className={`${styles.secondaryBtn} ${activeTab === "split" ? styles.navItemActive : ""}`}
              style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}
            >
              Split View
            </button>
            <button
              onClick={() => setActiveTab("write")}
              className={`${styles.secondaryBtn} ${activeTab === "write" ? styles.navItemActive : ""}`}
              style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}
            >
              Write (Full Width)
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`${styles.secondaryBtn} ${activeTab === "preview" ? styles.navItemActive : ""}`}
              style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}
            >
              Preview Mode
            </button>
          </div>

          {/* Editor Body */}
          {activeTab === "split" && (
            <div className={styles.editorSplit}>
              <textarea
                className={`${styles.textarea} ${styles.codeArea}`}
                placeholder="Write your article in Markdown / MDX format here..."
                value={formData.content}
                onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
              />
              <div className={styles.previewBox}>
                <div style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  Live Preview
                </div>
                <h1 style={{ marginTop: 0 }}>{formData.title || "Post Title"}</h1>
                <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: "1rem" }}>
                  {formData.date} • {formData.author} • {formData.readTime}
                </div>
                <div style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
                  {formData.content || "*Preview content will appear here as you type...*"}
                </div>
              </div>
            </div>
          )}

          {activeTab === "write" && (
            <textarea
              className={`${styles.textarea} ${styles.codeArea}`}
              style={{ minHeight: "550px" }}
              placeholder="Write your article in Markdown / MDX format here..."
              value={formData.content}
              onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
            />
          )}

          {activeTab === "preview" && (
            <div className={styles.previewBox} style={{ minHeight: "550px" }}>
              <h1>{formData.title || "Post Title"}</h1>
              <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: "1.5rem" }}>
                {formData.date} • {formData.author} • {formData.readTime}
              </div>
              <div style={{ whiteSpace: "pre-wrap" }}>{formData.content}</div>
            </div>
          )}
        </div>

        {/* Sidebar Controls */}
        <div className={styles.editorSidebar}>
          <div
            style={{
              background: "rgba(30, 41, 59, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1rem", color: "#f1f5f9" }}>Article Settings</h3>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Publish Status</label>
              <select
                className={styles.select}
                value={formData.published ? "true" : "false"}
                onChange={(e) => setFormData((prev) => ({ ...prev, published: e.target.value === "true" }))}
              >
                <option value="true">Published (Public)</option>
                <option value="false">Draft (Internal)</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>URL Slug</label>
              <input
                type="text"
                className={styles.input}
                value={formData.slug}
                onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Category</label>
              <select
                className={styles.select}
                value={formData.category}
                onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
              >
                <option value="NEET Prep">NEET Prep</option>
                <option value="JEE Prep">JEE Prep</option>
                <option value="Board Exam">Board Exam</option>
                <option value="Study Tips">Study Tips</option>
                <option value="Announcements">Announcements</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Author Name</label>
              <input
                type="text"
                className={styles.input}
                value={formData.author}
                onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Publish Date</label>
              <input
                type="date"
                className={styles.input}
                value={formData.date}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Read Time</label>
              <input
                type="text"
                className={styles.input}
                placeholder="e.g. 5 min read"
                value={formData.readTime}
                onChange={(e) => setFormData((prev) => ({ ...prev, readTime: e.target.value }))}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Excerpt / Summary</label>
              <textarea
                className={styles.textarea}
                style={{ minHeight: "80px" }}
                placeholder="Brief post summary for card previews..."
                value={formData.excerpt}
                onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Tags (comma separated)</label>
              <input
                type="text"
                className={styles.input}
                placeholder="NEET, Biology, Revision"
                value={formData.tags}
                onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
