"use client";

import { useState } from "react";

export default function LeadForm({ defaultGoal = "foundations" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState(defaultGoal);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please fill in all details.");
      return;
    }

    const goalLabelMap = {
      foundations: "CCA Foundations (Class 9-12)",
      aspire: "CCA Aspire (NEET Coaching)",
      launchpad: "CCA Launchpad (Digital Skills)",
      pathways: "CCA Pathways (TET Mentoring)",
    };

    const selectedGoal = goalLabelMap[goal] || goal;
    const message = `Hi Crystal Clear Academy, I'm interested in enrolling. My details are:\n\n- Name: ${name.trim()}\n- Phone: ${phone.trim()}\n- Goal/Track: ${selectedGoal}\n\nPlease guide me on the next steps.`;
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919841644813?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form className="lead-form-card" onSubmit={handleSubmit}>
      <h3 className="font-title-lg" style={{ marginBottom: "16px", color: "var(--color-primary-navy)" }}>
        Request a Clarity Session
      </h3>
      <div className="input-group" style={{ marginBottom: "16px" }}>
        <label className="input-label" htmlFor="student-name">Student Name</label>
        <input
          id="student-name"
          type="text"
          className="form-input"
          placeholder="e.g. Adhithya Kumar"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          suppressHydrationWarning={true}
        />
      </div>

      <div className="form-grid-2">
        <div className="input-group">
          <label className="input-label" htmlFor="student-phone">Contact Number</label>
          <input
            id="student-phone"
            type="tel"
            className="form-input"
            placeholder="e.g. 9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            suppressHydrationWarning={true}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="student-goal">Program Track</label>
          <select
            id="student-goal"
            className="form-input"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            suppressHydrationWarning={true}
          >
            <option value="foundations">Foundations (Class 9-12)</option>
            <option value="aspire">Aspire (NEET Exam)</option>
            <option value="launchpad">Launchpad (Digital Skills)</option>
            <option value="pathways">Pathways (TET Mentors)</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-gold btn-block" style={{ marginTop: "8px" }} suppressHydrationWarning={true}>
        Get Concept Clarity Details
      </button>
    </form>
  );
}
