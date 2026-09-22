import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Tour from "./pages/Tour";
import { scenes } from "./data/scenes";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentSceneId, setCurrentSceneId] = useState("warehouse");

  // Track key string (e.g., "highvaluecargo" or null when no overlay is active)
  const [overlayLocation, setOverlayLocation] = useState(null);

  // State for tracking what the info panel currently displays
  const [activeOverlay, setActiveOverlay] = useState(scenes["warehouse"]);

  // Reset overlay state whenever the main 360 scene changes
  useEffect(() => {
    if (scenes[currentSceneId]) {
      setActiveOverlay(scenes[currentSceneId]);
      setOverlayLocation(null); // Clear active overlay key on scene transition
    }
  }, [currentSceneId]);

  // Handler for selecting an overlay item (e.g. High Value Cargo)
  const handleSelectOverlayInfo = (locationKey) => {
    setOverlayLocation(locationKey);
    
    // Fallback to scenes object if present, or keep track of the selected key
    if (scenes[locationKey]) {
      setActiveOverlay(scenes[locationKey]);
    }
  };

  if (!authenticated) {
    return <Login onLogin={() => setAuthenticated(true)} />;
  }

  return (
    <Tour
      currentSceneId={currentSceneId}
      setCurrentSceneId={setCurrentSceneId}
      activeOverlay={activeOverlay}
      setActiveOverlay={setActiveOverlay}
      overlayLocation={overlayLocation}
      setOverlayLocation={setOverlayLocation}
      onSelectOverlayInfo={handleSelectOverlayInfo}
    />
  );
}