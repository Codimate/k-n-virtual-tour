import { useState } from "react";
import "../styles/scene-drawer.css";

export default function SceneDrawer({
  scenes,
  currentScene,
  overlayLocation,
  onSceneChange,
  onSelectOverlayInfo,
}) {
  const [open, setOpen] = useState(false);

  const handleItemClick = (sceneId) => {
    if (sceneId === "highvaluecargo") {
      if (currentScene !== "warehouse") {
        onSceneChange("warehouse");
        setTimeout(() => {
          onSelectOverlayInfo("highvaluecargo");
        }, 500);
      } else {
        onSelectOverlayInfo("highvaluecargo");
      }
    } else {
      onSceneChange(sceneId);
    }
    setOpen(false);
  };

  return (
    <div className={`scene-drawer ${open ? "open" : ""}`}>
      {/* Drawer Content */}
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
          {Object.values(scenes).map((scene) => {
            const isActive =
              scene.id === "highvaluecargo"
                ? overlayLocation === "highvaluecargo"
                : currentScene === scene.id && overlayLocation !== "highvaluecargo";

            return (
              <button
                key={scene.id}
                className={`drawer-item ${isActive ? "active" : ""}`}
                onClick={() => handleItemClick(scene.id)}
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
            );
          })}
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        className="scene-drawer-toggle"
        onClick={() => setOpen(!open)}
      >
        <span style={{ fontSize: "18px" }}>📍</span>
        <span>
          {open ? "Hide Locations" : "View Locations"}
        </span>
        <span className="drawer-arrow">
          {open ? "▼" : "▲"}
        </span>
      </button>
    </div>
  );
}