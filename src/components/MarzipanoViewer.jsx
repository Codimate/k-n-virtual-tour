
import {
  useEffect,
  useRef,
  useState,
} from "react";

import Marzipano from "marzipano";
import "../styles/hotspot.css";

export default function MarzipanoViewer({
  scene,
  onSceneChange,
  onInfoOpen,
}) {
  const viewerRef = useRef(null);
  const viewerInstanceRef = useRef(null);
  const scenesRef = useRef({});

  const onSceneChangeRef =
    useRef(onSceneChange);

  const onInfoOpenRef =
    useRef(onInfoOpen);

  const [position, setPosition] =
    useState({
      yaw: 0,
      pitch: 0,
    });

  useEffect(() => {
    onSceneChangeRef.current =
      onSceneChange;

    onInfoOpenRef.current =
      onInfoOpen;
  }, [onSceneChange, onInfoOpen]);

  // Create Viewer Once
  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer =
      new Marzipano.Viewer(
        viewerRef.current,
        {
          controls: {
            mouseViewMode: "drag",
          },
        }
      );

    viewerInstanceRef.current =
      viewer;

    return () => {
      viewer.destroy?.();

      viewerInstanceRef.current =
        null;

      scenesRef.current = {};
    };
  }, []);

  // Scene Loader
  useEffect(() => {
    const viewer =
      viewerInstanceRef.current;

    if (!viewer) return;

    let marzipanoScene =
      scenesRef.current[scene.id];

    if (!marzipanoScene) {
      const source =
        Marzipano.ImageUrlSource.fromString(
          scene.image
        );

      const geometry =
        new Marzipano.EquirectGeometry(
          [
            {
              width: 8000,
            },
          ]
        );

      const limiter =
        Marzipano.RectilinearView.limit.traditional(
          4096,
          (120 * Math.PI) / 180
        );

      const view =
        new Marzipano.RectilinearView(
          {
            yaw: 0,
            pitch: 0,
            fov: Math.PI / 2,
          },
          limiter
        );

      // Developer Tool Updates
      const updatePosition =
        () => {
          setPosition({
            yaw: Number(
              view
                .yaw()
                .toFixed(3)
            ),

            pitch: Number(
              view
                .pitch()
                .toFixed(3)
            ),
          });
        };

      view.addEventListener(
        "change",
        updatePosition
      );

      updatePosition();

      marzipanoScene =
        viewer.createScene({
          source,
          geometry,
          view,
        });

      // Create Hotspots
      scene.hotspots.forEach(
        (hotspot) => {
          const hotspotElement =
            document.createElement(
              "div"
            );

          const hotspotClass =
            hotspot.type ===
            "info"
              ? "kn-hotspot kn-hotspot-info"
              : "kn-hotspot";

          hotspotElement.innerHTML = `
            <div class="kn-hotspot-anchor">

              <div class="${hotspotClass}">

                <div class="kn-hotspot-label">
                  ${hotspot.label}
                </div>

                <div class="kn-hotspot-pointer"></div>

              </div>

            </div>
          `;

          hotspotElement.style.cursor =
            "pointer";

          hotspotElement.addEventListener(
            "click",
            () => {
              switch (
                hotspot.type
              ) {
                case "scene":
                  onSceneChangeRef.current?.(
                    hotspot.target
                  );
                  break;

                case "info":
                  onInfoOpenRef.current?.(
                    hotspot.target
                  );
                  break;

                default:
                  break;
              }
            }
          );

          marzipanoScene
            .hotspotContainer()
            .createHotspot(
              hotspotElement,
              {
                yaw:
                  hotspot.yaw,
                pitch:
                  hotspot.pitch,
              }
            );
        }
      );

      scenesRef.current[
        scene.id
      ] = marzipanoScene;
    }

    marzipanoScene.switchTo({
      transitionDuration: 600,
    });

    // Skyview Animation
    if (
      scene.id === "skyview"
    ) {
      const timer =
        setTimeout(() => {
          if (
            viewer.scene() ===
            marzipanoScene
          ) {
            marzipanoScene.lookTo(
              {
                yaw: 1.474,
                pitch: 1.552,
              },
              {
                transitionDuration: 6000,
              }
            );
          }
        }, 500);

      return () =>
        clearTimeout(timer);
    }

    // Loading Area Animation
    if (
      scene.id ===
      "loadingarea"
    ) {
      const timer =
        setTimeout(() => {
          if (
            viewer.scene() ===
            marzipanoScene
          ) {
            marzipanoScene.lookTo(
              {
                yaw: 1.853,
                pitch: 0.326,
              },
              {
                transitionDuration: 6000,
              }
            );
          }
        }, 500);

      return () =>
        clearTimeout(timer);
    }
  }, [scene]);

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

      {/* Developer Tool */}
      <div
        style={{
          position: "fixed",
          top: "90px",
          right: "20px",
          zIndex: 9999,
          background:
            "rgba(0,0,0,.85)",
          color: "white",
          padding: "14px",
          borderRadius: "12px",
          minWidth: "190px",
          fontSize: "14px",
          backdropFilter:
            "blur(10px)",
        }}
      >
        <div>
          <strong>
            Yaw:
          </strong>{" "}
          {position.yaw}
        </div>

        <div
          style={{
            marginTop: "6px",
          }}
        >
          <strong>
            Pitch:
          </strong>{" "}
          {position.pitch}
        </div>

        <button
          style={{
            marginTop: "12px",
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius:
              "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
          onClick={() => {
            navigator.clipboard.writeText(
              `yaw: ${position.yaw}, pitch: ${position.pitch}`
            );

            alert(
              "Position copied!"
            );
          }}
        >
          Copy Position
        </button>
      </div>
    </>
  );
}