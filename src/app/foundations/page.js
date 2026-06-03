import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="hero-section" style={{ paddingTop: "120px", background: "var(--color-surface-container-lowest)" }}>
        <div className="container hero-grid">
          <ScrollReveal className="hero-content">
            <span className="hero-tagline font-label-lg">Board Exam Preparation</span>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)" }}>
              CCA Foundations <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>Classes 9–12</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)" }}>
              Building conceptual concrete bases that support high board score outcomes. We transition students from rote learning memory loops into intuitive first-principles problem-solving.
            </p>
            <div style={{ marginTop: "20px" }}>
              <a 
                className="btn btn-gold" 
                href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Foundations%20program%20for%20Classes%209-12." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enquire About This Program →
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

      {/* Course Highlights */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Course Architecture</span>
            <h2 className="font-headline-lg">Program Methodology</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="testimonials-grid" style={{ marginTop: "24px" }}>
            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>CBSE &amp; State Board</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Deep sync with modern Board exam formats. Custom assessment schedules designed to handle numerical problems and structured derivations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>High Focus Batches</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Strict limitation of 15 students per batch. Ensures the lead mentor reviews every individual student&apos;s tracking log sheet.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Clarity-First Method</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Instead of rote memory, we break sciences down into core visual animations, diagrams, and first-principles logical steps.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Curriculum Breakdown</span>
            <h2 className="font-headline-lg">Subject Mastery Details</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ maxWidth: "800px", margin: "40px auto 0", display: "flex", flexDirection: "column", gap: "24px" }}>
            <ScrollReveal className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
              <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Physics — Conceptual Mechanics &amp; Electrodynamics</h3>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                We guide students through derivations by showing the physical application. Learn how vector mechanics, electric flux, and quantum principles behave through intuitive models before writing down formulas.
              </p>
            </ScrollReveal>

            <ScrollReveal className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
              <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Chemistry — Organic Mechanics &amp; Stoichiometry</h3>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                Mastering reaction pathways through step-by-step logic instead of plain memorization. Stoichiometric calculations are broken down into simple, visual proportions.
              </p>
            </ScrollReveal>

            <ScrollReveal className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
              <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Mathematics — Calculus &amp; Analytical Algebra</h3>
              <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                Calculus represents change, and geometry represents spatial structures. We teach integration and coordinate systems as visual frameworks so students solve problems naturally.
              </p>
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
              Reserve Seat on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
