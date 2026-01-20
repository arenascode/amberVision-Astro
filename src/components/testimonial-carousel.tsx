import { useState, useEffect } from "preact/hooks";

const testimonials = [
  {
    id: 1,
    name: "Carolina L.",
    role: "Diseñadora Gráfica",
    location: "Bogotá",
    content:
      "Estas gafas me sorprendieron. Varias veces sentí dolor en los ojos después de estar frente al computador, me puse las gafas y, en cuestión de minutos, el dolor desapareció.",
    result: "Alivio inmediato en minutos",
    rating: 5,
    verified: true,
    img: "./assets/img/person-review8.webp",
  },
  {
    id: 2,
    name: "Andrés R.",
    role: "Desarrollador de Software",
    location: "Medellín",
    content:
      "Trabajo hasta tarde programando, y estas gafas han sido un salvavidas. Mis ojos se sienten mucho menos cansados, puedo quedarme más tiempo frente a la PC y me duermo más rápido que nunca.",
    result: "Concilia el sueño más rápido",
    rating: 5,
    verified: true,
    img: "./assets/img/person-review3.webp",
  },
  {
    id: 3,
    name: "Juan Camilo R.",
    role: "Estudiante de Ingeniería",
    location: "Cali",
    content:
      "Estudio muchas horas frente al computador en la noche y estas gafas me han ayudado a reducir el cansancio visual y a mejorar el sueño. Son cómodas, modernas y de verdad bloquean la luz azul.",
    result: "Menos cansancio estudiando",
    rating: 5,
    verified: true,
    img: "./assets/img/person-review4.webp",
  },
  {
    id: 4,
    name: "Valentina M.",
    role: "Creadora de Contenido",
    location: "Bogotá",
    content:
      "Estas gafas han cambiado completamente mi rutina nocturna. Ahora puedo editar videos hasta tarde sin sufrir fatiga visual ni afectar mi sueño.",
    result: "Edita videos sin fatiga",
    rating: 5,
    verified: true,
    img: "./assets/img/person-review1.webp",
  },
  {
    id: 5,
    name: "Sebastián T.",
    role: "Analista Financiero",
    location: "Barranquilla",
    content:
      "Después de años luchando contra el insomnio, estas gafas han hecho una diferencia notable. Me duermo más rápido y me despierto mucho más descansado.",
    result: "Venció el insomnio crónico",
    rating: 5,
    verified: true,
    img: "./assets/img/person-review7.webp",
  },
  {
    id: 6,
    name: "Laura C.",
    role: "Docente Virtual",
    location: "Cartagena",
    content:
      "Dar clases online en la noche solía dejarme acelerada y sin poder dormir. Ahora puedo conciliar más fácilmente el sueño y no termino con ardor en los ojos.",
    result: "Duerme después de clases",
    rating: 5,
    verified: true,
    img: "./assets/img/person-review2.webp",
  },
];

export default function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const updateItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setItemsPerPage(3);
    } else if (screenWidth >= 768) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(1);
    }
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
    if (isPaused) return;

    const interval = setInterval(() => {
      nextPage();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentPage, totalPages, isPaused]);

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="relative">
      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="relative bg-bg-card-glass border border-white/20 rounded-2xl p-4 hover:border-amber-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10 group flex flex-col shadow-lg"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Verified Badge */}
            {testimonial.verified && (
              <div className="absolute -top-1 -right-0 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-circle-check text-green-500"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                </svg>
              </div>
            )}

            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={i < testimonial.rating ? "#FFC000" : "none"}
                  stroke={i < testimonial.rating ? "#FFC000" : "#666"}
                  strokeWidth="2"
                  className="drop-shadow-sm"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            {/* Testimonial Content */}
            <p className="text-brand-body text-base leading-relaxed mb-6 flex-grow">
              "{testimonial.content}"
            </p>

            {/* Result Badge */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/40 rounded-full">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#10b981">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-semibold text-green-400">
                  {testimonial.result}
                </span>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-500/30">
              <div className="relative">
                <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-amber-500/50">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-semibold text-brand-headline text-sm">
                    {testimonial.name}
                  </p>
                  {testimonial.verified && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#10b981"
                    >
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                </div>
                <p className="text-xs text-brand-body">{testimonial.role}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {testimonial.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4">
        <button
          className="group h-10 w-10 rounded-full bg-brand-body hover:bg-amber-500/80 border border-white/20 hover:border-amber-500 transition-all flex items-center justify-center"
          onClick={prevPage}
          aria-label="Previous testimonials"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:translate-x-[-2px] transition-transform text-white"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`h-2.5 rounded-full transition-all ${
                i === currentPage
                  ? "w-8 bg-amber-500"
                  : "w-2.5 bg-black/40 hover:bg-white/50"
              }`}
              onClick={() => setCurrentPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="group h-10 w-10 rounded-full bg-brand-body hover:bg-amber-500/80 border border-white/20 hover:border-amber-500 transition-all flex items-center justify-center"
          onClick={nextPage}
          aria-label="Next testimonials"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:translate-x-[2px] transition-transform text-white"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-3">
        <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {isPaused ? "Pausado" : "Rotación automática cada 6 segundos"}
        </p>
      </div>
    </div>
  );
}
// import { useState, useEffect } from "preact/hooks";

// const testimonials = [
//   {
//     id: 4,
//     name: "Valentina Moreno",
//     role: "Creadora de Contenido",
//     content:
//       "Estas gafas han cambiado completamente mi rutina nocturna. Ahora puedo editar videos hasta tarde sin sufrir fatiga visual ni afectar mi sueño.",
//     rating: 5,
//     img: "./assets/img/person-review1.webp",
//   },
//   {
//     id: 6,
//     name: "Laura Castillo",
//     role: "Docente Virtual",
//     content:
//       "Dar clases online en la noche solía dejarme acelerada y sin poder dormir. Ahora puedo conciliar más facilmente el sueño y no termino con ardor en los ojos. Las recomiendo totalmente!",
//     rating: 4,
//     img: "./assets/img/person-review2.webp",
//   },
//   {
//     id: 2,
//     name: "Andrés Ramirez",
//     role: "Desarrollador de Software",
//     content:
//       "Trabajo hasta tarde programando, y estas gafas han sido un salvavidas. Mis ojos se sienten mucho menos cansados, puedo quedarme más tiempo frente a la pc y me duermo más rápido que nunca.",
//     rating: 5,
//     img: "./assets/img/person-review3.webp",
//   },
//   {
//     id: 3,
//     name: "Juan Camilo Rodríguez",
//     role: "Estudiante",
//     content:
//       "Estudio muchas horas frente al computador en la noche y estas gafas me han ayudado a reducir el cansancio visual y a mejorar el sueño. Son cómodas, modernas y de verdad bloquean la luz azul. Muy contento con la compra!",
//     rating: 4,
//     img: "./assets/img/person-review4.webp",
//   },
//   {
//     id: 5,
//     name: "Sebastián Torres",
//     role: "Analista Financiero",
//     content:
//       "Después de años luchando contra el insomnio, estas gafas han hecho una diferencia notable. Me duermo más rápido y me despierto mucho más descansado.",
//     rating: 5,
//     img: "./assets/img/person-review7.webp",
//   },
//   {
//     id: 1,
//     name: "Carolina López",
//     role: "Diseñadora Gráfica",
//     content:
//       "Estas gafas me sorprendieron. Varias veces sentí dolor en los ojos después de estar frente al computador, me puse las gafas y, en cuestión de minutos, el dolor desapareció. Solo por eso ya valen la pena.",
//     rating: 5,
//     img: "./assets/img/person-review8.webp",
//   },
// ];

// export default function TestimonialCarousel() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(3);
//   const totalPages = Math.ceil(testimonials.length / itemsPerPage);

//   const updateItemsPerPage = () => {
//     const screenWidth = window.innerWidth;
//     setItemsPerPage(screenWidth >= 1024 ? 3 : 2);
//   };

//   useEffect(() => {
//     updateItemsPerPage();
//     window.addEventListener("resize", updateItemsPerPage);
//     return () => window.removeEventListener("resize", updateItemsPerPage);
//   }, []);

//   const nextPage = () => {
//     setCurrentPage((prev) => (prev + 1) % totalPages);
//   };

//   const prevPage = () => {
//     setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextPage();
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [currentPage, totalPages]);

//   const currentTestimonials = testimonials.slice(
//     currentPage * itemsPerPage,
//     (currentPage + 1) * itemsPerPage
//   );

//   return (
//     <div className="relative md:min-h-[418px] lg:min-h-[650px]">
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {currentTestimonials.map((testimonial) => (
//           <div
//             key={testimonial.id}
//             className="border rounded-xl shadow-md  bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20 group"
//           >
//             <div className="p-2 sm:p-5 flex flex-col justify-between">
//               <div className="flex mb-4 xl:gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className={`h-4 w-4 ${
//                       i < testimonial.rating
//                         ? "fill-[#FFD700] text-sidebar-primary-foreground  stroke-[#FFD700]"
//                         : "text-sidebar-primary-foreground"
//                     }`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   >
//                     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="text-brand-body mb-6">
//                 "{testimonial.content}"
//               </p>
//               <div className="flex items-center gap-3 rounded-full">
//                 <div className="h-20 w-20 rounded-full bg-muted-foreground/20 overflow-hidden">
//                   <img
//                     src={testimonial.img}
//                     alt="customer review"
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-medium text-white">
//                     {testimonial.name}
//                   </p>
//                   <p className="text-xs text-white/80">
//                     {testimonial.role}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center gap-2 mt-2 items-center">
//         <button
//           className="h-8 w-8 rounded-full cursor-pointer"
//           onClick={prevPage}
//         >
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="#ffffff"
//             className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-left"
//           >
//             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//             <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </button>
//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             className={`h-2 w-2 rounded-full p-0 ${
//               i === currentPage
//                 ? "bg-white"
//                 : "bg-transparent border border-white"
//             } cursor-pointer`}
//             onClick={() => setCurrentPage(i)}
//           >
//             <span className="sr-only">Page {i + 1}</span>
//           </button>
//         ))}
//         <button
//           className="h-8 w-8 rounded-full cursor-pointer"
//           onClick={nextPage}
//         >
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="#ffffff"
//             className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-right"
//           >
//             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//             <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
//           </svg>
//           <span className="sr-only">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }
