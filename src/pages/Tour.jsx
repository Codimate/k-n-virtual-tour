import { useState } from "react";
import { scenes } from "../data/scenes";
import MarzipanoViewer from "../components/MarzipanoViewer";
import ContentDrawer from "../components/ContentDrawer";
import Logo from "../components/Logo";

export default function Tour() {
  const [currentScene, setCurrentScene] =
    useState("warehouse");

  return (
    <>
      <Logo />

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