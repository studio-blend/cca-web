import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import TabSwitcher from "@/components/TabSwitcher/TabSwitcher";
import SyllabusForm from "@/components/SyllabusForm/SyllabusForm";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";

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

  const skillTabs = [
    {
      id: "ui-ux",
      label: "🎨 UI/UX Design & Figma",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>UI/UX Interface &amp; Product Design</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "rgba(198,167,94,0.15)", color: "var(--color-primary-navy)", padding: "4px 12px", borderRadius: "16px" }}>Figma Certified</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Master modern visual design from low-fidelity wireframing to interactive high-fidelity prototypes using Figma. Learn spacing grids, color psychology, component systems, and responsive layout design.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Visual Foundations</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Typography scales, color harmony, &amp; 8pt spacing layout systems.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Figma Prototyping</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Component variants, auto-layout, interactive micro-animations &amp; screen transitions.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Portfolio Project</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Design a real mobile app or web interface ready to showcase on Behance &amp; LinkedIn.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "python",
      label: "🐍 Python Coding & Logic",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>Python Programming &amp; Algorithmic Logic</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "var(--color-surface-container)", padding: "4px 12px", borderRadius: "16px" }}>Zero-to-Hero Coding</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Coding taught as logical problem-solving rather than dry syntax memorization. Write real Python scripts to automate files, parse data, and build interactive desktop apps.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Core Fundamentals</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Variables, data structures (lists, dicts), control logic, &amp; modular functions.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Data Manipulation</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Reading JSON/CSV files, string parsing, &amp; basic data analytics automation.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Capstone App</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Build a functional Python utility tool or game to feature in your GitHub portfolio.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ai-literacy",
      label: "🤖 AI Workflows & Tools",
      content: (
        <div className="lead-form-card" style={{ maxWidth: "100%", padding: "32px", backgroundColor: "var(--color-surface-card)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", margin: 0 }}>AI Workflow Automation &amp; Prompt Engineering</h3>
            <span className="hero-tagline font-label-lg" style={{ background: "rgba(198,167,94,0.15)", color: "var(--color-primary-navy)", padding: "4px 12px", borderRadius: "16px" }}>Future Advantage</span>
          </div>
          <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
            Leverage cutting-edge generative AI models to multiply your productivity. Learn custom prompt structuring, AI design tools, and automated content pipelines.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Prompt Engineering</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Chain-of-thought prompting, role personas, &amp; structured output formatting.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>AI Design Integration</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Generating high-res visual assets &amp; icons directly into UI designs.</p>
            </div>
            <div style={{ padding: "16px", borderRadius: "8px", background: "var(--color-surface-container-low)" }}>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "6px" }}>Workflow Productivity</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Automating research synthesis, document drafting, &amp; repetitive tasks.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const launchpadFaqs = [
    {
      question: "Do I need any prior coding or design experience?",
      answer: "No prior experience is required! CCA Launchpad courses start right from ground zero, breaking down complex software tools into intuitive step-by-step exercises."
    },
    {
      question: "What laptop/computer hardware specifications are needed?",
      answer: "Any standard modern Windows or Mac laptop capable of running standard web browsers (Google Chrome) and Figma smoothly will work fine."
    },
    {
      question: "Will I receive a course completion certificate?",
      answer: "Yes, upon submitting your final capstone project (UI wireframe project or Python app), you will receive a verified CCA Launchpad Certificate of Accomplishment."
    },
    {
      question: "Are classes conducted on weekends or weekdays?",
      answer: "We offer both flexible weekend intensive tracks and evening weekday batches tailored for school/college students and young professionals."
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
              <span>🚀</span> Future-Ready Digital Skills
            </div>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)" }}>
              CCA Launchpad <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>Digital Skills Bootcamp</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginTop: "12px" }}>
              Learn practical skills used in top tech companies today — Figma UI/UX design, Python programming, and AI productivity tools.
            </p>

            {/* Quick Metrics Bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "24px", padding: "16px", background: "var(--color-surface-container-low)", borderRadius: "12px" }}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-brand-gold)" }}>100%</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Hands-on Projects</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-primary-navy)" }}>Figma &amp; Python</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Practical Tools</div>
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--color-primary-navy)" }}>Portfolio</div>
                <div style={{ fontSize: "12px", color: "var(--color-on-surface-variant)" }}>Ready Certificate</div>
              </div>
            </div>

            <div style={{ marginTop: "24px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a 
                className="btn btn-gold" 
                href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Launchpad%20digital%20skills%20track." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enquire on WhatsApp →
              </a>
              <a 
                className="btn"
                style={{ border: "1px solid var(--color-primary-navy)", color: "var(--color-primary-navy)" }}
                href="#skills"
              >
                Explore Modules
              </a>
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

      {/* Feature Highlights Grid */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Future Skill Streams</span>
            <h2 className="font-headline-lg">What You Will Master</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="testimonials-grid" style={{ marginTop: "32px" }}>
            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>🎨</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>UI/UX Design</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Typography grids, visual hierarchy, layout guidelines, Figma vector manipulation, and interactive prototype flows.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>💻</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>Python &amp; Logic</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Basic variables, conditional control flow loops, arrays, data algorithms, and structural programming.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(198,167,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "16px" }}>🤖</div>
                <h3 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "12px" }}>AI Literacy</h3>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                  Leveraging LLMs, custom prompt structure creation, and automating daily repetitive workflows to gain a competitive edge.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Skill Stream Tabs */}
      <section id="skills" className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Curriculum Deep-Dive</span>
            <h2 className="font-headline-lg">Explore Skill Tracks</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ marginTop: "32px" }}>
            <ScrollReveal>
              <TabSwitcher tabs={skillTabs} defaultTabId="ui-ux" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Learning Roadmap Pipeline */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Learning Methodology</span>
            <h2 className="font-headline-lg">Your Journey from Zero to Portfolio</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginTop: "32px" }}>
            <ScrollReveal className="lead-form-card" style={{ padding: "24px", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: "32px", fontWeight: "800", color: "var(--color-brand-gold)", marginBottom: "8px" }}>01</div>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "8px" }}>Foundations</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Master tool interface, keyboard shortcuts, &amp; core terminology.</p>
            </ScrollReveal>

            <ScrollReveal className="lead-form-card" style={{ padding: "24px", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: "32px", fontWeight: "800", color: "var(--color-brand-gold)", marginBottom: "8px" }}>02</div>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "8px" }}>Guided Projects</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Build step-by-step wireframes &amp; Python automation scripts with mentor feedback.</p>
            </ScrollReveal>

            <ScrollReveal className="lead-form-card" style={{ padding: "24px", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: "32px", fontWeight: "800", color: "var(--color-brand-gold)", marginBottom: "8px" }}>03</div>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "8px" }}>Capstone Project</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Design a complete original UI prototype or custom software app.</p>
            </ScrollReveal>

            <ScrollReveal className="lead-form-card" style={{ padding: "24px", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: "32px", fontWeight: "800", color: "var(--color-brand-gold)", marginBottom: "8px" }}>04</div>
              <h4 className="font-title-md" style={{ color: "var(--color-primary-navy)", marginBottom: "8px" }}>Certificate &amp; Showcase</h4>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)" }}>Receive verified certificate and present your live project to peers.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Syllabus Request Form */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
            <ScrollReveal>
              <span className="hero-tagline font-label-lg">Curriculum Guide</span>
              <h2 className="font-headline-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>Get Full Launchpad Bootcamp Syllabus</h2>
              <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginBottom: "24px" }}>
                Receive module breakdown lists, project timelines, and software setup guides on WhatsApp.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Detailed Figma &amp; Python Module Timelines</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Capstone Project Guidelines &amp; Rubrics</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-brand-gold)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>✓</div>
                  <span className="font-body-md" style={{ color: "var(--color-on-surface)" }}>Batch Timings &amp; Fee Structure</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lead-form-card" style={{ padding: "32px", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "16px" }}>
              <h3 className="font-title-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "8px", textAlign: "center" }}>Download Launchpad Syllabus</h3>
              <p className="font-body-sm" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", textAlign: "center" }}>Instant copy sent on WhatsApp.</p>
              <SyllabusForm programName="CCA Launchpad Digital Skills" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py">
        <div className="container" style={{ maxWidth: "840px" }}>
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Got Questions?</span>
            <h2 className="font-headline-lg">Launchpad FAQ</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ marginTop: "32px" }}>
            <ScrollReveal>
              <FAQAccordion items={launchpadFaqs} />
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
              Enquire on WhatsApp →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

