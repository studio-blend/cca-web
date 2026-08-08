export default function Loading() {
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-background)" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: "48px", height: "48px", border: "4px solid rgba(198,167,94,0.2)", borderTop: "4px solid var(--color-brand-gold)", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 16px" }}></div>
        <span className="font-label-md" style={{ color: "var(--color-primary-navy)", fontWeight: "600" }}>Loading Clarity...</span>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
