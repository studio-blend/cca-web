"use client";

import Link from "next/link";
import LeadForm from "@/components/LeadForm/LeadForm";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import TabSwitcher from "@/components/TabSwitcher/TabSwitcher";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";

export default function Home() {
  // Ecosystem Tabs Content
  const ecosystemTabs = [
    {
      id: "foundations",
      label: "CCA Foundations",
      content: (
        <div className="program-panel active">
          <div className="program-info">
            <h3 className="font-headline-md">Foundations (Classes 9-12)</h3>
            <p className="program-description font-body-lg">
              {"Deep conceptual tuition focused on board excellence and logical reasoning. We don't just teach the syllabus; we teach the \"why\" behind every concept, ensuring basic blocks are solid."}
            </p>
            <ul className="program-checklist">
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                State Board &amp; CBSE Specialization
              </li>
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Daily Mentorship &amp; Problem Review
              </li>
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Monthly Progress Summits with Parents
              </li>
            </ul>
            <p className="font-body-md" style={{ marginTop: "16px", marginBottom: "16px", fontWeight: "600", color: "var(--color-academic-blue)" }}>
              Boards Covered: CBSE · State Board · Matric · ICSE/CISCE · NIOS
            </p>
            <Link className="btn btn-primary" href="/foundations">Learn More</Link>
          </div>
          <div className="program-graphic">
            <svg viewBox="0 0 300 240" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="50" y="160" width="200" height="40" rx="4" fill="var(--color-primary-navy)" />
              <rect x="80" y="110" width="140" height="40" rx="4" fill="var(--color-secondary)" />
              <rect x="110" y="60" width="80" height="40" rx="4" fill="var(--color-brand-gold)" />
              <path d="M150 15 L180 50 L120 50 Z" fill="var(--color-primary-navy)" />
              <text x="150" y="185" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">BOARD MASTERY</text>
              <text x="150" y="135" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">CONCEPT CORE</text>
              <text x="150" y="85" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">BASICS</text>
            </svg>
          </div>
        </div>
      )
    },
    {
      id: "aspire",
      label: "CCA Aspire",
      content: (
        <div className="program-panel active">
          <div className="program-info">
            <h3 className="font-headline-md">Aspire (NEET Coaching)</h3>
            <p className="program-description font-body-lg">
              Intensive mentoring specifically designed for medical aspirations. Our 10-year track record ensures students master the MCQ pattern with surgical precision, speed, and analytical competence.
            </p>
            <ul className="program-checklist">
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Specialized Shortcut Techniques for MCQ Physics &amp; Chemistry
              </li>
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Biology Visual Concept-Mapping Modules
              </li>
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Weekly OMR Simulated Mock Exams &amp; Reviews
              </li>
            </ul>
            <Link className="btn btn-primary" href="/aspire">Learn More</Link>
          </div>
          <div className="program-graphic">
            <svg viewBox="0 0 300 240" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M80 60 Q120 20 150 60 T220 60" fill="none" stroke="var(--color-brand-gold)" strokeWidth="3" />
              <path d="M80 140 Q120 180 150 140 T220 140" fill="none" stroke="var(--color-primary-navy)" strokeWidth="3" />
              <line x1="100" y1="48" x2="100" y2="152" stroke="var(--color-secondary)" strokeWidth="2" />
              <line x1="130" y1="42" x2="130" y2="148" stroke="var(--color-secondary)" strokeWidth="2" />
              <line x1="160" y1="52" x2="160" y2="142" stroke="var(--color-secondary)" strokeWidth="2" />
              <line x1="190" y1="58" x2="190" y2="148" stroke="var(--color-secondary)" strokeWidth="2" />
              <circle cx="100" cy="48" r="4" fill="var(--color-brand-gold)"/>
              <circle cx="100" cy="152" r="4" fill="var(--color-primary-navy)"/>
              <circle cx="130" cy="42" r="4" fill="var(--color-brand-gold)"/>
              <circle cx="130" cy="148" r="4" fill="var(--color-primary-navy)"/>
              <circle cx="160" cy="52" r="4" fill="var(--color-brand-gold)"/>
              <circle cx="160" cy="142" r="4" fill="var(--color-primary-navy)"/>
              <circle cx="190" cy="58" r="4" fill="var(--color-brand-gold)"/>
              <circle cx="190" cy="148" r="4" fill="var(--color-primary-navy)"/>
              <text x="150" y="210" fill="var(--color-primary-navy)" fontSize="13" fontWeight="700" textAnchor="middle">DNA OF NEET MASTERY</text>
            </svg>
          </div>
        </div>
      )
    },
    {
      id: "launchpad",
      label: "CCA Launchpad",
      content: (
        <div className="program-panel active">
          <div className="program-info">
            <h3 className="font-headline-md">Launchpad (Digital Skills)</h3>
            <p className="program-description font-body-lg">
              Equipping the next generation with future-ready digital competencies. Go beyond traditional academic frameworks to master modern systems that drive design, computing, and tech enterprise.
            </p>
            <ul className="program-checklist">
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Graphic Design, Typography &amp; UI/UX Wireframing
              </li>
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Python Programming &amp; Logic Design
              </li>
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                AI Prompting, Automation &amp; Digital Toolsets
              </li>
            </ul>
            <div style={{ marginTop: "16px", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <p className="font-body-sm" style={{ margin: 0 }}><strong>Design:</strong> Graphic Design · UI/UX · Design Thinking · Creative Tools</p>
              <p className="font-body-sm" style={{ margin: 0 }}><strong>Technology:</strong> AI &amp; Emerging Tech · No-Code · Web Dev · Digital Literacy</p>
              <p className="font-body-sm" style={{ margin: 0 }}><strong>Career:</strong> Communication · Presentation · Problem Solving · Professional Dev</p>
              <p className="font-body-sm" style={{ fontStyle: "italic", marginTop: "4px", color: "var(--color-brand-gold)", fontWeight: "600" }}>
                Formats: 4–6 week courses · 2–3 month tracks · Weekend workshops · Holiday bootcamps
              </p>
            </div>
            <Link className="btn btn-primary" href="/launchpad">Visit Launchpad Portal</Link>
          </div>
          <div className="program-graphic">
            <svg viewBox="0 0 300 240" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="40" y="50" width="220" height="130" rx="6" fill="none" stroke="var(--color-primary-navy)" strokeWidth="2" />
              <line x1="40" y1="80" x2="260" y2="80" stroke="var(--color-primary-navy)" strokeWidth="2" />
              <circle cx="55" cy="65" r="4" fill="var(--color-brand-gold)" />
              <circle cx="70" cy="65" r="4" fill="var(--color-secondary)" />
              <circle cx="85" cy="65" r="4" fill="var(--color-outline-variant)" />
              <text x="60" y="125" fill="var(--color-primary-navy)" fontFamily="monospace" fontSize="14" fontWeight="700">&lt;code&gt;</text>
              <text x="140" y="155" fill="var(--color-brand-gold)" fontFamily="monospace" fontSize="12" fontWeight="700">UI / UX DESIGN</text>
            </svg>
          </div>
        </div>
      )
    },
    {
      id: "pathways",
      label: "CCA Pathways",
      content: (
        <div className="program-panel active">
          <div className="program-info">
            <h3 className="font-headline-md">Pathways (TET Mentoring)</h3>
            <p className="program-description font-body-lg">
              Empowering teachers and education professionals to excel in the Teacher Eligibility Test (TET) and master child psychology and pedagogy frameworks.
            </p>
            <p className="font-body-md" style={{ fontWeight: "600", color: "var(--color-brand-gold)", marginBottom: "16px" }}>
              Target: Graduates and aspiring government school teachers
            </p>
            <ul className="program-checklist">
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                In-Depth Pedagogical Theory &amp; Child Development Analysis
              </li>
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Subject-Specific Comprehensive Evaluation Sheets
              </li>
              <li className="checklist-item font-body-md">
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Rigorous Previous Year Paper Mapping &amp; Mock Tests
              </li>
            </ul>
            <Link className="btn btn-primary" href="/pathways">Learn More</Link>
          </div>
          <div className="program-graphic">
            <svg viewBox="0 0 300 240" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="150" cy="100" r="45" fill="none" stroke="var(--color-primary-navy)" strokeWidth="2" />
              <circle cx="150" cy="100" r="35" fill="none" stroke="var(--color-brand-gold)" strokeWidth="1.5" strokeDasharray="4 2" />
              <path d="M142 88 L142 104 L158 104 M158 96 L142 96" fill="none" stroke="var(--color-primary-navy)" strokeWidth="2" strokeLinecap="round"/>
              <polygon points="150,45 153,53 162,53 155,58 157,66 150,61 143,66 145,58 138,53 147,53" fill="var(--color-brand-gold)" />
              <line x1="150" y1="145" x2="150" y2="185" stroke="var(--color-primary-navy)" strokeWidth="3" strokeLinecap="round"/>
              <path d="M120 185 H180" stroke="var(--color-primary-navy)" strokeWidth="3" strokeLinecap="round"/>
              <text x="150" y="215" fill="var(--color-primary-navy)" fontSize="13" fontWeight="700" textAnchor="middle">TEACHING PATHWAYS</text>
            </svg>
          </div>
        </div>
      )
    }
  ];

  // Tuition Fee Tabs Content
  const tuitionFeeTabs = [
    {
      id: "aspire",
      label: "CCA Aspire (NEET)",
      content: (
        <div style={{ width: "100%" }}>
          <div style={{ backgroundColor: "rgba(198, 167, 94, 0.15)", border: "1px solid var(--color-brand-gold)", color: "#ffffff", padding: "12px 24px", borderRadius: "var(--radius-lg)", marginBottom: "24px", textAlign: "center", fontWeight: "700" }}>
            Founder's Batch — First 10 students get 10% off
          </div>
          <div className="pricing-pane active" style={{ display: "grid" }}>
            {/* Card 1 */}
            <div className="pricing-card">
              <span className="price-label">Weekend Intensive</span>
              <div className="price-val">₹3,500<span>/mo</span></div>
              <ul className="price-list">
                <li className="price-feature">
                  <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Saturday &amp; Sunday Intensive
                </li>
                <li className="price-feature">
                  <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Concept Mastery Lectures
                </li>
                <li className="price-feature">
                  <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Extensive MCQ Practice Sets
                </li>
              </ul>
              <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20NEET%20Weekend%20Intensive%20batch." target="_blank" rel="noopener noreferrer">Enquire Now</a>
            </div>
            {/* Card 2 (Featured) */}
            <div className="pricing-card featured">
              <div className="featured-badge">Only 8 seats — limited availability</div>
              <span className="price-label">Personal Track</span>
              <div className="price-val">₹9,500<span>/mo</span></div>
              <ul className="price-list">
                <li className="price-feature highlighted">
                  <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Direct Founder Mentoring
                </li>
                <li className="price-feature">
                  <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Custom Mock Review Strategy
                </li>
                <li className="price-feature">
                  <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Daily Direct Doubt Resolvers
                </li>
              </ul>
              <a className="btn btn-gold btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20for%20the%20NEET%20Personal%20Track%20batch." target="_blank" rel="noopener noreferrer">Secure Your Spot</a>
            </div>
            {/* Card 3 */}
            <div className="pricing-card">
              <span className="price-label">Combo (Board + NEET)</span>
              <div className="price-val">₹11,500<span>/mo</span></div>
              <ul className="price-list">
                <li className="price-feature">
                  <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Comprehensive Board Support
                </li>
                <li className="price-feature">
                  <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Integrated Entrance Syllabus
                </li>
                <li className="price-feature">
                  <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Stress &amp; Time Management Prep
                </li>
              </ul>
              <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20NEET%20Combo%20(Board%2BNEET)%20batch." target="_blank" rel="noopener noreferrer">Enquire Now</a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "foundations",
      label: "CCA Foundations",
      content: (
        <div className="pricing-pane active" style={{ display: "grid" }}>
          {/* Card 1 */}
          <div className="pricing-card">
            <span className="price-label">Class 9-10 Foundations</span>
            <div className="price-val">₹2,500<span>/mo</span></div>
            <ul className="price-list">
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Sat &amp; Sun Science + Maths
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Focus on Board Exams Base
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Monthly Concept Assessment
              </li>
            </ul>
            <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20for%20the%20Class%209-10%20Foundations%20batch." target="_blank" rel="noopener noreferrer">Enquire Now</a>
          </div>
          {/* Card 2 (Featured) */}
          <div className="pricing-card featured">
            <div className="featured-badge">Most Popular</div>
            <span className="price-label">Class 11-12 Board</span>
            <div className="price-val">₹4,000<span>/mo</span></div>
            <ul className="price-list">
              <li className="price-feature highlighted">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                3 Days Weekly Core Lectures
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Board Syllabus Mastery
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Personal Sheet Resolution
              </li>
            </ul>
            <a className="btn btn-gold btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20claim%20a%20seat%20for%20the%20Class%2011-12%20Board%20batch." target="_blank" rel="noopener noreferrer">Claim Seat</a>
          </div>
          {/* Card 3 */}
          <div className="pricing-card">
            <span className="price-label">Premium Personal Track</span>
            <div className="price-val">₹7,500<span>/mo</span></div>
            <ul className="price-list">
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Direct Founder Access
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Customized Learning Pace
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Bi-Weekly Parent Syncs
              </li>
            </ul>
            <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Foundations%20Premium%20Personal%20Track." target="_blank" rel="noopener noreferrer">Enquire Now</a>
          </div>
        </div>
      )
    },
    {
      id: "launchpad",
      label: "CCA Launchpad",
      content: (
        <div className="pricing-pane active" style={{ display: "grid" }}>
          {/* Card 1 */}
          <div className="pricing-card">
            <span className="price-label">UI/UX Design</span>
            <div className="price-val">₹4,500<span>/mo</span></div>
            <ul className="price-list">
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Figma Software Mastery
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Real World Portfolio Projects
              </li>
            </ul>
            <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20Launchpad%20UI/UX%20Design%20track." target="_blank" rel="noopener noreferrer">Enquire Now</a>
          </div>
          {/* Card 2 (Featured) */}
          <div className="pricing-card featured">
            <div className="featured-badge">Popular</div>
            <span className="price-label">Python Bootcamp</span>
            <div className="price-val">₹4,500<span>/mo</span></div>
            <ul className="price-list">
              <li className="price-feature highlighted">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Basic Programming Logic
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Practical Code Exercises
              </li>
            </ul>
            <a className="btn btn-gold btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20for%20the%20Launchpad%20Python%20Bootcamp." target="_blank" rel="noopener noreferrer">Claim Seat</a>
          </div>
          {/* Card 3 */}
          <div className="pricing-card">
            <span className="price-label">AI &amp; Digital Competencies</span>
            <div className="price-val">₹5,000<span>/mo</span></div>
            <ul className="price-list">
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Prompt Engineering Skills
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Automation Workflows
              </li>
            </ul>
            <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20AI%20and%20Digital%20Competencies%20track." target="_blank" rel="noopener noreferrer">Enquire Now</a>
          </div>
        </div>
      )
    },
    {
      id: "pathways",
      label: "CCA Pathways",
      content: (
        <div className="pricing-pane active" style={{ display: "grid" }}>
          {/* Card 1 */}
          <div className="pricing-card">
            <span className="price-label">TET Paper I</span>
            <div className="price-val">₹3,000<span>/mo</span></div>
            <ul className="price-list">
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Child Development Foundations
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Mock Evaluation Cycles
              </li>
            </ul>
            <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20TET%20Paper%20I%20batch." target="_blank" rel="noopener noreferrer">Enquire Now</a>
          </div>
          {/* Card 2 (Featured) */}
          <div className="pricing-card featured">
            <div className="featured-badge">Best Value</div>
            <span className="price-label">Complete TET Pathway</span>
            <div className="price-val">₹5,000<span>/mo</span></div>
            <ul className="price-list">
              <li className="price-feature highlighted">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Papers I &amp; II Combined Prep
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Direct Founder Consultations
              </li>
            </ul>
            <a className="btn btn-gold btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20for%20the%20Complete%20TET%20Pathway%20combo." target="_blank" rel="noopener noreferrer">Claim Seat</a>
          </div>
          {/* Card 3 */}
          <div className="pricing-card">
            <span className="price-label">TET Paper II</span>
            <div className="price-val">₹3,000<span>/mo</span></div>
            <ul className="price-list">
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Subject-Specific Reviews
              </li>
              <li className="price-feature">
                <svg className="price-feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Strategy Development Sheets
              </li>
            </ul>
            <a className="btn btn-secondary btn-block" href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20the%20TET%20Paper%20II%20batch." target="_blank" rel="noopener noreferrer">Enquire Now</a>
          </div>
        </div>
      )
    }
  ];

  // FAQ Accordion items
  const faqItems = [
    {
      question: "Do you cover both State Board and CBSE?",
      answer: "Yes, our foundation programs are tailored specifically for both State Board and CBSE curricula, ensuring students are prepared for their specific exam formats while maintaining conceptual depth."
    },
    {
      question: "What is the typical batch size?",
      answer: "We maintain strict 'High-Focus Batches' with a maximum of 15 students and founder's batches at 8 students to ensure every individual receives personalized attention and clarity."
    },
    {
      question: "Is there a demo class available?",
      answer: "Absolutely. We offer a 'Concept-Clarity Demo' where students can experience our teaching methodology before committing to a program."
    },
    {
      question: "Do you offer online classes?",
      answer: "We currently focus on Hybrid Learning. While primary instruction is offline at our center, we provide extensive digital resources and online doubt-clearing sessions."
    },
    {
      question: "What are the fee payment options?",
      answer: "We offer monthly, quarterly, and annual payment plans. Early-bird discounts and merit scholarships are available for deserving candidates."
    },
    {
      question: "How is WhatsApp support handled?",
      answer: "Students have access to a dedicated WhatsApp group for their batch where mentors answer conceptual doubts within 4-6 hours."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <ScrollReveal className="hero-content">
            <span className="hero-tagline font-label-lg">Premium Academic Mentorship</span>
            <h1 className="hero-title font-display-lg">
              Where Excellence Begins with <span style={{ color: "var(--color-brand-gold)" }}>Clarity</span>
            </h1>
            <p className="hero-tamil">தெளிவே வெற்றியின் தொடக்கம்</p>
            <p className="hero-description font-body-lg">
              18+ years of leadership in education. Custom courses structured for Classes 9–12 Board Exams, NEET mastery, and future-focused digital competencies.
            </p>
            <LeadForm defaultGoal="foundations" />
          </ScrollReveal>

          <ScrollReveal className="hero-visual-container">
            <svg viewBox="0 0 500 500" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C6A75E" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#C6A75E" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="250" cy="250" r="220" fill="url(#glow)"/>
              <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(31, 78, 121, 0.1)" strokeDasharray="10 5" strokeWidth="1"/>
              <circle cx="250" cy="250" r="120" fill="none" stroke="rgba(31, 78, 121, 0.15)" strokeWidth="2"/>
              
              <line x1="250" y1="250" x2="130" y2="150" stroke="rgba(31, 78, 121, 0.3)" strokeWidth="2" strokeDasharray="5 5"/>
              <line x1="250" y1="250" x2="370" y2="150" stroke="rgba(31, 78, 121, 0.3)" strokeWidth="2" strokeDasharray="5 5"/>
              <line x1="250" y1="250" x2="130" y2="350" stroke="rgba(31, 78, 121, 0.3)" strokeWidth="2" strokeDasharray="5 5"/>
              <line x1="250" y1="250" x2="370" y2="350" stroke="rgba(31, 78, 121, 0.3)" strokeWidth="2" strokeDasharray="5 5"/>
              
              <g transform="translate(250, 250)">
                <circle cx="0" cy="0" r="45" fill="var(--color-primary-navy)" stroke="var(--color-brand-gold)" strokeWidth="3"/>
                <text x="0" y="5" fontFamily="var(--font-family-serif)" fontSize="14" fontWeight="700" fill="#ffffff" textAnchor="middle">CLARITY</text>
              </g>
              
              <g transform="translate(130, 150)">
                <circle cx="0" cy="0" r="35" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.05))"/>
                <path d="M-8 -8 H8 V8 H-8 Z" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2"/>
                <text x="0" y="22" fontSize="9" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">NEET / MED</text>
              </g>
              <g transform="translate(370, 150)">
                <circle cx="0" cy="0" r="35" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.05))"/>
                <polygon points="0,-12 12,6 -12,6" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2"/>
                <text x="0" y="22" fontSize="9" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">FOUNDATIONS</text>
              </g>
              <g transform="translate(130, 350)">
                <circle cx="0" cy="0" r="35" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.05))"/>
                <circle cx="0" cy="0" r="10" fill="none" stroke="var(--color-brand-gold)" strokeWidth="2"/>
                <text x="0" y="22" fontSize="9" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">DIGITAL SKILLS</text>
              </g>
              <g transform="translate(370, 350)">
                <circle cx="0" cy="0" r="35" fill="#ffffff" stroke="var(--color-secondary)" strokeWidth="2" filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.05))"/>
                <path d="M-6 -6 L6 6 M6 -6 L-6 6" stroke="var(--color-brand-gold)" strokeWidth="2"/>
                <text x="0" y="22" fontSize="9" fontWeight="700" fill="var(--color-primary-navy)" textAnchor="middle">TEACHERS (TET)</text>
              </g>
            </svg>
            
            <div className="floating-badge">
              <span className="floating-badge-number">18+ Years</span>
              <span className="floating-badge-text">Academic Leadership</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="trust-bar">
        <div className="marquee-track">
          <div className="marquee-group">
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>18+ Years Teaching Experience</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>10+ Years NEET Success Records</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Govt School Candidates Certified NEET</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Strict High-Focus Batches (Max 15)</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Concept-Clarity Method</span>
            </div>
          </div>
          <div className="marquee-group">
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>18+ Years Teaching Experience</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>10+ Years NEET Success Records</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Govt School Candidates Certified NEET</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Strict High-Focus Batches (Max 15)</span>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              <span>Concept-Clarity Method</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-py" id="programs">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Custom Curriculums</span>
            <h2 className="font-headline-lg">Our Academic Ecosystem</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <ScrollReveal>
            <TabSwitcher tabs={ecosystemTabs} gridLayout={true} />
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-py founder-section" id="about">
        <div className="container founder-grid">
          <ScrollReveal className="founder-text-block">
            <span className="founder-subtitle font-label-lg">Pedagogical Vision</span>
            <h2 className="founder-title font-headline-lg">A Legacy of Academic Transformation</h2>
            <p className="founder-desc font-body-lg">
              With over 18 years in the core education sector and a decade specifically focused on NEET science outcomes, our founder has redefined what student mentorship means. From transforming government school results to mentoring elite achievers, the mission remains the same: Absolute Clarity.
            </p>
            <ul className="program-checklist" style={{ margin: "8px 0 16px 0" }}>
              <li className="checklist-item font-body-md" style={{ fontWeight: "600" }}>
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span><strong>18+ years of teaching excellence</strong> in Chennai.</span>
              </li>
              <li className="checklist-item font-body-md" style={{ fontWeight: "600" }}>
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span><strong>10+ years of dedicated NEET mentoring</strong> with proven results.</span>
              </li>
              <li className="checklist-item font-body-md" style={{ fontWeight: "600" }}>
                <svg className="checklist-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span><strong>Track record of training government school students</strong> to qualify for MBBS/BDS.</span>
              </li>
            </ul>
            <div className="founder-stats">
              <div className="stat-card">
                <div className="stat-number">1,000+</div>
                <div className="stat-label">Success Stories</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5,000+</div>
                <div className="stat-label">Students Mentored</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="founder-card-side">
            <div className="founder-quote-card">
              <span className="quote-icon">“</span>
              <p className="founder-quote-text">
                {"True education isn't about memorizing facts; it's about lighting a fire of curiosity through structured clarity."}
              </p>
              <div className="founder-profile-meta">
                <div className="founder-avatar-svg">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="50" cy="50" r="50" fill="var(--color-primary-navy)"/>
                    <path d="M50 25 C60 25 65 35 65 45 C65 55 58 60 50 60 C42 60 35 55 35 45 C35 35 40 25 50 25 Z" fill="var(--color-brand-gold)"/>
                    <path d="M20 90 C20 70 35 65 50 65 C65 65 80 70 80 90 Z" fill="var(--color-brand-gold)"/>
                  </svg>
                </div>
                <div>
                  <div className="founder-name">Lead Educator &amp; Founder</div>
                  <div className="founder-role">Crystal Clear Academy</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Our Framework</span>
            <h2 className="font-headline-lg">The Methodology of Mastery</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h4>1. Conceptual Clarity</h4>
              <p>Breaking down complex syllabus topics into first-principles representation.</p>
            </ScrollReveal>

            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/>
                </svg>
              </div>
              <h4>2. Concrete Foundations</h4>
              <p>Daily practice sheets and weekly assessment loops.</p>
            </ScrollReveal>

            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h4>3. Small-Batch Mentorship</h4>
              <p>Strict high-focus limit (max 15 students) for personalized guidance.</p>
            </ScrollReveal>

            <ScrollReveal className="timeline-node">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h4>4. Outcome-Driven Excellence</h4>
              <p>Mock exam cycles and target score tracking.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-py fees-section" id="fees">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg" style={{ color: "var(--color-on-primary-container)" }}>Transparent Pricing</span>
            <h2>Financial Investments</h2>
            <p>{"Founder's Batches — Early registrations receive an immediate 10% waiver"}</p>
            <div className="gold-divider" style={{ marginTop: "16px" }}></div>
          </ScrollReveal>

          <ScrollReveal>
            <TabSwitcher tabs={tuitionFeeTabs} gridLayout={false} />
          </ScrollReveal>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Events at CCA</span>
            <h2 className="font-headline-lg">Upcoming Sessions</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>
          
          <div className="events-grid">
            <ScrollReveal className="event-card">
              <div className="event-banner-svg">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
                </svg>
              </div>
              <div className="event-body">
                <span className="event-tag">Free Workshop</span>
                <h4 className="event-title">Free Demo Class</h4>
                <p className="event-desc">Experience our signature clarity-first method with key mentor discussions.</p>
                <div className="event-footer">
                  <span className="event-time">Upcoming Sunday</span>
                  <a
                    className="event-btn"
                    href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20RSVP%20for%20the%20upcoming%20Sunday%20Free%20Demo%20Class."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RSVP
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="event-card">
              <div className="event-banner-svg">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <div className="event-body">
                <span className="event-tag">Skills Program</span>
                <h4 className="event-title">UI/UX Graphic Design Bootcamp</h4>
                <p className="event-desc">Learn key visual communication, layout grids, Figma, and typography rules.</p>
                <div className="event-footer">
                  <span className="event-time">Starts TBD</span>
                  <a
                    className="event-btn"
                    href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20register%20my%20interest%20for%20the%20UI/UX%20Graphic%20Design%20Bootcamp."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="event-card">
              <div className="event-banner-svg">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div className="event-body">
                <span className="event-tag">Parental Sync</span>
                <h4 className="event-title">{"Parents' Open House"}</h4>
                <p className="event-desc">Meet the leading mentors, review student tracking, and plan core schedules.</p>
                <div className="event-footer">
                  <span className="event-time">Monthly Meetup</span>
                  <a
                    className="event-btn"
                    href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20am%20interested%20in%20joining%20the%20next%20Parents%20Open%20House."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-py">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Testimonials</span>
            <h2 className="font-headline-lg">Voice of Trust</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>
          
          <div className="testimonials-grid">
            <ScrollReveal className="testimonial-card">
              <div>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="testimonial-text">{"\"The personal track coaching transformed my son's approach to Physics. He used to be terrified, but now he solves MCQs with confidence.\""}</p>
              </div>
              <div>
                <div className="testimonial-author-name">Mrs. Rajalakshmi</div>
                <div className="testimonial-author-desc">Parent of Class 12 Student</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="testimonial-card">
              <div>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="testimonial-text">{"\"The mentorship for Government School students is incredible. CCA truly cares about social impact and real results.\""}</p>
              </div>
              <div>
                <div className="testimonial-author-name">Dr. Arulmani</div>
                <div className="testimonial-author-desc">Educational Consultant</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="testimonial-card">
              <div>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="testimonial-text">{"\"Launchpad's UI/UX course gave me more practical skills than my college semester. Highly recommend for future skills.\""}</p>
              </div>
              <div>
                <div className="testimonial-author-name">Karthik S.</div>
                <div className="testimonial-author-desc">Student, Launchpad Batch</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py faq-section" id="faqs">
        <div className="container">
          <ScrollReveal className="section-title-wrap">
            <span className="hero-tagline font-label-lg">Support Info</span>
            <h2 className="font-headline-lg">Common Inquiries</h2>
            <div className="gold-divider"></div>
          </ScrollReveal>
          
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py cta-section">
        <div className="container cta-container">
          <ScrollReveal>
            <h2 className="font-display-lg cta-title">
              Ready to Begin with <span style={{ color: "var(--color-brand-gold)" }}>Clarity?</span>
            </h2>
            <p className="cta-tamil">சரியான வழிகாட்டுதல். தெளிவான எதிர்காலம்.</p>
            <p className="cta-desc font-body-lg">
              Unlock direct access to standard board prep, elite NEET coaching, and job-ready future digital skillsets.
            </p>
            <a
              className="btn btn-gold"
              href="https://wa.me/919841644813?text=Hi%20CCA%2C%20I%20want%20to%20chat%20with%20the%20Lead%20Mentor%20and%20begin%20my%20clarity%20journey."
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with Our Lead Mentor
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
