import { useState } from "react";

import { scenes } from "../data/scenes";

import Logo from "../components/Logo";
import MarzipanoViewer from "../components/MarzipanoViewer";
import SceneDrawer from "../components/SceneDrawer";
import InformationModal from "../components/InformationModal";
import SceneQuickPanel from "../components/SceneQuickPanel";

export default function Tour() {
  const [currentScene, setCurrentScene] =
    useState("skyview");

  const [activeLocation, setActiveLocation] =
    useState(null);

  return (
    <>
      <Logo />

      {/* Quick Information Panel */}
      {[
        "warehouse",
        "loadingarea",
        "surveillance",
        "documentation",
        "unloading",
        "highvaluecargo",
      ].includes(
        activeLocation || currentScene
      ) && (
        <SceneQuickPanel
          sceneId={
            activeLocation || currentScene
          }
        />
      )}

      <MarzipanoViewer
        scene={scenes[currentScene]}
        onSceneChange={setCurrentScene}
        onInfoOpen={setActiveLocation}
      />

      <SceneDrawer
        scenes={scenes}
        currentScene={currentScene}
        onSceneChange={setCurrentScene}
      />

      {/* Information Modal */}
      {activeLocation && (
        <InformationModal
          locationId={activeLocation}
          onClose={() =>
            setActiveLocation(null)
          }
        />
      )}
    </>
  );
}