"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

export default function BannersManagerPage() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    badge: "🔥 Admission Alert",
    title: "",
    subtitle: "",
    ctaText: "Enquire on WhatsApp",
    ctaUrl: "https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20enquire%20about%20a%20course.",
    bgGradient: "linear-gradient(135deg, #0e1f3b 0%, #1f4e79 60%, #C6A75E 100%)",
    imageUrl: "",
    active: true,
    order: 1,
  });

  async function loadBanners() {
    try {
      const res = await fetch("/api/admin/banners");
      const data = await res.json();
      setBanners(data.banners || []);
    } catch (err) {
      console.error("Failed to load banners", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBanners();
  }, []);

  function handleEdit(banner) {
    setFormData({ ...banner });
    setShowModal(true);
  }

  function handleAddNew() {
    setFormData({
      id: "",
      badge: "📢 Special Announcement",
      title: "",
      subtitle: "",
      ctaText: "Reserve Seat",
      ctaUrl: "https://wa.me/919841644813",
      bgGradient: "linear-gradient(135deg, #0e1f3b 0%, #1f4e79 100%)",
      imageUrl: "",
      active: true,
      order: banners.length + 1,
    });
    setShowModal(true);
  }

  async function handleDelete(id, title) {
    if (!confirm(`Delete banner "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/banners?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        setBanners(data.banners || []);
      }
    } catch (err) {
      alert("Failed to delete banner.");
    }
  }

  async function handleToggleActive(banner) {
    const updatedBanner = { ...banner, active: !banner.active };
    try {
      const res = await fetch("/api/admin/banners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBanner),
      });
      const data = await res.json();
      if (res.ok) {
        setBanners(data.banners || []);
      }
    } catch (err) {
      alert("Failed to update status.");
    }
  }

  async function handleFileUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formDataUpload,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setFormData((prev) => ({ ...prev, imageUrl: data.url }));
      } else {
        alert(data.error || "Image upload failed.");
      }
    } catch (err) {
      alert("Error uploading banner image.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/banners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setBanners(data.banners || []);
        setShowModal(false);
      }
    } catch (err) {
      alert("Failed to save banner.");
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
            Marketing Banners &amp; Slideshow Manager
          </h1>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
            Manage promotional campaign banners, admission alerts, workshop graphics, and homepage slideshow slides.
          </p>
        </div>

        <button onClick={handleAddNew} className={styles.primaryBtn}>
          <span>+</span> Add Campaign Banner
        </button>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order</th>
              <th>Badge &amp; Title</th>
              <th>CTA Action</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                  Loading campaign banners...
                </td>
              </tr>
            ) : banners.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No marketing banners found. Create your first campaign banner above!
                </td>
              </tr>
            ) : (
              banners.map((banner) => (
                <tr key={banner.id}>
                  <td style={{ fontWeight: 700, color: "#60a5fa" }}>#{banner.order || 1}</td>
                  <td>
                    <div style={{ fontWeight: 600, color: "#f1f5f9" }}>{banner.title}</div>
                    {banner.badge && (
                      <span style={{ fontSize: "0.75rem", color: "#C6A75E", fontWeight: "bold" }}>
                        {banner.badge}
                      </span>
                    )}
                  </td>
                  <td>
                    <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>{banner.ctaText}</span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleToggleActive(banner)}
                      style={{
                        padding: "0.25rem 0.65rem",
                        borderRadius: "100px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                        background: banner.active ? "rgba(34, 197, 94, 0.2)" : "rgba(148, 163, 184, 0.2)",
                        color: banner.active ? "#4ade80" : "#94a3b8",
                      }}
                    >
                      {banner.active ? "Active (Showing)" : "Draft (Hidden)"}
                    </button>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                      <button
                        onClick={() => handleEdit(banner)}
                        className={styles.secondaryBtn}
                        style={{ padding: "0.3rem 0.65rem", fontSize: "0.8rem" }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(banner.id, banner.title)}
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

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "1.5rem",
          }}
        >
          <div
            style={{
              background: "#0f172a",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "16px",
              width: "100%",
              maxWidth: "650px",
              padding: "2rem",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <h2 style={{ margin: "0 0 1.5rem 0", color: "#f8fafc" }}>
              {formData.id ? "Edit Campaign Banner" : "Add New Campaign Banner"}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: "1rem" }}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Badge Tag</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. 🔥 Admission Alert or 📚 Free Resource"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Order</label>
                  <input
                    type="number"
                    className={styles.input}
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 1 })}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Banner Headline Title</label>
                <input
                  type="text"
                  required
                  className={styles.input}
                  placeholder="e.g. NEET 2026 Founder's Batch — Limited 8 Seats"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Subtitle / Description</label>
                <textarea
                  className={styles.textarea}
                  style={{ minHeight: "60px" }}
                  placeholder="e.g. Early registrations receive an immediate 10% tuition waiver..."
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>CTA Button Label</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Reserve Your Seat"
                    value={formData.ctaText}
                    onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>CTA Destination Link / WhatsApp URL</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="https://wa.me/... or /resources"
                    value={formData.ctaUrl}
                    onChange={(e) => setFormData({ ...formData, ctaUrl: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Background CSS Gradient (Fallback)</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="linear-gradient(135deg, #0e1f3b 0%, #1f4e79 100%)"
                  value={formData.bgGradient}
                  onChange={(e) => setFormData({ ...formData, bgGradient: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Banner Graphic Image URL (Optional)</label>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="/uploads/banner-neet.png"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  />
                  <label className={styles.secondaryBtn} style={{ cursor: "pointer", whiteSpace: "nowrap" }}>
                    {uploading ? "Uploading..." : "Upload Image"}
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                <input
                  type="checkbox"
                  id="active-check"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  style={{ width: "18px", height: "18px" }}
                />
                <label htmlFor="active-check" style={{ color: "#f8fafc", fontSize: "0.9rem" }}>
                  Active (Display live on website slideshow)
                </label>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
                <button type="button" onClick={() => setShowModal(false)} className={styles.secondaryBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryBtn}>
                  Save Campaign Banner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
