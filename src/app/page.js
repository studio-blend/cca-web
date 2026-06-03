"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm/LeadForm";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import TabSwitcher from "@/components/TabSwitcher/TabSwitcher";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";

function SyllabusForm({ programName }) {
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

export default function Home() {
  // Ecosystem Tabs Content
  const ecosystemTabs = [
    {
      id: "foundations",
      label: "CCA Foundations",
      content: (
        <>
          {/* Left Column: Program Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              {/* Card 1 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px" }}>Class 9 &amp; 10</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Science + Maths Foundation</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Build strong conceptual roots in Science and Mathematics to transition from rote learning loops into intuitive problem solving.
                </p>
                <a
                  className="btn btn-secondary btn-block"
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Science%20%2B%20Maths%20Foundation%20for%20Class%209-10."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "8px 16px", fontSize: "13px", marginTop: "auto" }}
                >
                  Enquire on WhatsApp
                </a>
              </div>
              {/* Card 2 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px" }}>Class 11 &amp; 12</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Senior Secondary Science</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Rigorous concept coaching in Physics, Chemistry, Biology, and Mathematics to maximize school board performance.
                </p>
                <a
                  className="btn btn-secondary btn-block"
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20Senior%20Secondary%20Science%20for%20Class%2011-12."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "8px 16px", fontSize: "13px", marginTop: "auto" }}
                >
                  Enquire on WhatsApp
                </a>
              </div>
              {/* Card 3 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px" }}>Class 9–12</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Subject Tuition</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Custom conceptual coaching covering all key academic subjects with dedicated lead mentor doubt resolution.
                </p>
                <a
                  className="btn btn-secondary btn-block"
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20Subject%20Tuition%20for%20Class%209-12."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "8px 16px", fontSize: "13px", marginTop: "auto" }}
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", margin: "4px 0" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", color: "var(--color-primary-navy)", textTransform: "uppercase", marginRight: "8px" }}>Boards Covered:</span>
              {["CBSE", "State Board", "Matric", "ICSE/CISCE", "NIOS"].map((board, i) => (
                <span key={i} style={{ fontSize: "11px", fontWeight: "600", backgroundColor: "rgba(31,78,121,0.06)", color: "var(--color-academic-blue)", padding: "4px 10px", borderRadius: "100px" }}>{board}</span>
              ))}
            </div>

            <Link
              href="/foundations"
              className="btn btn-secondary font-label-md"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                borderColor: "var(--color-brand-gold)",
                color: "var(--color-primary-navy)",
                fontWeight: "600",
                padding: "10px 20px"
              }}
            >
              Explore Foundations Program Details &amp; Timelines →
            </Link>
          </div>

          {/* Right Column: Syllabus Form Widget */}
          <div className="syllabus-form-card" style={{ backgroundColor: "var(--color-surface-container-low)", padding: "24px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(31,78,121,0.08)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Get Syllabus Details</h4>
            <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", fontSize: "13px", lineHeight: "1.4" }}>
              Leave your details to receive the comprehensive program syllabus and timelines on WhatsApp.
            </p>
            <SyllabusForm programName="Foundations (Class 9-12)" />
          </div>
        </>
      )
    },
    {
      id: "aspire",
      label: "CCA Aspire",
      content: (
        <>
          {/* Left Column: Program Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              {/* Card 1 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px" }}>Class 9 &amp; 10</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Early NEET Foundation</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Early exposure to medical entrance patterns, mock OMR assessments, biology concept mapping, and physics shortcuts.
                </p>
                <a
                  className="btn btn-secondary btn-block"
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Early%20NEET%20Foundation%20for%20Class%209-10."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "8px 16px", fontSize: "13px", marginTop: "auto" }}
                >
                  Enquire on WhatsApp
                </a>
              </div>
              {/* Card 2 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px" }}>Class 11 &amp; 12</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Integrated NEET Coaching</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Dual-focus conceptual masterclasses covering school board syllabus while simultaneously mastering advanced NEET entrance requirements.
                </p>
                <a
                  className="btn btn-secondary btn-block"
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20Integrated%20NEET%20Coaching%20for%20Class%2011-12."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "8px 16px", fontSize: "13px", marginTop: "auto" }}
                >
                  Enquire on WhatsApp
                </a>
              </div>
              {/* Card 3 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px" }}>Droppers / Repeaters</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>NEET Repeaters Program</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Full-time high-focus coaching. Daily OMR mock exams with in-depth post-exam diagnostics and speed technique drills.
                </p>
                <a
                  className="btn btn-secondary btn-block"
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20NEET%20Repeaters%20Program."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "8px 16px", fontSize: "13px", marginTop: "auto" }}
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
            <Link
              href="/aspire"
              className="btn btn-secondary font-label-md"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                borderColor: "var(--color-brand-gold)",
                color: "var(--color-primary-navy)",
                fontWeight: "600",
                padding: "10px 20px"
              }}
            >
              Explore NEET Aspire Program Details &amp; Timelines →
            </Link>
          </div>

          {/* Right Column: Syllabus Form Widget */}
          <div className="syllabus-form-card" style={{ backgroundColor: "var(--color-surface-container-low)", padding: "24px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(31,78,121,0.08)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Get Syllabus Details</h4>
            <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", fontSize: "13px", lineHeight: "1.4" }}>
              Leave your details to receive the comprehensive program syllabus and timelines on WhatsApp.
            </p>
            <SyllabusForm programName="Aspire (NEET)" />
          </div>
        </>
      )
    },
    {
      id: "launchpad",
      label: "CCA Launchpad",
      content: (
        <>
          {/* Left Column: Program Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              {/* Card 1 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px", fontSize: "10px", padding: "2px 8px" }}>CCA Launchpad</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Design</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Figma prototyping, layout grids, typography guidelines, and creative problem-solving — learn professional design tools used by industry.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "12px", marginTop: "auto" }}>
                  {["Graphic Design", "UI/UX", "Design Thinking", "Creative Tools"].map((tag, i) => (
                    <span key={i} style={{ fontSize: "10px", backgroundColor: "rgba(198,167,94,0.1)", color: "var(--color-primary-navy)", padding: "2px 6px", borderRadius: "4px", fontWeight: "600" }}>{tag}</span>
                  ))}
                </div>
              </div>
              {/* Card 2 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px", fontSize: "10px", padding: "2px 8px" }}>CCA Launchpad</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Technology</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Build real projects with AI tools, automation workflows, web development basics, and no-code platforms used by modern professionals.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "12px", marginTop: "auto" }}>
                  {["AI & Emerging Tech", "No-Code", "Web Dev", "Digital Literacy"].map((tag, i) => (
                    <span key={i} style={{ fontSize: "10px", backgroundColor: "rgba(198,167,94,0.1)", color: "var(--color-primary-navy)", padding: "2px 6px", borderRadius: "4px", fontWeight: "600" }}>{tag}</span>
                  ))}
                </div>
              </div>
              {/* Card 3 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px", fontSize: "10px", padding: "2px 8px" }}>CCA Launchpad</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Career</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Communication, presentation decks, leadership exercises, and problem-solving frameworks — skills that open doors beyond academics.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "12px", marginTop: "auto" }}>
                  {["Communication", "Presentation", "Problem Solving", "Professional Dev"].map((tag, i) => (
                    <span key={i} style={{ fontSize: "10px", backgroundColor: "rgba(198,167,94,0.1)", color: "var(--color-primary-navy)", padding: "2px 6px", borderRadius: "4px", fontWeight: "600" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: "12px 16px", backgroundColor: "rgba(198,167,94,0.06)", borderRadius: "var(--radius-md)", borderLeft: "3px solid var(--color-brand-gold)", fontSize: "13px", color: "var(--color-primary-navy)", fontWeight: "600" }}>
              <strong>Formats:</strong> 4–6 week courses · 2–3 month tracks · Weekend workshops · Holiday bootcamps
            </div>

            <Link
              href="/launchpad"
              className="btn btn-gold font-label-md"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "600",
                padding: "10px 20px"
              }}
            >
              Explore All Courses →
            </Link>
          </div>

          {/* Right Column: Syllabus Form Widget */}
          <div className="syllabus-form-card" style={{ backgroundColor: "var(--color-surface-container-low)", padding: "24px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(31,78,121,0.08)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Get Syllabus Details</h4>
            <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", fontSize: "13px", lineHeight: "1.4" }}>
              Leave your details to receive the comprehensive program syllabus and timelines on WhatsApp.
            </p>
            <SyllabusForm programName="Launchpad (Skill Development)" />
          </div>
        </>
      )
    },
    {
      id: "pathways",
      label: "Pathways (TET Mentors)",
      content: (
        <>
          {/* Left Column: Program Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              {/* Card 1 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "16px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px", fontSize: "10px", padding: "2px 8px" }}>TET Paper I</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "16px" }}>Primary Teacher Prep</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "12px", flexGrow: 1, fontSize: "13px", lineHeight: "1.4" }}>
                  Focused preparation for TET Paper I. Master pedagogical frameworks and child development theories.
                </p>
                <a
                  className="btn btn-secondary btn-block"
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20TET%20Paper%20I%20mentoring."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "8px 12px", fontSize: "12px", marginTop: "auto" }}
                >
                  Enquire Now
                </a>
              </div>
              {/* Card 2 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "16px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px", fontSize: "10px", padding: "2px 8px" }}>TET Paper II</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "16px" }}>Upper Primary Prep</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "12px", flexGrow: 1, fontSize: "13px", lineHeight: "1.4" }}>
                  In-depth guidance for subject-matter content and pedagogical review customized for Paper II exams.
                </p>
                <a
                  className="btn btn-secondary btn-block"
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20TET%20Paper%20II%20mentoring."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "8px 12px", fontSize: "12px", marginTop: "auto" }}
                >
                  Enquire Now
                </a>
              </div>
              {/* Card 3 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "16px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px", fontSize: "10px", padding: "2px 8px" }}>Institutions</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "16px" }}>Pedagogy Consult</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "12px", flexGrow: 1, fontSize: "13px", lineHeight: "1.4" }}>
                  Consultations for schools and institutes to refine child psychology, curriculum flow, and coaching methods.
                </p>
                <a
                  className="btn btn-secondary btn-block"
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20pedagogical%20consultations."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "8px 12px", fontSize: "12px", marginTop: "auto" }}
                >
                  Enquire Now
                </a>
              </div>
            </div>
            <Link
              href="/pathways"
              className="btn btn-secondary font-label-md"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                borderColor: "var(--color-brand-gold)",
                color: "var(--color-primary-navy)",
                fontWeight: "600",
                padding: "10px 20px"
              }}
            >
              Explore Pathways Program Details &amp; Syllabus →
            </Link>
          </div>

          {/* Right Column: Syllabus Form Widget */}
          <div className="syllabus-form-card" style={{ backgroundColor: "var(--color-surface-container-low)", padding: "24px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(31,78,121,0.08)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Get Syllabus Details</h4>
            <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", fontSize: "13px", lineHeight: "1.4" }}>
              Leave your details to receive the comprehensive program syllabus and timelines on WhatsApp.
            </p>
            <SyllabusForm programName="Pathways (TET Mentors)" />
          </div>
        </>
      )
    }
  ];

  // Tuition Fee Tabs Content
  const tuitionFeeTabs = [
    {
      id: "foundations",
      label: "Foundations",
      content: (
        <div style={{ width: "100%" }}>
          <div style={{ backgroundColor: "rgba(198,167,94,0.08)", border: "1px solid rgba(198,167,94,0.25)", borderRadius: "var(--radius-lg)", padding: "16px 24px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
            <svg style={{ width: "20px", height: "20px", color: "var(--color-brand-gold)", flexShrink: 0, fill: "var(--color-brand-gold)" }} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <p style={{ margin: 0, fontSize: "14px", color: "var(--color-primary-navy)", fontWeight: "600" }}>Fees shown are starting ranges. Final pricing depends on class level, subject combination, and session frequency. WhatsApp us for a personalised quote in under 5 minutes.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            <div className="pricing-card" style={{ display: "flex", flexDirection: "column", padding: "24px", height: "100%" }}>
              <span className="price-label">Class 9 &amp; 10</span>
              <div className="price-val" style={{ color: "var(--color-brand-gold)", margin: "12px 0", fontSize: "28px", fontWeight: "800" }}>₹1,500<span style={{ fontSize: "13px", color: "var(--color-outline)", fontWeight: "normal" }}>–₹2,500/month</span></div>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", flexGrow: 1, fontSize: "14px" }}>Science &amp; Maths conceptual coaching. Board-aligned curriculum with weekly assessments.</p>
              <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20enquiring%20about%20Foundations%20fees%20for%20Class%209-10." target="_blank" rel="noopener noreferrer">Get Exact Quote</a>
            </div>
            <div className="pricing-card" style={{ display: "flex", flexDirection: "column", padding: "24px", height: "100%" }}>
              <span className="price-label">Class 11 &amp; 12</span>
              <div className="price-val" style={{ color: "var(--color-brand-gold)", margin: "12px 0", fontSize: "28px", fontWeight: "800" }}>₹2,000<span style={{ fontSize: "13px", color: "var(--color-outline)", fontWeight: "normal" }}>–₹3,500/month</span></div>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", flexGrow: 1, fontSize: "14px" }}>Physics, Chemistry, Biology &amp; Mathematics. Dual-board coaching with concept-clarity method.</p>
              <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20enquiring%20about%20Foundations%20fees%20for%20Class%2011-12." target="_blank" rel="noopener noreferrer">Get Exact Quote</a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "aspire",
      label: "Aspire (NEET)",
      content: (
        <div style={{ width: "100%" }}>
          <div style={{ backgroundColor: "var(--color-brand-gold)", color: "var(--color-primary-navy)", padding: "12px 24px", borderRadius: "var(--radius-lg)", marginBottom: "24px", textAlign: "center", fontWeight: "700", fontSize: "16px" }}>
            Founder&apos;s Batch — First 10 students get 10% off
          </div>
          <div className="pricing-pane active" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {/* Card 1 */}
            <div className="pricing-card" style={{ display: "flex", flexDirection: "column", padding: "24px", height: "100%" }}>
              <span className="price-label">Weekend Batch</span>
              <div className="price-val" style={{ color: "var(--color-brand-gold)", margin: "12px 0", fontSize: "32px", fontWeight: "800" }}>₹3,500<span style={{ fontSize: "14px", color: "var(--color-outline)", fontWeight: "normal" }}>/month</span></div>
              <p className="font-body-md" style={{ color: "var(--color-outline)", fontSize: "14px", marginBottom: "16px", fontStyle: "italic" }}>
                Group · 8 sessions/month
              </p>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", flexGrow: 1, fontSize: "15px" }}>
                Comprehensive weekend coaching for NEET preparation with expert group classes.
              </p>
              <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20NEET%20Weekend%20Batch." target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
            </div>
            {/* Card 2 */}
            <div className="pricing-card featured" style={{ display: "flex", flexDirection: "column", padding: "24px", height: "100%" }}>
              <div className="featured-badge" style={{ backgroundColor: "var(--color-brand-gold)", color: "var(--color-primary-navy)" }}>Only 8 seats — limited availability</div>
              <span className="price-label" style={{ marginTop: "8px" }}>Personal Track</span>
              <div className="price-val" style={{ color: "var(--color-brand-gold)", margin: "12px 0", fontSize: "32px", fontWeight: "800" }}>₹9,500<span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", fontWeight: "normal" }}>/month</span></div>
              <p className="font-body-md" style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", marginBottom: "16px", fontStyle: "italic" }}>
                1-on-1 · 12 sessions/month
              </p>
              <p className="font-body-md" style={{ color: "rgba(255,255,255,0.9)", marginBottom: "20px", flexGrow: 1, fontSize: "15px" }}>
                Premium 1-on-1 personalized tutoring program for high-focus NEET mentoring.
              </p>
              <a className="btn btn-gold btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20secure%20a%20spot%20in%20the%20NEET%20Personal%20Track." target="_blank" rel="noopener noreferrer">Secure Your Spot</a>
            </div>
            {/* Card 3 */}
            <div className="pricing-card" style={{ display: "flex", flexDirection: "column", padding: "24px", height: "100%" }}>
              <span className="price-label">Combo</span>
              <div className="price-val" style={{ color: "var(--color-brand-gold)", margin: "12px 0", fontSize: "32px", fontWeight: "800" }}>₹11,500<span style={{ fontSize: "14px", color: "var(--color-outline)", fontWeight: "normal" }}>/month</span></div>
              <p className="font-body-md" style={{ color: "var(--color-outline)", fontSize: "14px", marginBottom: "16px", fontStyle: "italic" }}>
                Personal + Batch · 20 sessions/month
              </p>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", flexGrow: 1, fontSize: "15px" }}>
                Get the best of both worlds: group interactive batches plus private individual review.
              </p>
              <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20NEET%20Combo%20program." target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "launchpad",
      label: "Launchpad",
      content: (
        <div style={{ width: "100%" }}>
          <div style={{ backgroundColor: "rgba(198,167,94,0.08)", border: "1px solid rgba(198,167,94,0.25)", borderRadius: "var(--radius-lg)", padding: "16px 24px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
            <svg style={{ width: "20px", height: "20px", flexShrink: 0, fill: "var(--color-brand-gold)" }} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <p style={{ margin: 0, fontSize: "14px", color: "var(--color-primary-navy)", fontWeight: "600" }}>Launchpad runs as 4–6 week courses, weekend workshops, and holiday bootcamps. Pricing varies by format and duration.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            <div className="pricing-card" style={{ display: "flex", flexDirection: "column", padding: "24px", height: "100%" }}>
              <span className="price-label">Weekend Workshop</span>
              <div className="price-val" style={{ color: "var(--color-brand-gold)", margin: "12px 0", fontSize: "28px", fontWeight: "800" }}>₹2,500<span style={{ fontSize: "13px", color: "var(--color-outline)", fontWeight: "normal" }}>–₹4,000</span></div>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", flexGrow: 1, fontSize: "14px" }}>2-day intensive. Design, Tech or Career tracks — practical, hands-on sessions.</p>
              <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20a%20Launchpad%20Weekend%20Workshop." target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
            </div>
            <div className="pricing-card" style={{ display: "flex", flexDirection: "column", padding: "24px", height: "100%" }}>
              <span className="price-label">Full Course (4–6 Weeks)</span>
              <div className="price-val" style={{ color: "var(--color-brand-gold)", margin: "12px 0", fontSize: "28px", fontWeight: "800" }}>₹5,000<span style={{ fontSize: "13px", color: "var(--color-outline)", fontWeight: "normal" }}>–₹8,000</span></div>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", flexGrow: 1, fontSize: "14px" }}>Structured 4–6 week courses in UI/UX, AI Literacy, or Professional Communication.</p>
              <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20a%20full%20Launchpad%20course." target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
            </div>
            <div className="pricing-card" style={{ display: "flex", flexDirection: "column", padding: "24px", height: "100%" }}>
              <span className="price-label">Holiday Bootcamp</span>
              <div className="price-val" style={{ color: "var(--color-brand-gold)", margin: "12px 0", fontSize: "28px", fontWeight: "800" }}>₹3,500<span style={{ fontSize: "13px", color: "var(--color-outline)", fontWeight: "normal" }}>–₹6,000</span></div>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", flexGrow: 1, fontSize: "14px" }}>Intensive skill builds during school holidays — 5–10 day immersive formats.</p>
              <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20a%20Launchpad%20Holiday%20Bootcamp." target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "pathways",
      label: "Pathways",
      content: (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="pricing-card" style={{ maxWidth: "600px", padding: "40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%" }}>
            <h3 style={{ color: "var(--color-brand-gold)", fontSize: "24px", fontWeight: "700" }}>Pathways Fees</h3>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", fontSize: "18px", margin: "10px 0" }}>
              TET Mentoring — contact us for batch details and fee structure.
            </p>
            <a className="btn btn-secondary" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20Pathways%20TET%20Mentoring%20batch%20details%20and%20fee%20structure." target="_blank" rel="noopener noreferrer" style={{ padding: "12px 32px" }}>
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )
    }
  ];

  // FAQ Accordion items
  const faqItems = [
    {
      question: "Do you cover both State Board and CBSE?",
      answer: "Yes, our foundation programs are tailored specifically for both State Board and CBSE curricula, ensuring students are prepared for their specific exam formats while maintaining conceptual depth."
    },
    {
      question: "What is the typical batch size?",
      answer: "We maintain strict 'High-Focus Batches' with a maximum of 15 students and founder's batches at 8 students to ensure every individual receives personalized attention and clarity."
    },
    {
      question: "Is there a demo class available?",
      answer: "Absolutely. We offer a 'Concept-Clarity Demo' where students can experience our teaching methodology before committing to a program."
    },
    {
      question: "Do you offer online classes?",
      answer: "We currently focus on Hybrid Learning. While primary instruction is offline at our center, we provide extensive digital resources and online doubt-clearing sessions."
    },
    {
      question: "What are the fee payment options?",
      answer: "We offer monthly, quarterly, and annual payment plans. Early-bird discounts and merit scholarships are available for deserving candidates."
    },
    {
      question: "How is WhatsApp support handled?",
      answer: "Students have access to a dedicated WhatsApp group for their batch where mentors answer conceptual doubts within 4-6 hours."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <ScrollReveal className="hero-content">
            <span className="hero-tagline font-label-lg">Premium Academic Mentorship · Chennai</span>
            <div className="urgency-badge" style={{ marginTop: "4px" }}>
              <span className="urgency-dot"></span>
              <span>NEET Founder&apos;s Batch: Only 8 seats left</span>
            </div>
            <h1 className="hero-title font-display-lg">
              Where Excellence Begins with <span className="text-glow-gold">Clarity</span>
            </h1>
            <p className="hero-tamil">தெளிவே வெற்றியின் தொடக்கம்</p>
            <p className="hero-description font-body-lg">
              18+ years of leadership in education. Custom courses structured for Classes 9–12 Board Exams, NEET mastery, and future-focused digital competencies.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "4px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", color: "var(--color-primary-navy)", backgroundColor: "rgba(31,78,121,0.06)", border: "1px solid rgba(31,78,121,0.12)", borderRadius: "100px", padding: "4px 12px" }}>
                <svg style={{ width: "14px", height: "14px", fill: "var(--color-primary-navy)" }} viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Primarily offline · Chennai center
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", color: "var(--color-primary-navy)", backgroundColor: "rgba(31,78,121,0.06)", border: "1px solid rgba(31,78,121,0.12)", borderRadius: "100px", padding: "4px 12px" }}>
                <svg style={{ width: "14px", height: "14px", fill: "var(--color-primary-navy)" }} viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                Online doubt support · 4–6 hr response
              </span>
            </div>
            <LeadForm defaultGoal="foundations" />
          </ScrollReveal>

          <ScrollReveal className="hero-visual-container">
            <img 
              src="/hero-banner.png" 
              alt="Crystal Clear Academy Students" 
              style={{ 
                width: "100%", 
                height: "auto", 
                borderRadius: "var(--radius-xl)", 
                border: "1px solid rgba(198, 167, 94, 0.25)", 
                boxShadow: "var(--shadow-lg)" 
              }} 
            />
            <div className="floating-badge">
              <span className="floating-badge-number">18+ Years</span>
              <span className="floating-badge-text">Academic Leadership</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="trust-bar">
        <div className="marquee-track">
          <div className="marquee-group">
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.2 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg>
              <span>18+ Years Teaching Experience</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6.18-6.18 4 4L20 9.41 22.29 11.7 22 6z"/></svg>
              <span>10+ Years NEET Success Records</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.89 12.57L12 15.9l6.11-3.33c.03-.1.89-2.9 8.89-2.57H5.89z"/></svg>
              <span>Govt School Candidates Certified NEET</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              <span>Strict High-Focus Batches (Max 15)</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-3.3l-.85-.6C7.8 11.16 7 9.94 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 .94-.8 2.16-2.15 3.1z"/></svg>
              <span>Concept-Clarity Method</span>
            </div>
          </div>
          <div className="marquee-group">
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.2 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg>
              <span>18+ Years Teaching Experience</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6.18-6.18 4 4L20 9.41 22.29 11.7 22 6z"/></svg>
              <span>10+ Years NEET Success Records</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.89 12.57L12 15.9l6.11-3.33c.03-.1.89-2.9 8.89-2.57H5.89z"/></svg>
              <span>Govt School Candidates Certified NEET</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              <span>Strict High-Focus Batches (Max 15)</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-3.3l-.85-.6C7.8 11.16 7 9.94 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 .94-.8 2.16-2.15 3.1z"/></svg>
              <span>Concept-Clarity Method</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="stats-banner">
        <div className="container">
          <ScrollReveal className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">Students Mentored</span>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>2006–Present</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Board Pass Rate</span>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>18-year average</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+ Yrs</span>
              <span className="stat-label">NEET Track Record</span>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>Proven qualifiers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15 Max</span>
              <span className="stat-label">Batch Size Limit</span>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>Every student seen</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Govt School → NEET Callout Banner */}
      <section style={{ backgroundColor: "var(--color-primary-navy)", padding: "0" }}>
        <div className="container" style={{ padding: "20px var(--space-lg)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ flexShrink: 0, width: "48px", height: "48px", backgroundColor: "var(--color-brand-gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg style={{ width: "26px", height: "26px", fill: "var(--color-primary-navy)" }} viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
              </div>
              <div>
                <p style={{ margin: "0 0 4px 0", fontSize: "18px", fontWeight: "700", color: "var(--color-brand-gold)", lineHeight: 1.2 }}>Government School → Medical College</p>
                <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5, maxWidth: "600px" }}>
                  CCA students from Tamil Nadu government schools have qualified NEET and secured MBBS/BDS seats under the 7.5% reservation — proof that the right mentorship levels every playing field.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20know%20more%20about%20how%20your%20govt%20school%20students%20qualified%20NEET."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ flexShrink: 0, whiteSpace: "nowrap" }}
            >
              Hear Their Story
            </a>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-py founder-section" id="about">
        <div className="container founder-grid">
          {/* Left Column: Photo / Avatar side */}
          <ScrollReveal className="founder-card-side">
            <div className="founder-quote-card" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", borderBottom: "1px solid rgba(198,167,94,0.2)", paddingBottom: "20px" }}>
                <div className="founder-portrait-frame">
                  <img src="/founder-revathy.png" alt="Revathy M." className="founder-portrait-img" />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div className="founder-name" style={{ fontSize: "20px" }}>Revathy M.</div>
                  <div className="founder-role">Lead Educator &amp; Founder</div>
                </div>
              </div>
              <div>
                <span className="quote-icon" style={{ position: "static", display: "block", marginBottom: "8px" }}>“</span>
                <p className="founder-quote-text" style={{ fontSize: "20px", marginBottom: 0 }}>
                  {"True education isn't about memorizing facts; it's about lighting a fire of curiosity through structured clarity."}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Text details */}
          <ScrollReveal className="founder-text-block">
            <span className="founder-subtitle font-label-lg">Pedagogical Vision</span>
            <h2 className="founder-title font-headline-lg">Mentorship by Revathy M.</h2>
            <p className="founder-desc font-body-lg">
              With 18+ years of core education leadership in Chennai, Revathy M. has pioneered conceptual coaching in Physics, Chemistry, and Mathematics. Her signature clarity-first mentoring bridges the gap between school board mastery and competitive NEET syllabus demands, helping students unlock top tier academic performance.
            </p>
            <ul className="program-checklist" style={{ margin: "8px 0 16px 0" }}>
              <li className="checklist-item font-body-md" style={{ fontWeight: "600" }}>
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span><strong>18+ years of teaching excellence</strong> in Chennai.</span>
              </li>
              <li className="checklist-item font-body-md" style={{ fontWeight: "600" }}>
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span><strong>10+ years of dedicated NEET mentoring</strong> with proven results.</span>
              </li>
              <li className="checklist-item font-body-md" style={{ fontWeight: "600" }}>
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span><strong>Track record of training government school students</strong> to qualify for MBBS/BDS under the 7.5% reservation.</span>
              </li>
            </ul>
            <div className="founder-credentials">
              <div className="credential-badge">
                <svg className="credential-icon" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-2-1.9-2-2-2zm0 16H5V8h14v11z"/></svg>
                <span>18+ Years Mentorship</span>
              </div>
              <div className="credential-badge">
                <svg className="credential-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>Chennai-Based Center</span>
              </div>
              <div className="credential-badge">
                <svg className="credential-icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 15l-3-3 1.41-1.41L10 13.17l4.59-4.59L16 10l-6 6z"/></svg>
                <span>NEET Specialist</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-py" id="testimonials">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Testimonials</span>
            <h2 className="font-headline-lg">Voice of Trust</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>
          
          <div className="testimonials-grid">
            <ScrollReveal className="testimonial-card">
              <div>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="testimonial-text">{"\"The personalized attention at CCA is unmatched. Every student's learning gaps are identified and resolved, making my child feel confident and fully supported.\""}</p>
              </div>
              <div>
                <div className="testimonial-author-name">Mrs. Rajalakshmi</div>
                <div className="testimonial-author-desc">Parent of Class 10 Student</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="testimonial-card">
              <div>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="testimonial-text">{"\"CCA's coaching style offers unmatched clarity in complex concepts. The visual biology maps and physics derivations — things that seemed impossible — became second nature. I cracked NEET in my first attempt.\""}</p>
              </div>
              <div>
                <div className="testimonial-author-name">Adhithya Kumar</div>
                <div className="testimonial-author-desc">NEET Qualifier 2023</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="testimonial-card">
              <div>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="testimonial-text">{"\"The guidance here is not just about lectures; it's a mentorship that goes beyond classroom hours. The support system has helped my child excel academically and personally.\""}</p>
              </div>
              <div>
                <div className="testimonial-author-name">Dr. Arulmani</div>
                <div className="testimonial-author-desc">Parent of Class 12 Student</div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card">
              <div>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="testimonial-text">{"\"I was struggling with Physics derivations for months. After just 3 sessions at CCA, I finally understood the logic behind them — not just the formula. The WhatsApp doubt support is also super fast, always replied within a few hours.\""}</p>
              </div>
              <div>
                <div className="testimonial-author-name">Priya S.</div>
                <div className="testimonial-author-desc">Class 12 Student · CCA Aspire Batch</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-py" id="programs">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Custom Curriculums</span>
            <h2 className="font-headline-lg">Our Academic Ecosystem</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <ScrollReveal>
            <TabSwitcher tabs={ecosystemTabs} gridLayout={true} />
          </ScrollReveal>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-py" id="methodology">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Our Framework</span>
            <h2 className="font-headline-lg">The Methodology of Mastery</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h4>1. Conceptual Clarity</h4>
              <p>Every topic is taught root-up — visual concept maps for Biology, step-by-step derivations for Physics, model-based reasoning for Chemistry. No rote learning, only understanding that sticks.</p>
            </ScrollReveal>

            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/>
                </svg>
              </div>
              <h4>2. Concrete Foundations</h4>
              <p>Daily practice sheets calibrated to board and NEET difficulty levels, plus weekly diagnostic assessments. Each student receives a personalised roadmap after the first session — not after enrollment.</p>
            </ScrollReveal>

            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h4>3. Small-Batch Mentorship</h4>
              <p>Maximum 15 students per batch — every face known, every gap tracked. Students have direct WhatsApp access to mentors: every doubt answered within 4–6 hours, even between sessions.</p>
            </ScrollReveal>

            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h4>4. Outcome-Driven Excellence</h4>
              <p>Target scores are set on Day 1, tracked weekly. Monthly progress reports shared with parents. Merit milestones celebrated — because accountability without recognition doesn't build confidence.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-py fees-section" id="fees">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg" style={{ color: "var(--color-on-primary-container)" }}>Transparent Pricing</span>
            <h2>Fees &amp; Pricing</h2>
            <p>{"Founder's Batches — Early registrations receive an immediate 10% waiver"}</p>
            <div className="gold-divider" style={{ marginTop: "16px" }}></div>
          </ScrollReveal>

          <ScrollReveal>
            <TabSwitcher tabs={tuitionFeeTabs} gridLayout={false} defaultTabId="aspire" />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py faq-section" id="faqs">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Support Info</span>
            <h2 className="font-headline-lg">Common Inquiries</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>
          
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-py" id="events">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Events at CCA</span>
            <h2 className="font-headline-lg">Upcoming Sessions</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>
          
          <div className="events-grid">
            <ScrollReveal className="event-card">
              <div className="event-banner-svg">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
                </svg>
              </div>
              <div className="event-body">
                <span className="event-tag">NEET Prep</span>
                <h4 className="event-title">NEET Mock Strategy Seminar</h4>
                <p className="event-desc">Master the art of question selection and time management under mock exam conditions. Register to confirm your slot.</p>
                <div className="event-footer">
                  <span className="event-time">July 12, 2026</span>
                  <a
                    className="event-btn"
                    href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20free%20for%20the%20NEET%20Mock%20Strategy%20Seminar%20on%20July%2012."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Free
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="event-card">
              <div className="event-banner-svg">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <div className="event-body">
                <span className="event-tag">Board Strategy</span>
                <h4 className="event-title">Class 10 Board Prep Webinar</h4>
                <p className="event-desc">Visual concept maps and revision frameworks to maximize board exam scores. Online — attend from home.</p>
                <div className="event-footer">
                  <span className="event-time">July 19, 2026</span>
                  <a
                    className="event-btn"
                    href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20free%20for%20the%20Class%2010%20Board%20Prep%20Webinar%20on%20July%2019."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Free
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="event-card">
              <div className="event-banner-svg">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div className="event-body">
                <span className="event-tag">Batch Launch</span>
                <h4 className="event-title">July Batch Admissions Open</h4>
                <p className="event-desc">New high-focus batches (max 15 students) begin July 26. Seats fill fast — register now to secure direct mentor access.</p>
                <div className="event-footer">
                  <span className="event-time">July 26, 2026</span>
                  <a
                    className="event-btn"
                    href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20for%20the%20July%202026%20batch%20admission."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Free
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py cta-section">
        <div className="container cta-container">
          <ScrollReveal>
            <h2 className="font-display-lg cta-title">
              Ready to Begin with <span style={{ color: "var(--color-brand-gold)" }}>Clarity?</span>
            </h2>
            <p className="cta-tamil">சரியான வழிகாட்டுதல். தெளிவான எதிர்காலம்.</p>
            <p className="cta-desc font-body-lg">
              Unlock direct access to standard board prep, elite NEET coaching, and job-ready future digital skillsets.
            </p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20chat%20with%20the%20Lead%20Mentor%20and%20begin%20my%20clarity%20journey."
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with Our Lead Mentor
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
