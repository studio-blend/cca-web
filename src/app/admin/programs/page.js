"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

export default function ProgramsManagerPage() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    targetAudience: "",
    duration: "12 Months",
    fee: "",
    feeRange: "",
    badge: "",
    description: "",
    featuresText: "",
  });

  async function loadPrograms() {
    try {
      const res = await fetch("/api/admin/programs");
      const data = await res.json();
      setPrograms(data.programs || []);
    } catch (err) {
      console.error("Failed to load programs", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPrograms();
  }, []);

  function handleEdit(prog) {
    setFormData({
      ...prog,
      featuresText: Array.isArray(prog.features) ? prog.features.join("\n") : "",
    });
    setShowModal(true);
  }

  function handleAddNew() {
    setFormData({
      id: "",
      title: "",
      targetAudience: "",
      duration: "12 Months",
      fee: "₹45,000 / year",
      feeRange: "₹3,500 - ₹4,500 / month",
      badge: "Popular",
      description: "",
      featuresText: "",
    });
    setShowModal(true);
  }

  async function handleDelete(id, title) {
    if (!confirm(`Delete program "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/programs?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        setPrograms(data.programs || []);
      }
    } catch (err) {
      alert("Failed to delete program.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      ...formData,
      features: formData.featuresText
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean),
    };

    try {
      const res = await fetch("/api/admin/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setPrograms(data.programs || []);
        setShowModal(false);
      }
    } catch (err) {
      alert("Failed to save program.");
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
            Programs & Pricing Manager
          </h1>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
            Manage course packages, fee structures, installment ranges, discount badges, and features.
          </p>
        </div>

        <button onClick={handleAddNew} className={styles.primaryBtn}>
          <span>+</span> Add Program Package
        </button>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Program Title</th>
              <th>Target Class</th>
              <th>Fee Breakdown</th>
              <th>Badge</th>
              <th>Duration</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                  Loading course packages...
                </td>
              </tr>
            ) : programs.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No program packages found. Add one above!
                </td>
              </tr>
            ) : (
              programs.map((prog) => (
                <tr key={prog.id}>
                  <td style={{ fontWeight: 600, color: "#f1f5f9" }}>{prog.title}</td>
                  <td>{prog.targetAudience}</td>
                  <td style={{ fontWeight: 600, color: "#60a5fa" }}>{prog.fee}</td>
                  <td>
                    {prog.badge && <span className={`${styles.badge} ${styles.badgeSuccess}`}>{prog.badge}</span>}
                  </td>
                  <td>{prog.duration}</td>
                  <td style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                      <button
                        onClick={() => handleEdit(prog)}
                        className={styles.secondaryBtn}
                        style={{ padding: "0.3rem 0.65rem", fontSize: "0.8rem" }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(prog.id, prog.title)}
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
              {formData.id ? "Edit Course Program" : "Add New Program"}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Program Title</label>
                <input
                  type="text"
                  required
                  className={styles.input}
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Target Students</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Class 11 Students"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Duration</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Annual / Total Fee</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. ₹45,000 / year"
                    value={formData.fee}
                    onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Monthly / Installment Range</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. ₹3,500 - ₹4,500 / month"
                    value={formData.feeRange}
                    onChange={(e) => setFormData({ ...formData, feeRange: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Promotional Badge Tag</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="e.g. Most Popular or 15% Early Bird Discount"
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Program Overview Description</label>
                <textarea
                  className={styles.textarea}
                  style={{ minHeight: "70px" }}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Features List (One feature per line)</label>
                <textarea
                  className={styles.textarea}
                  style={{ minHeight: "100px" }}
                  placeholder="Daily 2-hour interactive lectures&#10;Weekly OMR mock tests&#10;1-on-1 doubt desks"
                  value={formData.featuresText}
                  onChange={(e) => setFormData({ ...formData, featuresText: e.target.value })}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
                <button type="button" onClick={() => setShowModal(false)} className={styles.secondaryBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryBtn}>
                  Save Program Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
