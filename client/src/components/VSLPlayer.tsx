import { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

interface VSLPlayerProps {
  onVideoEnd?: () => void;
}

// URL del video - usa variable de entorno o fallback
const VSL_VIDEO_URL = import.meta.env.VITE_VSL_VIDEO_URL || "https://clarityhub.b-cdn.net/vsl.mp4";

export default function VSLPlayer({ onVideoEnd }: VSLPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "fullscreen",
        ],
        autoplay: false,
        clickToPlay: true,
        hideControls: true,
        resetOnEnd: false,
        ratio: "16:9",
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
