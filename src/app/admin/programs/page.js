"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

const EMPTY_COURSE = { id: "", label: "", title: "", description: "", tags: [], whatsappMessage: "" };
const EMPTY_TIER = {
  id: "", tierName: "", fee: "", feeSuffix: "/month", description: "",
  mode: "both", format: "", featured: false, badge: "", whatsappMessage: "",
};

export default function ProgramsManagerPage() {
  const [wings, setWings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeWingId, setActiveWingId] = useState(null);
  const [editingWing, setEditingWing] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function loadWings() {
    try {
      const res = await fetch("/api/admin/wings");
      const data = await res.json();
      setWings(data.wings || []);
      if (!activeWingId && data.wings?.length) {
        setActiveWingId(data.wings[0].id);
      }
    } catch (err) {
      console.error("Failed to load wings", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadWings();
  }, []);

  function startEditing(wing) {
    setEditingWing(JSON.parse(JSON.stringify(wing)));
    setMessage("");
  }

  function cancelEditing() {
    setEditingWing(null);
    setMessage("");
  }

  // --- Course helpers ---
  function addCourse() {
    setEditingWing((prev) => ({
      ...prev,
      courses: [...(prev.courses || []), { ...EMPTY_COURSE, id: `c-${Date.now()}` }],
    }));
  }
  function updateCourse(idx, field, value) {
    setEditingWing((prev) => {
      const courses = [...prev.courses];
      courses[idx] = { ...courses[idx], [field]: value };
      return { ...prev, courses };
    });
  }
  function removeCourse(idx) {
    setEditingWing((prev) => ({
      ...prev,
      courses: prev.courses.filter((_, i) => i !== idx),
    }));
  }

  // --- Pricing tier helpers ---
  function addTier() {
    setEditingWing((prev) => ({
      ...prev,
      pricingTiers: [...(prev.pricingTiers || []), { ...EMPTY_TIER, id: `t-${Date.now()}` }],
    }));
  }
  function updateTier(idx, field, value) {
    setEditingWing((prev) => {
      const pricingTiers = [...prev.pricingTiers];
      pricingTiers[idx] = { ...pricingTiers[idx], [field]: value };
      return { ...prev, pricingTiers };
    });
  }
  function removeTier(idx) {
    setEditingWing((prev) => ({
      ...prev,
      pricingTiers: prev.pricingTiers.filter((_, i) => i !== idx),
    }));
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/wings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingWing),
      });
      const data = await res.json();
      if (res.ok) {
        setWings(data.wings || []);
        setEditingWing(null);
        setMessage("Wing saved successfully!");
      } else {
        setMessage("Failed to save wing.");
      }
    } catch {
      setMessage("Error saving wing.");
    } finally {
      setSaving(false);
    }
  }

  const activeWing = wings.find((w) => w.id === activeWingId);

  if (loading) return <div style={{ color: "#94a3b8", padding: "2rem" }}>Loading wings...</div>;

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
          Programs & Pricing Manager
        </h1>
        <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
          Manage academic wings — each wing contains its course catalog (Ecosystem) and pricing tiers (Fees section). Changes update the homepage and /programs page instantly.
        </p>
      </div>

      {message && (
        <div style={{
          padding: "0.75rem 1rem", borderRadius: "8px", marginBottom: "1.5rem",
          background: "rgba(34, 197, 94, 0.15)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#4ade80",
        }}>
          {message}
        </div>
      )}

      {/* Wing Tab Selector */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {wings.map((w) => (
          <button
            key={w.id}
            onClick={() => { setActiveWingId(w.id); setEditingWing(null); setMessage(""); }}
            style={{
              padding: "0.5rem 1.25rem", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 600,
              border: activeWingId === w.id ? "2px solid #60a5fa" : "1px solid rgba(255,255,255,0.1)",
              background: activeWingId === w.id ? "rgba(96, 165, 250, 0.15)" : "rgba(30, 41, 59, 0.5)",
              color: activeWingId === w.id ? "#93c5fd" : "#94a3b8",
              cursor: "pointer", transition: "all 0.2s",
            }}
          >
            {w.wingLabel}
          </button>
        ))}
      </div>

      {/* Active Wing View or Edit Mode */}
      {activeWing && !editingWing && (
        <div>
          {/* Wing Header */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            background: "rgba(30, 41, 59, 0.5)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px", padding: "1.25rem 1.5rem", marginBottom: "1.5rem",
          }}>
            <div>
              <h2 style={{ margin: 0, color: "#f8fafc", fontSize: "1.3rem" }}>{activeWing.wingLabel}</h2>
              <p style={{ margin: "0.25rem 0 0", color: "#94a3b8", fontSize: "0.85rem" }}>
                {activeWing.courses?.length || 0} courses · {activeWing.pricingTiers?.length || 0} pricing tiers · 
                Detail page: <span style={{ color: "#60a5fa" }}>{activeWing.detailPageUrl}</span>
              </p>
            </div>
            <button onClick={() => startEditing(activeWing)} className={styles.primaryBtn}>
              Edit This Wing
            </button>
          </div>

          {/* Courses Preview */}
          <h3 style={{ color: "#f8fafc", marginBottom: "0.75rem", fontSize: "1rem" }}>
            📚 Academic Courses <span style={{ color: "#64748b", fontWeight: 400 }}>(Shown in "Our Academic Ecosystem")</span>
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.75rem", marginBottom: "2rem" }}>
            {(activeWing.courses || []).map((c, i) => (
              <div key={c.id || i} style={{
                background: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px", padding: "1rem",
              }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.5px" }}>{c.label}</span>
                <h4 style={{ margin: "0.25rem 0 0.5rem", color: "#f8fafc", fontSize: "1rem" }}>{c.title}</h4>
                <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.4 }}>{c.description}</p>
                {c.tags?.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "0.5rem" }}>
                    {c.tags.map((t, ti) => (
                      <span key={ti} style={{ fontSize: "0.65rem", background: "rgba(96,165,250,0.15)", color: "#93c5fd", padding: "2px 6px", borderRadius: "4px" }}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pricing Tiers Preview */}
          <h3 style={{ color: "#f8fafc", marginBottom: "0.75rem", fontSize: "1rem" }}>
            💰 Pricing Tiers <span style={{ color: "#64748b", fontWeight: 400 }}>(Shown in "Transparent Pricing")</span>
          </h3>
          {activeWing.bannerText && (
            <div style={{
              background: activeWing.bannerStyle === "gold" ? "rgba(198,167,94,0.2)" : "rgba(96,165,250,0.1)",
              border: `1px solid ${activeWing.bannerStyle === "gold" ? "rgba(198,167,94,0.4)" : "rgba(96,165,250,0.2)"}`,
              borderRadius: "8px", padding: "0.75rem 1rem", marginBottom: "0.75rem",
              color: activeWing.bannerStyle === "gold" ? "#C6A75E" : "#93c5fd", fontSize: "0.85rem", fontWeight: 600,
            }}>
              {activeWing.bannerText}
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem" }}>
            {(activeWing.pricingTiers || []).map((t, i) => (
              <div key={t.id || i} style={{
                background: t.featured ? "rgba(198,167,94,0.1)" : "rgba(15, 23, 42, 0.6)",
                border: t.featured ? "1px solid rgba(198,167,94,0.3)" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px", padding: "1rem",
              }}>
                {t.badge && <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#C6A75E", display: "block", marginBottom: "0.25rem" }}>⭐ {t.badge}</span>}
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#60a5fa", textTransform: "uppercase" }}>{t.tierName}</span>
                <div style={{ color: "#f8fafc", fontSize: "1.5rem", fontWeight: 800, margin: "0.25rem 0" }}>
                  {t.fee}<span style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 400 }}>{t.feeSuffix}</span>
                </div>
                {t.format && <p style={{ margin: "0 0 0.25rem", color: "#64748b", fontSize: "0.8rem", fontStyle: "italic" }}>{t.format}</p>}
                <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.82rem" }}>{t.description}</p>
                <div style={{ marginTop: "0.5rem" }}>
                  <span style={{
                    fontSize: "0.65rem", padding: "2px 8px", borderRadius: "100px", fontWeight: 600,
                    background: t.mode === "online" ? "rgba(34,197,94,0.15)" : t.mode === "offline" ? "rgba(239,68,68,0.15)" : "rgba(96,165,250,0.15)",
                    color: t.mode === "online" ? "#4ade80" : t.mode === "offline" ? "#f87171" : "#93c5fd",
                  }}>
                    {t.mode === "both" ? "Online + Offline" : t.mode === "online" ? "Online Only" : "Offline Only"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === EDIT MODE === */}
      {editingWing && (
        <div style={{
          background: "rgba(15, 23, 42, 0.8)", border: "1px solid rgba(96,165,250,0.2)",
          borderRadius: "16px", padding: "2rem",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ margin: 0, color: "#f8fafc" }}>Editing: {editingWing.wingLabel}</h2>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button onClick={cancelEditing} className={styles.secondaryBtn}>Cancel</button>
              <button onClick={handleSave} className={styles.primaryBtn} disabled={saving}>
                {saving ? "Saving..." : "Save Wing"}
              </button>
            </div>
          </div>

          {/* Wing Meta */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Wing Label</label>
              <input type="text" className={styles.input} value={editingWing.wingLabel || ""}
                onChange={(e) => setEditingWing({ ...editingWing, wingLabel: e.target.value })} />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Detail Page URL</label>
              <input type="text" className={styles.input} value={editingWing.detailPageUrl || ""}
                onChange={(e) => setEditingWing({ ...editingWing, detailPageUrl: e.target.value })} />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Syllabus Form Label</label>
              <input type="text" className={styles.input} value={editingWing.syllabusFormLabel || ""}
                onChange={(e) => setEditingWing({ ...editingWing, syllabusFormLabel: e.target.value })} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Pricing Banner Text</label>
              <input type="text" className={styles.input} value={editingWing.bannerText || ""}
                onChange={(e) => setEditingWing({ ...editingWing, bannerText: e.target.value })} />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Banner Style</label>
              <select className={styles.input} value={editingWing.bannerStyle || "info"}
                onChange={(e) => setEditingWing({ ...editingWing, bannerStyle: e.target.value })}>
                <option value="info">Info (Blue)</option>
                <option value="gold">Gold (Promotional)</option>
              </select>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <label style={{ color: "#94a3b8", fontSize: "0.9rem", fontWeight: 600 }}>Featured on Homepage</label>
            <input type="checkbox" checked={editingWing.featuredOnHomepage || false}
              onChange={(e) => setEditingWing({ ...editingWing, featuredOnHomepage: e.target.checked })}
              style={{ width: "18px", height: "18px" }} />
          </div>

          {/* === COURSES SECTION === */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, color: "#f8fafc", fontSize: "1.1rem" }}>
                📚 Academic Courses ({editingWing.courses?.length || 0})
              </h3>
              <button onClick={addCourse} className={styles.secondaryBtn} style={{ fontSize: "0.85rem" }}>
                + Add Course
              </button>
            </div>

            {(editingWing.courses || []).map((course, idx) => (
              <div key={course.id || idx} style={{
                background: "rgba(30, 41, 59, 0.5)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "10px", padding: "1rem", marginBottom: "0.75rem",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>Course #{idx + 1}</span>
                  <button onClick={() => removeCourse(idx)} style={{
                    background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600,
                  }}>Remove</button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Badge Label</label>
                    <input type="text" className={styles.input} placeholder="e.g. Class 9 & 10"
                      value={course.label} onChange={(e) => updateCourse(idx, "label", e.target.value)} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Course Title</label>
                    <input type="text" className={styles.input} placeholder="e.g. Science + Maths Foundation"
                      value={course.title} onChange={(e) => updateCourse(idx, "title", e.target.value)} />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Description</label>
                  <textarea className={styles.textarea} style={{ minHeight: "50px" }}
                    value={course.description} onChange={(e) => updateCourse(idx, "description", e.target.value)} />
                </div>
                <div className={styles.inputGroup} style={{ marginTop: "0.5rem" }}>
                  <label className={styles.label}>WhatsApp Enquiry Message</label>
                  <input type="text" className={styles.input} value={course.whatsappMessage || ""}
                    onChange={(e) => updateCourse(idx, "whatsappMessage", e.target.value)} />
                </div>
              </div>
            ))}
          </div>

          {/* === PRICING TIERS SECTION === */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, color: "#f8fafc", fontSize: "1.1rem" }}>
                💰 Pricing Tiers ({editingWing.pricingTiers?.length || 0})
              </h3>
              <button onClick={addTier} className={styles.secondaryBtn} style={{ fontSize: "0.85rem" }}>
                + Add Pricing Tier
              </button>
            </div>

            {(editingWing.pricingTiers || []).map((tier, idx) => (
              <div key={tier.id || idx} style={{
                background: tier.featured ? "rgba(198,167,94,0.08)" : "rgba(30, 41, 59, 0.5)",
                border: tier.featured ? "1px solid rgba(198,167,94,0.2)" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "10px", padding: "1rem", marginBottom: "0.75rem",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>
                    Tier #{idx + 1} {tier.featured && <span style={{ color: "#C6A75E" }}>⭐ Featured</span>}
                  </span>
                  <button onClick={() => removeTier(idx)} style={{
                    background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600,
                  }}>Remove</button>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Tier Name</label>
                    <input type="text" className={styles.input} placeholder="e.g. Weekend Batch"
                      value={tier.tierName} onChange={(e) => updateTier(idx, "tierName", e.target.value)} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Fee Amount</label>
                    <input type="text" className={styles.input} placeholder="e.g. ₹3,500"
                      value={tier.fee} onChange={(e) => updateTier(idx, "fee", e.target.value)} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Fee Suffix</label>
                    <input type="text" className={styles.input} placeholder="e.g. /month or –₹4,000"
                      value={tier.feeSuffix} onChange={(e) => updateTier(idx, "feeSuffix", e.target.value)} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Session Format</label>
                    <input type="text" className={styles.input} placeholder="e.g. Group · 8 sessions/month"
                      value={tier.format} onChange={(e) => updateTier(idx, "format", e.target.value)} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Mode</label>
                    <select className={styles.input} value={tier.mode}
                      onChange={(e) => updateTier(idx, "mode", e.target.value)}>
                      <option value="both">Online + Offline</option>
                      <option value="online">Online Only</option>
                      <option value="offline">Offline Only</option>
                    </select>
                  </div>
                </div>
                <div className={styles.inputGroup} style={{ marginBottom: "0.75rem" }}>
                  <label className={styles.label}>Description</label>
                  <textarea className={styles.textarea} style={{ minHeight: "45px" }}
                    value={tier.description} onChange={(e) => updateTier(idx, "description", e.target.value)} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Featured Badge Text</label>
                    <input type="text" className={styles.input} placeholder="e.g. Only 8 seats — limited availability"
                      value={tier.badge} onChange={(e) => updateTier(idx, "badge", e.target.value)} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>WhatsApp Enquiry Message</label>
                    <input type="text" className={styles.input} value={tier.whatsappMessage || ""}
                      onChange={(e) => updateTier(idx, "whatsappMessage", e.target.value)} />
                  </div>
                </div>
                <div style={{ marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <input type="checkbox" checked={tier.featured}
                    onChange={(e) => updateTier(idx, "featured", e.target.checked)}
                    style={{ width: "16px", height: "16px" }} />
                  <label style={{ color: "#94a3b8", fontSize: "0.82rem" }}>Mark as Featured (highlighted card)</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
