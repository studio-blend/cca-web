import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Crystal Clear Academy",
  description:
    "Read Crystal Clear Academy's privacy policy. Understand how we collect, use, and protect the personal information of students and parents.",
  alternates: {
    canonical: "https://crystalclearacademy.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      heading: "1. Information We Collect",
      body: `When you interact with Crystal Clear Academy — through our website enquiry form, WhatsApp messages, or in-person enrolment — we may collect the following information:
      
• Student's full name and class/grade
• Parent or guardian name and WhatsApp contact number
• Email address (if voluntarily provided)
• Academic goals and program preferences
• Any other information you share with us directly`,
    },
    {
      heading: "2. How We Use Your Information",
      body: `We use the information collected solely for the following purposes:

• To respond to your enquiry and guide you through the enrolment process
• To communicate batch details, schedules, fee structures, and program updates via WhatsApp or phone
• To personalise your learning experience and allocate appropriate mentors
• To send event reminders and academic resources relevant to your enrolled program
• To improve our services based on feedback`,
    },
    {
      heading: "3. Information Sharing",
      body: `Crystal Clear Academy does not sell, trade, or rent your personal information to third parties.

We may share your information with:
• Our internal mentors and academic staff who work directly with your enrolled batch
• Partner organisations (e.g., Studio Blend) involved in delivering specific programs, who are bound by confidentiality obligations

We will never share your information with advertisers or external mailing lists.`,
    },
    {
      heading: "4. WhatsApp Communication",
      body: `When you click a WhatsApp link on our website, you are initiating contact via WhatsApp (a third-party platform). Your use of WhatsApp is subject to WhatsApp's own privacy policy and terms of service. We recommend reviewing those policies at whatsapp.com.

Conversations you initiate with us on WhatsApp are visible to our designated mentors and administrative staff only.`,
    },
    {
      heading: "5. Cookies and Analytics",
      body: `Our website may use basic analytics tools to understand how visitors interact with our pages (e.g., page views, session duration). No personally identifiable information is collected through analytics tools without your consent.

We do not currently use advertising cookies or third-party tracking pixels.`,
    },
    {
      heading: "6. Data Retention",
      body: `We retain your contact information for as long as you are an active student or enquirer with Crystal Clear Academy. If you wish to have your information removed from our records, please contact us directly via WhatsApp or email.`,
    },
    {
      heading: "7. Your Rights",
      body: `You have the right to:

• Request access to the personal data we hold about you
• Request correction of inaccurate information
• Request deletion of your data (subject to any legal retention obligations)
• Withdraw consent to communications at any time

To exercise any of these rights, contact us at the details below.`,
    },
    {
      heading: "8. Contact Us",
      body: `If you have questions or concerns about this Privacy Policy, please reach out:

📞 +91 98416 44813 (WhatsApp or Call)
📧 crystalclearacademy@outlook.com
📍 Chennai, Tamil Nadu — 600 040`,
    },
    {
      heading: "9. Updates to This Policy",
      body: `This policy was last updated in June 2026. Crystal Clear Academy reserves the right to update this Privacy Policy at any time. We encourage you to review this page periodically.`,
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
            Privacy Policy
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
              At Crystal Clear Academy, we respect your privacy. This policy
              explains what information we collect, why we collect it, and how
              we protect it. By using our website or contacting us, you agree to
              the practices described here.
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
              href="/terms-of-service"
              className="btn btn-secondary"
              style={{ padding: "12px 28px" }}
            >
              Terms of Service →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
