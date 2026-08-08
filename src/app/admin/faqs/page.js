"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

export default function FaqsAndNoticePage() {
  const [faqs, setFaqs] = useState([]);
  const [announcement, setAnnouncement] = useState({
    active: true,
    text: "",
    ctaText: "Reserve Seat",
    ctaUrl: "/#lead-form",
  });
  const [loading, setLoading] = useState(true);
  const [savingBanner, setSavingBanner] = useState(false);
  const [bannerMsg, setBannerMsg] = useState("");

  const [showFaqModal, setShowFaqModal] = useState(false);
  const [faqForm, setFaqForm] = useState({
    id: "",
    question: "",
    answer: "",
    category: "General",
  });

  async function loadData() {
    try {
      const [faqsRes, annRes] = await Promise.all([
        fetch("/api/admin/faqs"),
        fetch("/api/admin/announcements"),
      ]);

      const faqsData = await faqsRes.json();
      const annData = await annRes.json();

      setFaqs(faqsData.faqs || []);
      if (annData.announcement) {
        setAnnouncement(annData.announcement);
      }
    } catch (err) {
      console.error("Failed to load FAQ/Announcement data", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleSaveAnnouncement(e) {
    e.preventDefault();
    setSavingBanner(true);
    setBannerMsg("");

    try {
      const res = await fetch("/api/admin/announcements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(announcement),
      });

      if (res.ok) {
        setBannerMsg("Site announcement banner updated!");
      }
    } catch (err) {
      setBannerMsg("Failed to update banner.");
    } finally {
      setSavingBanner(false);
    }
  }

  function handleEditFaq(faq) {
    setFaqForm(faq);
    setShowFaqModal(true);
  }

  function handleAddNewFaq() {
    setFaqForm({
      id: "",
      question: "",
      answer: "",
      category: "General",
    });
    setShowFaqModal(true);
  }

  async function handleDeleteFaq(id, question) {
    if (!confirm(`Delete FAQ "${question}"?`)) return;

    try {
      const res = await fetch(`/api/admin/faqs?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        setFaqs(data.faqs || []);
      }
    } catch (err) {
      alert("Failed to delete FAQ.");
    }
  }

  async function handleSaveFaq(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/faqs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(faqForm),
      });

      const data = await res.json();
      if (res.ok) {
        setFaqs(data.faqs || []);
        setShowFaqModal(false);
      }
    } catch (err) {
      alert("Failed to save FAQ.");
    }
  }

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
          Site Announcement & FAQs Manager
        </h1>
        <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
          Control the top header notice bar and manage website FAQ accordions.
        </p>
      </div>

      {/* Global Notice Bar Editor */}
      <div
        style={{
          background: "rgba(30, 41, 59, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.2rem", color: "#f1f5f9" }}>
          📢 Global Top Header Announcement Banner
        </h2>

        {bannerMsg && (
          <div
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              background: "rgba(34, 197, 94, 0.15)",
              color: "#4ade80",
              marginBottom: "1rem",
              fontSize: "0.85rem",
            }}
          >
            {bannerMsg}
          </div>
        )}

        <form onSubmit={handleSaveAnnouncement} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 180px", gap: "1rem" }}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Banner Text</label>
              <input
                type="text"
                className={styles.input}
                value={announcement.text}
                onChange={(e) => setAnnouncement({ ...announcement, text: e.target.value })}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Status</label>
              <select
                className={styles.select}
                value={announcement.active ? "true" : "false"}
                onChange={(e) => setAnnouncement({ ...announcement, active: e.target.value === "true" })}
              >
                <option value="true">Active (Visible)</option>
                <option value="false">Hidden</option>
              </select>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>CTA Button Label</label>
              <input
                type="text"
                className={styles.input}
                value={announcement.ctaText}
                onChange={(e) => setAnnouncement({ ...announcement, ctaText: e.target.value })}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>CTA Link URL</label>
              <input
                type="text"
                className={styles.input}
                value={announcement.ctaUrl}
                onChange={(e) => setAnnouncement({ ...announcement, ctaUrl: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" className={styles.primaryBtn} disabled={savingBanner}>
              {savingBanner ? "Updating..." : "Save Announcement Banner"}
            </button>
          </div>
        </form>
      </div>

      {/* FAQ Accordions Section */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0, color: "#f8fafc" }}>
          Frequently Asked Questions (FAQs)
        </h2>

        <button onClick={handleAddNewFaq} className={styles.primaryBtn}>
          <span>+</span> Add FAQ Question
        </button>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Question</th>
              <th>Category</th>
              <th>Answer Preview</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                  Loading FAQs...
                </td>
              </tr>
            ) : faqs.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No FAQs found. Click Add FAQ Question above!
                </td>
              </tr>
            ) : (
              faqs.map((faq) => (
                <tr key={faq.id}>
                  <td style={{ fontWeight: 600, color: "#f1f5f9" }}>{faq.question}</td>
                  <td style={{ color: "#60a5fa" }}>{faq.category}</td>
                  <td style={{ maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {faq.answer}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                      <button
                        onClick={() => handleEditFaq(faq)}
                        className={styles.secondaryBtn}
                        style={{ padding: "0.3rem 0.65rem", fontSize: "0.8rem" }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteFaq(faq.id, faq.question)}
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

      {showFaqModal && (
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
              {faqForm.id ? "Edit FAQ" : "Add New FAQ"}
            </h2>

            <form onSubmit={handleSaveFaq} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Question Title</label>
                <input
                  type="text"
                  required
                  className={styles.input}
                  value={faqForm.question}
                  onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Category</label>
                <select
                  className={styles.select}
                  value={faqForm.category}
                  onChange={(e) => setFaqForm({ ...faqForm, category: e.target.value })}
                >
                  <option value="General">General</option>
                  <option value="Admissions">Admissions</option>
                  <option value="Academics">Academics</option>
                  <option value="Fees & Scholarships">Fees & Scholarships</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Answer Description</label>
                <textarea
                  className={styles.textarea}
                  style={{ minHeight: "120px" }}
                  value={faqForm.answer}
                  onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
                <button type="button" onClick={() => setShowFaqModal(false)} className={styles.secondaryBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryBtn}>
                  Save FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
