/**
 * VideoSection
 * ────────────
 * Video player card with poster support and graceful empty state.
 *
 * Props:
 *   video – { src, poster } or null
 */
export default function VideoSection({ video }) {
  const src = typeof video === "string" ? video : video?.src;
  const poster = typeof video === "object" ? video?.poster : null;

  if (!src) {
    return (
      <div className="info-video-placeholder">
        <span className="info-video-placeholder-icon">
          🎬
        </span>
        <span className="info-video-placeholder-text">
          Video walkthrough coming soon
        </span>
      </div>
    );
  }

  return (
    <div className="info-video-wrapper">
      <video
        src={src}
        poster={poster || undefined}
        controls
        playsInline
        preload="metadata"
      />
    </div>
  );
}
