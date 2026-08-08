"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

export default function EventsManagerPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    date: "",
    time: "",
    type: "Offline Seminar & Hybrid Stream",
    venue: "CCA Thiruninravur Campus",
    speaker: "Prof. Revathy (Founder & Master Educator)",
    description: "",
    registrationUrl: "#lead-form",
  });

  async function loadEvents() {
    try {
      const res = await fetch("/api/admin/events");
      const data = await res.json();
      setEvents(data.events || []);
    } catch (err) {
      console.error("Failed to load events", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEvents();
  }, []);

  function handleEdit(e) {
    setFormData(e);
    setShowModal(true);
  }

  function handleAddNew() {
    setFormData({
      id: "",
      title: "",
      date: "Sunday, August 16, 2026",
      time: "10:00 AM - 1:00 PM",
      type: "Offline Seminar & Hybrid Stream",
      venue: "CCA Thiruninravur Campus",
      speaker: "Prof. Revathy (Founder & Master Educator)",
      description: "",
      registrationUrl: "#lead-form",
    });
    setShowModal(true);
  }

  async function handleDelete(id, title) {
    if (!confirm(`Delete event "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/events?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        setEvents(data.events || []);
      }
    } catch (err) {
      alert("Failed to delete event.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setEvents(data.events || []);
        setShowModal(false);
      }
    } catch (err) {
      alert("Failed to save event.");
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
            Events & Seminars Manager
          </h1>
          <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
            Schedule NEET masterclasses, board prep webinars, and new batch orientation dates.
          </p>
        </div>

        <button onClick={handleAddNew} className={styles.primaryBtn}>
          <span>+</span> Schedule Event
        </button>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Date & Time</th>
              <th>Format</th>
              <th>Venue / Platform</th>
              <th>Speaker</th>
              <th style={{ textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                  Loading events...
                </td>
              </tr>
            ) : events.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No scheduled events found. Click Schedule Event above!
                </td>
              </tr>
            ) : (
              events.map((evt) => (
                <tr key={evt.id}>
                  <td style={{ fontWeight: 600, color: "#f1f5f9" }}>{evt.title}</td>
                  <td style={{ color: "#60a5fa" }}>{evt.date}<br/><span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>{evt.time}</span></td>
                  <td>{evt.type}</td>
                  <td>{evt.venue}</td>
                  <td>{evt.speaker}</td>
                  <td style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                      <button
                        onClick={() => handleEdit(evt)}
                        className={styles.secondaryBtn}
                        style={{ padding: "0.3rem 0.65rem", fontSize: "0.8rem" }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(evt.id, evt.title)}
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
              {formData.id ? "Edit Event" : "Schedule New Event"}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Event Title</label>
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
                  <label className={styles.label}>Date String</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Sunday, August 16, 2026"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Time Slot</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. 10:00 AM - 1:00 PM"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Format / Type</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Venue / Online Link</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Speaker / Host</label>
                <input
                  type="text"
                  className={styles.input}
                  value={formData.speaker}
                  onChange={(e) => setFormData({ ...formData, speaker: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Event Description</label>
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
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
