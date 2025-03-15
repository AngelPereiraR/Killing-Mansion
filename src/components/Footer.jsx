const Footer = () => {
  return (
    <footer className="bg-gray-800 p-8 text-center">
      <div className="mb-4">
        <a
          href="https://killingmansion-ampr.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400"
        >
          Killing Mansion
        </a>{" "}
        © 2025 by{" "}
        <a
          href="https://portfolio-angelpereira.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400"
        >
          Ángel Pereira
        </a>
      </div>

      <div className="mb-4">
        <p className="text-gray-400">
          Desarrollado por Ángel Manuel Pereira Rodríguez, desde España
        </p>
      </div>

      <div className="mb-4">
        <p className="text-gray-400">
          Este trabajo está licenciado bajo{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            CC BY-NC-ND 4.0
          </a>
        </p>
      </div>

      <div className="mt-8 text-gray-400 text-sm max-w-xl mx-auto">
        <p className="mb-2">
          Imagen de Svetlana Venedin-Lvov:{" "}
          <a
            href="https://www.deviantart.com/sluwut/art/M-M-Svetlana-Venedin-Lvov-846362041"
            className="text-blue-400 hover:text-blue-300"
          >
            M-M-Svetlana-Venedin-Lvov
          </a>{" "}
          por © Sluwut. Licencia CC BY-NC-ND 3.0.
        </p>

        <p className="mb-2">
          Mansión del Carousel:{" "}
          <a
            href="https://pxhere.com/es/photo/239320"
            className="text-blue-400 hover:text-blue-300"
          >
            Mansión nocturna
          </a>{" "}
          por © Yann Cœuru. Licencia CC BY 2.0.
        </p>

        <p className="mb-2">
          Imágenes originales: Algunas imágenes fueron creadas específicamente
          para este proyecto. Están licenciadas bajo CC BY-NC-SA 4.0.
        </p>

        <p className="mb-2">
          Trailer del juego: El trailer está licenciado bajo CC BY-NC-SA 4.0.
        </p>
      </div>

      <div className="text-gray-400 text-sm mt-16">
        <p>Ángel Manuel Pereira Rodríguez</p>
        <p>+34 636 16 08 17</p>
        <p>ampr2003@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
