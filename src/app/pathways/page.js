import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import LeadForm from "@/components/LeadForm/LeadForm";

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
            <span className="hero-tagline font-label-lg">Teacher Certification Prep</span>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)" }}>
              CCA Pathways <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>TET Mentoring</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)" }}>
              Helping teachers build a foundational career path. Master pedagogical psychology concepts, question matrices, and child development theory with clarity.
            </p>
            <div style={{ marginTop: "12px" }}>
              <LeadForm defaultGoal="pathways" />
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

      {/* Highlights */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Mentoring Blueprint</span>
            <h2 className="font-headline-lg">TET Preparation Pillars</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="testimonials-grid" style={{ marginTop: "24px" }}>
            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Pedagogy &amp; Development</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Deep conceptual mastery of Piaget, Vygotsky, Kohlberg, and key child development stages. Answer psychology questions with logical certainty.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Worksheets &amp; Mapping</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Subject-specific analysis worksheets mapping previous year&apos;s TET Papers I and II issues to concrete logical points.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Founder Guidance</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Direct strategy sessions, exam-hall time budgeting methodologies, and personalized reviews for educators.
                </p>
              </div>
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
              Reserve Seat on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
