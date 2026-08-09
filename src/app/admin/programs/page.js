"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

const WINGS_OPTIONS = [
  { value: "aspire", label: "CCA Aspire (NEET)" },
  { value: "foundations", label: "CCA Foundations (Class 9-12)" },
  { value: "launchpad", label: "CCA Launchpad (Tech & Skills)" },
  { value: "pathways", label: "Pathways (TET Mentors)" },
];

const EMPTY_TIER = {
  id: "",
  tierName: "Standard Batch",
  format: "Group · 8 sessions/month",
  description: "Comprehensive coaching for this program track.",
  onlinePrice: "₹3,500",
  onlinePriceSuffix: "/month",
  offlinePrice: "₹4,500",
  offlinePriceSuffix: "/month",
  badge: "",
  featured: false,
  whatsappMessage: "",
};

export default function ProgramsManagerPage() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const [formData, setFormData] = useState({
    id: "",
    wing: "aspire",
    wingLabel: "CCA Aspire",
    title: "",
    targetAudience: "",
    board: "",
    duration: "12 Months",
    description: "",
    featuresText: "",
    featuredOnHomepage: true,
    whatsappMessage: "",
    pricingTiers: [],
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
      pricingTiers: prog.pricingTiers || [],
    });
    setShowModal(true);
  }

  function handleAddNew() {
    setFormData({
      id: "",
      wing: "aspire",
      wingLabel: "CCA Aspire",
      title: "",
      targetAudience: "Class 11 & 12 Students",
      board: "NEET Medical Entrance",
      duration: "12 Months",
      description: "",
      featuresText: "NCERT Concept Maps\nWeekly Diagnostic Exams\nMentor Doubt Desk",
      featuredOnHomepage: true,
      whatsappMessage: "",
      pricingTiers: [{ ...EMPTY_TIER, id: `tier-${Date.now()}` }],
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

  // --- Tier Matrix Helpers ---
  function addTier() {
    setFormData((prev) => ({
      ...prev,
      pricingTiers: [...(prev.pricingTiers || []), { ...EMPTY_TIER, id: `tier-${Date.now()}` }],
    }));
  }

  function updateTier(idx, field, value) {
    setFormData((prev) => {
      const updatedTiers = [...prev.pricingTiers];
      updatedTiers[idx] = { ...updatedTiers[idx], [field]: value };
      return { ...prev, pricingTiers: updatedTiers };
    });
  }

  function removeTier(idx) {
    setFormData((prev) => ({
      ...prev,
      pricingTiers: prev.pricingTiers.filter((_, i) => i !== idx),
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const wingObj = WINGS_OPTIONS.find((w) => w.value === formData.wing);

    const payload = {
      ...formData,
      wingLabel: wingObj ? wingObj.label : "CCA Program",
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

  const filteredPrograms =
    activeTab === "all" ? programs : programs.filter((p) => p.wing === activeTab);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
            Course Program &amp; Pricing Permutation Manager
          </h1>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
            Configure course attributes (Title, Target, Features) and customize individual pricing tiers with Online vs Offline rates.
          </p>
        </div>

        <button onClick={handleAddNew} className={styles.primaryBtn}>
          <span>+</span> Add New Course
        </button>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <button
          onClick={() => setActiveTab("all")}
          style={{
            padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 600,
            border: activeTab === "all" ? "2px solid #60a5fa" : "1px solid rgba(255,255,255,0.1)",
            background: activeTab === "all" ? "rgba(96, 165, 250, 0.15)" : "rgba(30, 41, 59, 0.5)",
            color: activeTab === "all" ? "#93c5fd" : "#94a3b8", cursor: "pointer",
          }}
        >
          All Wings ({programs.length})
        </button>
        {WINGS_OPTIONS.map((w) => (
          <button
            key={w.value}
            onClick={() => setActiveTab(w.value)}
            style={{
              padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 600,
              border: activeTab === w.value ? "2px solid #60a5fa" : "1px solid rgba(255,255,255,0.1)",
              background: activeTab === w.value ? "rgba(96, 165, 250, 0.15)" : "rgba(30, 41, 59, 0.5)",
              color: activeTab === w.value ? "#93c5fd" : "#94a3b8", cursor: "pointer",
            }}
          >
            {w.label} ({programs.filter((p) => p.wing === w.value).length})
          </button>
        ))}
      </div>

      {/* Course Table */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Wing</th>
              <th>Course Title</th>
              <th>Target Audience</th>
              <th>Pricing Tiers Matrix</th>
              <th>Homepage</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                  Loading course catalog...
                </td>
              </tr>
            ) : filteredPrograms.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No courses found for this wing. Add one above!
                </td>
              </tr>
            ) : (
              filteredPrograms.map((prog) => (
                <tr key={prog.id}>
                  <td style={{ fontSize: "0.8rem", color: "#C6A75E", fontWeight: 700 }}>
                    {prog.wingLabel || prog.wing}
                  </td>
                  <td style={{ fontWeight: 600, color: "#f1f5f9" }}>{prog.title}</td>
                  <td>{prog.targetAudience}</td>
                  <td>
                    <span style={{ fontSize: "0.8rem", color: "#60a5fa", fontWeight: 600 }}>
                      {prog.pricingTiers?.length || 0} Tier(s) configured
                    </span>
                  </td>
                  <td>
                    <span style={{
                      fontSize: "0.75rem", padding: "2px 8px", borderRadius: "100px", fontWeight: 700,
                      background: prog.featuredOnHomepage !== false ? "rgba(34, 197, 94, 0.2)" : "rgba(148, 163, 184, 0.2)",
                      color: prog.featuredOnHomepage !== false ? "#4ade80" : "#94a3b8",
                    }}>
                      {prog.featuredOnHomepage !== false ? "Featured" : "Hidden"}
                    </span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                      <button
                        onClick={() => handleEdit(prog)}
                        className={styles.secondaryBtn}
                        style={{ padding: "0.3rem 0.65rem", fontSize: "0.8rem" }}
                      >
                        Edit Attributes &amp; Pricing
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

      {/* Edit / Create Course Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(5px)",
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
              maxWidth: "800px",
              padding: "2rem",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <h2 style={{ margin: "0 0 1.5rem 0", color: "#f8fafc" }}>
              {formData.id ? "Edit Course & Pricing Matrix" : "Add New Course Program"}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* SECTION 1: COURSE ATTRIBUTES */}
              <div style={{ background: "rgba(30, 41, 59, 0.4)", padding: "1.25rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 style={{ margin: "0 0 1rem 0", color: "#93c5fd", fontSize: "1.05rem" }}>
                  📚 Course General Attributes
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Academy Wing</label>
                    <select
                      className={styles.input}
                      value={formData.wing}
                      onChange={(e) => setFormData({ ...formData, wing: e.target.value })}
                    >
                      {WINGS_OPTIONS.map((w) => (
                        <option key={w.value} value={w.value}>{w.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Course Title</label>
                    <input
                      type="text"
                      required
                      className={styles.input}
                      placeholder="e.g. Class 11 & 12 Integrated NEET Coaching"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Target Audience</label>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="e.g. Class 11 & 12 Students"
                      value={formData.targetAudience}
                      onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Board / Examination Target</label>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="e.g. NEET Medical Entrance"
                      value={formData.board}
                      onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup} style={{ marginBottom: "1rem" }}>
                  <label className={styles.label}>Course Description</label>
                  <textarea
                    className={styles.textarea}
                    style={{ minHeight: "65px" }}
                    placeholder="Describe the curriculum focus and visual coaching methodology..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Key Feature Highlights (One per line)</label>
                  <textarea
                    className={styles.textarea}
                    style={{ minHeight: "75px" }}
                    placeholder="Line-by-Line NCERT Biology&#10;Physics 45-Sec MCQ Shortcut Rules&#10;30+ Full OMR Simulated Exams"
                    value={formData.featuresText}
                    onChange={(e) => setFormData({ ...formData, featuresText: e.target.value })}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
                  <input
                    type="checkbox"
                    id="featured-check"
                    checked={formData.featuredOnHomepage !== false}
                    onChange={(e) => setFormData({ ...formData, featuredOnHomepage: e.target.checked })}
                    style={{ width: "18px", height: "18px" }}
                  />
                  <label htmlFor="featured-check" style={{ color: "#f8fafc", fontSize: "0.9rem" }}>
                    Display on Homepage ("Our Academic Ecosystem" &amp; "Transparent Pricing")
                  </label>
                </div>
              </div>

              {/* SECTION 2: PRICING PERMUTATION MATRIX */}
              <div style={{ background: "rgba(30, 41, 59, 0.4)", padding: "1.25rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <div>
                    <h3 style={{ margin: 0, color: "#C6A75E", fontSize: "1.05rem" }}>
                      💰 Course Pricing Permutation Matrix (Tiers × Online/Offline Rates)
                    </h3>
                    <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: "0.25rem 0 0" }}>
                      Define specific rates for Online vs. Offline modes across different delivery tiers.
                    </p>
                  </div>
                  <button type="button" onClick={addTier} className={styles.secondaryBtn} style={{ fontSize: "0.85rem" }}>
                    + Add Pricing Tier
                  </button>
                </div>

                {(formData.pricingTiers || []).map((tier, idx) => (
                  <div
                    key={tier.id || idx}
                    style={{
                      background: tier.featured ? "rgba(198, 167, 94, 0.1)" : "rgba(15, 23, 42, 0.8)",
                      border: tier.featured ? "1px solid rgba(198, 167, 94, 0.3)" : "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "10px",
                      padding: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#60a5fa" }}>
                        Pricing Tier #{idx + 1} {tier.featured && <span style={{ color: "#C6A75E" }}>⭐ Featured</span>}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeTier(idx)}
                        style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600 }}
                      >
                        Remove Tier
                      </button>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Tier Name</label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="e.g. Weekend Batch or Personal Track"
                          value={tier.tierName}
                          onChange={(e) => updateTier(idx, "tierName", e.target.value)}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Session Format / Frequency</label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="e.g. 1-on-1 · 12 sessions/month"
                          value={tier.format}
                          onChange={(e) => updateTier(idx, "format", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* PERMUTATION MATRIX: ONLINE VS OFFLINE RATES */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem", background: "rgba(15, 23, 42, 0.5)", padding: "0.75rem", borderRadius: "8px" }}>
                      {/* Online Rates */}
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#4ade80", fontWeight: 700, display: "block", marginBottom: "0.25rem" }}>🌐 ONLINE MODE PRICE</span>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="e.g. ₹7,500"
                            value={tier.onlinePrice}
                            onChange={(e) => updateTier(idx, "onlinePrice", e.target.value)}
                          />
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="e.g. /month"
                            value={tier.onlinePriceSuffix}
                            onChange={(e) => updateTier(idx, "onlinePriceSuffix", e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Offline Rates */}
                      <div>
                        <span style={{ fontSize: "0.75rem", color: "#f87171", fontWeight: 700, display: "block", marginBottom: "0.25rem" }}>🏢 OFFLINE MODE PRICE</span>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="e.g. ₹9,500"
                            value={tier.offlinePrice}
                            onChange={(e) => updateTier(idx, "offlinePrice", e.target.value)}
                          />
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="e.g. /month"
                            value={tier.offlinePriceSuffix}
                            onChange={(e) => updateTier(idx, "offlinePriceSuffix", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={styles.inputGroup} style={{ marginBottom: "0.75rem" }}>
                      <label className={styles.label}>Tier Description</label>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="e.g. Premium 1-on-1 personalized tutoring program for high-focus NEET mentoring."
                        value={tier.description}
                        onChange={(e) => updateTier(idx, "description", e.target.value)}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                      <div className={styles.inputGroup}>
                        <label className={styles.label}>Promotional Badge Text (Optional)</label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="e.g. Only 8 seats — limited availability"
                          value={tier.badge}
                          onChange={(e) => updateTier(idx, "badge", e.target.value)}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.label}>WhatsApp Enquiry Prompt</label>
                        <input
                          type="text"
                          className={styles.input}
                          placeholder="e.g. Hi CCA, I want to secure a spot..."
                          value={tier.whatsappMessage}
                          onChange={(e) => updateTier(idx, "whatsappMessage", e.target.value)}
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <input
                        type="checkbox"
                        id={`feat-${idx}`}
                        checked={tier.featured || false}
                        onChange={(e) => updateTier(idx, "featured", e.target.checked)}
                        style={{ width: "16px", height: "16px" }}
                      />
                      <label htmlFor={`feat-${idx}`} style={{ color: "#94a3b8", fontSize: "0.82rem" }}>
                        Mark as Featured Tier (Highlighted gold card)
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "1rem" }}>
                <button type="button" onClick={() => setShowModal(false)} className={styles.secondaryBtn}>
                  Cancel
                </button>
                <button type="submit" className={styles.primaryBtn}>
                  Save Course Program &amp; Matrix
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
