import { useEffect, useState } from "preact/hooks";
// import CTAbutton from "./CTAbutton.astro";
import ProductIntro from "./ProductIntro";
import testimonialPic from "../assets/img/founderImage.webp"
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
      class="relative overflow-hidden  pt-6 lg:py-5 items-center lg:flex justify-center mt-10 xl:mt-12 "
    >
      <div class="container px-2 md:px-6 lg:px-4 lg:w-full justify-center">
        <div class="flex flex-col gap-8 md:gap-10 lg:gap-0 lg:flex-row items-center lg:justify-between  xl:gap-20 xl:w-full xl:px-10">
          <div class="flex flex-col justify-between w-full lg:w-[55%] gap-5 xl:gap-6 px-2">
            {/* <span class="w-fit border-1 border-amber-500 text-sm xl:text-lg text-brand-headline p-1 px-2 rounded-full font-semibold bg-[#FFFFFF]">
              +3,147 Personas ya recuperaron su sueño natural
            </span> */}
            <h1 class="text-2xl font-bold sm:text-2xl text-center md:text-3xl lg:text-2xl xl:text-[2.2rem] xl:text-start capitalize fade-in-up leading-tight text-brand-headline text-shadow-xs">
              ¿Sabías Que Tu Celular Destruye Tu Sueño Cada Noche Sin Que Lo
              Notes?
            </h1>
            <p class="text-lg md:text-xl mt-2 text-brand-body tracking-wider text-pretty">
              Mientras lees esto, la luz azul de tu pantalla le dice a tu
              cerebro que es de día, incluso a medianoche.{" "}
              <strong className="text-brand-headline">
                Nuestros lentes bloquean el 99% de esta luz nociva en 3 segundos
              </strong>{" "}
              — tus ojos se relajan al instante y tu cerebro produce melatonina
              naturalmente.{" "}
              <strong className="text-brand-headline">
                {" "}
                Duerme más profundo
              </strong>{" "}
              desde la primera noche, sin cambiar tu rutina.
            </p>

            <div class="lg:hidden mobile md:flex md:justify-center">
              {isMobile && <ProductIntro />}
            </div>
            {/* Key Benefits - Lentes Bloqueadores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {[
              {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#68D391"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-users"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                  ),
                  text: "+3,147 Personas Ya Recuperaron Su Sueño Natural",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#F6E05E"
                      class="icon icon-tabler icons-tabler-filled icon-tabler-moon"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
                    </svg>
                  ), // O Lucide.Moon para enfocar en sueño
                  text: "Descanso y Sueño Profundo desde la 1ª Noche",
                },
                
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B794F4"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon icon-tabler icons-tabler-outline icon-tabler-eye-check"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032" />
                      <path d="M15 19l2 2l4 -4" />
                    </svg>
                  ),
                  text: "Bloquean El 99% De Luz Azul Dañina",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#63B3ED"
                      class="icon icon-tabler icons-tabler-filled icon-tabler-shield-check"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                    </svg>
                  ),
                  text: "Garantía de Satisfacción de 30 Días",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-5 h-5 flex-shrink-0`}>{item.icon}</div>
                  <span className="text-brand-body text-sm font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
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
                {/* <span class="text-lg lg:text-xl font-medium xl:text-nowrap text-brand-midnight">
                  + 3147 Vendidas
                </span> */}
              </div>

              {/* Testimonial Quote */}
              <div className="bg-[var(--color-bg-card-glass)] border border-gray/50 rounded-lg p-4 lg:p-5 shadow-lg">
                {/* Verified Badge */}
                <div className="flex items-center gap-1.5 mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#10b981"
                    class="icon icon-tabler icons-tabler-filled icon-tabler-shield-check"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                  </svg>
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">
                    Compra Verificada
                  </span>
                </div>
                <p className="text-sm md:text-base text-brand-body italic leading-relaxed">
                  "Noté la diferencia desde el primer día trabajando. Mis ojos
                  ya no arden después de pasar tantas horas frente al
                  computador, y por primera vez en meses duermo más profundo."
                </p>
                <div className="flex items-center gap-3 mt-2">
                  {/* Avatar with Initials */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-white shadow-md ">
                    <img
                      src={testimonialPic.src}
                      alt="testimonial picture"
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-semibold text-brand-headline">
                      Carlos C.
                    </p>
                    <p className="text-xs md:text-sm text-brand-muted">
                      Ingeniero de Software • Bogotá
                    </p>
                  </div>
                </div>
              </div>
              <span className="text-brand-headline font-bold text-center mt-4 text-lg">
                Bloquea La Luz Nociva En 3 Segundos Y Recupera Hasta un 25% Más De
                Sueño Profundo — Desde Esta Noche
              </span>
            </div>
            <div class="flex flex-col sm:flex-row lg:flex-col gap-3 pt-1 md:justify-center">
              <div className="CTA-container flex flex-col justify-center mt-2 mb-1 xl:flex xl:justify-center">
                <button
                  className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-500 hover:to-red-500  font-semibold py-3 sm:px-2 sm:py-3 lg:mt-8 xl:py-6 shadow-lg transform flex items-center justify-center gap-2 w-[85%] md:w-full
            lg:w-[80%] xl:w-max xl:h-[4rem] mx-auto md:self-center text-white 
  bg-brand-accent rounded-full 
  transition-all duration-300 ease-in-out 
  hover:bg-brand-accent-dark hover:scale-105 
  hover:shadow-glow-accent active:scale-95"
                >
                  <a
                    href="#pricing"
                    className="flex items-center gap-3 text-[16px] lg:text-xl xl:p-2 flex-row w-full justify-center"
                  >
                    Ver Precios y Opciones
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
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:text-sm text-brand-body">
                <div className="flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Envío gratis</span>
                </div>

                <span className="text-brand-muted">•</span>

                <div className="flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>30 días de garantía</span>
                </div>

                <span className="text-brand-muted">•</span>

                <div className="flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  >
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Pago 100% seguro</span>
                </div>
              </div>

              {/* Money-Back Guarantee - Versión Optimizada */}
              <div className="flex items-center gap-3 mt-4 py-3 px-4 bg-green-500/10 border border-emerald-500/20 rounded-xl max-w-md mx-auto">
                <div className="flex-shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <p className="text-sm md:text-base text-brand-body font-medium leading-tight">
                  <span className="font-bold block text-green-500 text-lg">
                    Garantía de Satisfacción:
                  </span>
                  Pruébalas por 30 días. Si no sientes el alivio y duermes mejor, te devolvemos
                  tu dinero.
                </p>
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
