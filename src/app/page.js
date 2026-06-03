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
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%2520in%2520Subject%2520Tuition%2520for%2520Class%25209-12."
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
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Early%2520NEET%2520Foundation%2520for%2520Class%25209-10."
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
                  href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20Integrated%2520NEET%2520Coaching%2520for%2520Class%252011-12."
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
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px", fontSize: "10px", padding: "2px 8px" }}>Studio Blend Collaboration</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Design</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Figma prototyping, layout grids, typography guidelines, and creative problem solving models.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "12px", marginTop: "auto" }}>
                  {["Graphic Design", "UI/UX", "Design Thinking", "Creative Tools"].map((tag, i) => (
                    <span key={i} style={{ fontSize: "10px", backgroundColor: "rgba(198,167,94,0.1)", color: "var(--color-primary-navy)", padding: "2px 6px", borderRadius: "4px", fontWeight: "600" }}>{tag}</span>
                  ))}
                </div>
              </div>
              {/* Card 2 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px", fontSize: "10px", padding: "2px 8px" }}>Studio Blend Collaboration</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Technology</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Build with digital blocks. Modern automation workflows, coding structures, and digital integrations.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "12px", marginTop: "auto" }}>
                  {["AI &amp; Emerging Tech", "No-Code", "Web Dev", "Digital Literacy"].map((tag, i) => (
                    <span key={i} style={{ fontSize: "10px", backgroundColor: "rgba(198,167,94,0.1)", color: "var(--color-primary-navy)", padding: "2px 6px", borderRadius: "4px", fontWeight: "600" }}>{tag}</span>
                  ))}
                </div>
              </div>
              {/* Card 3 */}
              <div className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px", fontSize: "10px", padding: "2px 8px" }}>Studio Blend Collaboration</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Career</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: "14px", lineHeight: "1.4" }}>
                  Interpersonal capability training, creative arguments, dynamic slide structures, and leadership.
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
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="pricing-card" style={{ maxWidth: "600px", padding: "40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%" }}>
            <h3 style={{ color: "var(--color-brand-gold)", fontSize: "24px", fontWeight: "700" }}>Foundations Fees</h3>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", fontSize: "18px", margin: "10px 0" }}>
              Fees vary by class and subject. Contact us for a personalised quote.
            </p>
            <a className="btn btn-secondary" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20enquiring%20about%20the%20Foundations%20program%20fees." target="_blank" rel="noopener noreferrer" style={{ padding: "12px 32px" }}>
              Enquire on WhatsApp
            </a>
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
            Founder's Batch — First 10 students get 10% off
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
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="pricing-card" style={{ maxWidth: "600px", padding: "40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%" }}>
            <h3 style={{ color: "var(--color-brand-gold)", fontSize: "24px", fontWeight: "700" }}>Launchpad Fees</h3>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", fontSize: "18px", margin: "10px 0" }}>
              Program fees vary by track. Early access pricing available.
            </p>
            <a className="btn btn-secondary" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20Launchpad%20program%20fees." target="_blank" rel="noopener noreferrer" style={{ padding: "12px 32px" }}>
              Enquire on WhatsApp
            </a>
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

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <ScrollReveal className="hero-content">
            <span className="hero-tagline font-label-lg">Premium Academic Mentorship</span>
            <h1 className="hero-title font-display-lg">
              Where Excellence Begins with <span style={{ color: "var(--color-brand-gold)" }}>Clarity</span>
            </h1>
            <p className="hero-tamil">தெளிவே வெற்றியின் தொடக்கம்</p>
            <p className="hero-description font-body-lg">
              18+ years of leadership in education. Custom courses structured for Classes 9–12 Board Exams, NEET mastery, and future-focused digital competencies.
            </p>
            <LeadForm defaultGoal="foundations" />
          </ScrollReveal>

          <ScrollReveal className="hero-visual-container">
            <svg viewBox="0 0 500 500" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C6A75E" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#C6A75E" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="250" cy="250" r="220" fill="url(#glow)"/>
              <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(31, 78, 121, 0.1)" strokeDasharray="10 5" strokeWidth="1"/>
              <circle cx="250" cy="250" r="120" fill="none" stroke="rgba(31, 78, 121, 0.15)" strokeWidth="2"/>
              
              <line x1="250" y1="250" x2="130" y2="150" stroke="rgba(31, 78, 121, 0.3)" strokeWidth="2" strokeDasharray="5 5"/>
              <line x1="250" y1="250" x2="370" y2="150" stroke="rgba(31, 78, 121, 0.3)" strokeWidth="2" strokeDasharray="5 5"/>
              <line x1="250" y1="250" x2="130" y2="350" stroke="rgba(31, 78, 121, 0.3)" strokeWidth="2" strokeDasharray="5 5"/>
              <line x1="250" y1="250" x2="370" y2="350" stroke="rgba(31, 78, 121, 0.3)" strokeWidth="2" strokeDasharray="5 5"/>
              
              <g transform="translate(250, 250)">
                <circle cx="0" cy="0" r="45" fill="var(--color-primary-navy)" stroke="var(--color-brand-gold)" strokeWidth="3"/>
                <text x="0" y="5" fontFamily="var(--font-family-serif)" fontSize="14" fontWeight="700" fill="#ffffff" textAnchor="middle">CLARITY</text>
              </g>
              
              <g transform="translate(130, 150)">
                <circle cx="0" cy="0" r="35" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.05))"/>
                <path d="M-8 -8 H8 V8 H-8 Z" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2"/>
                <text x="0" y="22" fontSize="9" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">NEET / MED</text>
              </g>
              <g transform="translate(370, 150)">
                <circle cx="0" cy="0" r="35" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.05))"/>
                <polygon points="0,-12 12,6 -12,6" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2"/>
                <text x="0" y="22" fontSize="9" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">FOUNDATIONS</text>
              </g>
              <g transform="translate(130, 350)">
                <circle cx="0" cy="0" r="35" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.05))"/>
                <circle cx="0" cy="0" r="10" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2"/>
                <text x="0" y="22" fontSize="9" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">DIGITAL SKILLS</text>
              </g>
              <g transform="translate(370, 350)">
                <circle cx="0" cy="0" r="35" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.05))"/>
                <path d="M-6 -6 L6 6 M6 -6 L-6 6" stroke="var(--color-brand-gold)" strokeWidth="2"/>
                <text x="0" y="22" fontSize="9" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">TEACHERS (TET)</text>
              </g>
            </svg>
            
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
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>18+ Years Teaching Experience</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>10+ Years NEET Success Records</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Govt School Candidates Certified NEET</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Strict High-Focus Batches (Max 15)</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Concept-Clarity Method</span>
            </div>
          </div>
          <div className="marquee-group">
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>18+ Years Teaching Experience</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>10+ Years NEET Success Records</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Govt School Candidates Certified NEET</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Strict High-Focus Batches (Max 15)</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Concept-Clarity Method</span>
            </div>
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

      {/* Founder Section */}
      <section className="section-py founder-section" id="about">
        <div className="container founder-grid">
          {/* Left Column: Photo / Avatar side */}
          <ScrollReveal className="founder-card-side">
            <div className="founder-quote-card">
              <span className="quote-icon">“</span>
              <p className="founder-quote-text">
                {"True education isn't about memorizing facts; it's about lighting a fire of curiosity through structured clarity."}
              </p>
              <div className="founder-profile-meta">
                <div className="founder-avatar-svg">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="50" cy="50" r="50" fill="var(--color-primary-navy)"/>
                    <path d="M50 25 C60 25 65 35 65 45 C65 55 58 60 50 60 C42 60 35 55 35 45 C35 35 40 25 50 25 Z" fill="var(--color-brand-gold)"/>
                    <path d="M20 90 C20 70 35 65 50 65 C65 65 80 70 80 90 Z" fill="var(--color-brand-gold)"/>
                  </svg>
                </div>
                <div>
                  <div className="founder-name">Lead Educator &amp; Founder</div>
                  <div className="founder-role">S. Ganesan</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Text details */}
          <ScrollReveal className="founder-text-block">
            <span className="founder-subtitle font-label-lg">Pedagogical Vision</span>
            <h2 className="founder-title font-headline-lg">Mentorship by S. Ganesan</h2>
            <p className="founder-desc font-body-lg">
              With 18+ years of core education leadership in Chennai, S. Ganesan has pioneered conceptual coaching in Physics, Chemistry, and Mathematics. His signature clarity-first mentoring bridges the gap between school board mastery and competitive NEET syllabus demands, helping students unlock top tier academic performance.
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
            <div className="founder-stats">
              <div className="stat-card">
                <div className="stat-number">1,200+</div>
                <div className="stat-label">Students Mentored</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">98%</div>
                <div className="stat-label">Board Exam Pass Rate</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-py">
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
              <p>First-principles representation of topics.</p>
            </ScrollReveal>

            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/>
                </svg>
              </div>
              <h4>2. Concrete Foundations</h4>
              <p>Daily practice sheets &amp; weekly assessments.</p>
            </ScrollReveal>

            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h4>3. Small-Batch Mentorship</h4>
              <p>Strict high-focus limit of 15 students.</p>
            </ScrollReveal>

            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h4>4. Outcome-Driven Excellence</h4>
              <p>Target score tracking &amp; progress updates.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-py fees-section" id="fees">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg" style={{ color: "var(--color-on-primary-container)" }}>Transparent Pricing</span>
            <h2>Financial Investments</h2>
            <p>{"Founder's Batches — Early registrations receive an immediate 10% waiver"}</p>
            <div className="gold-divider" style={{ marginTop: "16px" }}></div>
          </ScrollReveal>

          <ScrollReveal>
            <TabSwitcher tabs={tuitionFeeTabs} gridLayout={false} defaultTabId="aspire" />
          </ScrollReveal>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-py">
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
                <p className="event-desc">Master the art of question selection and time management under mock exam conditions.</p>
                <div className="event-footer">
                  <span className="event-time">June 10</span>
                  <a
                    className="event-btn"
                    href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20free%20for%20the%20NEET%20Mock%20Strategy%20Seminar%20on%20June%2010."
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
                <p className="event-desc">Learn visual concept maps and revision frameworks to maximize board exam scores.</p>
                <div className="event-footer">
                  <span className="event-time">June 12</span>
                  <a
                    className="event-btn"
                    href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20free%20for%20the%20Class%2010%20Board%20Prep%20Webinar%20on%20June%2012."
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
                <h4 className="event-title">Direct Admission Small Batches Start</h4>
                <p className="event-desc">High-focus batches limited to 15 students start. Secure your slot for direct mentor access.</p>
                <div className="event-footer">
                  <span className="event-time">June 15</span>
                  <a
                    className="event-btn"
                    href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20free%20for%20the%20Direct%20Admission%20Small%20Batches%20Start%20on%20June%2015."
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

      {/* Testimonials Section */}
      <section className="section-py">
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
                <p className="testimonial-text">{"\"CCA's coaching style offers unmatched clarity in complex concepts. The visual biology maps and physics derivations became incredibly simple and easy to remember.\""}</p>
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
          </div>
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
