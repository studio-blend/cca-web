import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | Crystal Clear Academy",
};

export default function NotFound() {
  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 60px" }}>
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <span className="font-label-lg" style={{ color: "var(--color-brand-gold)", letterSpacing: "2px", textTransform: "uppercase" }}>404 Error</span>
        <h1 className="font-display-lg" style={{ color: "var(--color-primary-navy)", margin: "16px 0" }}>
          Page Not Found
        </h1>
        <p className="font-body-lg" style={{ color: "var(--color-on-surface-variant)", marginBottom: "32px" }}>
          The page you are looking for might have been moved, renamed, or does not exist. Let&apos;s get you back on track to conceptual clarity.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-gold">
            Return to Homepage
          </Link>
          <Link href="/foundations" className="btn btn-secondary">
            Explore Programs
          </Link>
        </div>
      </div>
    </div>
  );
}
