import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export const metadata = {
  title: "CCA Hub - Bulletin & Gallery | Crystal Clear Academy",
  description: "Live updates, center announcements, early bird waivers, and glimpses of classroom concept coaching at Crystal Clear Academy, Chennai.",
  alternates: {
    canonical: "https://crystalclearacademy.in/hub",
  },
};

export default function HubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CCA Hub - Bulletin & Gallery",
    "description": "Live announcements, batch timetables, fee discounts, and classroom gallery for Crystal Clear Academy, Chennai.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Crystal Clear Academy",
      "sameAs": "https://crystalclearacademy.in"
    }
  };

  const bulletins = [
    {
      category: "Special Waiver",
      title: "Founder's Batch Early-Bird Offer",
      desc: "Receive a flat 15% waiver on annual tuition fees for all Class 9-12 and NEET programs. Valid for registrations confirmed before June 15.",
      date: "Valid till June 15",
      badgeColor: "var(--color-brand-gold)",
      textColor: "var(--color-primary-navy)",
      link: "https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20apply%20for%20the%2015%25%20Early-Bird%20Waiver."
    },
    {
      category: "Free Seminar",
      title: "NEET Mock Exam Strategy Seminar",
      desc: "Learn critical speed techniques, question selection methodology, and OMR scheduling from our lead mentors to score 650+.",
      date: "June 10, 4:00 PM",
      badgeColor: "var(--color-academic-blue)",
      textColor: "#ffffff",
      link: "https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20for%20the%20NEET%20Mock%20Strategy%20Seminar%20on%20June%2010."
    },
    {
      category: "Free Webinar",
      title: "Class 10 Board Prep Strategy",
      desc: "Unlock visual concept maps and memory triggers designed to help students score 95%+ in Science and Mathematics CBSE/State Board exams.",
      date: "June 12, 6:00 PM",
      badgeColor: "var(--color-secondary)",
      textColor: "#ffffff",
      link: "https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%2520for%2520the%2520Class%252010%2520Board%2520Prep%2520Webinar%2520on%2520June%252012."
    },
    {
      category: "Batch Startup",
      title: "Direct Admission Small Batches Start",
      desc: "First batch of our high-focus programs (maximum 15 seats per class) commences. Direct mentor allocation and syllabus mapping sheets distributed.",
      date: "June 15 Batch",
      badgeColor: "var(--color-primary-navy)",
      textColor: "#ffffff",
      link: "https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20secure%20a%20seat%20for%20the%20June%2015%20batch."
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

      {/* Hero Header */}
      <section className="hero-section" style={{ paddingTop: "120px", background: "var(--color-surface-container-lowest)" }}>
        <div className="container hero-grid">
          <ScrollReveal className="hero-content">
            <span className="hero-tagline font-label-lg">Live updates &amp; classroom moments</span>
            <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)", margin: "0 0 10px 0" }}>
              CCA Bulletin <br/>
              <span style={{ color: "var(--color-brand-gold)" }}>&amp; Gallery</span>
            </h1>
            <p className="hero-tamil" style={{ margin: "0 0 16px 0" }}>புதுப்பிப்புகள் மற்றும் கேலரி</p>
            <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px" }}>
              Stay current with upcoming events, admission alerts, early bird fee waivers, and look inside our premium coaching classrooms in Chennai.
            </p>
            <div style={{ marginTop: "20px" }}>
              <a 
                className="btn btn-gold" 
                href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20enquiring%20about%20admissions%20after%2520viewing%2520the%2520bulletin%2520updates." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Enquire on WhatsApp →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="hero-visual-container">
            <svg viewBox="0 0 300 300" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary-navy)" />
                  <stop offset="100%" stopColor="var(--color-academic-blue)" />
                </linearGradient>
              </defs>
              <rect x="10" y="10" width="280" height="280" rx="16" fill="url(#hubGrad)" />
              <g transform="translate(40, 50)">
                <rect x="0" y="0" width="100" height="80" rx="8" fill="rgba(255, 255, 255, 0.1)" stroke="var(--color-brand-gold)" strokeWidth="1.5" />
                <circle cx="50" cy="35" r="15" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                <path d="M30 65 C30 55 40 50 50 50 C60 50 70 55 70 65" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                <text x="50" y="95" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">GALLERY</text>
              </g>
              <g transform="translate(160, 150)">
                <rect x="0" y="0" width="100" height="80" rx="8" fill="rgba(255, 255, 255, 0.1)" stroke="var(--color-brand-gold)" strokeWidth="1.5" />
                <path d="M25 30 H75 M25 45 H75 M25 60 H55" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                <text x="50" y="95" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">BULLETINS</text>
              </g>
              <line x1="140" y1="130" x2="160" y2="150" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </ScrollReveal>
        </div>
      </section>

      {/* Live Bulletin Board */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Active Announcements</span>
            <h2 className="font-headline-lg">Live Bulletin Board</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
            {bulletins.map((b, idx) => (
              <ScrollReveal
                key={idx}
                className="pricing-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px",
                  height: "100%",
                  backgroundColor: "var(--color-surface-card)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "var(--shadow-ambient)"
                }}
              >
                <span
                  style={{
                    backgroundColor: b.badgeColor,
                    color: b.textColor,
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                    alignSelf: "flex-start",
                    marginBottom: "16px",
                    letterSpacing: "0.05em"
                  }}
                >
                  {b.category}
                </span>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 12px 0", fontSize: "20px" }}>
                  {b.title}
                </h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "20px", flexGrow: 1, fontSize: "14px", lineHeight: "1.5" }}>
                  {b.desc}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "16px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "var(--color-secondary)" }}>{b.date}</span>
                  <a
                    href={b.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: "6px 14px", fontSize: "12px", borderColor: "var(--color-brand-gold)" }}
                  >
                    Enquire Now
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Gallery */}
      <section className="section-py" style={{ backgroundColor: "var(--color-surface-warm)" }}>
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Student Voices</span>
            <h2 className="font-headline-lg">Video &amp; Written Testimonials</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", marginTop: "40px" }}>
            {/* Testimonial Video Card 1 */}
            <ScrollReveal className="pricing-card" style={{ display: "flex", flexDirection: "column", padding: "32px", height: "100%", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(198,167,94,0.18)", boxShadow: "var(--shadow-sm)", borderRadius: "var(--radius-lg)" }}>
              <div style={{ position: "relative", height: "200px", width: "100%", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "20px" }}>
                <img src="/student-boy.png" alt="Srinivas K." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(14,31,59,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="btn-play-pulse" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "var(--color-brand-gold)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 12px rgba(198,167,94,0.5)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-primary-navy)" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "4px" }}>
                      <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                  </div>
                </div>
                <span style={{ position: "absolute", bottom: "12px", right: "12px", backgroundColor: "rgba(0,0,0,0.6)", color: "#fff", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>VIDEO TESTIMONIAL</span>
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="font-label-md" style={{ color: "var(--color-brand-gold)", marginBottom: "4px" }}>NEET Scorer — 680/720</div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 12px 0", fontSize: "20px" }}>Srinivas K.</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", fontStyle: "italic", fontSize: "14px", lineHeight: "1.6" }}>
                  &ldquo;The physics concept maps broke down complex formulas into easy rules. I stopped memorizing equations and started understanding how to derive them. Revathy M.&apos;s mentorship completely changed my approach to solving numericals under time pressure.&rdquo;
                </p>
              </div>
            </ScrollReveal>

            {/* Testimonial Video Card 2 */}
            <ScrollReveal className="pricing-card" style={{ display: "flex", flexDirection: "column", padding: "32px", height: "100%", backgroundColor: "var(--color-surface-card)", border: "1px solid rgba(198,167,94,0.18)", boxShadow: "var(--shadow-sm)", borderRadius: "var(--radius-lg)" }}>
              <div style={{ position: "relative", height: "200px", width: "100%", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "20px" }}>
                <img src="/student-girl.png" alt="Priyanka M." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(14,31,59,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="btn-play-pulse" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "var(--color-brand-gold)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 12px rgba(198,167,94,0.5)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-primary-navy)" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "4px" }}>
                      <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                  </div>
                </div>
                <span style={{ position: "absolute", bottom: "12px", right: "12px", backgroundColor: "rgba(0,0,0,0.6)", color: "#fff", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>VIDEO TESTIMONIAL</span>
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="font-label-md" style={{ color: "var(--color-brand-gold)", marginBottom: "4px" }}>CBSE Class 12 — 97% Scorer</div>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 12px 0", fontSize: "20px" }}>Priyanka M.</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", fontStyle: "italic", fontSize: "14px", lineHeight: "1.6" }}>
                  &ldquo;I was struggling with rote learning before joining CCA. The offline classes made math concepts visual and logical. Drawing proofs on digital maps helped me visualize mechanics and calculus easily, which made my CBSE boards stress-free!&rdquo;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Plain Media Gallery */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Inside the Classrooms</span>
            <h2 className="font-headline-lg">Glimpses of Conceptual Clarity</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
            {/* Gallery Item 1 */}
            <ScrollReveal className="pricing-card" style={{ padding: "0", overflow: "hidden", border: "1px solid rgba(198,167,94,0.15)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ height: "200px", width: "100%", overflow: "hidden" }}>
                <img src="/gallery-physics.png" alt="Physics Concept Mapping" style={{ width: "100%", height: "100%", objectFit: "cover" }} className="gallery-hover-zoom" />
              </div>
              <div style={{ padding: "20px" }}>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0" }}>Physics Concept Mapping</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", fontSize: "13px", lineHeight: "1.4" }}>
                  Demonstrating mechanical angular momentum, circular vectors, and kinematics derivations through visual proportions on our digital maps.
                </p>
              </div>
            </ScrollReveal>

            {/* Gallery Item 2 */}
            <ScrollReveal className="pricing-card" style={{ padding: "0", overflow: "hidden", border: "1px solid rgba(198,167,94,0.15)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ height: "200px", width: "100%", overflow: "hidden" }}>
                <img src="/gallery-classroom.png" alt="Classroom Discussion" style={{ width: "100%", height: "100%", objectFit: "cover" }} className="gallery-hover-zoom" />
              </div>
              <div style={{ padding: "20px" }}>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0" }}>High-Focus Classrooms</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", fontSize: "13px", lineHeight: "1.4" }}>
                  Glimpse into our small batch classes in Chennai. Students collaborating directly with our lead mentors in a focused academic setting.
                </p>
              </div>
            </ScrollReveal>

            {/* Gallery Item 3 */}
            <ScrollReveal className="pricing-card" style={{ padding: "0", overflow: "hidden", border: "1px solid rgba(198,167,94,0.15)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ height: "200px", width: "100%", overflow: "hidden" }}>
                <img src="/gallery-biology.png" alt="Biology genetics Review" style={{ width: "100%", height: "100%", objectFit: "cover" }} className="gallery-hover-zoom" />
              </div>
              <div style={{ padding: "20px" }}>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0" }}>Biology Genetics Review</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", fontSize: "13px", lineHeight: "1.4" }}>
                  Mapping out transcription stages, replication loops, and organic molecular connections visually rather than relying on plain memorization lists.
                </p>
              </div>
            </ScrollReveal>

            {/* Gallery Item 4 */}
            <ScrollReveal className="pricing-card" style={{ padding: "0", overflow: "hidden", border: "1px solid rgba(198,167,94,0.15)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ height: "200px", width: "100%", overflow: "hidden" }}>
                <img src="/gallery-uiux.png" alt="Figma UI/UX Mockups" style={{ width: "100%", height: "100%", objectFit: "cover" }} className="gallery-hover-zoom" />
              </div>
              <div style={{ padding: "20px" }}>
                <h4 className="font-headline-sm" style={{ color: "var(--color-primary-navy)", margin: "0 0 8px 0" }}>Figma UI/UX Mockups</h4>
                <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", fontSize: "13px", lineHeight: "1.4" }}>
                  Launchpad students showcasing their design systems, mobile grid structures, and interactive Figma prototypes to peers.
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
            <h2 className="font-display-lg cta-title">Reserve Your Clarity Seat</h2>
            <p className="cta-tamil">வழிகாட்டுதல். வெற்றி. தெளிவு.</p>
            <p className="cta-desc font-body-lg">
              Seats are limited in both our board foundations, NEET elite prep, and digital skill bootcamps. Schedule a discussion today.
            </p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20reserving%20a%20seat%20and%20chatting%20with%20the%20lead%20mentor."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Lead Mentor
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
