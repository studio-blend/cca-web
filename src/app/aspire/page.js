import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import TabSwitcher from "@/components/TabSwitcher/TabSwitcher";
import SyllabusForm from "@/components/SyllabusForm/SyllabusForm";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";

export const metadata = {
  title: "CCA Aspire (NEET Medical Entrance Coaching)",
  description: "Specialized NEET coaching in Chennai with 10+ years track record. Small batch mentoring focusing on speed techniques, conceptual clarity, and rigorous OMR practice.",
  alternates: {
    canonical: "https://crystalclearacademy.in/aspire",
  },
};

export default function AspirePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "CCA Aspire (NEET Coaching Program)",
    "description": "Intensive preparation program for the National Eligibility cum Entrance Test (NEET), with high focus on speed, OMR tests, and conceptual clarity.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Crystal Clear Academy",
      "sameAs": "https://crystalclearacademy.in"
    }
  };

  const neetTracks = [
    {
      id: "2-year",
      label: "2-Year Integrated (Class 11)",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>Class 11 to 12 — 2-Year NEET Masterclass Track</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "rgba(198,167,94,0.15)", color: "var(--color-primary-navy)", padding: "4px 12px", borderRadius: "16px" }}>Highest Success Rate</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Designed for Class 10 graduates stepping into Class 11. Establishes deep conceptual clarity in NCERT Biology, Physics derivations, and Physical Chemistry before building rapid speed techniques.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Phase 1 (Class 11)</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Complete NCERT Class 11 line-by-line coverage + topic-wise MCQ banks.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Phase 2 (Class 12)</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Class 12 syllabus completion + parallel Class 11 revision mock tests.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Phase 3 (Grand Test Series)</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>30+ Full-length NEET OMR simulations under strict 3-hour exam timing.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "1-year",
      label: "1-Year Target Track (Class 12)",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>Class 12 — 1-Year Fast-Track Sprint</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "var(--color-surface-container)", padding: "4px 12px", borderRadius: "16px" }}>Dual Board + NEET Focus</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Focused for Class 12 students aiming to crack NEET alongside their Board examinations. Dual-preparation strategy ensures zero compromise on Board marks while mastering high-yield NEET MCQs.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>High-Yield Focus</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Priority on top weightage chapters in Biology &amp; Organic Chemistry.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Physics Formula Matrix</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Shortcut sheets for solving complex numericals in under 45 seconds.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Board &amp; NEET Sync</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Balanced weekly schedule ensuring Board cent-um target &amp; NEET readiness.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "repeater",
      label: "Repeater / Dropper Batch",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>Intensive Repeater Track — Target 650+ Score</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "rgba(198,167,94,0.15)", color: "var(--color-primary-navy)", padding: "4px 12px", borderRadius: "16px" }}>100% Dedicated Focus</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Full-time intensive training for students taking a dedicated year to maximize their NEET score. Individual error analysis, personalized revision targets, and intense daily practice.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Daily MCQ Drills</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>150+ solved MCQs daily with mentor guidance and immediate error log reviews.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Custom Weakness Repair</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Specialized micro-classes addressing individual weak chapters in Physics/Chem.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Weekly All-India Level Tests</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Standard OMR evaluation simulating exact exam hall conditions and negative marking.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const neetFaqs = [
    {
      question: "How does CCA achieve strong results in Physics for NEET aspirants?",
      answer: "Physics is often the bottleneck for NEET aspirants. We break down Physics into dimensional shortcut frameworks, option weeding methods, and physical concept visualizations so students solve numerical problems within 45 to 60 seconds."
    },
    {
      question: "Are NCERT textbooks thoroughly covered?",
      answer: "Absolutely. NCERT Biology and Organic Chemistry are taught line-by-line, including diagram captions, summary tables, and hidden concept questions that frequently appear in NEET papers."
    },
    {
      question: "What is the batch size for NEET Aspire classes?",
      answer: "Our NEET batches are strictly capped at 15 students to ensure that every student gets direct attention from our founder and senior subject experts during doubt sessions and post-test reviews."
    },
    {
      question: "Do you offer scholarships for government school students in Tamil Nadu?",
      answer: "Yes! Through our Social Impact Initiative, we provide subsidized coaching and full mentorship support for deserving government school students eligible under Tamil Nadu's 7.5% reservation."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero Section */}
      <section className="hero-section" style={{ paddingTop: "120px", background: "var(--color-surface-container-lowest)" }}>
        <div className="container hero-grid">
          <ScrollReveal className="hero-content">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(198,167,94,0.12)", color: "var(--color-primary-navy)", padding: "6px 14px", borderRadius: "20px", fontWeight: "700", fontSize: "13px", marginBottom: "12px" }}>
              <span>🩺</span> Target 700+ NEET Score Track
            </div>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)" }}>
              CCA Aspire <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>NEET Medical Mastery</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginTop: "12px" }}>
              Over a decade of coaching excellence, guiding government and private school students to medical admissions. High-focus batches with direct founder supervision.
            </p>

            {/* Quick Metrics Bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "24px", padding: "16px", background: "var(--color-surface-container-low)", borderRadius: "12px" }}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-brand-gold)" }}>720 Target</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>NCERT Mastery</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-primary-navy)" }}>45 Sec</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Physics MCQ Rule</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-primary-navy)" }}>10+ Yrs</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Track Record</div>
              </div>
            </div>

            <div style={{ marginTop: "24px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a 
                className="btn btn-gold" 
                href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20NEET%20Aspire%20program." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enquire on WhatsApp →
              </a>
              <a 
                className="btn"
                style={{ border: "1px solid var(--color-primary-navy)", color: "var(--color-primary-navy)" }}
                href="#tracks"
              >
                View Batch Tracks
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="hero-visual-container">
            <svg viewBox="0 0 300 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="150" cy="150" r="130" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeDasharray="10 5" />
              <path d="M150 40 L150 260 M40 150 L260 150" stroke="rgba(31, 78, 121, 0.2)" strokeWidth="1.5" />
              <circle cx="150" cy="150" r="60" fill="var(--color-primary-navy)" />
              <text x="150" y="155" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">NEET 720</text>
              <g transform="translate(150, 40)">
                <circle cx="0" cy="0" r="25" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2"/>
                <text x="0" y="5" fontSize="10" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">BIOLOGY</text>
              </g>
              <g transform="translate(260, 150)">
                <circle cx="0" cy="0" r="25" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2"/>
                <text x="0" y="5" fontSize="10" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">PHYSICS</text>
              </g>
              <g transform="translate(150, 260)">
                <circle cx="0" cy="0" r="25" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2"/>
                <text x="0" y="5" fontSize="10" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">CHEM</text>
              </g>
              <g transform="translate(40, 150)">
                <circle cx="0" cy="0" r="25" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2"/>
                <text x="0" y="5" fontSize="10" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">OMR</text>
              </g>
            </svg>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">NEET Strategy</span>
            <h2 className="font-headline-lg">Our Focus Elements</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="testimonials-grid" style={{ marginTop: "32px" }}>
            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>⚡</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Physics MCQ Hacks</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Saves valuable time. Learn dimensional analysis, option weeding, and logical estimations to solve complex calculations in under 45 seconds.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>🧬</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Biology Visual Maps</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Complex human physiology and genetics processes mapped out in visual, color-coded node flows. Promotes 100% long-term NCERT retention.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>📝</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>OMR Exam Simulation</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Weekly paper exams under absolute time pressure, coupled with deep post-exam diagnostic review sheets to eliminate negative marks.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive NEET Batch Tracks */}
      <section id="tracks" className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Tailored Preparation</span>
            <h2 className="font-headline-lg">Choose Your NEET Batch Track</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ marginTop: "32px" }}>
            <ScrollReveal>
              <TabSwitcher tabs={neetTracks} defaultTabId="2-year" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Impact Highlight */}
      <section className="section-py" style={{ backgroundColor: "var(--color-primary-navy)", color: "#ffffff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <ScrollReveal>
            <div style={{ display: "inline-block", background: "rgba(198,167,94,0.2)", color: "var(--color-brand-gold)", padding: "4px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: "700", marginBottom: "16px" }}>
              SOCIAL IMPACT INITIATIVE
            </div>
            <h2 className="font-headline-lg" style={{ color: "#ffffff", marginBottom: "16px" }}>Empowering Government School Aspirants</h2>
            <p className="font-body-lg" style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.7", marginBottom: "24px" }}>
              At Crystal Clear Academy, we run special subsidized batches for government school students across Tamil Nadu, equipping them with elite learning tools, OMR practice books, and personal mentor guidance to claim their medical board seats with pride.
            </p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20know%20more%20about%20the%20Government%20School%20NEET%20Scholarship%20Initiative."
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire About Scholarships →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Syllabus Request & Diagnostic Form */}
      <section className="section-py">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
            <ScrollReveal>
              <span className="hero-tagline font-label-lg">Start Your Journey</span>
              <h2 className="font-headline-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>Request NEET Program Pack &amp; Diagnostic Session</h2>
              <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginBottom: "24px" }}>
                Get our full NEET chapter weightage chart, formula matrices, and schedule a 1-on-1 performance diagnostic call with our lead mentor.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Line-by-Line NCERT Biology Mind Maps</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Physics 45-Second Shortcut Problem Solver</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Weekly OMR Test Series Schedule</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lead-form-card" style={{ padding: "32px", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "16px" }}>
              <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "8px", textAlign: "center" }}>Request NEET Syllabus &amp; Demo</h3>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", textAlign: "center" }}>Receive details on WhatsApp instantly.</p>
              <SyllabusForm programName="CCA Aspire NEET Program" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NEET FAQs */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Clear Your Doubts</span>
            <h2 className="font-headline-lg">NEET Aspire FAQ</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ marginTop: "32px" }}>
            <ScrollReveal>
              <FAQAccordion items={neetFaqs} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py cta-section">
        <div className="container cta-container">
          <ScrollReveal>
            <h2 className="font-display-lg cta-title">Reserve Your NEET Seat</h2>
            <p className="cta-tamil">நிச்சயமான வெற்றி, தெளிவான இலக்கு.</p>
            <p className="cta-desc font-body-lg">Batches are limited to 15 students per group. Schedule your diagnosis test with the lead mentor today.</p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20NEET%20Aspire%20batch%20and%20want%20to%20reserve%20a%20seat."
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

