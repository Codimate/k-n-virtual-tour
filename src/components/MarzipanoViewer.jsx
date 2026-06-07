import { useEffect, useRef } from "react";
import Marzipano from "marzipano";
import "../styles/hotspot.css";

export default function MarzipanoViewer({
  scene,
  onSceneChange,
}) {
  const viewerRef = useRef(null);

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
          width: 2400,
        },
      ]);

    const limiter =
      Marzipano.RectilinearView.limit.traditional(
        1024,
        (100 * Math.PI) / 180
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

    const marzipanoScene =
      viewer.createScene({
        source,
        geometry,
        view,
      });

    marzipanoScene.switchTo();

    // Create Hotspots
    scene.hotspots.forEach((hotspot) => {
      const hotspotElement =
        document.createElement("div");

      hotspotElement.innerHTML = `
  <div class="kn-hotspot">

    <div class="kn-hotspot-label">
      ${hotspot.label}
    </div>

    <div class="kn-hotspot-pointer"></div>

  </div>
`;

      hotspotElement.style.cursor =
        "pointer";

      hotspotElement.addEventListener(
        "click",
        () => {
          switch (hotspot.type) {
            case "scene":
              onSceneChange(
                hotspot.target
              );
              break;

            case "info":
              console.log(
                "Info hotspot clicked"
              );
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
            yaw: hotspot.yaw,
            pitch: hotspot.pitch,
          }
        );
    });

    return () => {
      viewer.destroy?.();
    };
  }, [scene, onSceneChange]);

  return (
    <div
  ref={viewerRef}
  style={{
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
  }}
/>
  );
}