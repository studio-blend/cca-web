import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import LeadForm from "@/components/LeadForm/LeadForm";

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
            <span className="hero-tagline font-label-lg">NEET Medical Exam Prep</span>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)" }}>
              CCA Aspire <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>NEET Mastery</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)" }}>
              Over a decade of coaching excellence, guiding government and private school students to medical admissions. High-focus batches with founder supervision.
            </p>
            <div style={{ marginTop: "12px" }}>
              <LeadForm defaultGoal="aspire" />
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

      {/* Highlights */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">NEET Strategy</span>
            <h2 className="font-headline-lg">Our Focus Elements</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="testimonials-grid" style={{ marginTop: "24px" }}>
            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Physics MCQ Hacks</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Saves valuable time. Learn dimensional analysis, option weeding, and logical estimations to solve complex calculations in under 45 seconds.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Biology Visual Maps</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Complex human physiology and genetics processes mapped out in visual, color-coded node flows. Promotes long-term retention.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>OMR Exam Simulation</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Weekly paper exams under absolute time pressure, coupled with deep post-exam diagnostic review boards.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="section-py" style={{ backgroundColor: "var(--color-primary-container)", color: "#ffffff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <ScrollReveal>
            <span className="hero-tagline font-label-lg" style={{ color: "var(--color-brand-gold)" }}>Social Impact Initiative</span>
            <h2 className="font-headline-lg" style={{ color: "#ffffff", marginTop: "10px", marginBottom: "16px" }}>Supporting Government Candidates</h2>
            <p className="font-body-lg" style={{ color: "var(--color-on-primary-container)", lineHeight: "1.6" }}>
              At Crystal Clear Academy, we run special subsidized batches for government school students, equipping them with elite tools and resources to claim their medical board reservations with pride and capability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py cta-section">
        <div className="container cta-container">
          <ScrollReveal>
            <h2 className="font-display-lg cta-title">Reserve Your NEET Seat</h2>
            <p className="cta-tamil">நிச்சயமான வெற்றி, தெளிவான இலக்கு.</p>
            <p className="cta-desc font-body-lg">Batches are limited to 8-15 students. Schedule your diagnosis test with the lead mentor today.</p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20NEET%20Aspire%20batch%20and%20want%20to%20reserve%20a%20seat."
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve seat on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
