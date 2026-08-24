import { useState } from "react";
import "../styles/scene-drawer.css";

export default function SceneDrawer({
  scenes,
  currentScene,
  onSceneChange,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`scene-drawer ${open ? "open" : ""}`}>

      {/* Drawer */}

      <div className="scene-drawer-content">

        <div className="drawer-header">
          <h3>Explore Locations</h3>

          <button
            className="drawer-close"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="drawer-list">

          {/* 360 Scenes */}

          {Object.values(scenes).map((scene) => (
            <button
              key={scene.id}
              className={`drawer-item ${
                currentScene === scene.id ? "active" : ""
              }`}
              onClick={() => {
                onSceneChange(scene.id);
                setOpen(false);
              }}
            >
              <img
                src={scene.thumbnail}
                alt={scene.title}
              />

              <div className="drawer-item-info">
                <span className="drawer-title">
                  {scene.title}
                </span>

                <span className="drawer-type">
                  360° Scene
                </span>
              </div>
            </button>
          ))}

        </div>
      </div>

      {/* Floating Toggle Button */}

      <button
        className="scene-drawer-toggle"
        onClick={() => setOpen(!open)}
      >
        <span style={{ fontSize: "18px" }}>📍</span>

        <span>
          {open
            ? "Hide Locations"
            : "View Locations"}
        </span>

        <span className="drawer-arrow">
          {open ? "▼" : "▲"}
        </span>
      </button>

    </div>
  );
}