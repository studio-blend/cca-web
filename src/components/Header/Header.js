"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setMobileProgramsOpen(false);
  };

  // Helper to determine if link is active
  const isActive = (path) => pathname === path;

  return (
    <>
      <header id="main-header" className={`header-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <Link href="/" className="logo-wrap" onClick={closeMenu}>
            <Logo className="logo-crest" width="84px" height="38px" />
            <span className="logo-text">Crystal Clear Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
            
            <div className="nav-dropdown">
              <button
                className={`nav-link nav-dropdown-trigger ${
                  isActive("/foundations") || isActive("/aspire") || isActive("/launchpad") || isActive("/pathways")
                    ? "active"
                    : ""
                }`}
                type="button"
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                Programs
                <svg viewBox="0 0 24 24" style={{ width: "12px", height: "12px", fill: "currentColor" }}>
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <div className="nav-dropdown-menu">
                <Link href="/foundations" className={`nav-dropdown-item ${isActive("/foundations") ? "active" : ""}`}>
                  Foundations (Class 9-10)
                </Link>
                <Link href="/aspire" className={`nav-dropdown-item ${isActive("/aspire") ? "active" : ""}`}>
                  Aspire (NEET)
                </Link>
                <Link href="/launchpad" className={`nav-dropdown-item ${isActive("/launchpad") ? "active" : ""}`}>
                  Launchpad
                </Link>
                <Link href="/pathways" className={`nav-dropdown-item ${isActive("/pathways") ? "active" : ""}`}>
                  Pathways
                </Link>
              </div>
            </div>

            <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>
            <Link href="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`}>
              Blog
            </Link>
            <Link href="/resources" className={`nav-link ${isActive("/resources") ? "active" : ""}`}>
              Resources
            </Link>
            <Link href="/hub" className={`nav-link ${isActive("/hub") ? "active" : ""}`}>
              Bulletin &amp; Gallery
            </Link>
            <a
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20chat%20with%20the%20Lead%20Mentor%20and%20begin%20my%20clarity%20journey."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold font-label-md"
              style={{ padding: "8px 16px", marginLeft: "10px" }}
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

      {/* Mobile Navigation Panel */}
      <nav id="mobile-menu" className={`mobile-nav-panel ${menuOpen ? "open" : ""}`} aria-label="Mobile Navigation">
        <Link href="/" className="nav-link font-title-lg" onClick={closeMenu}>
          Home
        </Link>
        <button
          type="button"
          className="nav-link font-title-lg mobile-dropdown-trigger"
          onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          Programs
          <svg style={{ width: "16px", height: "16px", transform: mobileProgramsOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s" }} viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
          </svg>
        </button>
        <div style={{ display: mobileProgramsOpen ? "flex" : "none", flexDirection: "column", gap: "12px", backgroundColor: "rgba(14,31,59,0.03)", width: "100%", padding: "12px 0", alignItems: "center" }}>
          <Link href="/foundations" className="nav-link font-title-md" onClick={closeMenu}>Foundations</Link>
          <Link href="/aspire" className="nav-link font-title-md" onClick={closeMenu}>Aspire (NEET)</Link>
          <Link href="/launchpad" className="nav-link font-title-md" onClick={closeMenu}>Launchpad</Link>
          <Link href="/pathways" className="nav-link font-title-md" onClick={closeMenu}>Pathways</Link>
        </div>
        <Link href="/about" className="nav-link font-title-lg" onClick={closeMenu}>
          About
        </Link>
        <Link href="/blog" className="nav-link font-title-lg" onClick={closeMenu}>
          Blog
        </Link>
        <Link href="/resources" className="nav-link font-title-lg" onClick={closeMenu}>
          Resources
        </Link>
        <Link href="/hub" className="nav-link font-title-lg" onClick={closeMenu}>
          Bulletin &amp; Gallery
        </Link>
        <a
          href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20chat%20with%20the%20Lead%20Mentor%20and%20begin%20my%20clarity%20journey."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
          onClick={closeMenu}
        >
          WhatsApp Us
        </a>
      </nav>
    </>
  );
}
