"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

export default function SiteSettingsPage() {
  const [settings, setSettings] = useState({
    academyName: "",
    tagline: "",
    phone: "",
    whatsappPhone: "",
    email: "",
    address: "",
    instagramUrl: "",
    facebookUrl: "",
    linkedinUrl: "",
    youtubeUrl: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  async function loadSettings() {
    try {
      const res = await fetch("/api/admin/settings");
      const data = await res.json();
      if (data.settings) {
        setSettings(data.settings);
      }
    } catch (err) {
      console.error("Failed to load site settings", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSettings();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        setMessage("Site contact settings saved successfully!");
      } else {
        setMessage("Failed to save settings.");
      }
    } catch (err) {
      setMessage("Error saving settings.");
    } finally {
      setSaving(false);
    }
  }

  async function handleFileUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadedUrl("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setUploadedUrl(data.url);
      } else {
        alert(data.error || "File upload failed.");
      }
    } catch (err) {
      alert("Error uploading file.");
    } finally {
      setUploading(false);
    }
  }

  if (loading) {
    return <div style={{ color: "#94a3b8" }}>Loading settings...</div>;
  }

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: "0 0 0.5rem 0", color: "#f8fafc" }}>
          Site Settings &amp; Asset Uploader
        </h1>
        <p style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem" }}>
          Manage global academy contact info, WhatsApp numbers, email, campus address, and upload media assets.
        </p>
      </div>

      {message && (
        <div
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            background: "rgba(34, 197, 94, 0.15)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            color: "#4ade80",
            marginBottom: "1.5rem",
          }}
        >
          {message}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "1.5rem" }}>
        {/* Settings Form */}
        <div
          style={{
            background: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "12px",
            padding: "1.5rem",
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h3 style={{ margin: 0, color: "#f8fafc", fontSize: "1.1rem" }}>Academy Contact Information</h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Academy Name</label>
                <input
                  type="text"
                  className={styles.input}
                  value={settings.academyName}
                  onChange={(e) => setSettings({ ...settings, academyName: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Academy Tagline</label>
                <input
                  type="text"
                  className={styles.input}
                  value={settings.tagline}
                  onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Primary Phone Number</label>
                <input
                  type="text"
                  className={styles.input}
                  value={settings.phone}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>WhatsApp Mobile Number (No +)</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="e.g. 919841644813"
                  value={settings.whatsappPhone}
                  onChange={(e) => setSettings({ ...settings, whatsappPhone: e.target.value })}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Academy Email Address</label>
              <input
                type="email"
                className={styles.input}
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Campus Address</label>
              <textarea
                className={styles.textarea}
                style={{ minHeight: "70px" }}
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              />
            </div>

            <h3 style={{ margin: "1rem 0 0 0", color: "#f8fafc", fontSize: "1.1rem" }}>Social Media Links</h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Instagram URL</label>
                <input
                  type="text"
                  className={styles.input}
                  value={settings.instagramUrl}
                  onChange={(e) => setSettings({ ...settings, instagramUrl: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Facebook URL</label>
                <input
                  type="text"
                  className={styles.input}
                  value={settings.facebookUrl}
                  onChange={(e) => setSettings({ ...settings, facebookUrl: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>LinkedIn URL</label>
                <input
                  type="text"
                  className={styles.input}
                  value={settings.linkedinUrl}
                  onChange={(e) => setSettings({ ...settings, linkedinUrl: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>YouTube Channel URL</label>
                <input
                  type="text"
                  className={styles.input}
                  value={settings.youtubeUrl}
                  onChange={(e) => setSettings({ ...settings, youtubeUrl: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
              <button type="submit" className={styles.primaryBtn} disabled={saving}>
                {saving ? "Saving..." : "Save Site Settings"}
              </button>
            </div>
          </form>
        </div>

        {/* Media Asset Uploader Box */}
        <div
          style={{
            background: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "12px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            height: "fit-content",
          }}
        >
          <h3 style={{ margin: 0, color: "#f8fafc", fontSize: "1.1rem" }}>🖼️ Media Asset Uploader</h3>
          <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: 0 }}>
            Upload student photos, blog cover banners, or study PDFs to get a public URL for your posts.
          </p>

          <div
            style={{
              border: "2px dashed rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              padding: "1.5rem",
              textAlign: "center",
              background: "rgba(15, 23, 42, 0.5)",
            }}
          >
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              onChange={handleFileUpload}
              accept="image/*,.pdf"
            />
            <label htmlFor="file-upload" className={styles.secondaryBtn} style={{ cursor: "pointer" }}>
              {uploading ? "Uploading Asset..." : "Choose Image or PDF"}
            </label>
          </div>

          {uploadedUrl && (
            <div
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(96, 165, 250, 0.3)",
                borderRadius: "8px",
                padding: "0.75rem",
                wordBreak: "break-all",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "#60a5fa", fontWeight: "bold", marginBottom: "0.25rem" }}>
                Uploaded File URL:
              </div>
              <code style={{ fontSize: "0.8rem", color: "#f8fafc" }}>{uploadedUrl}</code>
              {uploadedUrl.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i) && (
                <div style={{ marginTop: "0.5rem" }}>
                  <img src={uploadedUrl} alt="Uploaded preview" style={{ maxWidth: "100%", height: "auto", borderRadius: "4px" }} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
