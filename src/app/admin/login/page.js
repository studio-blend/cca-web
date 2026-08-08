"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../admin.module.css";

export default function AdminLoginPage() {
  const [passcode, setPasscode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.message || "Invalid passcode. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <h2>CCA Admin CMS</h2>
          <p>Enter administrative passcode to access CMS management portal.</p>
        </div>

        {error && (
          <div
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              background: "rgba(239, 68, 68, 0.15)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#f87171",
              fontSize: "0.875rem",
              marginBottom: "1.25rem",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup} style={{ marginBottom: "1.5rem" }}>
            <label className={styles.label} htmlFor="passcode">
              Admin Passcode
            </label>
            <input
              id="passcode"
              type="password"
              className={styles.input}
              placeholder="••••••••••••"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              required
              autoFocus
            />
          </div>

          <button
            type="submit"
            className={styles.primaryBtn}
            disabled={loading}
            style={{ width: "100%", justifyContent: "center", padding: "0.75rem" }}
          >
            {loading ? "Authenticating..." : "Sign In to Admin Portal"}
          </button>
        </form>
      </div>
    </div>
  );
}
