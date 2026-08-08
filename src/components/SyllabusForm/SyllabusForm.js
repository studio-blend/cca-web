"use client";

import { useState } from "react";

export default function SyllabusForm({ programName }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please fill in all details.");
      return;
    }
    const message = `Hi Crystal Clear Academy, I would like to get the syllabus details for the ${programName} program.\n\n- Name: ${name.trim()}\n- Phone: ${phone.trim()}`;
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/919841644813?text=${encodedText}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
        <label className="input-label" htmlFor={`syllabus-phone-${programName.replace(/\s+/g, '-')}`} style={{ fontSize: "11px" }}>WhatsApp Number</label>
        <input
          id={`syllabus-phone-${programName.replace(/\s+/g, '-')}`}
          type="tel"
          className="form-input"
          style={{ padding: "10px 12px", fontSize: "14px" }}
          placeholder="e.g. 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-gold btn-block" style={{ marginTop: "8px", padding: "12px", fontSize: "14px" }}>
        Request Syllabus on WhatsApp
      </button>
    </form>
  );
}
