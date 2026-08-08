import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import TabSwitcher from "@/components/TabSwitcher/TabSwitcher";
import SyllabusForm from "@/components/SyllabusForm/SyllabusForm";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";

export const metadata = {
  title: "CCA Pathways (Teacher Eligibility Test TET Mentoring)",
  description: "Specialized mentoring for TET Paper I & Paper II aspirants in Chennai. Master child psychology, pedagogical frameworks, and subject pedagogy with our concept-first method.",
  alternates: {
    canonical: "https://crystalclearacademy.in/pathways",
  },
};

export default function PathwaysPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "CCA Pathways (TET Exam Preparation)",
    "description": "Mentorship program designed for teachers preparing for Teacher Eligibility Tests (TET), specializing in Child Development and Pedagogy.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Crystal Clear Academy",
      "sameAs": "https://crystalclearacademy.in"
    }
  };

  const tetTracks = [
    {
      id: "paper-1",
      label: "📘 TET Paper I (Classes 1–5)",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>TET Paper I — Primary Teacher Eligibility Track</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "rgba(198,167,94,0.15)", color: "var(--color-primary-navy)", padding: "4px 12px", borderRadius: "16px" }}>Classes 1 to 5 Focus</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Tailored specifically for primary stage educators. Focuses heavily on Early Child Development &amp; Pedagogy, foundational literacy/maths teaching methodology, and environmental studies.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Child Development</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Early child psychology theories (Piaget, Vygotsky) &amp; primary classroom management.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Language &amp; EVS</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Tamil/English grammar &amp; environmental science conceptual clarity.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>PYQ Solve Drills</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Detailed 10-year Paper I solved question bank analysis and options weeding.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "paper-2",
      label: "📙 TET Paper II (Classes 6–8)",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>TET Paper II — Upper Primary &amp; High School Track</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "var(--color-surface-container)", padding: "4px 12px", borderRadius: "16px" }}>Classes 6 to 8 Focus</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Specialized for upper primary and secondary school subject teachers. Advanced Adolescent Pedagogy combined with rigorous Science/Maths or Social Science domain preparation.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Adolescent Pedagogy</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Kohlberg moral development, motivation theories, &amp; inclusive education frameworks.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Maths &amp; Science Stream</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>State Board textbook mapping (Classes 6-10) with concept shortcut notes.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Social Science Stream</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>History chronologies, geography maps, &amp; civics conceptual frameworks.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const tetFaqs = [
    {
      question: "Which languages are supported in the study material and teaching?",
      answer: "We provide comprehensive bilingual study materials and mentoring in both Tamil and English, ensuring educators are completely comfortable with terminology in their chosen exam medium."
    },
    {
      question: "How is Child Development & Pedagogy taught?",
      answer: "Instead of asking candidates to memorize theory names, we use practical real-life classroom scenario case studies. This allows teachers to answer complex psychological case questions with speed and logical accuracy."
    },
    {
      question: "Are class timings suitable for working school teachers?",
      answer: "Yes! We run dedicated weekend batches and early morning / evening sessions designed specifically for full-time working teachers balancing employment with exam preparation."
    },
    {
      question: "What is included in the TET test series?",
      answer: "Candidates receive full-length timed mock tests simulating exact TRB TET exam pattern, complete with instant detailed solution guides and individual feedback on speed management."
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
              <span>🎓</span> Teacher Certification Prep
            </div>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)" }}>
              CCA Pathways <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>TET Mentoring Program</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginTop: "12px" }}>
              Helping educators excel in Teacher Eligibility Tests (TET Paper I &amp; II). Master Child Development &amp; Pedagogy theories and question strategies with confidence.
            </p>

            {/* Quick Metrics Bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "24px", padding: "16px", background: "var(--color-surface-container-low)", borderRadius: "12px" }}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-brand-gold)" }}>Paper I &amp; II</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Complete Coverage</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-primary-navy)" }}>Pedagogy</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Case-Study Based</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-primary-navy)" }}>Bilingual</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Tamil &amp; English</div>
              </div>
            </div>

            <div style={{ marginTop: "24px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a 
                className="btn btn-gold" 
                href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Pathways%20TET%20Mentoring%20program." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enquire About This Program →
              </a>
              <a 
                className="btn"
                style={{ border: "1px solid var(--color-primary-navy)", color: "var(--color-primary-navy)" }}
                href="#papers"
              >
                View Exam Tracks
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="hero-visual-container">
            <svg viewBox="0 0 300 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="150" cy="150" r="100" fill="none" stroke="var(--color-primary-navy)" strokeWidth="3" />
              <circle cx="150" cy="150" r="80" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2" strokeDasharray="6 3" />
              <path d="M130 135 L130 165 L170 165" fill="none" stroke="var(--color-primary-navy)" strokeWidth="3" />
              <polygon points="150,60 153,70 165,70 155,77 159,89 150,82 141,89 145,77 135,70 147,70" fill="var(--color-brand-gold)" />
              <text x="150" y="270" fill="var(--color-primary-navy)" fontSize="14" fontWeight="700" textAnchor="middle">PEDAGOGICAL EXPERTISE</text>
            </svg>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Mentoring Blueprint</span>
            <h2 className="font-headline-lg">TET Preparation Pillars</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="testimonials-grid" style={{ marginTop: "32px" }}>
            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>🧠</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Pedagogy &amp; Development</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Deep conceptual mastery of Piaget, Vygotsky, Kohlberg, and key child development stages. Answer psychology questions with logical certainty.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>📊</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Worksheets &amp; PYQ Mapping</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Subject-specific analysis worksheets mapping previous year&apos;s TET Papers I and II issues to concrete logical points and scoring strategies.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>⭐</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Founder Mentorship</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Direct strategy sessions, exam-hall time budgeting methodologies, and personalized reviews for educators preparing alongside school teaching.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Exam Track Switcher */}
      <section id="papers" className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Select Your Paper</span>
            <h2 className="font-headline-lg">TET Exam Tracks</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ marginTop: "32px" }}>
            <ScrollReveal>
              <TabSwitcher tabs={tetTracks} defaultTabId="paper-1" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Syllabus Request & Study Material Section */}
      <section className="section-py">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
            <ScrollReveal>
              <span className="hero-tagline font-label-lg">Get Study Plan</span>
              <h2 className="font-headline-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>Request TET Study Plan &amp; PYQ Breakdowns</h2>
              <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginBottom: "24px" }}>
                Receive our comprehensive Child Psychology formula guide, topic-wise TET syllabus blueprint, and test series dates on WhatsApp.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Child Psychology &amp; Pedagogy Theoretical Maps</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>10-Year Previous Paper Trend Analysis</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Bilingual (Tamil/English) Reference Notes</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lead-form-card" style={{ padding: "32px", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "16px" }}>
              <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "8px", textAlign: "center" }}>Request TET Study Material</h3>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", textAlign: "center" }}>Instant copy sent on WhatsApp.</p>
              <SyllabusForm programName="CCA Pathways TET Mentoring" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TET FAQs */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Clear Your Doubts</span>
            <h2 className="font-headline-lg">Pathways TET FAQ</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ marginTop: "32px" }}>
            <ScrollReveal>
              <FAQAccordion items={tetFaqs} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py cta-section">
        <div className="container cta-container">
          <ScrollReveal>
            <h2 className="font-display-lg cta-title">Join a Pathways Batch</h2>
            <p className="cta-tamil">வழிகாட்டும் ஆசிரியர்களுக்கு சிறந்த வழிகாட்டுதல்.</p>
            <p className="cta-desc font-body-lg">Accelerate your state eligibility preparation with founder mentorship batches. Claim your seat now.</p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20TET%20Pathways%20batch%20and%20want%20to%20reserve%20a%20seat."
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Seat on WhatsApp →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

