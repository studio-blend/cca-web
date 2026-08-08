"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("CCA Application Error:", error);
  }, [error]);

  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 60px", backgroundColor: "var(--color-background)" }}>
      <div style={{ textAlign: "center", maxWidth: "550px" }}>
        <h2 className="font-headline-lg" style={{ color: "var(--color-primary-navy)", marginBottom: "16px" }}>
          Something went wrong
        </h2>
        <p className="font-body-md" style={{ color: "var(--color-on-surface-variant)", marginBottom: "28px" }}>
          An unexpected error occurred while loading this view. Please try refreshing or return to the main academy page.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button onClick={() => reset()} className="btn btn-gold">
            Try Again
          </button>
          <a href="/" className="btn btn-secondary">
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
