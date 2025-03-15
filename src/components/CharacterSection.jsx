const CharacterSection = () => {
  return (
    <section className="my-16 bg-gray-800 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">
        Personaje principal: Finn O'Connell
      </h2>
      <div className="flex flex-col items-center gap-8">
        <picture className="hover:animate-pulse">
          <source srcSet="/Diseños-Personaje.webp" type="image/webp" />
          <img
            src="/Diseños-Personaje.png"
            alt="Finn O'Connell"
            className="w-full max-w-lg h-auto object-cover rounded-lg"
          />
        </picture>
        <div className="text-gray-300 max-w-2xl text-center">
          <p className="mb-4">
            Finn O'Connell es un irlandés de 27 años con un pasado lleno de
            aventuras. Nacido en una familia conservadora donde se valoraba la
            educación y el éxito profesional, Finn siempre sintió que su destino
            era otro. A los 18 años, dejó atrás las expectativas familiares para
            explorar el mundo y descubrir quién era realmente.
          </p>
          <p className="mb-4">
            Durante sus viajes, descubrió su habilidad de psicometría, que le
            permite ver fragmentos del pasado de los objetos que toca. Aunque al
            principio esta capacidad le resultaba confusa, con el tiempo
            aprendió a controlarla y la utilizó para ayudar a aquellos que lo
            necesitaban.
          </p>
          <p className="mb-4">
            Ahora, capturado y llevado a la mansión de Eris, Finn debe usar su
            don para descubrir la verdad detrás de esta trampa y ayudar a
            escapar a los demás prisioneros.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-2">Habilidades:</h3>
          <ul className="list-none pl-6 space-y-2">
            <li>
              <strong>Poder:</strong> Psicometría - Puede ver fragmentos del
              pasado de los objetos que toca, aunque las visiones son borrosas y
              parciales.
            </li>
            <li>
              <strong>Debilidad:</strong> Sus visiones son fragmentarias y no
              siempre completas, lo que puede llevarlo a conclusiones
              equivocadas.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">
            Características principales:
          </h3>
          <ul className="list-none pl-6 space-y-2">
            <li>Edad: 27 años</li>
            <li>Altura: 1.85 m</li>
            <li>Nacionalidad: Irlandesa</li>
            <li>Cumpleaños: 15 de mayo</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">
            Gustos y disgustos:
          </h3>
          <ul className="list-none pl-6 space-y-2">
            <li>
              Gustos: Música rock, novelas de misterio, viajar, tocar la
              guitarra
            </li>
            <li>
              Disgustos: Personas groseras, comida picante, películas de terror
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">Personalidad:</h3>
          <p className="mb-4">
            Finn es un hombre tranquilo y reflexivo que disfruta tanto de la
            soledad como de la compañía de sus amigos cercanos. Es leal y
            protector con quienes le importan, pero también puede ser terco y
            obstinado en sus opiniones. Su experiencia viajando lo ha hecho
            adaptable y curioso, aunque a veces demasiado confiado en sus
            propias habilidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
