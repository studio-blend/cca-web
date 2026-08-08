"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

export default function TestimonialsManagerPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    role: "",
    college: "",
    quote: "",
    featured: true,
    rating: 5,
  });

  async function loadTestimonials() {
    try {
      const res = await fetch("/api/admin/testimonials");
      const data = await res.json();
      setTestimonials(data.testimonials || []);
    } catch (err) {
      console.error("Failed to load testimonials", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTestimonials();
  }, []);

  function handleEdit(t) {
    setFormData(t);
    setShowModal(true);
  }

  function handleAddNew() {
    setFormData({
      id: "",
      name: "",
      role: "NEET 2026 Achiever",
      college: "Madras Medical College",
      quote: "",
      featured: true,
      rating: 5,
    });
    setShowModal(true);
  }

  async function handleDelete(id, name) {
    if (!confirm(`Delete testimonial from "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/testimonials?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        setTestimonials(data.testimonials || []);
      }
    } catch (err) {
      alert("Failed to delete testimonial.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setTestimonials(data.testimonials || []);
        setShowModal(false);
      }
    } catch (err) {
      alert("Failed to save testimonial.");
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
            Testimonials & Ranks Manager
          </h1>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
            Manage student success stories, NEET/JEE scores, AIR ranks, parent quotes, and featured status.
          </p>
        </div>

        <button onClick={handleAddNew} className={styles.primaryBtn}>
          <span>+</span> Add Testimonial
        </button>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score / Role</th>
              <th>College / Institution</th>
              <th>Rating</th>
              <th>Featured</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                  Loading testimonials...
                </td>
              </tr>
            ) : testimonials.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No testimonials found. Add one above!
                </td>
              </tr>
            ) : (
              testimonials.map((t) => (
                <tr key={t.id}>
                  <td style={{ fontWeight: 600, color: "#f1f5f9" }}>{t.name}</td>
                  <td style={{ color: "#60a5fa" }}>{t.role}</td>
                  <td>{t.college}</td>
                  <td>{"⭐".repeat(t.rating || 5)}</td>
                  <td>
                    <span className={`${styles.badge} ${t.featured ? styles.badgeSuccess : styles.badgeWarning}`}>
                      {t.featured ? "Featured" : "Standard"}
                    </span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                      <button
                        onClick={() => handleEdit(t)}
                        className={styles.secondaryBtn}
                        style={{ padding: "0.3rem 0.65rem", fontSize: "0.8rem" }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(t.id, t.name)}
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
              maxWidth: "600px",
              padding: "2rem",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <h2 style={{ margin: "0 0 1.5rem 0", color: "#f8fafc" }}>
              {formData.id ? "Edit Testimonial" : "Add New Testimonial"}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Student / Parent Name</label>
                <input
                  type="text"
                  required
                  className={styles.input}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Score / Designation</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. NEET 685/720 or Parent"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Target College / Note</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Madras Medical College"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Rating (1-5)</label>
                  <select
                    className={styles.select}
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  >
                    <option value={5}>5 Stars ⭐⭐⭐⭐⭐</option>
                    <option value={4}>4 Stars ⭐⭐⭐⭐</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Featured on Homepage</label>
                  <select
                    className={styles.select}
                    value={formData.featured ? "true" : "false"}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.value === "true" })}
                  >
                    <option value="true">Yes (Show on landing)</option>
                    <option value="false">No (Hub only)</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Testimonial Quote</label>
                <textarea
                  className={styles.textarea}
                  style={{ minHeight: "100px" }}
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
                <button type="button" onClick={() => setShowModal(false)} className={styles.secondaryBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryBtn}>
                  Save Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
