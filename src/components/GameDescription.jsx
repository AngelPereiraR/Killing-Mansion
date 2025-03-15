import { useEffect, useRef } from "react";

const GameDescription = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      // Establecer volumen inicial al 70%
      audioRef.current.volume = 0.7;

      // Intentar reproducir automáticamente
      audioRef.current.play().catch((e) => {
        console.log("Reproducción automática bloqueada por el navegador", e);
      });
    }
  }, []);

  // Función para detener el audio
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section className="my-16">
      <div className="flex justify-center items-center gap-4">
        <p className="text-md text-gray-400">
          Activa la música ambiente para sumergirte en la atmósfera de la
          mansión
        </p>
        <audio
          controls
          ref={audioRef}
          loop
          onLoadedData={() => audioRef.current.play()}
        >
          <source src="/relaxing-guitar-loop-v5-245859.mp3" type="audio/mpeg" />
          Tu navegador no soporta el elemento audio
        </audio>
      </div>

      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-6">Descripción del juego</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          ¿Has recibido la invitación más tentadora y peligrosa de tu vida? Una
          mansión lujosa, un premio de mil millones de euros... y una regla
          sencilla pero letal: ser el último superviviente o matar sin dejar
          huellas. Bienvenido a Killing Mansion, donde los poderes
          extraordinarios se enfrentan a las debilidades mortales.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Quince invitados especiales responden a la llamada de Eris, la
          misteriosa anfitriona que controla todos los hilos. Cada uno posee
          habilidades únicas: control mental, manipulación de elementos,
          percepción sobrehumana... pero también debilidades que podrían ser su
          perdición. Sin salida, sin conexión con el mundo exterior, y con sus
          poderes limitados dentro de los muros de la mansión, deberán tomar
          decisiones que marcarán su destino.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          ¿Confiarás en tus aliados cuando una palabra equivocada pueda sellar
          tu suerte? ¿Revelarás tu verdadero potencial arriesgándote a ser
          descubierto? Cada paso, cada mentira, cada alianza podría ser tu
          salvación o tu condena. En Killing Mansion, la desconfianza es tu
          mejor aliada y la traición, tu peor enemigo.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          ¿Podrás sobrevivir a las sombras de la mansión y a los secretos de los
          demás invitados? El juego termina cuando solo quede uno. ¿Serás tú el
          que salga con vida y el bolsillo lleno?
        </p>
      </section>
    </section>
  );
};

export default GameDescription;
