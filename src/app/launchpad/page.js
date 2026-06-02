import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import LeadForm from "@/components/LeadForm/LeadForm";

export const metadata = {
  title: "CCA Launchpad (Digital Skills & UI/UX Bootcamp)",
  description: "Gain future-ready digital competencies. Graphic Design, Figma UI/UX wireframing, Python programming, and AI automation training in Chennai.",
  alternates: {
    canonical: "https://crystalclearacademy.in/launchpad",
  },
};

export default function LaunchpadPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "CCA Launchpad (Digital Skills & UI/UX Bootcamp)",
    "description": "Equipping students with modern practical skillsets including Figma UI/UX wireframing, Python programming, and AI workflow automation.",
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
            <span className="hero-tagline font-label-lg">Future-Ready Capabilities</span>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)" }}>
              CCA Launchpad <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>Digital Skills</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)" }}>
              Equipping the next generation with digital tool competencies. Move past school definitions to master design frameworks, coding structures, and automation engines.
            </p>
            <div style={{ marginTop: "12px" }}>
              <LeadForm defaultGoal="launchpad" />
            </div>
          </ScrollReveal>

          <ScrollReveal className="hero-visual-container">
            <svg viewBox="0 0 300 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="30" y="60" width="240" height="150" rx="8" fill="none" stroke="var(--color-primary-navy)" strokeWidth="3" />
              <line x1="30" y1="95" x2="270" y2="95" stroke="var(--color-primary-navy)" strokeWidth="3" />
              <circle cx="50" cy="78" r="5" fill="var(--color-brand-gold)" />
              <circle cx="68" cy="78" r="5" fill="var(--color-secondary)" />
              <circle cx="86" cy="78" r="5" fill="var(--color-outline-variant)" />
              <text x="70" y="145" fill="var(--color-primary-navy)" fontFamily="monospace" fontSize="16" fontWeight="700">&lt;code&gt;</text>
              <text x="140" y="180" fill="var(--color-brand-gold)" fontFamily="monospace" fontSize="14" fontWeight="700">UI / UX FIGMA</text>
            </svg>
          </ScrollReveal>
        </div>
      </section>

      {/* Program Details */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Skills Curriculum</span>
            <h2 className="font-headline-lg">Future Skill Streams</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="testimonials-grid" style={{ marginTop: "24px" }}>
            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>UI/UX Design</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Typography grids, visual hierarchy, layout guidelines, Figma vector manipulation, and user journey flows. Build a portfolio that gets you recognized.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Python &amp; Logic</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Basic variables, conditional control flow loops, arrays, data algorithms, and structural object programming. Learn coding as a logical tool, not a memorized syntax.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>AI Literacy</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Leveraging LLMs and transformer models, custom prompt structure creation, and automating daily repetitive workflows. Build a competitive digital edge.
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
            <h2 className="font-display-lg cta-title">Reserve a Launchpad Slot</h2>
            <p className="cta-tamil">திறமைக்கு முன்னுரிமை, புதிய உலகிற்கு தகுதி.</p>
            <p className="cta-desc font-body-lg">Begin your journey in UI/UX Design and Python coding. Practical assignments and certification included.</p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Launchpad%20digital%20skills%20track."
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
