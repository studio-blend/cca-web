import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="main-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="footer-logo" style={{ display: "flex", alignItems: "center" }}>
            <Logo width="75px" height="34px" />
          </div>
          <span className="footer-tagline font-label-md" style={{ color: "var(--color-brand-gold)", display: "block", marginTop: "-4px", marginBottom: "8px" }}>
            Where Excellence Begins with Clarity
          </span>
          <p className="footer-about-text">
            Elevating academic standards through conceptual clarity and focused mentorship. Est. 2026.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com/crystalclearacademy" className="social-link-icon" aria-label="Instagram Link" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
            </a>
            <a href="https://linkedin.com/company/crystalclearacademy" className="social-link-icon" aria-label="LinkedIn Link" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 21H17v-5.64c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.16 1.47-2.16 2.97V21H9V9h3.84v1.64h.05c.54-.95 1.74-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75V21zM5.34 7.64c-1.28 0-2.32-1.04-2.32-2.32C3.02 4.04 4.06 3 5.34 3c1.28 0 2.32 1.04 2.32 2.32 0 1.28-1.04 2.32-2.32 2.32zM7.34 21H3.34V9h4v12z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-column">
          <h5>Ecosystem</h5>
          <div className="footer-links">
            <Link className="footer-link" href="/foundations">Foundations (Class 9-12)</Link>
            <Link className="footer-link" href="/aspire">Aspire (NEET Coaching)</Link>
            <Link className="footer-link" href="/launchpad">Launchpad (Digital Skills)</Link>
            <Link className="footer-link" href="/pathways">Pathways (TET Mentoring)</Link>
          </div>
        </div>
        
        <div className="footer-column">
          <h5>Contact</h5>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <a href="tel:+919841644813" style={{ color: "inherit", textDecoration: "none" }}>+91 98416 44813</a>
            </div>
            <div className="footer-contact-item">
              <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>crystalclearacademy@outlook.com</span>
            </div>
            <div className="footer-contact-item">
              <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>Anna Nagar, Chennai, Tamil Nadu — 600 040</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <span>© 2026 Crystal Clear Academy. Built by Studio Blend.</span>
        <div className="footer-bottom-links">
          <a className="footer-bottom-link" href="/privacy-policy">Privacy Policy</a>
          <a className="footer-bottom-link" href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
