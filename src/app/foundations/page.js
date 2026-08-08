import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import TabSwitcher from "@/components/TabSwitcher/TabSwitcher";
import SyllabusForm from "@/components/SyllabusForm/SyllabusForm";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";

export const metadata = {
  title: "CCA Foundations (Classes 9-12)",
  description: "Premier concept tuition for CBSE & State Board Classes 9, 10, 11, and 12 in Chennai. Custom subject-matter clarity in Physics, Chemistry, Biology, and Maths.",
  alternates: {
    canonical: "https://crystalclearacademy.in/foundations",
  },
};

export default function FoundationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "CCA Foundations (Classes 9-12 Board Preparation)",
    "description": "Comprehensive academic tutoring specializing in Physics, Chemistry, Biology, and Mathematics for Classes 9 to 12. Supporting both CBSE and Tamil Nadu State Board.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Crystal Clear Academy",
      "sameAs": "https://crystalclearacademy.in"
    }
  };

  const classTabs = [
    {
      id: "class-9",
      label: "Class 9 Foundation",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>Class 9 — First Principles &amp; Core Science</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "var(--color-surface-container)", padding: "4px 12px", borderRadius: "16px" }}>Bridge to Senior High</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Transitioning from middle school to high school requires shifting from rote memory to analytical thinking. We focus on building fundamental mental models in Physics laws, Chemical nomenclature, and Algebraic foundations.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Physics</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Motion, Force &amp; Gravitation through real-world visual experiments.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Chemistry</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Matter, Atoms &amp; Molecules demystified with atomic structure charts.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Mathematics</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Polynomials, Linear Equations, &amp; Euclidean Geometry fundamentals.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Biology</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Cell Structure, Tissues, &amp; Living Systems visual anatomy maps.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "class-10",
      label: "Class 10 Board Excellence",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>Class 10 — Board Exam Mastery &amp; Numerical Confidence</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "rgba(198,167,94,0.15)", color: "var(--color-primary-navy)", padding: "4px 12px", borderRadius: "16px" }}>100% Board Target</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Class 10 sets the baseline for national entrance exams and high school streaming. We provide rigorous step-by-step presentation techniques, blueprint-based test series, and high-frequency numerical practice.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Light &amp; Electricity</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Ray diagrams &amp; circuit calculations mastered with zero formula confusion.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Carbon &amp; Reactions</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Balanced chemical equations and organic bonding mechanisms.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Trigonometry &amp; Algebra</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Quadratics, Progressions, &amp; Trigonometric proofs step-by-step.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Life Processes</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Diagram presentation techniques &amp; genetics fundamentals.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "class-11",
      label: "Class 11 Advanced Conceptual",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>Class 11 — Senior Science &amp; Competitive Foundation</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "var(--color-surface-container)", padding: "4px 12px", borderRadius: "16px" }}>Core Mechanics &amp; Calculus</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Class 11 is where 60% of entrance exam concepts originate. We eliminate the initial friction by teaching vector calculus, thermodynamic laws, and organic reaction pathways in structured visual steps.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Mechanics &amp; Vectors</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Free-body diagrams, rotational motion, &amp; work-energy calculations.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Physical &amp; Organic</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Stoichiometry, thermodynamics, IUPAC naming, &amp; reaction mechanisms.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Functions &amp; Limits</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Sets, Relations, Functions, Limits, Differentiation &amp; Coordinate Geometry.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Plant &amp; Human Biology</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Biomolecules, Cell Division, &amp; Systems Physiology in detail.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "class-12",
      label: "Class 12 Board Mastery",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>Class 12 — Board Cent-um &amp; Final Assessment Strategy</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "rgba(198,167,94,0.15)", color: "var(--color-primary-navy)", padding: "4px 12px", borderRadius: "16px" }}>Cent-um Preparation</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            The ultimate board examination milestone. We combine rigorous answer writing speed drills, full-length sample paper evaluations, and direct founder reviews for every student's tracking log.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Electrodynamics &amp; Optics</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Gauss law, AC circuits, Wave Optics, &amp; Semiconductors derivation blueprints.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Electrochemistry &amp; Named Reactions</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Nernst equation, Chemical Kinetics, &amp; organic conversion pathways.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Integral Calculus &amp; Vectors</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Definite Integrals, Differential Equations, &amp; 3D Spatial Vectors.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Genetics &amp; Biotechnology</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Molecular Basis of Inheritance, DNA Replication, &amp; Recombinant Tech.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const foundationsFaqs = [
    {
      question: "Which exam boards are covered under CCA Foundations?",
      answer: "We offer dedicated micro-batches for both CBSE and Tamil Nadu State Board (Samacheer Kalvi) syllabi for Classes 9 through 12, ensuring exact alignment with respective school assessments and board exam patterns."
    },
    {
      question: "What is the maximum student capacity per batch?",
      answer: "We strictly limit batch sizes to 15 students maximum. This allows the lead mentor to track each student's personal log sheet, identify individual learning gaps, and address doubts in real time."
    },
    {
      question: "How are tests and progress tracking conducted?",
      answer: "Weekly chapter tests are conducted followed by detailed diagnostic sheets sent to parents. Before major mid-term and board exams, students complete full-length mock examinations graded with board-standard marking keys."
    },
    {
      question: "Can students attend a trial demo class before enrolling?",
      answer: "Yes, we invite students and parents to attend an introductory concept session and interactive consultation with the founder mentor to experience our first-principles teaching method firsthand."
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
              <span>✨</span> Board Exam Excellence 2024–25
            </div>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)" }}>
              CCA Foundations <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>Classes 9–12</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginTop: "12px" }}>
              Build strong fundamentals in Science and Maths. We teach students how concepts work so they score top marks in Board exams without memorizing steps.
            </p>

            {/* Quick Metrics Bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "24px", padding: "16px", background: "var(--color-surface-container-low)", borderRadius: "12px" }}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-primary-navy)" }}>15 Max</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Students / Batch</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-brand-gold)" }}>100%</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Concept-First</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-primary-navy)" }}>CBSE &amp; State</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Board Aligned</div>
              </div>
            </div>

            <div style={{ marginTop: "24px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a 
                className="btn btn-gold" 
                href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Foundations%20program%20for%20Classes%209-12." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enquire on WhatsApp →
              </a>
              <a 
                className="btn"
                style={{ border: "1px solid var(--color-primary-navy)", color: "var(--color-primary-navy)" }}
                href="#curriculum"
              >
                Explore Syllabus
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="hero-visual-container">
            <svg viewBox="0 0 300 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="20" y="220" width="260" height="40" rx="6" fill="var(--color-primary-navy)" />
              <rect x="50" y="160" width="200" height="40" rx="6" fill="var(--color-academic-blue)" />
              <rect x="80" y="100" width="140" height="40" rx="6" fill="var(--color-secondary)" />
              <rect x="110" y="40" width="80" height="40" rx="6" fill="var(--color-brand-gold)" />
              <text x="150" y="245" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">BOARD EXCELLENCE (CLASS 12)</text>
              <text x="150" y="185" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">CONCEPTUAL STRENGTH (CLASS 11)</text>
              <text x="150" y="125" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">BOARD BRIDGE (CLASS 10)</text>
              <text x="150" y="65" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">FOUNDATIONS (CLASS 9)</text>
            </svg>
          </ScrollReveal>
        </div>
      </section>

      {/* Program Methodology */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Course Architecture</span>
            <h2 className="font-headline-lg">Why CCA Foundations?</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="testimonials-grid" style={{ marginTop: "32px" }}>
            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>🎯</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>CBSE &amp; State Board Sync</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Deep sync with modern Board exam formats. Custom assessment schedules designed to handle numerical problems and structured derivations seamlessly.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>👥</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>High Focus Micro-Batches</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Strict limitation of 15 students per batch. Ensures the lead mentor reviews every individual student&apos;s personal log sheet and homework corrections.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>💡</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Clarity-First Method</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Instead of rote memory, we break sciences down into core visual animations, diagrams, and first-principles logical steps that stick for life.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Curriculum Breakdown */}
      <section id="curriculum" className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Interactive Curriculum</span>
            <h2 className="font-headline-lg">Explore By Class Level</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ marginTop: "32px" }}>
            <ScrollReveal>
              <TabSwitcher tabs={classTabs} defaultTabId="class-10" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Instant Syllabus & Inquiry Form Section */}
      <section className="section-py">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
            <ScrollReveal>
              <span className="hero-tagline font-label-lg">Get Detailed Plan</span>
              <h2 className="font-headline-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>Download Complete Foundations Syllabus</h2>
              <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginBottom: "24px" }}>
                Receive our comprehensive chapter-by-chapter blueprint, recommended reference guides, and assessment schedules directly on your WhatsApp.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Full Subject Breakdowns for Classes 9–12</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Board Exam Scoring Blueprints</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Weekly Test &amp; Diagnostic Schedule</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lead-form-card" style={{ padding: "32px", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "16px" }}>
              <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "8px", textAlign: "center" }}>Request Syllabus &amp; Seat Info</h3>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", textAlign: "center" }}>Fill details below for an instant WhatsApp syllabus copy.</p>
              <SyllabusForm programName="CCA Foundations (Classes 9-12)" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "840px" }}>
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Got Questions?</span>
            <h2 className="font-headline-lg">Foundations FAQ</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ marginTop: "32px" }}>
            <ScrollReveal>
              <FAQAccordion items={foundationsFaqs} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py cta-section">
        <div className="container cta-container">
          <ScrollReveal>
            <h2 className="font-display-lg cta-title">Join a Foundations Batch</h2>
            <p className="cta-tamil">வலுவான அடித்தளம், சிறந்த எதிர்காலம்.</p>
            <p className="cta-desc font-body-lg">Get direct access to founder mentorship and small batch seats. Book your demo session now.</p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Foundations%20batch%20and%20want%20to%20reserve%20a%20seat."
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

