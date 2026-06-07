import { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import "@photo-sphere-viewer/core/index.css";

export default function PanoramaViewer({ image }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const viewer = new Viewer({
      container: containerRef.current,
      panorama: image,
    });

    return () => {
      viewer.destroy();
    };
  }, [image]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}