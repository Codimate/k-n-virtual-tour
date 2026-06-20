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

  const [position, setPosition] =
    useState({
      yaw: 0,
      pitch: 0,
    });

  useEffect(() => {
    if (!viewerRef.current) return;

    viewerRef.current.innerHTML = "";

    const viewer = new Marzipano.Viewer(
      viewerRef.current
    );

    const source =
      Marzipano.ImageUrlSource.fromString(
        scene.image
      );

    const geometry =
      new Marzipano.EquirectGeometry([
        {
          width: 8000,
        },
      ]);

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

    const updatePosition = () => {
      setPosition({
        yaw: Number(
          view.yaw().toFixed(3)
        ),
        pitch: Number(
          view.pitch().toFixed(3)
        ),
      });
    };

    view.addEventListener(
      "change",
      updatePosition
    );

    updatePosition();

    const marzipanoScene =
      viewer.createScene({
        source,
        geometry,
        view,
      });

    marzipanoScene.switchTo();

    // Hotspots
    scene.hotspots.forEach(
      (hotspot) => {
        const hotspotElement =
          document.createElement(
            "div"
          );

        // Use different CSS class for info-type hotspots
        const hotspotClass =
          hotspot.type === "info"
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
                onSceneChange(
                  hotspot.target
                );
                break;

              case "info":
                if (onInfoOpen) {
                  onInfoOpen(
                    hotspot.target
                  );
                }
                break;

              case "video":
                console.log(
                  "Video hotspot clicked"
                );
                break;

              case "gallery":
                console.log(
                  "Gallery hotspot clicked"
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

    return () => {
      viewer.destroy?.();
    };
  }, [scene, onSceneChange, onInfoOpen]);

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