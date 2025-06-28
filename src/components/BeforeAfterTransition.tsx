import { useState, useEffect } from "preact/hooks";

export default function BeforeAfterTransition() {
  const [opacity, setOpacity] = useState(0);
  const [direction, setDirection] = useState(1);

  // Imágenes de ejemplo (reemplazar con tus propias URLs)
  const beforeImage = "./assets/img/sinProteccion.avif";
  const afterImage = "./assets/img/conProteccion.avif";

  // Efecto para la animación de transición
  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity((prevOpacity) => {
        // Calcular la nueva opacidad basada en la dirección
        const newOpacity = prevOpacity + direction * 0.1;

        // Cambiar dirección cuando llegamos a los límites
        if (newOpacity >= 1) {
          setDirection(-1);
          return 1;
        } else if (newOpacity <= 0) {
          setDirection(1);
          return 0;
        }

        return newOpacity;
      });
    }, 170); // Velocidad de la transición

    return () => clearInterval(timer);
  }, [direction]);

  return (
    <div className="flex flex-col items-center w-full max-w-2xl lg:flex-1 mx-auto">
      <div className="relative w-full h-80 md:h-92 lg:h-full overflow-hidden rounded-lg shadow-lg mb-4">
        {/* Imagen de "Antes" (siempre visible) */}
        <img
          src={beforeImage}
          alt="Antes"
          className="absolute top-0 left-0 w-full h-full object-cover md:object-fill"
          loading="lazy"
          style={{ opacity: 1 - opacity }}
        />

        {/* Imagen de "Después" (aparece/desaparece) */}
        <img
          src={afterImage}
          alt="Después"
          className="absolute top-0 left-0 w-full h-full object-cover md:object-fill transition-opacity duration-200"
          style={{ opacity: opacity }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
