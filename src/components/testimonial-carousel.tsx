import { useState, useEffect } from "preact/hooks";

const testimonials = [
  {
    id: 4,
    name: "Valentina Moreno",
    role: "Creadora de Contenido",
    content:
      "Estas gafas han cambiado completamente mi rutina nocturna. Ahora puedo editar videos hasta tarde sin sufrir fatiga visual ni afectar mi sueño.",
    rating: 5,
    img: "./assets/img/person-review1.webp",
  },
  {
    id: 6,
    name: "Laura Castillo",
    role: "Docente Virtual",
    content:
      "Dar clases online en la noche solía dejarme acelerada y sin poder dormir. Ahora puedo conciliar más facilmente el sueño y no termino con ardor en los ojos. Las recomiendo totalmente!",
    rating: 4,
    img: "./assets/img/person-review2.webp",
  },
  {
    id: 2,
    name: "Andrés Ramirez",
    role: "Desarrollador de Software",
    content:
      "Trabajo hasta tarde programando, y estas gafas han sido un salvavidas. Mis ojos se sienten mucho menos cansados, puedo quedarme más tiempo frente a la pc y me duermo más rápido que nunca.",
    rating: 5,
    img: "./assets/img/person-review3.webp",
  },
  {
    id: 3,
    name: "Juan Camilo Rodríguez",
    role: "Estudiante",
    content:
      "Estudio muchas horas frente al computador en la noche y estas gafas me han ayudado a reducir el cansancio visual y a mejorar el sueño. Son cómodas, modernas y de verdad bloquean la luz azul. Muy contento con la compra!",
    rating: 4,
    img: "./assets/img/person-review4.webp",
  },
  {
    id: 5,
    name: "Sebastián Torres",
    role: "Analista Financiero",
    content:
      "Después de años luchando contra el insomnio, estas gafas han hecho una diferencia notable. Me duermo más rápido y me despierto mucho más descansado.",
    rating: 5,
    img: "./assets/img/person-review7.webp",
  },
  {
    id: 1,
    name: "Carolina López",
    role: "Diseñadora Gráfica",
    content:
      "Estas gafas me sorprendieron. Varias veces sentí dolor en los ojos después de estar frente al computador, me puse las gafas y, en cuestión de minutos, el dolor desapareció. Solo por eso ya valen la pena.",
    rating: 5,
    img: "./assets/img/person-review8.webp",
  },
];

export default function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const updateItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    setItemsPerPage(screenWidth >= 1024 ? 3 : 2);
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentPage, totalPages]);

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="relative md:min-h-[418px] lg:min-h-[650px]">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border rounded-xl shadow-md backdrop-blur-lg bg-white/10 border-white/10"
          >
            <div className="p-2 sm:p-5 flex flex-col justify-between">
              <div className="flex mb-4 xl:gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-[#FFD700] text-sidebar-primary-foreground  stroke-[#FFD700]"
                        : "text-sidebar-primary-foreground"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-sidebar-primary-foreground mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3 rounded-full">
                <div className="h-20 w-20 rounded-full bg-muted-foreground/20 overflow-hidden">
                  <img
                    src={testimonial.img}
                    alt="customer review"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-medium text-sidebar-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-sidebar-primary-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-2 items-center">
        <button
          className="h-8 w-8 rounded-full cursor-pointer"
          onClick={prevPage}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ffffff"
            className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" />
          </svg>
          <span className="sr-only">Previous</span>
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full p-0 ${
              i === currentPage
                ? "bg-white"
                : "bg-transparent border border-white"
            } cursor-pointer`}
            onClick={() => setCurrentPage(i)}
          >
            <span className="sr-only">Page {i + 1}</span>
          </button>
        ))}
        <button
          className="h-8 w-8 rounded-full cursor-pointer"
          onClick={nextPage}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ffffff"
            className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}

