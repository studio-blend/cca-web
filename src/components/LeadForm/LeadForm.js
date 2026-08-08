"use client";

import { useState } from "react";

export default function LeadForm({ defaultGoal = "Foundations" }) {
  const initialGoal = (defaultGoal === "foundations" || defaultGoal === "Class 9-10" || defaultGoal === "Foundations") ? "Foundations" :
                      (defaultGoal === "aspire" || defaultGoal === "NEET" || defaultGoal === "Aspire") ? "Aspire" :
                      (defaultGoal === "launchpad" || defaultGoal === "Skills" || defaultGoal === "Launchpad") ? "Launchpad" : "Foundations";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState(initialGoal);
  const [honeypot, setHoneypot] = useState(""); // Honeypot field for bot protection
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Bot check
    if (honeypot.trim().length > 0) {
      return; // Silent reject bot
    }

    if (!name.trim()) {
      setErrorMsg("Please enter the student's name.");
      return;
    }

    // Strict 10-digit Indian phone number validation
    const cleanPhone = phone.replace(/[\s-]/g, "");
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    const goalLabelMap = {
      "Foundations": "CCA Foundations (Class 9–12)",
      "Aspire": "CCA Aspire (NEET Coaching)",
      "Launchpad": "CCA Launchpad (Digital Skills)",
      "Pathways": "CCA Pathways (TET Mentoring)",
    };

    const selectedGoal = goalLabelMap[goal] || goal;
    const message = `Hi Crystal Clear Academy, I'm interested in enrolling. My details are:\n\n- Name: ${name.trim()}\n- Phone: ${cleanPhone}\n- Goal/Track: ${selectedGoal}\n\nPlease guide me on the next steps.`;
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919841644813?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form className="lead-form-card" onSubmit={handleSubmit}>
      <h3 className="font-title-lg" style={{ marginBottom: "16px", color: "var(--color-primary-navy)" }}>
        Request a Clarity Session
      </h3>

      {/* Hidden honeypot field for spam bots */}
      <input
        type="text"
        name="website_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {errorMsg && (
        <div style={{ backgroundColor: "#FEE2E2", border: "1px solid #FCA5A5", color: "#991B1B", padding: "8px 12px", borderRadius: "6px", fontSize: "13px", marginBottom: "12px" }}>
          {errorMsg}
        </div>
      )}

      <div className="input-group" style={{ marginBottom: "16px" }}>
        <label className="input-label" htmlFor="student-name">Student Name</label>
        <input
          id="student-name"
          type="text"
          className="form-input"
          placeholder="e.g. Sanjay Kumar"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-grid-2">
        <div className="input-group">
          <label className="input-label" htmlFor="student-phone">Mobile Number (Parent / Student)</label>
          <input
            id="student-phone"
            type="tel"
            className="form-input"
            placeholder="e.g. 9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="student-goal">Program Track</label>
          <select
            id="student-goal"
            className="form-input"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="Foundations">Foundations (Class 9–12)</option>
            <option value="Aspire">Aspire (NEET)</option>
            <option value="Launchpad">Launchpad</option>
            <option value="Pathways">Pathways (TET)</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-gold btn-block" style={{ marginTop: "12px" }}>
        Enquire on WhatsApp →
      </button>

      {/* Desktop Fallback Call Option */}
      <div style={{ textAlign: "center", marginTop: "12px", fontSize: "12px", color: "var(--color-on-surface-variant)" }}>
        Prefer a phone call? <a href="tel:+919841644813" style={{ color: "var(--color-primary-navy)", fontWeight: "700", textDecoration: "underline" }}>Call +91 98416 44813</a>
      </div>
    </form>
  );
}
