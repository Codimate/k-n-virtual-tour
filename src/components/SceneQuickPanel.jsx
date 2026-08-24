import { useState } from "react";
import { locationContent } from "../data/locationContent";
import "../styles/quick-panel.css";

export default function SceneQuickPanel({ sceneId }) {
  const [isDark, setIsDark] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const content = locationContent[sceneId];

  if (!content) return null;

  /* ── Normalize videos to support 1, 2, or multiple videos ───── */
  const rawVideos = content.videos || content.video;
  const videosList = Array.isArray(rawVideos)
    ? rawVideos
    : rawVideos
    ? [rawVideos]
    : [];

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
        {/* Render all videos in the list */}
        {videosList.map((vidSrc, idx) => {
          // If vidSrc is an object with a .src property, use that; otherwise use vidSrc directly
          const src = typeof vidSrc === "object" ? vidSrc.src || vidSrc.url : vidSrc;
          
          return (
            <div className="panel-video-wrapper" key={idx} style={{ marginBottom: idx < videosList.length - 1 ? "12px" : "0" }}>
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="panel-video"
              />
            </div>
          );
        })}

        <div className="panel-body">
          <p className="panel-subtitle">{content.subtitle}</p>
          <p className="panel-description">
            {content.overview?.text || "No summary available for this location."}
          </p>
        </div>
      </div>
    </div>
  );
}