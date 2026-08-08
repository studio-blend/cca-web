"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import SyllabusForm from "@/components/SyllabusForm/SyllabusForm";

export default function ProgramsExplorer({ initialPrograms = null }) {
  const [activeWing, setActiveWing] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const wings = [
    { id: "all", label: "All Wings" },
    { id: "foundations", label: "📚 Foundations (Classes 9–12)" },
    { id: "aspire", label: "🩺 Aspire (NEET Medical)" },
    { id: "launchpad", label: "💻 Launchpad (Digital Skills)" },
    { id: "pathways", label: "🎓 Pathways (TET Mentoring)" },
  ];

  const defaultPrograms = [
    // Foundations Wing
    {
      id: "foundations-class-9",
      wing: "foundations",
      wingLabel: "Foundations Wing",
      wingBadgeColor: "#1F4E79",
      title: "Class 9 Foundation & Core Science",
      grade: "Class 9",
      board: "CBSE & TN State Board",
      desc: "Bridge from middle school to high school. Focuses on first-principles mental models in Physics laws, Chemical nomenclature, and Algebraic foundations.",
      highlights: ["Visual Physics Experiments", "Atomic Structure Chemistry", "Euclidean & Algebraic Maths"],
      pageUrl: "/foundations#curriculum",
      whatsappMsg: "Hi CCA, I am interested in the Class 9 Foundation program.",
    },
    {
      id: "foundations-class-10",
      wing: "foundations",
      wingLabel: "Foundations Wing",
      wingBadgeColor: "#1F4E79",
      title: "Class 10 Board Excellence & Science Intensive",
      grade: "Class 10",
      board: "CBSE & TN State Board",
      desc: "Comprehensive Board exam mastery. High-frequency numerical practice, ray diagram derivations, and step-by-step paper presentation blueprints.",
      highlights: ["Light & Circuit Numerical Mastery", "Carbon Reactions & Equations", "Board Blueprint Mock Exams"],
      pageUrl: "/foundations#curriculum",
      whatsappMsg: "Hi CCA, I am interested in the Class 10 Board Excellence program.",
    },
    {
      id: "foundations-class-11",
      wing: "foundations",
      wingLabel: "Foundations Wing",
      wingBadgeColor: "#1F4E79",
      title: "Class 11 Senior Science & Calculus Bridge",
      grade: "Class 11",
      board: "CBSE & TN State Board",
      desc: "Eradicates senior high school friction. Vectors, thermodynamics, calculus differentiation, and organic reaction pathways taught in clear visual steps.",
      highlights: ["Vector Mechanics & Free-Body Diagrams", "Organic IUPAC & Reaction Pathways", "Differential Calculus & Limits"],
      pageUrl: "/foundations#curriculum",
      whatsappMsg: "Hi CCA, I am interested in the Class 11 Senior Science program.",
    },
    {
      id: "foundations-class-12",
      wing: "foundations",
      wingLabel: "Foundations Wing",
      wingBadgeColor: "#1F4E79",
      title: "Class 12 Board Cent-um Masterclass",
      grade: "Class 12",
      board: "CBSE & TN State Board",
      desc: "The ultimate board examination milestone. Rigorous answer writing speed drills, full-length sample paper evaluations, and direct founder reviews.",
      highlights: ["Electrodynamics & Optics Derivations", "Electrochemistry & Named Reactions", "Integral Calculus & 3D Geometry"],
      pageUrl: "/foundations#curriculum",
      whatsappMsg: "Hi CCA, I am interested in the Class 12 Board Cent-um Masterclass.",
    },

    // Aspire Wing
    {
      id: "aspire-2year",
      wing: "aspire",
      wingLabel: "Aspire NEET Wing",
      wingBadgeColor: "#C6A75E",
      title: "2-Year Integrated NEET Masterclass",
      grade: "Class 11 & 12",
      board: "NEET Medical Entrance",
      desc: "Designed for Class 10 graduates stepping into Class 11. Establishes deep conceptual clarity in NCERT Biology and Physics derivations before speed drills.",
      highlights: ["Line-by-Line NCERT Biology", "Physics 45-Sec MCQ Shortcut Rules", "30+ Full OMR Simulated Exams"],
      pageUrl: "/aspire#tracks",
      whatsappMsg: "Hi CCA, I am interested in the 2-Year Integrated NEET Masterclass.",
    },
    {
      id: "aspire-1year",
      wing: "aspire",
      wingLabel: "Aspire NEET Wing",
      wingBadgeColor: "#C6A75E",
      title: "1-Year Fast-Track NEET Sprint",
      grade: "Class 12",
      board: "NEET + Board Dual Focus",
      desc: "Dual-preparation strategy ensuring zero compromise on Class 12 Board marks while mastering high-yield NEET MCQs and formula matrices.",
      highlights: ["High-Yield Chapter Priority", "Physics Formula Matrix Sheets", "Balanced Weekly Board & NEET Schedule"],
      pageUrl: "/aspire#tracks",
      whatsappMsg: "Hi CCA, I am interested in the 1-Year Fast-Track NEET Sprint.",
    },
    {
      id: "aspire-repeater",
      wing: "aspire",
      wingLabel: "Aspire NEET Wing",
      wingBadgeColor: "#C6A75E",
      title: "Intensive NEET Repeater Target 650+ Track",
      grade: "Dropper / Repeater",
      board: "NEET Medical Entrance",
      desc: "Full-time intensive training for students taking a dedicated year to maximize their NEET score. Individual error analysis and intense daily practice.",
      highlights: ["150+ Daily Solved MCQs", "Custom Weakness Repair Micro-Classes", "Weekly All-India Level Tests"],
      pageUrl: "/aspire#tracks",
      whatsappMsg: "Hi CCA, I am interested in the Intensive NEET Repeater Track.",
    },
    {
      id: "aspire-social",
      wing: "aspire",
      wingLabel: "Aspire NEET Wing",
      wingBadgeColor: "#C6A75E",
      title: "Government School Student NEET Scholarship Batch",
      grade: "TN Govt School Students",
      board: "NEET 7.5% Quota Support",
      desc: "Subsidized batches for deserving government school students across Tamil Nadu, providing elite study tools, OMR books, and direct mentorship.",
      highlights: ["Fully Subsidized Guidance", "Free OMR Workbooks & Mock Series", "Dedicated 7.5% Reservation Coaching"],
      pageUrl: "/aspire#tracks",
      whatsappMsg: "Hi CCA, I am interested in the Government School NEET Scholarship Initiative.",
    },

    // Launchpad Wing
    {
      id: "launchpad-uiux",
      wing: "launchpad",
      wingLabel: "Launchpad Tech Wing",
      wingBadgeColor: "#35618d",
      title: "UI/UX Interface Design & Figma Prototyping",
      grade: "Students & Beginners",
      board: "Digital Skills Certification",
      desc: "Master modern visual design from low-fidelity wireframing to interactive high-fidelity prototypes using Figma. Learn spacing grids and layout systems.",
      highlights: ["Typography & 8pt Grid Systems", "Figma Components & Auto-Layout", "Behance/LinkedIn Portfolio Project"],
      pageUrl: "/launchpad#skills",
      whatsappMsg: "Hi CCA, I am interested in the UI/UX Design & Figma Bootcamp.",
    },
    {
      id: "launchpad-python",
      wing: "launchpad",
      wingLabel: "Launchpad Tech Wing",
      wingBadgeColor: "#35618d",
      title: "Python Programming & Algorithmic Logic",
      grade: "Students & Beginners",
      board: "Digital Skills Certification",
      desc: "Coding taught as logical problem-solving rather than dry syntax memorization. Write real Python scripts to automate files, parse data, and build apps.",
      highlights: ["Variables, Data Structures & Control Logic", "CSV/JSON File Parsing Automation", "GitHub Capstone Python Utility App"],
      pageUrl: "/launchpad#skills",
      whatsappMsg: "Hi CCA, I am interested in the Python Programming & Logic Bootcamp.",
    },
    {
      id: "launchpad-ai",
      wing: "launchpad",
      wingLabel: "Launchpad Tech Wing",
      wingBadgeColor: "#35618d",
      title: "Generative AI Workflow Automation & Prompting",
      grade: "Students & Professionals",
      board: "Digital Skills Certification",
      desc: "Leverage cutting-edge generative AI models to multiply your productivity. Learn custom prompt structuring, AI design tools, and content pipelines.",
      highlights: ["Chain-of-Thought Prompting Rules", "AI Asset & Icon Generation", "Workflow Research Automation"],
      pageUrl: "/launchpad#skills",
      whatsappMsg: "Hi CCA, I am interested in the AI Workflow Automation track.",
    },

    // Pathways Wing
    {
      id: "pathways-paper1",
      wing: "pathways",
      wingLabel: "Pathways TET Wing",
      wingBadgeColor: "#0E1F3B",
      title: "TET Paper I Mentoring (Classes 1–5 Primary Stage)",
      grade: "Primary School Teachers",
      board: "TN TRB TET Certification",
      desc: "Tailored specifically for primary stage educators. Focuses heavily on Early Child Development & Pedagogy, foundational literacy, and EVS.",
      highlights: ["Piaget & Vygotsky Early Child Psychology", "Tamil/English Grammar & EVS Concepts", "10-Year Solved PYQ Drills"],
      pageUrl: "/pathways#papers",
      whatsappMsg: "Hi CCA, I am interested in the TET Paper I Mentoring program.",
    },
    {
      id: "pathways-paper2",
      wing: "pathways",
      wingLabel: "Pathways TET Wing",
      wingBadgeColor: "#0E1F3B",
      title: "TET Paper II Mentoring (Classes 6–8 High School Stage)",
      grade: "Upper Primary & High School",
      board: "TN TRB TET Certification",
      desc: "Specialized for upper primary subject teachers. Advanced Adolescent Pedagogy combined with rigorous Science/Maths or Social Science domain preparation.",
      highlights: ["Kohlberg Moral Development & Motivation", "State Board Classes 6-10 Textbook Maps", "Subject Pedagogy Case Studies"],
      pageUrl: "/pathways#papers",
      whatsappMsg: "Hi CCA, I am interested in the TET Paper II Mentoring program.",
    },
  ];

  const allPrograms = useMemo(() => {
    if (initialPrograms && initialPrograms.length > 0) {
      return initialPrograms.map((p) => ({
        id: p.id,
        wing: p.wing || "foundations",
        wingLabel: p.wingLabel || "Academic Wing",
        wingBadgeColor: p.wingBadgeColor || "#1F4E79",
        title: p.title,
        grade: p.targetAudience || p.grade || "Class 9-12",
        board: p.board || p.fee || "CBSE & State Board",
        desc: p.description || p.desc || "",
        highlights: p.features || p.highlights || [],
        pageUrl: `/${p.wing || "foundations"}`,
        whatsappMsg: `Hi CCA, I am interested in the ${p.title} program.`,
      }));
    }
    return defaultPrograms;
  }, [initialPrograms]);

  const filteredPrograms = useMemo(() => {
    return allPrograms.filter((p) => {
      const matchesWing = activeWing === "all" || p.wing === activeWing;
      const matchesSearch = searchQuery.trim() === "" || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesWing && matchesSearch;
    });
  }, [activeWing, searchQuery]);

  const handleWhatsAppInquiry = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919841644813?text=${encoded}`, "_blank");
  };

  return (
    <>
      {/* Search & Filter Header Section */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-lowest)", paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
              <div style={{ display: "inline-block", background: "rgba(198,167,94,0.12)", color: "var(--color-primary-navy)", padding: "4px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: "700", marginBottom: "16px" }}>
                <span>🎯</span> FIND YOUR PERFECT PROGRAM
              </div>
              <h2 className="font-headline-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>
                Filter Programs Across All Educational Wings
              </h2>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "28px" }}>
                Explore concept tuition, NEET entrance coaching, digital skills bootcamps, and teacher certification programs.
              </p>

              {/* Search Bar Input */}
              <div style={{ position: "relative", marginBottom: "24px" }}>
                <input
                  type="text"
                  placeholder="Search programs by subject, grade, or keyword (e.g. Physics, NEET, Figma, Class 10)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 20px 14px 44px",
                    borderRadius: "28px",
                    border: "1px solid rgba(0,0,0,0.15)",
                    backgroundColor: "var(--color-surface-card)",
                    fontSize: "15px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                  }}
                />
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "20px",
                    fill: "var(--color-on-surface-variant)",
                  }}
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>

              {/* Wing Filter Tabs */}
              <div className="tab-nav" style={{ flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
                {wings.map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    className={`tab-trigger ${activeWing === w.id ? "active" : ""}`}
                    onClick={() => setActiveWing(w.id)}
                    style={{ fontSize: "13px", padding: "8px 16px" }}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Results Summary */}
          <div style={{ marginTop: "24px", textAlign: "center", fontSize: "14px", color: "var(--color-on-surface-variant)" }}>
            Showing <strong>{filteredPrograms.length}</strong> {filteredPrograms.length === 1 ? "program" : "programs"}
            {activeWing !== "all" ? ` in ${wings.find((w) => w.id === activeWing)?.label}` : " across all 4 wings"}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>
        </div>
      </section>

      {/* Programs Display Grid */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container">
          {filteredPrograms.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "var(--color-surface-card)", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>🔍</div>
              <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "8px" }}>No Programs Found</h3>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
                Try adjusting your search terms or select another wing filter.
              </p>
              <button
                className="btn btn-gold"
                onClick={() => {
                  setActiveWing("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "28px" }}>
              {filteredPrograms.map((program) => (
                <ScrollReveal
                  key={program.id}
                  className="lead-form-card"
                  style={{
                    maxWidth: "100%",
                    padding: "28px",
                    backgroundColor: "var(--color-surface-card)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  <div>
                    {/* Card Header Badges */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          color: "#ffffff",
                          backgroundColor: program.wingBadgeColor,
                          padding: "4px 10px",
                          borderRadius: "12px",
                        }}
                      >
                        {program.wingLabel}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          color: "var(--color-primary-navy)",
                          backgroundColor: "var(--color-surface-container)",
                          padding: "4px 10px",
                          borderRadius: "12px",
                        }}
                      >
                        {program.grade}
                      </span>
                    </div>

                    <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "8px", lineHeight: "1.3" }}>
                      {program.title}
                    </h3>

                    <div style={{ fontSize: "12px", fontWeight: "700", color: "var(--color-brand-gold)", marginBottom: "12px" }}>
                      Target: {program.board}
                    </div>

                    <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", lineHeight: "1.5" }}>
                      {program.desc}
                    </p>

                    {/* Highlights List */}
                    <div style={{ marginBottom: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {program.highlights.map((h, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--color-on-surface)" }}>
                          <span style={{ color: "var(--color-brand-gold)", fontWeight: "bold" }}>✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
                    <button
                      type="button"
                      className="btn btn-gold btn-block"
                      onClick={() => handleWhatsAppInquiry(program.whatsappMsg)}
                      style={{ padding: "10px 14px", fontSize: "14px" }}
                    >
                      Enquire on WhatsApp →
                    </button>
                    <Link
                      href={program.pageUrl}
                      className="btn"
                      style={{
                        padding: "8px 14px",
                        fontSize: "13px",
                        textAlign: "center",
                        border: "1px solid var(--color-primary-navy)",
                        color: "var(--color-primary-navy)",
                      }}
                    >
                      View Wing Page
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Instant Program Syllabus Inquiry Section */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-lowest)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
            <ScrollReveal>
              <span className="hero-tagline font-label-lg">Need Guidance?</span>
              <h2 className="font-headline-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>
                Not Sure Which Program Suits You Best?
              </h2>
              <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginBottom: "24px" }}>
                Connect directly with our lead founder mentor to review your academic goals, diagnostic evaluation, and batch availability.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>1-on-1 Founder Consultation</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Custom Subject &amp; Speed Diagnostics</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Small Micro-Batch Reservation (Max 15)</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lead-form-card" style={{ padding: "32px", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "16px" }}>
              <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "8px", textAlign: "center" }}>Request Free Consultation</h3>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", textAlign: "center" }}>Receive instant response on WhatsApp.</p>
              <SyllabusForm programName="All Programs Academic Inquiry" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
