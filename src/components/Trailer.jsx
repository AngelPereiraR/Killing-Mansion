import { useEffect, useRef } from "react";

const Trailer = ({ audioRef }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Establecer volumen inicial del video al 70%
      videoElement.volume = 0.7;

      // Detener el audio de fondo cuando se reproduce el video
      const handlePlay = () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      };

      // Reproducir el audio de fondo cuando el video termine
      const handleEnded = () => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => {});
        }
      };

      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, [audioRef]);

  return (
    <section className="my-16">
      <h2 className="text-2xl font-semibold mb-6">Trailer del juego</h2>
      <div className="aspect-w-16 aspect-h-9">
        <video
          ref={videoRef}
          controls
          className="w-full"
          onLoadedData={(e) => {
            e.target.play().catch(() => {});
          }}
        >
          <source src="/Trailer.webm" type="video/webm" />
          <source src="/Trailer.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento video
        </video>
      </div>
    </section>
  );
};

export default Trailer;
