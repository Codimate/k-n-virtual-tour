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
    <>
      <Logo />

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
        <SceneQuickPanel sceneId={activePanelId} />
      )}

      <MarzipanoViewer
        scene={scenes[currentScene]}
        onSceneChange={handleSceneChange}
        onInfoOpen={setActiveLocation}
        onSelectOverlayInfo={setOverlayLocation}
        overlayLocation={overlayLocation}
      />

      <SceneDrawer
        scenes={scenes}
        currentScene={currentScene}
        overlayLocation={overlayLocation}
        onSceneChange={handleSceneChange}
        onSelectOverlayInfo={setOverlayLocation}
      />

      {/* Information Modal */}
      {activeLocation && (
        <InformationModal
          locationId={activeLocation}
          onClose={() => setActiveLocation(null)}
        />
      )}
    </>
  );
}