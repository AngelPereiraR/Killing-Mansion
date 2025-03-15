import { useState } from "react";

const ScenarioSection = () => {
  // Estado para manejar la interacción con objetos
  const [interacted, setInteracted] = useState(false);

  return (
    <section className="my-16 bg-gray-800 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Escenario del juego</h2>
      <div className="flex flex-col items-center gap-8">
        <picture className="w-full hover:animate-pulse">
          <source srcSet="/Diseños-Escenario.webp" type="image/webp" />
          <img
            src="/Diseños-Escenario.png"
            alt="Escenario del juego"
            className="w-full h-auto object-cover rounded-lg"
          />
        </picture>
        <div className="text-gray-300 max-w-2xl">
          <p className="mb-4">
            La mansión Killing Mansion es un laberinto de secretos y peligros
            cuidadosamente diseñado. Cada habitación está cargada de detalles
            que podrían ser la clave para sobrevivir o la causa de tu perdición.
            Las paredes de color verde oscuro, las puertas de madera maciza con
            pomos dorados, las ventanas con cristales esmerilados y los muebles
            antiguos crean una atmósfera opresiva pero fascinante.
          </p>
          <p className="mb-4">
            La exploración es esencial. Cada rincón puede esconder pistas,
            herramientas o incluso trampas. La mesa con el extraño objeto azul
            podría ser una clave para desbloquear ciertas áreas, mientras que el
            candelabro en la pared podría contener un mensaje cifrado.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Movimiento libre:</strong> Explora todas las habitaciones
              de la mansión, pero ten cuidado con las zonas restringidas que
              requerirán habilidades especiales para acceder.
            </li>
            <li>
              <strong>Interacción con objetos:</strong> Examina y utiliza
              objetos clave como la lámpara azul o el candelabro para resolver
              acertijos y avanzar en el juego.
            </li>
            <li>
              <strong>Sistema de visión:</strong> Algunas áreas requerirán
              habilidades especiales para ver pistas ocultas o mensajes escritos
              en superficies comunes.
            </li>
            <li>
              <strong>Elementos dinámicos:</strong> La mansión cambia
              ligeramente con cada partida, manteniendo la sorpresa y el
              suspense incluso en partidas repetidas.
            </li>
          </ul>
          {interacted ? (
            <p className="mt-4 text-green-400">
              Has descubierto un secreto en esta habitación: la lámpara azul
              emite una luz especial que revela mensajes ocultos en las paredes.
            </p>
          ) : (
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              onClick={() => setInteracted(true)}
            >
              Interactuar con la lámpara azul
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;
