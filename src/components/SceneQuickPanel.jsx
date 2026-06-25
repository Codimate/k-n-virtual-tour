import { useState } from "react";
import { locationContent } from "../data/locationContent";
import "../styles/quick-panel.css";

export default function SceneQuickPanel({ sceneId }) {
  const [isDark, setIsDark] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const content = locationContent[sceneId];

  if (!content) return null;

  // Use the scene's gallery or fall back to high-quality panoramas if only 1 or empty
  const galleryImages = content.gallery && content.gallery.length > 1
    ? content.gallery
    : [
        "/panoramas/main1.webp",
        "/panoramas/main2.webp",
        "/panoramas/main3.webp"
      ];

  return (
    <div className={`scene-quick-panel ${isDark ? "dark" : "light"} ${isExpanded ? "expanded" : ""}`}>
      <div className="panel-header">
        <h3>{content.title || "Overview"}</h3>
        <div className="header-actions">
          <button 
            className="expand-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Collapse panel" : "Expand panel"}
          >
            {isExpanded ? "⤡" : "⤢"}
          </button>
          <button 
            className="theme-toggle" 
            onClick={() => setIsDark(!isDark)}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      <div className="panel-content custom-scrollbar">
        {content.video && (
          <div className="panel-video-wrapper">
            <video
              src={content.video}
              autoPlay
              muted
              loop
              playsInline
              className="panel-video"
            />
          </div>
        )}

        <div className="panel-body">
          <p className="panel-subtitle">{content.subtitle}</p>
          <p className="panel-description">
            {content.overview?.text || "No summary available for this location."}
          </p>

          <div className="panel-gallery">
            <h4>Gallery</h4>
            <div className="gallery-grid">
              {galleryImages.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={`${content.title} visual ${idx + 1}`}
                  className="gallery-img"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
