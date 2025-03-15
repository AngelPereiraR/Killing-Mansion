import { useState, useEffect } from "react";
import image1Webp from "/light-night-mansion-house-window-hall-642654-pxhere.com.webp";
import image1 from "/light-night-mansion-house-window-hall-642654-pxhere.com.jpg";
import image2Webp from "/light-night-mansion-house-europe-evening-239320-pxhere.com.webp";
import image2 from "/light-night-mansion-house-europe-evening-239320-pxhere.com.jpg";
import image3Webp from "/light-night-mansion-atmosphere-spooky-dark-1011998-pxhere.com.webp";
import image3 from "/light-night-mansion-atmosphere-spooky-dark-1011998-pxhere.com.jpg";
import image4Webp from "/rock-architecture-mansion-house-window-building-1034855-pxhere.com.webp";
import image4 from "/rock-architecture-mansion-house-window-building-1034855-pxhere.com.jpg";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imagesWebp = [image1Webp, image2Webp, image3Webp, image4Webp];
  const imagesJpg = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === imagesWebp.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-16 relative">
      <h2 className="text-2xl font-semibold mb-6">Imágenes de la mansión</h2>
      <picture>
        <source srcSet={imagesWebp[currentImage]} type="image/webp" />
        <img
          src={imagesJpg[currentImage]}
          alt="Imagen de la mansión"
          className="w-full h-[50rem] object-cover"
        />
      </picture>
    </section>
  );
};

export default Carousel;
