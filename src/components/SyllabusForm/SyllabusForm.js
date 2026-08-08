"use client";

import { useState } from "react";

export default function SyllabusForm({ programName }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (honeypot.trim().length > 0) return; // Silent reject bot

    if (!name.trim()) {
      setErrorMsg("Please fill in your name.");
      return;
    }

    const cleanPhone = phone.replace(/[\s-]/g, "");
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Save lead submission to CMS database/inbox
    try {
      fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone,
          course: programName,
          source: `Syllabus Request (${programName})`,
        }),
      }).catch(() => {});
    } catch (err) {}

    const message = `Hi Crystal Clear Academy, I would like to get the syllabus details for the ${programName} program.\n\n- Name: ${name.trim()}\n- Phone: ${cleanPhone}`;
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/919841644813?text=${encodedText}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Honeypot */}
      <input
        type="text"
        name="syllabus_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {errorMsg && (
        <div style={{ backgroundColor: "#FEE2E2", border: "1px solid #FCA5A5", color: "#991B1B", padding: "6px 10px", borderRadius: "4px", fontSize: "12px" }}>
          {errorMsg}
        </div>
      )}

      <div className="input-group">
        <label className="input-label" htmlFor={`syllabus-name-${programName.replace(/\s+/g, '-')}`} style={{ fontSize: "11px" }}>Student Name</label>
        <input
          id={`syllabus-name-${programName.replace(/\s+/g, '-')}`}
          type="text"
          className="form-input"
          style={{ padding: "10px 12px", fontSize: "14px" }}
          placeholder="e.g. Sanjay Kumar"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor={`syllabus-phone-${programName.replace(/\s+/g, '-')}`} style={{ fontSize: "11px" }}>WhatsApp Mobile Number</label>
        <input
          id={`syllabus-phone-${programName.replace(/\s+/g, '-')}`}
          type="tel"
          className="form-input"
          style={{ padding: "10px 12px", fontSize: "14px" }}
          placeholder="e.g. 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={10}
          required
        />
      </div>

      <button type="submit" className="btn btn-gold btn-block" style={{ marginTop: "4px", padding: "12px", fontSize: "14px" }}>
        Request Syllabus on WhatsApp →
      </button>

      <div style={{ textAlign: "center", fontSize: "11px", color: "var(--color-on-surface-variant)" }}>
        Or call center directly: <a href="tel:+919841644813" style={{ color: "var(--color-primary-navy)", fontWeight: "700" }}>+91 98416 44813</a>
      </div>
    </form>
  );
}
