import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Tour from "./pages/Tour";
import { scenes } from "./data/scenes"; // Import your scenes object

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentSceneId, setCurrentSceneId] = useState("warehouse");
  
  // State for tracking what the right info panel currently displays
  const [activeOverlay, setActiveOverlay] = useState(scenes["warehouse"]);

  // Reset overlay data whenever the user switches to a completely new 360 scene
  useEffect(() => {
    if (scenes[currentSceneId]) {
      setActiveOverlay(scenes[currentSceneId]);
    }
  }, [currentSceneId]);

  if (!authenticated) {
    return <Login onLogin={() => setAuthenticated(true)} />;
  }

  return (
    <Tour
      currentSceneId={currentSceneId}
      setCurrentSceneId={setCurrentSceneId}
      activeOverlay={activeOverlay}
      setActiveOverlay={setActiveOverlay}
    />
  );
} 