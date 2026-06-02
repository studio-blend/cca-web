"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function ResourcesPage() {
  const allResources = [
    {
      title: "Class 12 Physics Formula Sheet",
      type: "PDF Document",
      category: "science",
      desc: "Complete collection of Electrodynamics and Mechanics formulas for Class 12 CBSE & State Board revision.",
      whatsappMsg: "Hi CCA, I want to download the Class 12 Physics Formula Sheet PDF."
    },
    {
      title: "NEET Biology Visual Concept Maps",
      type: "PDF Booklet",
      category: "neet",
      desc: "Color-coded visual node guides mapping cell division and genetics processes for rapid review.",
      whatsappMsg: "Hi CCA, I want to download the NEET Biology Visual Concept Maps booklet."
    },
    {
      title: "Class 10 Math Board Syllabus Guide",
      type: "PDF Document",
      category: "math",
      desc: "Detailed chapter-by-chapter weightage and board study schedules for Class 10 CBSE algebra.",
      whatsappMsg: "Hi CCA, I want to download the Class 10 Math Board Syllabus Guide."
    },
    {
      title: "Figma Keyboard Shortcuts Cheatsheet",
      type: "PDF Sheet",
      category: "digital",
      desc: "Keyboard shortcuts and wireframe templates sheet to boost Figma UI/UX prototyping speed.",
      whatsappMsg: "Hi CCA, I want to download the Figma keyboard shortcuts sheet."
    },
    {
      title: "TET Child Pedagogy Practice Sheet",
      type: "PDF Worksheet",
      category: "pedagogy",
      desc: "Important child development theories and trial multiple choice questions for TET Paper I preparation.",
      whatsappMsg: "Hi CCA, I want to download the TET Child Pedagogy Practice Sheet."
    }
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredResources = activeFilter === "all"
    ? allResources
    : allResources.filter((r) => r.category === activeFilter);

  const handleDownloadClick = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919841644813?text=${encoded}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ paddingTop: "120px", background: "var(--color-surface-container-low)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <ScrollReveal>
            <span className="hero-tagline font-label-lg">Free Materials</span>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>
              Academic &amp; Digital <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>Free Study Resources</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)" }}>
              Download our signature concept sheets, NEET biology memory aids, and Figma UI design shortcut sheets directly via WhatsApp.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-lowest)" }}>
        <div className="container">
          {/* Filters */}
          <ScrollReveal>
            <div className="tab-nav" style={{ maxWidth: "600px", margin: "0 auto 32px" }}>
              <button className={`tab-trigger ${activeFilter === "all" ? "active" : ""}`} onClick={() => setActiveFilter("all")}>All</button>
              <button className={`tab-trigger ${activeFilter === "science" ? "active" : ""}`} onClick={() => setActiveFilter("science")}>Science</button>
              <button className={`tab-trigger ${activeFilter === "neet" ? "active" : ""}`} onClick={() => setActiveFilter("neet")}>NEET</button>
              <button className={`tab-trigger ${activeFilter === "math" ? "active" : ""}`} onClick={() => setActiveFilter("math")}>Math</button>
              <button className={`tab-trigger ${activeFilter === "digital" ? "active" : ""}`} onClick={() => setActiveFilter("digital")}>Digital</button>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="testimonials-grid">
            {filteredResources.map((resource, index) => (
              <ScrollReveal
                key={index}
                className="testimonial-card"
                style={{
                  backgroundColor: "var(--color-surface-card)",
                  color: "var(--color-on-background)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "32px",
                }}
              >
                <div>
                  <span className="event-tag" style={{ marginBottom: "12px", display: "inline-block" }}>
                    {resource.type}
                  </span>
                  <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "8px" }}>
                    {resource.title}
                  </h3>
                  <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
                    {resource.desc}
                  </p>
                </div>

                <button
                  className="btn btn-gold btn-block"
                  onClick={() => handleDownloadClick(resource.whatsappMsg)}
                >
                  Request on WhatsApp
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
