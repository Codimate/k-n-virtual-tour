import { useEffect, useRef, useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import Marzipano from "marzipano";
import "../styles/hotspot.css";

// 1. Path to your background music file
const BACKGROUND_MUSIC_SRC = "public/audio/corporateascent.mp3"; 

export default function MarzipanoViewer({
  scene,
  onSceneChange,
  onInfoOpen,
  onSelectOverlayInfo,
  overlayLocation,
}) {
  const viewerRef = useRef(null);
  const viewerInstanceRef = useRef(null);
  const scenesRef = useRef({});
  const autorotateRef = useRef(null);
  const isInteractingRef = useRef(false);

  // Background Music State & Refs
  const bgAudioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const fadeIntervalRef = useRef(null);

  const onSceneChangeRef = useRef(onSceneChange);
  const onInfoOpenRef = useRef(onInfoOpen);
  const onSelectOverlayInfoRef = useRef(onSelectOverlayInfo);

  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = useState({ yaw: 0, pitch: 0 });

  useEffect(() => {
    onSceneChangeRef.current = onSceneChange;
    onInfoOpenRef.current = onInfoOpen;
    onSelectOverlayInfoRef.current = onSelectOverlayInfo;
  }, [onSceneChange, onInfoOpen, onSelectOverlayInfo]);

  // 2. Initialize Background Audio & Fade-In Logic
  useEffect(() => {
    const bgAudio = new Audio(BACKGROUND_MUSIC_SRC);
    bgAudio.loop = true;
    bgAudio.volume = 0; // Start at 0 for fade-in effect
    bgAudioRef.current = bgAudio;

    const playAudio = async () => {
      try {
        await bgAudio.play();
        fadeInMusic();
      } catch (err) {
        // Autoplay policy fallback: play on first user click
        const handleUserInteract = () => {
          bgAudio.play().then(() => fadeInMusic());
          window.removeEventListener("click", handleUserInteract);
          window.removeEventListener("keydown", handleUserInteract);
        };
        window.addEventListener("click", handleUserInteract);
        window.addEventListener("keydown", handleUserInteract);
      }
    };

    playAudio();

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      bgAudio.pause();
      bgAudioRef.current = null;
    };
  }, []);

  // Smooth Fade-In Function (Target volume: 30%)
  const fadeInMusic = () => {
    if (!bgAudioRef.current) return;
    const targetVolume = 0.07; // 30% volume
    const step = 0.01;
    const intervalTime = 100; // Adjusts over ~3 seconds

    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    fadeIntervalRef.current = setInterval(() => {
      if (!bgAudioRef.current) {
        clearInterval(fadeIntervalRef.current);
        return;
      }

      if (bgAudioRef.current.volume < targetVolume - step) {
        bgAudioRef.current.volume += step;
      } else {
        bgAudioRef.current.volume = targetVolume;
        clearInterval(fadeIntervalRef.current);
      }
    }, intervalTime);
  };

  // Toggle Mute / Unmute
  const toggleMute = () => {
    if (!bgAudioRef.current) return;
    const newMuteState = !isMuted;
    bgAudioRef.current.muted = newMuteState;
    setIsMuted(newMuteState);
  };

  // 3. Auto-rotation helpers
  const startRotation = () => {
    if (autorotateRef.current) return;

    const rotate = () => {
      const viewer = viewerInstanceRef.current;
      if (viewer && !isInteractingRef.current) {
        const currentScene = viewer.scene();
        if (currentScene) {
          const view = currentScene.view();
          if (view) {
            view.setYaw(view.yaw() + 0.0004);
          }
        }
      }
      autorotateRef.current = requestAnimationFrame(rotate);
    };

    autorotateRef.current = requestAnimationFrame(rotate);
  };

  const stopRotation = () => {
    if (autorotateRef.current) {
      cancelAnimationFrame(autorotateRef.current);
      autorotateRef.current = null;
    }
  };

  // 4. Initialize Marzipano Viewer
  useEffect(() => {
    if (!viewerRef.current) return;

    try {
      const viewer = new Marzipano.Viewer(viewerRef.current, {
        controls: { mouseViewMode: "drag" },
      });

      viewerInstanceRef.current = viewer;
      const viewerElement = viewerRef.current;

      const handlePointerDown = () => {
        isInteractingRef.current = true;
        stopRotation();
      };

      const handlePointerUp = () => {
        isInteractingRef.current = false;
        startRotation();
      };

      viewerElement.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("pointerup", handlePointerUp);

      return () => {
        stopRotation();
        viewerElement.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointerup", handlePointerUp);
        viewer.destroy?.();
        viewerInstanceRef.current = null;
        scenesRef.current = {};
      };
    } catch (err) {
      console.error("Error initializing Marzipano Viewer:", err);
    }
  }, []);

  // 5. Load Scene & Setup Hotspots
  useEffect(() => {
    const viewer = viewerInstanceRef.current;
    if (!viewer || !scene) return;

    let marzipanoScene = scenesRef.current[scene.id];

    if (!marzipanoScene) {
      const source = Marzipano.ImageUrlSource.fromString(scene.image);
      const geometry = new Marzipano.EquirectGeometry([{ width: 8000 }]);
      const limiter = Marzipano.RectilinearView.limit.traditional(
        4096,
        (120 * Math.PI) / 180
      );

      const view = new Marzipano.RectilinearView(
        { yaw: 0, pitch: 0, fov: Math.PI / 2 },
        limiter
      );

      const updatePosition = () => {
        setPosition({
          yaw: Number(view.yaw().toFixed(3)),
          pitch: Number(view.pitch().toFixed(3)),
        });
      };

      view.addEventListener("change", updatePosition);
      updatePosition();

      marzipanoScene = viewer.createScene({ source, geometry, view });

      scene.hotspots?.forEach((hotspot) => {
        const hotspotElement = document.createElement("div");

        const hotspotClass =
          hotspot.type === "info"
            ? "kn-hotspot kn-hotspot-info"
            : "kn-hotspot";

        const iconMarkup =
          hotspot.type === "info"
            ? `<svg viewBox="0 0 24 24" class="hotspot-pin-svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`
            : `<svg viewBox="0 0 24 24" class="hotspot-pin-svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5-2.5z"/></svg>`;

        hotspotElement.innerHTML = `
          <div class="kn-hotspot-anchor">
            <div class="${hotspotClass}">
              <div class="kn-hotspot-label">${hotspot.label}</div>
              <div class="kn-hotspot-icon">${iconMarkup}</div>
            </div>
          </div>
        `;

        hotspotElement.style.cursor = "pointer";

        hotspotElement.addEventListener("click", () => {
          const isHighValueCargo =
            hotspot.id === "hvc" || hotspot.target === "highvaluecargo";

          if (isHighValueCargo) {
            stopRotation();
            const currentScene = viewerInstanceRef.current?.scene();
            if (currentScene) {
              currentScene.lookTo(
                {
                  yaw: hotspot.targetYaw ?? hotspot.yaw ?? 2.3,
                  pitch: hotspot.targetPitch ?? hotspot.pitch ?? 0.12,
                  fov: hotspot.targetFov ?? (40 * Math.PI) / 180,
                },
                { transitionDuration: 1200 }
              );
            }

            if (onSelectOverlayInfoRef.current) {
              onSelectOverlayInfoRef.current("highvaluecargo");
            }
            return;
          }

          switch (hotspot.type) {
            case "scene":
              onSceneChangeRef.current?.(hotspot.target);
              break;
            case "info":
              onInfoOpenRef.current?.(hotspot.target);
              break;
            default:
              break;
          }
        });

        marzipanoScene.hotspotContainer().createHotspot(hotspotElement, {
          yaw: hotspot.yaw,
          pitch: hotspot.pitch,
        });
      });

      scenesRef.current[scene.id] = marzipanoScene;
    }

    marzipanoScene.switchTo({ transitionDuration: 600 });
    isInteractingRef.current = false;
    startRotation();

    if (scene.id === "skyview") {
      const timer = setTimeout(() => {
        if (viewer.scene() === marzipanoScene) {
          marzipanoScene.lookTo(
            { yaw: 1.474, pitch: 1.552 },
            { transitionDuration: 4000 }
          );
        }
      }, 500);
      return () => clearTimeout(timer);
    }

    if (scene.id === "loadingarea") {
      const timer = setTimeout(() => {
        if (viewer.scene() === marzipanoScene) {
          marzipanoScene.lookTo(
            { yaw: 1.853, pitch: 0.326 },
            { transitionDuration: 4000 }
          );
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [scene]);

  // 6. Handle External Zoom Requests
  useEffect(() => {
    if (overlayLocation === "highvaluecargo") {
      stopRotation();
      const currentScene = viewerInstanceRef.current?.scene();
      if (currentScene) {
        currentScene.lookTo(
          { yaw: 2.3, pitch: 0.12, fov: (40 * Math.PI) / 180 },
          { transitionDuration: 1200 }
        );
      }
    }
  }, [overlayLocation]);

  return (
    <>
      <div
        ref={viewerRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Floating Mute/Unmute Button with White Background & Blue Icon */}
<div
  style={{
    position: "fixed",
    bottom: "90px",
    right: "20px",
    zIndex: 1000,
  }}
>
  <button
    onClick={toggleMute}
    title={isMuted ? "Unmute Ambient Music" : "Mute Ambient Music"}
    style={{
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      backgroundColor: "#ffffff",
      border: "1px solid #e2e8f0",
      color: "#0056b3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      transition: "all 0.2s ease-in-out",
    }}
  >
    {isMuted ? (
      /* Muted Music Icon (Blue) */
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
      </svg>
    ) : (
      /* Active Music Note Icon (Blue) */
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    )}
  </button>
</div>

      {/* Voice Narrative Player */}
      <AudioPlayer audioSrc={scene?.audio} />
    </>
  );
}