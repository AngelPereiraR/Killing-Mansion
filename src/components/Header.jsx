const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-600 to-purple-600 p-6 rounded-b-lg shadow-xl">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <picture className="w-48">
            <source srcSet="/Diseños-Logo.webp" type="image/webp" />
            <img
              src="/Diseños-Logo.png"
              alt="Killing Mansion logo"
              className="w-48 h-auto object-cover rounded-lg"
            />
          </picture>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 md:mb-0">
            <span className="hover:animate-pulse">Killing Mansion</span>
          </h1>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl text-white/90 mb-2">
            ¿Preparado para el desafío más peligroso de tu vida?
          </p>
          <p className="text-xl text-white/90 mb-2">
            Quince invitados, una mansión... y solo uno saldrá con vida.
          </p>
          <p className="text-xl text-white/90">
            Descubre los secretos, desconfía de todos y lucha por sobrevivir.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
            Comenzar juego
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Más información
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
