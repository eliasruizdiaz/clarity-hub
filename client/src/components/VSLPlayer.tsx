import { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { trackViewContent } from "@/lib/metaTracking";

interface VSLPlayerProps {
  onVideoEnd?: () => void;
}

// URL del video - usa variable de entorno o fallback
const VSL_VIDEO_URL = import.meta.env.VITE_VSL_VIDEO_URL || "https://pub-bb2573ea720b4fb5a0d5541e650bf440.r2.dev/Vsl.mp4";

export default function VSLPlayer({ onVideoEnd }: VSLPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: [
          "play-large",
          "play",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
        settings: ["speed"],
        speed: { selected: 1.3, options: [1, 1.3, 1.5, 2] },
        autoplay: true,
        muted: true,
        clickToPlay: true,
        hideControls: true,
        resetOnEnd: false,
        ratio: "16:9",
      });

      playerRef.current.on("ready", () => {
        if (playerRef.current) {
          playerRef.current.speed = 1.3;
        }
      });

      // Track ViewContent cuando empieza a reproducir el video
      playerRef.current.on("play", () => {
        trackViewContent('VSL - Clarity Hub', 'Video');
      });

      playerRef.current.on("ended", () => {
        if (onVideoEnd) {
          onVideoEnd();
        }
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [onVideoEnd]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
      <video
        ref={videoRef}
        className="plyr-react plyr"
        playsInline
      >
        <source src={VSL_VIDEO_URL} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}
