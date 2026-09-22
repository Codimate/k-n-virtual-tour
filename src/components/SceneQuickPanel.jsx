import { useState, useRef } from "react";
import { locationContent } from "../data/locationContent";
import "../styles/quick-panel.css";

function VideoItem({ src, isLast }) {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <div
      className="panel-video-wrapper"
      style={{
        position: "relative",
        marginBottom: isLast ? "0" : "12px",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="panel-video"
      />

      {/* Hover Overlay with Pause/Play Button */}
      <div
        className="video-hover-overlay"
        onClick={togglePlayPause}
        title={isPaused ? "Play video" : "Pause video"}
      >
        <button className="video-control-btn" type="button">
          {isPaused ? (
            /* Play Icon */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            /* Pause Icon */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

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
          const src = typeof vidSrc === "object" ? vidSrc.src || vidSrc.url : vidSrc;
          return (
            <VideoItem
              key={idx}
              src={src}
              isLast={idx === videosList.length - 1}
            />
          );
        })}

        <div className="panel-body">
          {content.subtitle && <p className="panel-subtitle">{content.subtitle}</p>}

          {/* Paragraph 1 */}
          {content.overview?.paragraph1 && (
            <p className="panel-description" style={{ marginBottom: "12px" }}>
              {content.overview.paragraph1}
            </p>
          )}

          {/* Paragraph 2 */}
          {content.overview?.paragraph2 && (
            <p className="panel-description" style={{ marginBottom: "8px" }}>
              {content.overview.paragraph2}
            </p>
          )}

          {/* Bullet Points List */}
          {Array.isArray(content.overview?.points) && (
            <ul className="panel-description-list" style={{ paddingLeft: "20px", marginBottom: "12px" }}>
              {content.overview.points.map((point, idx) => (
                <li key={idx} style={{ marginBottom: "6px" }}>{point}</li>
              ))}
            </ul>
          )}

          {/* Footer Paragraph */}
          {content.overview?.footer && (
            <p className="panel-description" style={{ marginTop: "8px" }}>
              {content.overview.footer}
            </p>
          )}

          {/* Fallback for simple text overview */}
          {typeof content.overview?.text === "string" && (
            <p className="panel-description">{content.overview.text}</p>
          )}
        </div>
      </div>
    </div>
  );
}