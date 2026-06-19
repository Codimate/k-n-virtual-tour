import "../styles/scene-selector.css";

export default function SceneSelector({
  scenes,
  currentScene,
  onSceneChange,
}) {
  return (
    <div className="scene-selector">
      {Object.values(scenes).map(
        (scene) => (
          <button
            key={scene.id}
            className={`scene-card ${
              currentScene === scene.id
                ? "active"
                : ""
            }`}
            onClick={() =>
              onSceneChange(scene.id)
            }
          >
            <img
              src={scene.thumbnail}
              alt={scene.title}
            />

            <span>
              {scene.title}
            </span>
          </button>
        )
      )}
    </div>
  );
}