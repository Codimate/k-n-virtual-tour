import { useState } from "react";

import { scenes } from "../data/scenes";

import Logo from "../components/Logo";

import MarzipanoViewer from "../components/MarzipanoViewer";

import ContentDrawer from "../components/ContentDrawer";

import SceneSelector from "../components/SceneSelector";

export default function Tour() {
  const [currentScene, setCurrentScene] =
    useState("skyview");

  return (
    <>
      <Logo />

      <MarzipanoViewer
        scene={scenes[currentScene]}
        onSceneChange={setCurrentScene}
      />

    

      <SceneSelector
        scenes={scenes}
        currentScene={currentScene}
        onSceneChange={setCurrentScene}
      />
    </>
  );
}