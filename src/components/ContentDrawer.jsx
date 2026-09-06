import { useState } from "react";

export default function ContentDrawer({ scene }) {
  const [open, setOpen] = useState(false);

  // Helper to extract overview text or object safely
  const overview = scene?.overview;

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: 60,
            height: 60,
            borderRadius: "50%",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 999,
          }}
        >
          ℹ
        </button>
      )}

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: "320px",
            maxHeight: "80vh",
            overflowY: "auto",
            background: "rgba(255,255,255,.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "20px",
            zIndex: 999,
            boxShadow: "0 10px 30px rgba(0,0,0,.15)",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              float: "right",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ✕
          </button>

          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "4px" }}>
            {scene?.title}
          </h2>

          {scene?.subtitle && (
            <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "16px", fontWeight: "600" }}>
              {scene.subtitle}
            </p>
          )}

          {/* OVERVIEW CONTENT HANDLER */}
          {typeof overview === "object" && overview !== null ? (
            <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.5" }}>
              {/* Main paragraph or pre-formatted text */}
              {overview.text && (
                <p style={{ whiteSpace: "pre-line", marginBottom: "12px" }}>
                  {overview.text}
                </p>
              )}

              {/* Optional subtext introduction */}
              {overview.subtext && (
                <p style={{ marginBottom: "8px" }}>{overview.subtext}</p>
              )}

              {/* Bullet points array handling */}
              {Array.isArray(overview.points) && overview.points.length > 0 && (
                <ul style={{ paddingLeft: "20px", margin: "8px 0 12px 0", listStyleType: "disc" }}>
                  {overview.points.map((point, index) => (
                    <li key={index} style={{ marginBottom: "6px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {/* Footer sentence */}
              {overview.footer && (
                <p style={{ marginTop: "10px" }}>{overview.footer}</p>
              )}
            </div>
          ) : (
            /* Fallback for single string overview or scene description */
            <p style={{ whiteSpace: "pre-line", fontSize: "14px", color: "#374151", lineHeight: "1.5" }}>
              {typeof overview === "string" ? overview : scene?.description || "No content available"}
            </p>
          )}

          <button
            style={{
              width: "100%",
              marginTop: "16px",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background: "#2563eb",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>

          <button
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Play Video
          </button>

          <button
            style={{
              width: "100%",
              marginTop: "8px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            View Gallery
          </button>
        </div>
      )}
    </>
  );
}