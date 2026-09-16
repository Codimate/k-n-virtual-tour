import { useState } from "react";
import { scenes } from "../data/scenes";

import Logo from "../components/Logo";
import MarzipanoViewer from "../components/MarzipanoViewer";
import SceneDrawer from "../components/SceneDrawer";
import InformationModal from "../components/InformationModal";
import SceneQuickPanel from "../components/SceneQuickPanel";

export default function Tour() {
  const [currentScene, setCurrentScene] = useState("skyview");
  const [activeLocation, setActiveLocation] = useState(null);
  const [overlayLocation, setOverlayLocation] = useState(null);

  const handleSceneChange = (newScene) => {
    // Intercept virtual target IDs to prevent mounting duplicate canvas viewports
    if (scenes[newScene]?.isVirtual) {
      setCurrentScene("warehouse");
      setOverlayLocation(newScene);
      return;
    }

    setCurrentScene(newScene);
    setOverlayLocation(null);
  };

  const activePanelId = overlayLocation || currentScene;

  return (
    <div 
      style={{ 
        position: "fixed", 
        inset: 0, 
        width: "100%", 
        height: "100%", 
        overflow: "hidden" 
      }}
    >
      {/* 1. Base Layer: Marzipano Canvas (Handles 360 drag) */}
      <MarzipanoViewer
        scene={scenes[currentScene]}
        onSceneChange={handleSceneChange}
        onInfoOpen={setActiveLocation}
        onSelectOverlayInfo={setOverlayLocation}
        overlayLocation={overlayLocation}
      />

      {/* 2. Floating UI Overlay Layer (Click-through enabled) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none", // Allows drags on transparent areas to hit the 360 viewer
          zIndex: 10,
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <Logo />
        </div>

        {/* Quick Information Panel */}
        {[
          "cfs",
          "warehouse",
          "loadingarea",
          "surveillance",
          "documentation",
          "unloading",
          "highvaluecargo",
        ].includes(activePanelId) && (
          <div style={{ pointerEvents: "auto" }}>
            <SceneQuickPanel sceneId={activePanelId} />
          </div>
        )}

        {/* Scene Drawer (Left Side Menu) */}
        <div style={{ pointerEvents: "auto" }}>
          <SceneDrawer
            scenes={scenes}
            currentScene={currentScene}
            overlayLocation={overlayLocation}
            onSceneChange={handleSceneChange}
            onSelectOverlayInfo={setOverlayLocation}
          />
        </div>

        {/* Information Modal */}
        {activeLocation && (
          <div style={{ pointerEvents: "auto" }}>
            <InformationModal
              locationId={activeLocation}
              onClose={() => setActiveLocation(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}