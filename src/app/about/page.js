import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export const metadata = {
  title: "About Us | Our Founder & Educational Philosophy",
  description: "Learn about the mission, values, and founder behind Crystal Clear Academy (CCA) Chennai. 18+ years of academic guidance and NEET mastery.",
  alternates: {
    canonical: "https://crystalclearacademy.in/about",
  },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Lead Mentor & Founder",
      role: "Physics & Chemistry specialist",
      bio: "18+ years of teaching excellence, specializing in board prep mechanics, NEET conceptual shortcut strategies, and child psychology pedagogy.",
      avatarSeed: "founder"
    },
    {
      name: "Senior Biology Faculty",
      role: "Human Physiology & Genetics",
      bio: "12+ years experience translating molecular biology and cell genetics into high-retention visual diagrams and structured concept maps.",
      avatarSeed: "bio"
    },
    {
      name: "Senior Mathematics Head",
      role: "Calculus & Geometry mentor",
      bio: "15+ years experience building algebraic reasoning and calculus visual proofs for CBSE board topper aspirants.",
      avatarSeed: "math"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ paddingTop: "120px", background: "linear-gradient(180deg, var(--color-surface-container-low) 0%, var(--color-surface-container-lowest) 100%)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <ScrollReveal>
            <span className="hero-tagline font-label-lg">Our Origins</span>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>
              Our Journey of <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>Conceptual Clarity</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)" }}>
              Founded in 2006 on the principles of logic, simplicity, and intensive personal mentorship. We believe every student has the capacity to excel once technical terms are mapped onto real-world frameworks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-lowest)" }}>
        <div className="container founder-grid" style={{ alignItems: "center" }}>
          <ScrollReveal className="founder-card-side">
            <div className="founder-quote-card" style={{ maxWidth: "100%" }}>
              <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: "100px", height: "100px", margin: "0 auto 20px", display: "block" }}>
                <circle cx="60" cy="60" r="58" fill="rgba(198,167,94,0.1)" stroke="var(--color-brand-gold)" strokeWidth="2"/>
                <path d="M60 30 C72 30 78 40 78 52 C78 64 70 70 60 70 C50 70 42 64 42 52 C42 40 48 30 60 30 Z" fill="var(--color-brand-gold)"/>
                <path d="M25 102 C25 80 42 75 60 75 C78 75 95 80 95 102 Z" fill="var(--color-brand-gold)"/>
              </svg>
              <h3 className="font-headline-sm" style={{ textAlign: "center", color: "#ffffff" }}>{"The Founder's Journey"}</h3>
              <p className="font-body-md" style={{ fontStyle: "italic", textAlign: "center", color: "var(--color-on-primary-container)", marginTop: "8px" }}>
                {"\"Over my 18 years of direct tutoring, I realized the biggest barrier to high grades is vocabulary intimidation. Once we demystify math symbols and chemical formulas, confidence returns immediately.\""}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="founder-text-block">
            <span className="founder-subtitle font-label-lg">Founder Bio</span>
            <h2 className="font-headline-lg" style={{ color: "var(--color-primary-navy)" }}>Pedagogical Philosophy</h2>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)" }}>
              Our founder started CCA in Chennai as a high-focus center with a clear vision: keep batches tiny, maintain daily mentorship tracking logs, and teach subjects from scratch.
            </p>
            <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
              We design structured checklists and visual concept maps for Physics mechanics and stoichiometry, ensuring state board and CBSE candidates bypass memorization loops to focus directly on application logic.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Educators</span>
            <h2 className="font-headline-lg">Our Mentor Team</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="testimonials-grid" style={{ marginTop: "32px" }}>
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} className="testimonial-card" style={{ backgroundColor: "var(--color-surface-card)", color: "var(--color-on-background)", border: "1px solid rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "32px" }}>
                <div>
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: "60px", height: "60px", marginBottom: "16px" }}>
                    <circle cx="50" cy="50" r="48" fill="var(--color-surface-container-low)" stroke="var(--color-brand-gold)" strokeWidth="1"/>
                    <path d="M50 25 C58 25 62 33 62 42 C62 51 56 56 50 56 C44 56 38 51 38 42 C38 33 42 25 50 25 Z" fill="var(--color-primary-navy)"/>
                    <path d="M22 88 C22 72 35 66 50 66 C65 66 78 72 78 88 Z" fill="var(--color-primary-navy)"/>
                  </svg>
                  <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", marginBottom: "4px" }}>{member.name}</h4>
                  <div className="font-label-md" style={{ color: "var(--color-brand-gold)", marginBottom: "12px" }}>{member.role}</div>
                  <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", lineHeight: "1.5" }}>{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Info */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-lowest)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <ScrollReveal>
            <span className="hero-tagline font-label-lg">Collaborations</span>
            <h2 className="font-headline-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>Future Institutional Partnerships</h2>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginBottom: "24px" }}>
              We collaborate with schools, CSR bodies, and digital agencies to deliver custom coding workshops, NEET foundation camps, and pedagogic syllabus audits.
            </p>
            <a
              className="btn btn-primary"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20represent%20an%20institution%20and%20want%20to%20discuss%20collaborations."
              target="_blank"
              rel="noopener noreferrer"
            >
              Partner with Us on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
