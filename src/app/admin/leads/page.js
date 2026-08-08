"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

export default function LeadsInboxPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadLeads() {
    try {
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (err) {
      console.error("Failed to load leads", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLeads();
  }, []);

  async function handleDelete(id, name) {
    if (!confirm(`Delete lead entry for "${name || 'Lead'}"?`)) return;

    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        setLeads(data.leads || []);
      }
    } catch (err) {
      alert("Failed to delete lead.");
    }
  }

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
          Student Lead Capture Inbox
        </h1>
        <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
          All inquiries submitted via website lead forms and syllabus download forms are captured here.
        </p>
      </div>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Student / Parent Name</th>
              <th>Phone Number</th>
              <th>Grade / Course Goal</th>
              <th>Source Form</th>
              <th style={{ textAlign: "right" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                  Loading lead submissions...
                </td>
              </tr>
            ) : leads.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No lead form submissions yet. Test lead submission on the website to see it appear here!
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id}>
                  <td style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                    {lead.timestamp ? new Date(lead.timestamp).toLocaleString() : "Recent"}
                  </td>
                  <td style={{ fontWeight: 600, color: "#f1f5f9" }}>{lead.name || "N/A"}</td>
                  <td style={{ color: "#60a5fa", fontWeight: 600 }}>{lead.phone || lead.mobile || "N/A"}</td>
                  <td>{lead.grade || lead.goal || lead.course || "NEET Coaching"}</td>
                  <td>
                    <span className={`${styles.badge} ${styles.badgeSuccess}`}>
                      {lead.source || "Website Form"}
                    </span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button
                      onClick={() => handleDelete(lead.id, lead.name)}
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
