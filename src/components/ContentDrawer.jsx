import { useState } from "react";

export default function ContentDrawer({
  scene,
}) {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      {!open && (
        <button
          onClick={() =>
            setOpen(true)
          }
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
            background:
              "rgba(255,255,255,.95)",
            backdropFilter:
              "blur(10px)",
            borderRadius: "20px",
            padding: "20px",
            zIndex: 999,
            boxShadow:
              "0 10px 30px rgba(0,0,0,.15)",
          }}
        >
          <button
            onClick={() =>
              setOpen(false)
            }
            style={{
              float: "right",
              border: "none",
              background:
                "transparent",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <h2>{scene.title}</h2>

          <p>
            {scene.description}
          </p>

          <button
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "12px",
            }}
          >
            Learn More
          </button>

          <button
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "12px",
            }}
          >
            Play Video
          </button>

          <button
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "12px",
            }}
          >
            View Gallery
          </button>
        </div>
      )}
    </>
  );
}