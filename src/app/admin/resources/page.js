"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

export default function ResourcesManagerPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "NEET Prep",
    grade: "Class 11",
    subject: "Biology",
    fileType: "PDF",
    fileSize: "3.5 MB",
    downloadUrl: "#",
    description: "",
  });

  async function loadResources() {
    try {
      const res = await fetch("/api/admin/resources");
      const data = await res.json();
      setResources(data.resources || []);
    } catch (err) {
      console.error("Failed to load resources", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadResources();
  }, []);

  function handleEdit(resource) {
    setFormData(resource);
    setShowModal(true);
  }

  function handleAddNew() {
    setFormData({
      id: "",
      title: "",
      category: "NEET Prep",
      grade: "Class 11",
      subject: "Biology",
      fileType: "PDF",
      fileSize: "3.5 MB",
      downloadUrl: "#",
      description: "",
    });
    setShowModal(true);
  }

  async function handleDelete(id, title) {
    if (!confirm(`Delete resource "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/resources?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setResources(data.resources || []);
      }
    } catch (err) {
      alert("Failed to delete resource.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setResources(data.resources || []);
        setShowModal(false);
      }
    } catch (err) {
      alert("Failed to save resource.");
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
            Study Resources Manager
          </h1>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
            Add, update, or remove downloadable PDF materials, formula sheets, and mind maps.
          </p>
        </div>

        <button onClick={handleAddNew} className={styles.primaryBtn}>
          <span>+</span> Add Study Resource
        </button>
      </div>

      {/* Table */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Grade & Subject</th>
              <th>File Size</th>
              <th>Downloads</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                  Loading resources...
                </td>
              </tr>
            ) : resources.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No study resources found. Add your first resource above!
                </td>
              </tr>
            ) : (
              resources.map((res) => (
                <tr key={res.id}>
                  <td style={{ fontWeight: 600, color: "#f1f5f9" }}>{res.title}</td>
                  <td>{res.category}</td>
                  <td>{res.grade} • {res.subject}</td>
                  <td>{res.fileSize} ({res.fileType})</td>
                  <td>{res.downloadsCount || 0}</td>
                  <td style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                      <button
                        onClick={() => handleEdit(res)}
                        className={styles.secondaryBtn}
                        style={{ padding: "0.3rem 0.65rem", fontSize: "0.8rem" }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(res.id, res.title)}
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

      {/* Modal Form */}
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
              {formData.id ? "Edit Resource" : "Add New Resource"}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Resource Title</label>
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
                  <label className={styles.label}>Category</label>
                  <select
                    className={styles.select}
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="NEET Prep">NEET Prep</option>
                    <option value="JEE Prep">JEE Prep</option>
                    <option value="Board Exam">Board Exam</option>
                    <option value="Formula Sheet">Formula Sheet</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Grade</label>
                  <select
                    className={styles.select}
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Droppers">Droppers</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Subject</label>
                  <select
                    className={styles.select}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Biology">Biology</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Mathematics">Mathematics</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>File Size</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={formData.fileSize}
                    onChange={(e) => setFormData({ ...formData, fileSize: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Download Link / File URL</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="https://..."
                  value={formData.downloadUrl}
                  onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Description</label>
                <textarea
                  className={styles.textarea}
                  style={{ minHeight: "80px" }}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
                <button type="button" onClick={() => setShowModal(false)} className={styles.secondaryBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryBtn}>
                  Save Resource
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
