import { useEffect, useRef, useState } from "react";

export default function AudioPlayer({ audioSrc }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!audioSrc || !audioRef.current) return;

    const audio = audioRef.current;
    audio.src = audioSrc;
    audio.currentTime = 0;

    const attemptPlay = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log("Audio playing successfully:", audioSrc);
        })
        .catch((err) => {
          setIsPlaying(false);
          console.warn("Audio playback issue:", err.message, "Path:", audioSrc);
        });
    };

    attemptPlay();

    const handleFirstUserInteraction = () => {
      if (audio.paused) {
        attemptPlay();
      }
      window.removeEventListener("click", handleFirstUserInteraction);
    };

    window.addEventListener("click", handleFirstUserInteraction);

    return () => {
      window.removeEventListener("click", handleFirstUserInteraction);
    };
  }, [audioSrc]);

  if (!audioSrc) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Error playing audio manually:", err));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div style={styles.container}>
      <audio
        ref={audioRef}
        loop
        onError={(e) => console.error("Audio file failed to load:", audioSrc, e)}
      />

      <button
        onClick={togglePlay}
        style={styles.button}
        title={isPlaying ? "Pause Audio" : "Play Audio"}
      >
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#2563eb">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#2563eb">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <button
        onClick={toggleMute}
        style={styles.button}
        title={isMuted ? "Unmute Audio" : "Mute Audio"}
      >
        {isMuted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#2563eb">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#2563eb">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    padding: "6px 10px",
    borderRadius: "24px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
    border: "1px solid rgba(0, 0, 0, 0.08)",
    zIndex: 9999,
  },
  button: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
};