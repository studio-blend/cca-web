import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import ProgramsExplorer from "@/components/ProgramsExplorer/ProgramsExplorer";

export const metadata = {
  title: "All Programs | Crystal Clear Academy Chennai",
  description: "Explore all educational programs across our 4 wings: Board Preparation (Classes 9-12), NEET Medical Entrance (Aspire), Digital Skills (Launchpad), and Teacher Certification (Pathways).",
  alternates: {
    canonical: "https://crystalclearacademy.in/programs",
  },
};

export default function AllProgramsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Crystal Clear Academy Programs",
    "description": "Comprehensive index of academic tuition, NEET entrance coaching, digital skills bootcamps, and teacher eligibility preparation programs.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "CCA Foundations (Classes 9–12 Board Preparation)",
        "url": "https://crystalclearacademy.in/foundations"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "CCA Aspire (NEET Medical Entrance Coaching)",
        "url": "https://crystalclearacademy.in/aspire"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "CCA Launchpad (Digital Skills & UI/UX Bootcamp)",
        "url": "https://crystalclearacademy.in/launchpad"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "CCA Pathways (Teacher Eligibility Test TET Mentoring)",
        "url": "https://crystalclearacademy.in/pathways"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero Section */}
      <section className="hero-section" style={{ paddingTop: "120px", paddingBottom: "60px", background: "var(--color-surface-container-lowest)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "900px" }}>
          <ScrollReveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(198,167,94,0.12)", color: "var(--color-primary-navy)", padding: "6px 16px", borderRadius: "20px", fontWeight: "700", fontSize: "13px", marginBottom: "16px" }}>
              <span>🏛️</span> ALL WINGS &amp; ACADEMIC TRACKS
            </div>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>
              Complete Program Directory <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>Crystal Clear Academy</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", lineHeight: "1.6", maxWidth: "760px", margin: "0 auto" }}>
              Discover our concept-first learning ecosystem across 4 specialized wings. Filter by grade level, board target, digital skill, or teaching eligibility track below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Programs Explorer Component */}
      <ProgramsExplorer />
    </>
  );
}
