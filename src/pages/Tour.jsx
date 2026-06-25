import { useState } from "react";

import { scenes } from "../data/scenes";

import Logo from "../components/Logo";
import MarzipanoViewer from "../components/MarzipanoViewer";
import SceneSelector from "../components/SceneSelector";
import InformationModal from "../components/InformationModal";
import SceneQuickPanel from "../components/SceneQuickPanel";

import "../styles/scene-explore.css";

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

      {/* Explore Button */}
      {[
        "cfs",
        "warehouse",
        "loadingarea",
      ].includes(currentScene) && (
        <button
          className="scene-explore-btn"
          onClick={() =>
            setActiveLocation(
              currentScene
            )
          }
        >
          {currentScene ===
            "cfs" &&
            "Explore KN CFS Polaris"}

          {currentScene ===
            "warehouse" &&
            "Explore Warehouse"}

          {currentScene ===
            "loadingarea" &&
            "Explore Loading Area"}
        </button>
      )}

      <SceneSelector
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