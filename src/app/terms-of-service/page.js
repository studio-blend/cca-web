import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Crystal Clear Academy",
  description:
    "Read Crystal Clear Academy's terms of service. Understand the enrolment conditions, refund policy, and code of conduct for students and parents.",
  alternates: {
    canonical: "https://crystalclearacademy.in/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  const sections = [
    {
      heading: "1. Acceptance of Terms",
      body: `By enrolling in any Crystal Clear Academy (CCA) program — including CCA Foundations, CCA Aspire, CCA Launchpad, or CCA Pathways — students and their parents/guardians agree to be bound by these Terms of Service.

These terms are effective from the date of enrolment or first paid session, whichever comes earlier.`,
    },
    {
      heading: "2. Enrolment & Seat Confirmation",
      body: `• A seat is confirmed only upon receipt of the first month's fee payment.
• CCA reserves the right to limit batch sizes. Waitlists may apply for high-demand batches.
• Founder's Batch discount (10% off) applies only to the first 10 students enrolled per batch cycle and cannot be combined with other discounts.
• All enrolment enquiries initiated via WhatsApp or the contact form are subject to seat availability at time of confirmation.`,
    },
    {
      heading: "3. Fees & Payment",
      body: `• Fees are charged on a monthly basis unless otherwise agreed.
• Fees are due at the beginning of each month. A grace period of 5 days is provided; thereafter, a late fee may apply.
• Annual and quarterly pre-payment options are available at agreed rates.
• Fees are subject to revision with 30 days' written notice via WhatsApp or email.
• All fees are quoted in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.`,
    },
    {
      heading: "4. Refund Policy",
      body: `• Fees paid for the current month are non-refundable once classes have begun.
• If a student withdraws before the 5th of the month, a pro-rated refund for unused sessions may be issued at CCA's discretion.
• Advance payments (quarterly or annual) for subsequent months will be refunded proportionately if written notice is given at least 15 days prior.
• No refund will be issued for missed classes unless due to verified medical emergencies, for which supporting documentation is required.`,
    },
    {
      heading: "5. Schedule, Attendance & Conduct",
      body: `• Batch timings and schedules will be shared via WhatsApp upon enrolment.
• Students are expected to attend all scheduled sessions punctually.
• Habitual absenteeism (more than 40% missed without prior notice) may result in forfeiture of the reserved seat.
• Disruptive behaviour, academic dishonesty, or conduct unbecoming of a CCA student is grounds for suspension or removal without refund.
• Parents/guardians are responsible for ensuring students meet the expected standard of engagement.`,
    },
    {
      heading: "6. WhatsApp Groups & Digital Communication",
      body: `• Students enrolled in a batch will be added to a dedicated WhatsApp group for that batch.
• The group is for academic communication only: doubt-clearing, schedule updates, and resource sharing.
• Sharing or forwarding CCA proprietary content (notes, question banks, worksheets) outside of approved channels is strictly prohibited.
• Mentors aim to respond to doubts within 4–6 hours. Response times may vary during holidays or examination periods.`,
    },
    {
      heading: "7. Intellectual Property",
      body: `All materials provided by Crystal Clear Academy — including but not limited to concept maps, worksheets, question banks, recorded sessions, and presentation slides — are the exclusive intellectual property of Crystal Clear Academy.

These materials are licensed to enrolled students for personal academic use only. Reproduction, distribution, or commercial use of any CCA materials without written permission is strictly prohibited.`,
    },
    {
      heading: "8. Website Use",
      body: `The information on this website is provided for general informational purposes. While we strive to keep content accurate and current, CCA makes no warranties regarding the completeness, accuracy, or reliability of any information on this site.

CCA reserves the right to modify, update, or remove any website content without prior notice.`,
    },
    {
      heading: "9. Limitation of Liability",
      body: `Crystal Clear Academy's liability to any student or parent for any claim arising from the use of our services shall be limited to the amount of fees paid in the preceding 30 days.

CCA shall not be liable for indirect, consequential, or punitive damages, including but not limited to examination results, college admissions outcomes, or career opportunities.`,
    },
    {
      heading: "10. Governing Law",
      body: `These Terms of Service are governed by the laws of the Republic of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.`,
    },
    {
      heading: "11. Contact for Concerns",
      body: `For questions, concerns, or to raise a grievance, contact us:

📞 +91 98416 44813 (WhatsApp or Call)
📧 crystalclearacademy@outlook.com
📍 Chennai, Tamil Nadu — 600 040`,
    },
    {
      heading: "12. Updates to These Terms",
      body: `Crystal Clear Academy reserves the right to update these Terms of Service at any time. Enrolled students will be notified via WhatsApp of any material changes. Continued participation in CCA programs constitutes acceptance of the revised terms.

Last updated: June 2026.`,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary-navy) 0%, #2a4a7f 100%)",
          padding: "60px 0 40px",
        }}
      >
        <div className="container">
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: "600",
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              marginBottom: "24px",
            }}
          >
            ← Back to Home
          </Link>
          <h1
            className="font-headline-lg"
            style={{ color: "#fff", margin: "0 0 8px 0" }}
          >
            Terms of Service
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "15px",
              margin: 0,
            }}
          >
            Crystal Clear Academy · Last updated: June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              backgroundColor: "var(--color-surface-container-low)",
              border: "1px solid rgba(31,78,121,0.08)",
              borderRadius: "var(--radius-xl)",
              padding: "48px",
            }}
          >
            <p
              className="font-body-lg"
              style={{
                color: "var(--color-on-surface-variant)",
                marginBottom: "40px",
                lineHeight: 1.7,
                paddingBottom: "32px",
                borderBottom: "1px solid rgba(31,78,121,0.1)",
              }}
            >
              These Terms of Service govern your relationship with Crystal Clear
              Academy. Please read them carefully before enrolling in any
              program. By enrolling, you acknowledge that you have read,
              understood, and agreed to these terms.
            </p>

            {sections.map((section, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "36px",
                  paddingBottom: i < sections.length - 1 ? "36px" : 0,
                  borderBottom:
                    i < sections.length - 1
                      ? "1px solid rgba(31,78,121,0.06)"
                      : "none",
                }}
              >
                <h2
                  className="font-headline-sm"
                  style={{
                    color: "var(--color-primary-navy)",
                    fontSize: "18px",
                    marginBottom: "12px",
                  }}
                >
                  {section.heading}
                </h2>
                <p
                  className="font-body-md"
                  style={{
                    color: "var(--color-on-surface-variant)",
                    lineHeight: 1.75,
                    whiteSpace: "pre-line",
                    margin: 0,
                  }}
                >
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              className="btn btn-secondary"
              style={{ padding: "12px 28px" }}
            >
              ← Back to Home
            </Link>
            <Link
              href="/privacy-policy"
              className="btn btn-secondary"
              style={{ padding: "12px 28px" }}
            >
              Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
