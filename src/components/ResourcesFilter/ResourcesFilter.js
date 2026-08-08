"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function ResourcesFilter({ resources }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredResources = activeFilter === "all"
    ? resources
    : resources.filter((r) => r.category === activeFilter);

  const handleDownloadClick = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919841644813?text=${encoded}`, "_blank");
  };

  return (
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
  );
}
