"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [announcement, setAnnouncement] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    fetch("/api/admin/announcements")
      .then((res) => res.json())
      .then((data) => {
        if (data.announcement?.active) {
          setAnnouncement(data.announcement);
        }
      })
      .catch(() => {});

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setMobileProgramsOpen(false);
  };

  const isActive = (path) => pathname === path;

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <div className="header-nav-container">
        {/* Top Utility Bar */}
        <div
          className="utility-bar"
          style={{
            background: "linear-gradient(90deg, #09152a 0%, #0e1f3b 50%, #162b4c 100%)",
            color: "#e2e8f0",
            padding: "6px 24px",
            fontSize: "12px",
            borderBottom: "1px solid rgba(198, 167, 94, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px"
          }}
        >
          {/* Left: Location & Quick Phone */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <svg style={{ width: "13px", height: "13px", fill: "var(--color-brand-gold)" }} viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>Thiruninravur HQ · Live Online Worldwide</span>
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <svg style={{ width: "13px", height: "13px", fill: "var(--color-brand-gold)" }} viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <a href="tel:+919841644813" style={{ color: "#ffffff", fontWeight: "700", textDecoration: "none" }}>+91 98416 44813</a>
            </span>
          </div>

          {/* Center: Announcement / Urgency Badge */}
          {announcement && announcement.active ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#ffffff", fontWeight: "600" }}>{announcement.text}</span>
              {announcement.ctaText && (
                <Link
                  href={announcement.ctaUrl || "/#lead-form"}
                  style={{
                    backgroundColor: "var(--color-brand-gold)",
                    color: "#0e1f3b",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontWeight: "800",
                    textDecoration: "none"
                  }}
                >
                  {announcement.ctaText} →
                </Link>
              )}
            </div>
          ) : (
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(198,167,94,0.12)", border: "1px solid rgba(198,167,94,0.3)", padding: "2px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: "700", color: "var(--color-brand-gold)" }}>
              <span style={{ width: "6px", height: "6px", backgroundColor: "#25D366", borderRadius: "50%", display: "inline-block" }}></span>
              NEET Founder&apos;s 1-on-1 Batch: Admissions Open
            </div>
          )}

          {/* Right: Quick Email & Tamil Tagline */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "11px", opacity: 0.8, fontStyle: "italic" }}>தெளிவே வெற்றியின் தொடக்கம்</span>
            <a href="mailto:crystalclearacademy@outlook.com" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "11px" }}>
              crystalclearacademy@outlook.com
            </a>
          </div>
        </div>

        {/* Main Header Nav */}
        <header id="main-header" className={`header-nav ${scrolled ? "scrolled" : ""}`}>
          <div className="container nav-container">
            <Link href="/" className="logo-wrap" onClick={closeMenu}>
              <Logo className="logo-crest" width="84px" height="38px" />
              <span className="logo-text">Crystal Clear Academy</span>
            </Link>

            <nav className="desktop-nav" aria-label="Main Navigation">
              <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                Home
              </Link>

              {/* Desktop Programs Dropdown */}
              <div className="nav-dropdown-wrapper">
                <Link
                  href="/programs"
                  className={`nav-link nav-dropdown-trigger ${
                    pathname === "/foundations" || pathname === "/aspire" || pathname === "/launchpad" || pathname === "/pathways" || pathname === "/programs" ? "active" : ""
                  }`}
                >
                  Programs <span className="dropdown-arrow">▾</span>
                </Link>
                <div className="nav-dropdown-menu">
                  <Link href="/foundations" className="dropdown-item">
                    <div className="dropdown-item-title">CCA Foundations</div>
                    <div className="dropdown-item-desc">Classes 9–12 Board Prep (CBSE & State Board)</div>
                  </Link>
                  <Link href="/aspire" className="dropdown-item">
                    <div className="dropdown-item-title">CCA Aspire (NEET)</div>
                    <div className="dropdown-item-desc">Intensive Medical Entrance Coaching</div>
                  </Link>
                  <Link href="/launchpad" className="dropdown-item">
                    <div className="dropdown-item-title">CCA Launchpad</div>
                    <div className="dropdown-item-desc">Digital Skills: Design, Python & AI Tools</div>
                  </Link>
                  <Link href="/pathways" className="dropdown-item">
                    <div className="dropdown-item-title">CCA Pathways</div>
                    <div className="dropdown-item-desc">Teacher Eligibility Test (TET) Mentoring</div>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link href="/programs" className="dropdown-item dropdown-item-all">
                    View All Programs & Fees →
                  </Link>
                </div>
              </div>

              <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
                About
              </Link>
              <Link href="/resources" className={`nav-link ${isActive("/resources") ? "active" : ""}`}>
                Resources
              </Link>
              <Link href="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`}>
                Insights
              </Link>
              <Link href="/hub" className={`nav-link ${isActive("/hub") ? "active" : ""}`}>
                Bulletin &amp; Gallery
              </Link>
              <a
                href="tel:+919841644813"
                className="btn btn-secondary font-label-md"
                style={{ padding: "8px 14px", marginLeft: "8px" }}
              >
                📞 Call: 9841644813
              </a>
              <a
                href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20chat%20with%20the%20Lead%20Mentor%20and%20begin%20my%20clarity%20journey."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold font-label-md"
                style={{ padding: "8px 16px", marginLeft: "6px" }}
              >
                WhatsApp Us
              </a>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              id="menu-toggle"
              className={`hamburger-btn ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Panel */}
      <nav id="mobile-menu" className={`mobile-nav-panel ${menuOpen ? "open" : ""}`} aria-label="Mobile Navigation">
        <Link href="/" className="nav-link font-title-lg" onClick={closeMenu}>
          Home
        </Link>
        <button
          type="button"
          className="nav-link font-title-lg mobile-dropdown-trigger"
          onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
        >
          Programs {mobileProgramsOpen ? "▲" : "▼"}
        </button>

        {mobileProgramsOpen && (
          <div className="mobile-dropdown-content">
            <Link href="/foundations" className="nav-link sub-link" onClick={closeMenu}>
              CCA Foundations (Classes 9–12)
            </Link>
            <Link href="/aspire" className="nav-link sub-link" onClick={closeMenu}>
              CCA Aspire (NEET)
            </Link>
            <Link href="/launchpad" className="nav-link sub-link" onClick={closeMenu}>
              CCA Launchpad (Digital Skills)
            </Link>
            <Link href="/pathways" className="nav-link sub-link" onClick={closeMenu}>
              CCA Pathways (TET Mentoring)
            </Link>
          </div>
        )}

        <Link href="/about" className="nav-link font-title-lg" onClick={closeMenu}>
          About
        </Link>
        <Link href="/resources" className="nav-link font-title-lg" onClick={closeMenu}>
          Resources
        </Link>
        <Link href="/blog" className="nav-link font-title-lg" onClick={closeMenu}>
          Insights
        </Link>
        <Link href="/hub" className="nav-link font-title-lg" onClick={closeMenu}>
          Bulletin &amp; Gallery
        </Link>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
          <a
            href="tel:+919841644813"
            className="btn btn-secondary font-label-md btn-block"
            onClick={closeMenu}
          >
            📞 Call Admissions: +91 98416 44813
          </a>
          <a
            href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20chat%20with%20the%20Lead%20Mentor%20and%20begin%20my%20clarity%20journey."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold font-label-md btn-block"
            onClick={closeMenu}
          >
            Enquire on WhatsApp →
          </a>
        </div>
      </nav>

      {/* Mobile Sticky Quick Action Utility Bar */}
      <div
        className="mobile-sticky-bar"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          backgroundColor: "#0e1f3b",
          borderTop: "1px solid rgba(198,167,94,0.3)",
          padding: "8px 12px",
          display: "flex",
          gap: "8px",
          boxShadow: "0 -4px 16px rgba(0,0,0,0.2)"
        }}
      >
        <a
          href="tel:+919841644813"
          className="btn btn-secondary"
          style={{ flex: 1, padding: "10px", fontSize: "13px", justifyContent: "center", textDecoration: "none" }}
        >
          📞 Call Admissions
        </a>
        <a
          href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20enquiring%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
          style={{ flex: 1, padding: "10px", fontSize: "13px", justifyContent: "center", textDecoration: "none" }}
        >
          💬 WhatsApp Chat
        </a>
      </div>
    </>
  );
}
