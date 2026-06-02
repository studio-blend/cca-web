"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Helper to determine if link is active
  const isActive = (path) => pathname === path;

  return (
    <>
      <header id="main-header" className={`header-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <Link href="/" className="logo-wrap" onClick={closeMenu}>
            <svg className="logo-crest" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99z" />
            </svg>
            <span className="logo-text">CCA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
            <Link href="/foundations" className={`nav-link ${isActive("/foundations") ? "active" : ""}`}>
              Foundations
            </Link>
            <Link href="/aspire" className={`nav-link ${isActive("/aspire") ? "active" : ""}`}>
              Aspire (NEET)
            </Link>
            <Link href="/launchpad" className={`nav-link ${isActive("/launchpad") ? "active" : ""}`}>
              Launchpad
            </Link>
            <Link href="/pathways" className={`nav-link ${isActive("/pathways") ? "active" : ""}`}>
              Pathways
            </Link>
            <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>
            <Link href="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`}>
              Blog
            </Link>
            <Link href="/resources" className={`nav-link ${isActive("/resources") ? "active" : ""}`}>
              Resources
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
        <Link href="/foundations" className="nav-link font-title-lg" onClick={closeMenu}>
          Foundations
        </Link>
        <Link href="/aspire" className="nav-link font-title-lg" onClick={closeMenu}>
          Aspire (NEET)
        </Link>
        <Link href="/launchpad" className="nav-link font-title-lg" onClick={closeMenu}>
          Launchpad
        </Link>
        <Link href="/pathways" className="nav-link font-title-lg" onClick={closeMenu}>
          Pathways
        </Link>
        <Link href="/about" className="nav-link font-title-lg" onClick={closeMenu}>
          About
        </Link>
        <Link href="/blog" className="nav-link font-title-lg" onClick={closeMenu}>
          Blog
        </Link>
        <Link href="/resources" className="nav-link font-title-lg" onClick={closeMenu}>
          Resources
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
