"use client";

import { useState } from "react";
import TabSwitcher from "@/components/TabSwitcher/TabSwitcher";

export default function PricingSection({ programs = [], whatsappNumber = "919841644813" }) {
  const [pricingMode, setPricingMode] = useState("offline"); // "offline" | "online"

  const wings = [
    { id: "aspire", label: "Aspire (NEET)" },
    { id: "foundations", label: "Foundations" },
    { id: "launchpad", label: "Launchpad" },
    { id: "pathways", label: "Pathways" },
  ];

  const tuitionFeeTabs = wings.map((wing) => {
    const wingPrograms = programs.filter((p) => p.wing === wing.id);
    const isPathways = wing.id === "pathways";

    return {
      id: wing.id,
      label: wing.label,
      content: isPathways ? (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="pricing-card" style={{ maxWidth: "600px", padding: "40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%" }}>
            <h3 style={{ color: "var(--color-brand-gold)", fontSize: "24px", fontWeight: "700" }}>Pathways Fees</h3>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", fontSize: "18px", margin: "10px 0" }}>
              TET Mentoring — contact us for batch details, online/offline timetables, and fee structure.
            </p>
            <a className="btn btn-secondary" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi CCA, I am interested in Pathways TET Mentoring batch details and fee structure.")}`} target="_blank" rel="noopener noreferrer" style={{ padding: "12px 32px" }}>
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          {/* Top Banner per Wing */}
          {wing.id === "aspire" && (
            <div style={{ backgroundColor: "var(--color-brand-gold)", color: "var(--color-primary-navy)", padding: "12px 24px", borderRadius: "var(--radius-lg)", marginBottom: "24px", textAlign: "center", fontWeight: "700", fontSize: "16px" }}>
              Founder&apos;s Batch — First 10 students get 10% off
            </div>
          )}

          {wing.id === "foundations" && (
            <div style={{ backgroundColor: "rgba(198,167,94,0.08)", border: "1px solid rgba(198,167,94,0.25)", borderRadius: "var(--radius-lg)", padding: "16px 24px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
              <svg style={{ width: "20px", height: "20px", flexShrink: 0, fill: "var(--color-brand-gold)" }} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-primary-navy)", fontWeight: "600" }}>Fees shown are starting ranges. Final pricing depends on class level, subject combination, and session frequency. WhatsApp us for a personalised quote.</p>
            </div>
          )}

          {wing.id === "launchpad" && (
            <div style={{ backgroundColor: "rgba(198,167,94,0.08)", border: "1px solid rgba(198,167,94,0.25)", borderRadius: "var(--radius-lg)", padding: "16px 24px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
              <svg style={{ width: "20px", height: "20px", flexShrink: 0, fill: "var(--color-brand-gold)" }} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-primary-navy)", fontWeight: "600" }}>Launchpad runs as 4–6 week courses, weekend workshops, and holiday bootcamps. Pricing varies by format and duration.</p>
            </div>
          )}

          {/* Grid of Course Pricing Tiers */}
          <div className={wing.id === "aspire" ? "pricing-pane active" : ""} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: wing.id === "aspire" ? "24px" : "20px" }}>
            {wingPrograms.map((prog) =>
              (prog.pricingTiers || []).map((tier) => {
                const fee = pricingMode === "online" ? tier.onlinePrice : tier.offlinePrice;
                const feeSuffix = pricingMode === "online" ? tier.onlinePriceSuffix : tier.offlinePriceSuffix;

                return (
                  <div
                    key={tier.id}
                    className={`pricing-card${tier.featured ? " featured" : ""}`}
                    style={{ display: "flex", flexDirection: "column", padding: "24px", height: "100%" }}
                  >
                    {tier.badge && (
                      <div className="featured-badge" style={{ backgroundColor: "var(--color-brand-gold)", color: "var(--color-primary-navy)" }}>
                        {tier.badge}
                      </div>
                    )}
                    <span className="price-label" style={tier.badge ? { marginTop: "8px" } : undefined}>
                      {tier.tierName}
                    </span>
                    <div
                      className="price-val"
                      style={{ color: "var(--color-brand-gold)", margin: "12px 0", fontSize: wing.id === "aspire" ? "32px" : "28px", fontWeight: "800" }}
                    >
                      {fee}
                      <span style={{ fontSize: wing.id === "aspire" ? "14px" : "13px", color: tier.featured ? "rgba(255,255,255,0.7)" : "var(--color-outline)", fontWeight: "normal" }}>
                        {feeSuffix}
                      </span>
                    </div>
                    {tier.format && (
                      <p className="font-body-md" style={{ color: tier.featured ? "rgba(255,255,255,0.8)" : "var(--color-outline)", fontSize: "14px", marginBottom: "16px", fontStyle: "italic" }}>
                        {tier.format}
                      </p>
                    )}
                    <p className="font-body-md" style={{ color: tier.featured ? "rgba(255,255,255,0.9)" : "var(--color-on-surface-variant)", marginBottom: "20px", flexGrow: 1, fontSize: wing.id === "aspire" ? "15px" : "14px" }}>
                      {tier.description}
                    </p>
                    <a
                      className={tier.featured ? "btn btn-gold btn-block" : "btn btn-secondary btn-block"}
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tier.whatsappMessage || `Hi CCA, I am enquiring about ${tier.tierName} (${pricingMode} mode).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tier.featured ? "Secure Your Spot" : wing.id === "foundations" ? "Get Exact Quote" : "Enquire on WhatsApp"}
                    </a>
                  </div>
                );
              })
            )}
          </div>
        </div>
      ),
    };
  });

  return (
    <section className="section-py fees-section" id="fees">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span className="hero-tagline font-label-lg" style={{ color: "var(--color-on-primary-container)" }}>
            Transparent Pricing
          </span>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, margin: "0.5rem 0", color: "var(--color-primary-navy)" }}>
            Fees &amp; Pricing
          </h2>
          <p style={{ color: "var(--color-on-surface-variant)", fontSize: "1rem", margin: "0 0 1.25rem 0" }}>
            Founder's Batches — Early registrations receive an immediate 10% waiver
          </p>

          {/* ONLINE / OFFLINE MODE SWITCHER PILL */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--color-surface-card, #ffffff)",
              padding: "4px",
              borderRadius: "100px",
              border: "1px solid rgba(31, 78, 121, 0.15)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <button
              onClick={() => setPricingMode("offline")}
              style={{
                padding: "8px 20px",
                borderRadius: "100px",
                fontSize: "0.9rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: pricingMode === "offline" ? "var(--color-primary-navy)" : "transparent",
                color: pricingMode === "offline" ? "#ffffff" : "var(--color-on-surface-variant)",
              }}
            >
              🏢 Offline Campus (Thiruninravur)
            </button>
            <button
              onClick={() => setPricingMode("online")}
              style={{
                padding: "8px 20px",
                borderRadius: "100px",
                fontSize: "0.9rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: pricingMode === "online" ? "var(--color-primary-navy)" : "transparent",
                color: pricingMode === "online" ? "#ffffff" : "var(--color-on-surface-variant)",
              }}
            >
              🌐 Live Interactive Online
            </button>
          </div>
        </div>

        <TabSwitcher tabs={tuitionFeeTabs} gridLayout={false} defaultTabId="aspire" />
      </div>
    </section>
  );
}
