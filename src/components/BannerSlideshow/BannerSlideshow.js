"use client";

import { useEffect, useState, useRef } from "react";

export default function BannerSlideshow({ initialBanners = [] }) {
  const [banners, setBanners] = useState(initialBanners);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (initialBanners.length > 0) return;
    fetch("/api/admin/banners?activeOnly=true")
      .then((res) => res.json())
      .then((data) => {
        if (data.banners && data.banners.length > 0) {
          setBanners(data.banners);
        }
      })
      .catch((err) => console.error("Failed to load marketing banners", err));
  }, [initialBanners]);

  useEffect(() => {
    if (banners.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length, isPaused]);

  if (!banners || banners.length === 0) return null;

  const currentBanner = banners[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      style={{
        padding: "1.5rem 0",
        background: "var(--color-surface-dim, #0b0f19)",
      }}
    >
      <div className="container">
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            background: currentBanner.bgGradient || "linear-gradient(135deg, #0e1f3b 0%, #1f4e79 100%)",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
            border: "1px solid rgba(198, 167, 94, 0.2)",
            minHeight: "160px",
            display: "flex",
            alignItems: "center",
            transition: "all 0.5s ease-in-out",
          }}
        >
          {/* Background Image Overlay if uploaded */}
          {currentBanner.imageUrl && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${currentBanner.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.35,
                zIndex: 1,
              }}
            />
          )}

          {/* Banner Content Container */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              padding: "1.5rem 2rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 300px", color: "#ffffff" }}>
              {currentBanner.badge && (
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    background: "rgba(198, 167, 94, 0.25)",
                    border: "1px solid rgba(198, 167, 94, 0.5)",
                    color: "#C6A75E",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                  }}
                >
                  {currentBanner.badge}
                </span>
              )}
              <h3
                style={{
                  margin: "0 0 0.4rem 0",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#f8fafc",
                  lineHeight: 1.25,
                }}
              >
                {currentBanner.title}
              </h3>
              {currentBanner.subtitle && (
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.85)",
                    lineHeight: 1.4,
                    maxWidth: "680px",
                  }}
                >
                  {currentBanner.subtitle}
                </p>
              )}
            </div>

            {currentBanner.ctaText && (
              <div style={{ flexShrink: 0 }}>
                <a
                  href={currentBanner.ctaUrl || "/#lead-form"}
                  target={currentBanner.ctaUrl?.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{
                    padding: "10px 24px",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    boxShadow: "0 4px 14px rgba(198, 167, 94, 0.35)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currentBanner.ctaText} →
                </a>
              </div>
            )}
          </div>

          {/* Navigation Controls for Multi-Banners */}
          {banners.length > 1 && (
            <>
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 3,
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#f8fafc",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "1rem",
                  backdropFilter: "blur(4px)",
                }}
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 3,
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#f8fafc",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "1rem",
                  backdropFilter: "blur(4px)",
                }}
              >
                ›
              </button>

              {/* Dots Indicators */}
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 3,
                  display: "flex",
                  gap: "6px",
                }}
              >
                {banners.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    style={{
                      width: currentIndex === i ? "18px" : "6px",
                      height: "6px",
                      borderRadius: "100px",
                      background: currentIndex === i ? "#C6A75E" : "rgba(255, 255, 255, 0.35)",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
