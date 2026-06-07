import { useState } from "react";
import { scenes } from "../data/scenes";
import MarzipanoViewer from "../components/MarzipanoViewer";
import ContentDrawer from "../components/ContentDrawer";

export default function Tour() {
  const [currentScene, setCurrentScene] =
    useState("warehouse");

  return (
    <>
      <MarzipanoViewer
        scene={scenes[currentScene]}
        onSceneChange={setCurrentScene}
      />

      <ContentDrawer
        scene={scenes[currentScene]}
      />
    </>
  );
}