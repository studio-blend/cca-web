import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import ResourcesFilter from "@/components/ResourcesFilter/ResourcesFilter";
import { getAllResources } from "@/lib/cms";

export const metadata = {
  title: "Free Academic & Digital Study Resources | Crystal Clear Academy",
  description: "Download signature Class 12 Physics formula sheets, NEET Biology concept maps, Class 10 Math guides, and Figma UI/UX shortcut sheets from Crystal Clear Academy, Chennai.",
  alternates: {
    canonical: "https://crystalclearacademy.in/resources",
  },
};

export default function ResourcesPage() {
  const cmsResources = getAllResources();

  const formattedResources = cmsResources.map((res) => ({
    title: res.title,
    type: `${res.fileType || "PDF"} Document (${res.fileSize || "3 MB"})`,
    category: (res.category || "science").toLowerCase().includes("neet") ? "neet" :
              (res.category || "").toLowerCase().includes("math") ? "math" :
              (res.category || "").toLowerCase().includes("pedagogy") ? "pedagogy" : "science",
    desc: res.description,
    whatsappMsg: `Hi CCA, I want to download the ${res.title}.`,
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ paddingTop: "120px", background: "var(--color-surface-container-low)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <ScrollReveal>
            <span className="hero-tagline font-label-lg">Free Materials</span>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>
              Academic &amp; Digital <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>Free Study Resources</span>
            </h1>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)" }}>
              Download our signature concept sheets, NEET biology memory aids, and formula cheat sheets directly via WhatsApp.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Resources Filter */}
      <ResourcesFilter resources={formattedResources} />

      {/* CTA Section */}
      <section className="section-py cta-section">
        <div className="container cta-container">
          <ScrollReveal>
            <h2 className="font-display-lg cta-title">Need Custom Practice Worksheets?</h2>
            <p className="cta-tamil">தெளிவான வழிகாட்டுதல். சிறந்த எதிர்காலம்.</p>
            <p className="cta-desc font-body-lg">
              Contact our academic mentors for tailored subject revision guides and past board exam solution banks.
            </p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20need%20custom%20study%20resources%20and%20worksheet%20packs."
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Custom Packs on WhatsApp →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
