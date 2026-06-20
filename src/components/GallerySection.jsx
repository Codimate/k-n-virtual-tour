import { useState } from "react";

/**
 * GallerySection
 * ──────────────
 * Image gallery grid with lightbox overlay.
 *
 * Props:
 *   images – array of image URLs
 */
export default function GallerySection({ images }) {
  const [lightboxSrc, setLightboxSrc] =
    useState(null);

  if (!images || images.length === 0) {
    return (
      <div className="info-empty-state">
        <span className="info-empty-state-icon">
          🖼️
        </span>
        <p className="info-empty-state-text">
          Gallery images coming soon
        </p>
      </div>
    );
  }

  // Single image hero presentation
  if (images.length === 1) {
    return (
      <>
        <div
          className="info-gallery-hero"
          onClick={() => setLightboxSrc(images[0])}
          style={{
            cursor: "pointer",
            overflow: "hidden",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <img
            src={images[0]}
            alt="Gallery hero"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              display: "block",
              filter: "brightness(0.92)",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.025)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(0.92)";
            }}
          />
        </div>

        {lightboxSrc && (
          <div
            className="info-lightbox"
            onClick={() => setLightboxSrc(null)}
          >
            <img
              src={lightboxSrc}
              alt="Full view"
            />
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="info-gallery-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className="info-gallery-item"
            onClick={() => setLightboxSrc(src)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="info-lightbox"
          onClick={() => setLightboxSrc(null)}
        >
          <img
            src={lightboxSrc}
            alt="Full view"
          />
        </div>
      )}
    </>
  );
}
