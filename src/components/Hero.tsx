import { useEffect, useState } from "preact/hooks";
// import CTAbutton from "./CTAbutton.astro";
import MobileProductIntro from "./MobileProductIntro";
import ProductIntro from "./ProductIntro";

const Hero = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <section
      id="hero"
      class="relative overflow-hidden  pt-6 lg:py-5 items-center lg:flex justify-center mt-10 xl:mt-12 text-white"
    >
      <div class="container px-2 md:px-6 lg:px-4 lg:w-full justify-center">
        <div class="flex flex-col gap-8 md:gap-10 lg:gap-0 lg:flex-row items-center lg:justify-between  xl:gap-20 xl:w-full xl:px-10">
          <div class="flex flex-col justify-between w-full lg:w-[55%] gap-5 xl:gap-6">
            <span class="w-fit border-1 border-white text-sm xl:text-lg text-white p-1 px-2 rounded-full font-normal">
              ⭐ +3,000 personas protegen su vista diariamente
            </span>
            <h1 class="text-xl font-bold tracking-wider text-center sm:text-2xl md:text-3xl lg:text-2xl xl:text-[2.2rem] xl:text-start font-body uppercase fade-in-up leading-tight">
              Protege Tu Vista y Recupera Tu Sueño Natural
            </h1>
            <p class="text-lg md:text-xl text-center mt-2 text-gray-200 tracking-wider">
              Lentes con filtro ámbar certificado que bloquean la luz azul
              dañina. Diseñadas para quienes pasan +8 horas frente a pantallas.
              Elimina el ardor ocular y duerme profundamente desde la primera
              noche.
            </p>
            <div class="lg:hidden mobile md:flex md:justify-center">
              {isMobile && <ProductIntro />}
            </div>
            <div class="flex flex-col items-center lg:flex-row lg:flex-wrap items-flex-start gap-2 pt-2">
              <div class="stars_qty_sold flex self-start md:self-center items-center lg:hidden gap-2">
                <div class="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFC000"
                      class="icon icon-tabler icons-tabler-filled icon-tabler-star"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                    </svg>
                  ))}
                </div>
                <span class="text-lg lg:text-xl font-medium xl:text-nowrap">
                  + 1000 Vendidas
                </span>
              </div>
              {/* Testimonial Quote */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 lg:p-5">
                <p className="text-sm md:text-base text-gray-100 italic leading-relaxed">
                  "Noté la diferencia desde el primer día trabajando. Mis ojos
                  ya no arden después de 8 horas frente al computador, y por
                  primera vez en meses duermo más profundo."
                </p>
                <p className="text-xs md:text-sm text-gray-300 font-semibold mt-2">
                  — Carlos C., Ingeniero de Software en Bogotá
                </p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row lg:flex-col gap-3 pt-1 md:justify-center">
              <div className="CTA-container flex flex-col justify-center mt-2 mb-8 xl:flex xl:justify-center">
                <button
                  className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-500 hover:to-red-500 text-white font-semibold py-3 sm:px-2 sm:py-3 lg:mt-8 xl:py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2 w-[85%] md:w-full
            lg:w-[80%] xl:w-max xl:h-[4rem] mx-auto md:self-center"
                >
                  <a
                    href="#pricing"
                    className="flex items-center gap-3 text-[16px] lg:text-xl xl:p-2 flex-row w-full justify-center"
                  >
                    Alivia tus Ojos y Duerme Mejor
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                  </a>
                </button>
                <small className="italic self-center lg:text-lg xl:mt-1">
                  <span>100% Satisfacción Garantizada</span>
                </small>
              </div>
            </div>
          </div>
          <div class="hidden md:flex md:justify-center xl:h-[600px] w-[60%] lg:w-[40%] xl:w-[45%]">
            {!isMobile && <ProductIntro />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
