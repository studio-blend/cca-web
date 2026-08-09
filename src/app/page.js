import Link from "next/link";
import LeadForm from "@/components/LeadForm/LeadForm";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import TabSwitcher from "@/components/TabSwitcher/TabSwitcher";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";
import SyllabusForm from "@/components/SyllabusForm/SyllabusForm";
import BannerSlideshow from "@/components/BannerSlideshow/BannerSlideshow";
import PricingSection from "@/components/PricingSection/PricingSection";
import { getUpcomingEventDates } from "@/lib/events";
import { getFeaturedWings, getSiteSettings, getAllPrograms } from "@/lib/cms";

export default function Home() {
  const wings = getFeaturedWings();
  const settings = getSiteSettings();
  const allPrograms = getAllPrograms();
  const whatsappNumber = settings.whatsappPhone || "919841644813";

  // Build Ecosystem tabs dynamically from wings
  const ecosystemTabs = wings.map((wing) => ({
    id: wing.wingSlug || wing.id,
    label: wing.wingLabel,
    content: (
      <>
        {/* Left Column: Program Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${wing.courses?.length > 3 ? "200px" : "220px"}, 1fr))`, gap: "16px" }}>
            {(wing.courses || []).map((course) => (
              <div key={course.id} className="pricing-card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px", margin: 0 }}>
                <span className="price-label" style={{ alignSelf: "flex-start", marginBottom: "8px", fontSize: wing.id === "launchpad" || wing.id === "pathways" ? "10px" : undefined, padding: wing.id === "launchpad" || wing.id === "pathways" ? "2px 8px" : undefined }}>{course.label}</span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: wing.id === "pathways" ? "16px" : "18px" }}>{course.title}</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", flexGrow: 1, fontSize: wing.id === "pathways" ? "13px" : "14px", lineHeight: "1.4" }}>
                  {course.description}
                </p>
                {course.tags?.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "12px", marginBottom: "8px" }}>
                    {course.tags.map((tag, i) => (
                      <span key={i} style={{ fontSize: "10px", backgroundColor: "rgba(198,167,94,0.1)", color: "var(--color-primary-navy)", padding: "2px 6px", borderRadius: "4px", fontWeight: "600" }}>{tag}</span>
                    ))}
                  </div>
                )}
                {!course.tags?.length && (
                  <a
                    className="btn btn-secondary btn-block"
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(course.whatsappMessage || `Hi CCA, I am interested in ${course.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: "8px 16px", fontSize: "13px", marginTop: "auto" }}
                  >
                    Enquire on WhatsApp
                  </a>
                )}
              </div>
            ))}
          </div>

          {wing.boardsCovered?.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", margin: "4px 0" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", color: "var(--color-primary-navy)", textTransform: "uppercase", marginRight: "8px" }}>Boards Covered:</span>
              {wing.boardsCovered.map((board, i) => (
                <span key={i} style={{ fontSize: "11px", fontWeight: "600", backgroundColor: "rgba(31,78,121,0.06)", color: "var(--color-academic-blue)", padding: "4px 10px", borderRadius: "100px" }}>{board}</span>
              ))}
            </div>
          )}

          {wing.formatsNote && (
            <div style={{ padding: "12px 16px", backgroundColor: "rgba(198,167,94,0.06)", borderRadius: "var(--radius-md)", borderLeft: "3px solid var(--color-brand-gold)", fontSize: "13px", color: "var(--color-primary-navy)", fontWeight: "600" }}>
              <strong>{wing.formatsNote}</strong>
            </div>
          )}

          <Link
            href={wing.detailPageUrl || `/${wing.wingSlug}`}
            className={wing.id === "launchpad" ? "btn btn-gold font-label-md" : "btn btn-secondary font-label-md"}
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderColor: wing.id !== "launchpad" ? "var(--color-brand-gold)" : undefined,
              color: "var(--color-primary-navy)",
              fontWeight: "600",
              padding: "10px 20px"
            }}
          >
            {wing.exploreButtonText || `Explore ${wing.wingLabel} →`}
          </Link>
        </div>

        {/* Right Column: Syllabus Form Widget */}
        <div className="syllabus-form-card" style={{ backgroundColor: "var(--color-surface-container-low)", padding: "24px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(31,78,121,0.08)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0", fontSize: "18px" }}>Get Syllabus Details</h4>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "16px", fontSize: "13px", lineHeight: "1.4" }}>
            Leave your details to receive the comprehensive program syllabus and timelines on WhatsApp.
          </p>
          <SyllabusForm programName={wing.syllabusFormLabel || wing.wingLabel} />
        </div>
      </>
    )
  }));

  // Build Pricing tabs dynamically from wings
  const tuitionFeeTabs = wings.map((wing) => {
    // Check if pathways-style simple CTA
    const isSimpleCTA = wing.pricingTiers?.length === 1 && wing.pricingTiers[0].ctaStyle === "simple";

    return {
      id: wing.wingSlug || wing.id,
      label: wing.id === "aspire" ? "Aspire (NEET)" : wing.wingLabel?.replace("CCA ", "") || wing.id,
      content: isSimpleCTA ? (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="pricing-card" style={{ maxWidth: "600px", padding: "40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%" }}>
            <h3 style={{ color: "var(--color-brand-gold)", fontSize: "24px", fontWeight: "700" }}>{wing.pricingTiers[0].tierName}</h3>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", fontSize: "18px", margin: "10px 0" }}>
              {wing.pricingTiers[0].description}
            </p>
            <a className="btn btn-secondary" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(wing.pricingTiers[0].whatsappMessage || "Hi CCA, I am enquiring about pricing.")}`} target="_blank" rel="noopener noreferrer" style={{ padding: "12px 32px" }}>
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          {/* Banner */}
          {wing.bannerText && (
            wing.bannerStyle === "gold" ? (
              <div style={{ backgroundColor: "var(--color-brand-gold)", color: "var(--color-primary-navy)", padding: "12px 24px", borderRadius: "var(--radius-lg)", marginBottom: "24px", textAlign: "center", fontWeight: "700", fontSize: "16px" }}>
                {wing.bannerText}
              </div>
            ) : (
              <div style={{ backgroundColor: "rgba(198,167,94,0.08)", border: "1px solid rgba(198,167,94,0.25)", borderRadius: "var(--radius-lg)", padding: "16px 24px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
                <svg style={{ width: "20px", height: "20px", flexShrink: 0, fill: "var(--color-brand-gold)" }} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <p style={{ margin: 0, fontSize: "14px", color: "var(--color-primary-navy)", fontWeight: "600" }}>{wing.bannerText}</p>
              </div>
            )
          )}

          {/* Pricing Cards */}
          <div className={wing.id === "aspire" ? "pricing-pane active" : ""} style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${wing.pricingTiers?.length > 2 ? "220px" : "240px"}, 1fr))`, gap: wing.id === "aspire" ? "24px" : "20px" }}>
            {(wing.pricingTiers || []).map((tier) => (
              <div key={tier.id} className={`pricing-card${tier.featured ? " featured" : ""}`} style={{ display: "flex", flexDirection: "column", padding: "24px", height: "100%" }}>
                {tier.badge && (
                  <div className="featured-badge" style={{ backgroundColor: "var(--color-brand-gold)", color: "var(--color-primary-navy)" }}>{tier.badge}</div>
                )}
                <span className="price-label" style={tier.badge ? { marginTop: "8px" } : undefined}>{tier.tierName}</span>
                <div className="price-val" style={{ color: "var(--color-brand-gold)", margin: "12px 0", fontSize: tier.fee ? (wing.id === "aspire" ? "32px" : "28px") : "18px", fontWeight: "800" }}>
                  {tier.fee}<span style={{ fontSize: tier.fee ? (wing.id === "aspire" ? "14px" : "13px") : "14px", color: tier.featured ? "rgba(255,255,255,0.7)" : "var(--color-outline)", fontWeight: "normal" }}>{tier.feeSuffix}</span>
                </div>
                {tier.format && (
                  <p className="font-body-md" style={{ color: tier.featured ? "rgba(255,255,255,0.8)" : "var(--color-outline)", fontSize: "14px", marginBottom: "16px", fontStyle: "italic" }}>
                    {tier.format}
                  </p>
                )}
                <p className="font-body-md" style={{ color: tier.featured ? "rgba(255,255,255,0.9)" : "var(--color-on-surface-variant)", marginBottom: "20px", flexGrow: 1, fontSize: wing.id === "aspire" ? "15px" : "14px" }}>
                  {tier.description}
                </p>
                <a className={tier.featured ? "btn btn-gold btn-block" : "btn btn-secondary btn-block"} href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(tier.whatsappMessage || "Hi CCA, I am enquiring about pricing.")}`} target="_blank" rel="noopener noreferrer">
                  {tier.featured ? "Secure Your Spot" : (wing.id === "foundations" ? "Get Exact Quote" : "Enquire on WhatsApp")}
                </a>
              </div>
            ))}
          </div>
        </div>
      )
    };
  });

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
      answer: "We specialize in Live Interactive Online Coaching — offering focused 1-on-1 personal teaching for your child as well as premium small-batch sessions. Classes are accessible from anywhere in Tamil Nadu, India, or abroad without location limits."
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

  const eventDates = getUpcomingEventDates();

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

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Crystal Clear Academy",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <ScrollReveal className="hero-content">
            <span className="hero-tagline font-label-lg">Premium Online Coaching · Thiruninravur HQ</span>
            <div className="urgency-badge" style={{ marginTop: "4px" }}>
              <span className="urgency-dot"></span>
              <span>NEET Founder's Batch: Only 8 seats left</span>
            </div>
            <h1 className="hero-title font-display-lg">
              Where Excellence Begins with <span className="text-glow-gold">Clarity</span>
            </h1>
            <p className="hero-tamil">தெளிவே வெற்றியின் தொடக்கம்</p>
            <p className="hero-description font-body-lg">
              Led by 18+ years of teaching excellence. Custom courses structured for Classes 9–12 Board Exams, NEET mastery, and future-focused digital competencies.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "4px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", color: "var(--color-primary-navy)", backgroundColor: "rgba(31,78,121,0.06)", border: "1px solid rgba(31,78,121,0.12)", borderRadius: "100px", padding: "4px 12px" }}>
                <svg style={{ width: "14px", height: "14px", fill: "var(--color-primary-navy)" }} viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Online 1-on-1 & Small Batches · Worldwide Reach
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
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>Founder's Career</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Board Pass Rate</span>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>Founder's Track Record</span>
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
        <div className="container" style={{ padding: "20px var(--spacing-lg)" }}>
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
                  <div className="founder-role">Lead Educator & Founder</div>
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
            <span className="founder-subtitle font-label-lg">Founder's Vision</span>
            <h2 className="founder-title font-headline-lg">Mentorship by Revathy M.</h2>
            <p className="founder-desc font-body-lg">
              With 18+ years of teaching leadership in Chennai, Revathy M. specializes in conceptual coaching for Physics, Chemistry, and Mathematics. Her clarity-first mentoring guides students to excel in school boards while building the speed needed to crack NEET.
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
                <span><strong>Track record of training government school candidates</strong> to qualify for MBBS/BDS under 7.5% reservation.</span>
              </li>
              <li className="checklist-item font-body-md" style={{ fontWeight: "600" }}>
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span><strong>Parent Peace-of-Mind:</strong> Weekly progress updates, biometric attendance tracking, and CCTV secured Anna Nagar center.</span>
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

      {/* Marketing Banners Slideshow */}
      <BannerSlideshow />

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

      {/* Pricing Section with Online/Offline Mode Switcher */}
      <PricingSection programs={allPrograms} whatsappNumber={whatsappNumber} />

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
                  <span className="event-time">{eventDates.neetSeminarDate}</span>
                  <a
                    className="event-btn"
                    href={`https://wa.me/919841644813?text=${encodeURIComponent(`Hi CCA, I want to register free for the NEET Mock Strategy Seminar on ${eventDates.neetSeminarDate}.`)}`}
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
                  <span className="event-time">{eventDates.boardWebinarDate}</span>
                  <a
                    className="event-btn"
                    href={`https://wa.me/919841644813?text=${encodeURIComponent(`Hi CCA, I want to register free for the Class 10 Board Prep Webinar on ${eventDates.boardWebinarDate}.`)}`}
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
                <h4 className="event-title">{eventDates.batchMonthName} Admissions Open</h4>
                <p className="event-desc">New high-focus batches (max 15 students) begin {eventDates.batchStartDate}. Seats fill fast — register now to secure direct mentor access.</p>
                <div className="event-footer">
                  <span className="event-time">{eventDates.batchStartDate}</span>
                  <a
                    className="event-btn"
                    href={`https://wa.me/919841644813?text=${encodeURIComponent(`Hi CCA, I want to register for the ${eventDates.batchMonthName} batch admission beginning ${eventDates.batchStartDate}.`)}`}
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
              Get direct access to standard board prep, elite NEET coaching, and job-ready future digital skillsets.
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
