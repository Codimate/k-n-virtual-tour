import { useEffect, useState, useCallback } from "react";

import { locationContent } from "../data/locationContent";
import "../styles/information-modal.css";

import InformationCard from "./InformationCard";
import ProcessSection from "./ProcessSection";
import GallerySection from "./GallerySection";
import VideoSection from "./VideoSection";

/**
 * InformationModal
 * ────────────────
 * Apple-style Bento Grid overlay for non-panorama locations.
 *
 * Props:
 *   locationId – key into locationContent data
 *   onClose    – callback to dismiss the modal
 */
export default function InformationModal({
  locationId,
  onClose,
}) {
  const [closing, setClosing] = useState(false);
  const [theme, setTheme] = useState("dark");

  const data = locationContent[locationId];

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  /* ── Close with animation ────────────────────────────────── */
  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // matches CSS exit animation duration
  }, [onClose]);

  /* ── Escape key ──────────────────────────────────────────── */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener(
      "keydown",
      onKeyDown
    );
    return () =>
      document.removeEventListener(
        "keydown",
        onKeyDown
      );
  }, [handleClose]);

  /* ── Lock body scroll while open ─────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ── Guard: unknown location ─────────────────────────────── */
  if (!data) {
    return (
      <div
        className={`info-modal-overlay ${closing ? "closing" : ""}`}
        onClick={handleClose}
      >
        <div className="info-modal-container">
          <p style={{ color: "#fff", textAlign: "center" }}>
            Content not available for this location.
          </p>
        </div>
      </div>
    );
  }

  /* ── Card delay helper (staggered entrance) ──────────────── */
  /* ── Card delay helper (staggered entrance) ──────────────── */
  let cardIndex = 0;
  const nextDelay = () => 150 + cardIndex++ * 60;

  return (
    <div
      className={`info-modal-overlay ${closing ? "closing" : ""}`}
      onClick={(e) => {
        // Close only when clicking the overlay itself
        if (e.target === e.currentTarget)
          handleClose();
      }}
    >
      <div className={`info-modal-container ${theme === "light" ? "theme-light" : ""}`}>
        {/* Theme Toggle Button */}
        <button
          className="info-modal-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Close Button (pinned inside container top-right) */}
        <button
          className="info-modal-close"
          onClick={handleClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="info-modal-scrollable">
          {/* ── Header ─────────────────────────────────────── */}
          <header className="info-modal-header">
            {data.overview?.icon && (
              <span className="info-modal-header-icon">
                {data.overview.icon}
              </span>
            )}

            <h1 className="info-modal-title">
              {data.title}
            </h1>

            <p className="info-modal-subtitle">
              {data.subtitle}
            </p>

            <div
              className="info-modal-accent-line"
              style={{
                background: data.accent || "#0a84ff",
              }}
            />
          </header>

          {/* ── Bento Grid ─────────────────────────────────── */}
          <div className="info-bento-grid">
            {/* Overview */}
            {data.overview && (
              <InformationCard
                icon="📖"
                title="Overview"
                variant="col2"
                delay={nextDelay()}
              >
                <p className="info-card-text" style={{ fontSize: "15.5px", lineHeight: "1.7" }}>
                  {data.overview.text}
                </p>
              </InformationCard>
            )}

            {/* Video */}
            {data.video && (
              <InformationCard
                icon="🎬"
                title="Video Walkthrough"
                variant="col2"
                delay={nextDelay()}
              >
                <VideoSection video={data.video} />
              </InformationCard>
            )}

            {/* Gallery */}
            {data.gallery && data.gallery.length > 0 && (
              <InformationCard
                icon="🖼️"
                title="Gallery"
                variant="col2"
                delay={nextDelay()}
              >
                <GallerySection images={data.gallery} />
              </InformationCard>
            )}

            {/* Statistics as individual Bento cards (Apple style!) */}
            {data.stats &&
              data.stats.map((stat, i) => (
                <div
                  key={i}
                  className="info-card info-card--col1 info-stat-card"
                  style={{
                    animationDelay: `${nextDelay()}ms`,
                    borderColor: `rgba(255, 255, 255, 0.08)`,
                    '--accent-color': data.accent || '#0a84ff'
                  }}
                >
                  <div className="info-stat-card-header">
                    <span className="info-stat-card-icon">{stat.icon}</span>
                  </div>
                  <div className="info-stat-card-body">
                    <div className="info-stat-card-value" style={{ color: data.accent || '#0a84ff' }}>
                      {stat.value}
                    </div>
                    <div className="info-stat-card-label">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}

            {/* Key Features */}
            {data.features &&
              data.features.length > 0 && (
                <InformationCard
                  icon="⚡"
                  title="Key Features"
                  variant="col4"
                  delay={nextDelay()}
                >
                  <div className="info-features-grid">
                    {data.features.map(
                      (feature, i) => (
                        <div
                          key={i}
                          className="info-feature-item"
                        >
                          <span className="info-feature-icon">
                            {feature.icon}
                          </span>
                          <h4 className="info-feature-title">
                            {feature.title}
                          </h4>
                          <p className="info-feature-description">
                            {feature.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </InformationCard>
              )}

            {/* Operations Process */}
            {data.process &&
              data.process.length > 0 && (
                <InformationCard
                  icon="🔄"
                  title="Operations Process"
                  variant="col4"
                  delay={nextDelay()}
                >
                  <ProcessSection
                    steps={data.process}
                    accent={
                      data.accent || "#0a84ff"
                    }
                  />
                </InformationCard>
              )}

            {/* Additional Info */}
            {data.additionalInfo && (
              <InformationCard
                icon="ℹ️"
                title={data.additionalInfo.title}
                variant="col4"
                delay={nextDelay()}
              >
                <p className="info-card-text">
                  {data.additionalInfo.content}
                </p>
              </InformationCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
