import { useEffect, useState } from "preact/hooks";
import CountdownTimer from "./CountdownTimer";
import FadeIn from "./FadeIn";
import amberLensesSingle from "/src/assets/img/product/singlePair.webp";
import amberLensesPairPromo from "/src/assets/img/product/pairLenses.webp";
import manCoding from "/src/assets/img/manCodingV2.avif";
import coupleWatchingMovies from "/src/assets/img/coupleWatchingMovies.avif";
import type { Product } from "../types/Product";
import { isCheckoutModalOpen, selectedProduct } from "../state";

const Pricing = () => {

  const products = [
  {
    id: "basic",
    name: "1 Par de Gafas Amber Vision con filtro de luz azul",
    price: 119999,
    priceBefore: 150000,
    image: amberLensesSingle.src,
    gift1:
      "+ Estuche Carcasa Dura + Estuche Tela + Paño Microfibra + Tarjeta de Prueba Anti Luz Azul",
    gift2:
      "RECUPERA TU SUEÑO - La Guía Práctica y Cientifica Para Despertar Lleno de Energía",
    gift3:
      "¡SOS PANTALLAS! Tu Guía de Hábitos y Ejercicios para una Visión Descansada y Ojos Felices",
  },
  {
    id: "promo",
    name: "2 Pares de Gafas Amber Vision con filtro de luz azul",
    price: 219999,
    priceBefore: 300000,
    image: amberLensesPairPromo.src,
    gift1:
      "(+ Estuche Carcasa Dura + Estuche Tela + Paño Microfibra + Tarjeta de Prueba Anti Luz Azul) X 2",
    gift2:
      "RECUPERA TU SUEÑO - La Guía Práctica y Cientifica Para Despertar Lleno de Energía",
    gift3:
      "¡SOS PANTALLAS! Tu Guía de Hábitos y Ejercicios para una Visión Descansada y Ojos Felices",
  },
  ];
  
  

  const openCheckout = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    
    if (product) {
      selectedProduct.value = product
      isCheckoutModalOpen.value = true;
    }
  };

  return (
    <section
      id="pricing"
      className="py-6 pt-8 md:py-10 xl:flex xl:justify-center"
    >
      <div className="container px-4 md:px-6">
        {/* Urgency & Headline */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div class="px-3 py-1 bg-green-600 xl:text-lg rounded-full">
            Oferta por Tiempo Limitado ⏳
          </div>
          <FadeIn delay={100}>
            <h2 className="text-3xl font-bold tracking-tight xl:mt-4 lg:text-4xl">
              Descuento Especial de Lanzamiento
            </h2>
          </FadeIn>

          <p className="text-sidebar-primary-foreground md:text-lg lg:text-xl max-w-[800px]">
            Aprovecha nuestro precio exclusivo antes de que desaparezca
          </p>
          <div className="mt-4">
            <CountdownTimer />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="grid gap-8 xl:gap-12 md:grid-cols-2 max-w-[1000px] mx-auto">
          {/* Basic Package - 1 Pair */}
          <FadeIn delay={100}>
            <div className="border rounded-xl shadow-md backdrop-blur-lg bg-white/10 border-white/10 relative overflow-hidden h-full">
              <div className="p-3 sm:p-6">
                <h3 className="text-xl xl:text-2xl font-bold mb-2 text-sidebar-primary-foreground">
                  1 Par de Gafas Amber Vision
                </h3>
                <p className="text-sidebar-primary-foreground mb-4 xl:text-lg">
                  Protege tu vista y mejora tu descanso con un par de gafas
                  Amber Vision.
                </p>
                <div className="imgContainer container rounded-lg overflow-hidden">
                  <img
                    src={manCoding.src}
                    alt="man coding"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-end gap-1 mb-4 mt-2 text-sidebar-primary-foreground">
                  <span className="text-3xl font-bold">$119.999</span>
                  <span className="italic line-through">$150.000</span>
                </div>
                <ul className="space-y-2 mb-6 font-semibold">
                  {[
                    "Lentes Amber Vision",
                    "Montura ligera y cómoda",
                    "Estuche protector rígido",
                    "Estuche de tela para evitar rayones",
                    "Paño de microfibra para limpieza",
                    "Tester de luz azul para comprobar su eficacia",
                    "Garantía de 6 meses por defectos de fábrica",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#05df72"
                        class="icon icon-tabler icons-tabler-filled icon-tabler-shield-check"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                      </svg>
                      <span className="text-[16px] xl:text-lg text-sidebar-primary-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black hover:bg-black/80 h-10 px-4 py-2 btn-buy w-full text-lg tracking-wider cursor-pointer"
                  onClick={() => openCheckout("basic")}
                  data-kit="One Pair"
                >
                  Elegir{" "}
                  <svg
                    width="30"
                    height="30"
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
                </button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="border rounded-xl shadow-md backdrop-blur-lg bg-white/10 border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-600 text-primary-foreground px-3 py-1 text-xs xl:text-sm font-semibold rounded-bl-lg">
                Mejor Oferta 🔥
              </div>
              <div className="p-3 pt-6 sm:p-6 text-sidebar-primary-foreground">
                <h3 className="text-xl xl:text-2xl font-bold mb-2">
                  2 Pares de Gafas Amber Vision
                </h3>
                <p className="mb-4 font-medium xl:text-lg">
                  ¡Comparte la protección con alguien especial y ahorra más!
                </p>
                <div className="imgContainer container rounded-lg overflow-hidden">
                  <img
                    src={coupleWatchingMovies.src}
                    alt="couple watching movies"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-end gap-1 mb-2 mt-2">
                  <span className="text-3xl font-bold">$219.999</span>
                  <span className="text-sidebar-primary-foreground italic line-through">
                    $300.000
                  </span>
                </div>
                <p className="text-white font-semibold mb-4 bg-green-600 rounded-lg p-1 text-center">
                  ¡Ahorra $80.000 y paga solo $109.999 por cada par!
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "2 pares de lentes Amber Vision",
                    "Monturas ligeras y cómodas",
                    "2 estuches protectores rígidos",
                    "2 estuches de tela para evitar rayones",
                    "2 paños de microfibra para limpieza",
                    "2 testers de luz azul para comprobar su eficacia",
                    "Garantía de 6 meses por defectos de fábrica",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#05df72"
                        class="icon icon-tabler icons-tabler-filled icon-tabler-shield-check"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                      </svg>
                      <span className="text-[16px] xl:text-lg font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black hover:bg-black/80 h-10 px-4 py-2 btn-buy w-full text-lg tracking-wider cursor-pointer"
                  onClick={() => openCheckout("promo")}
                  data-kit="promo"
                >
                  Aprovechar Oferta{" "}
                  <svg
                    width="24"
                    height="24"
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
                </button>
              </div>
            </div>
          </FadeIn>
          {/* Best Value - 2 Pairs */}

          {/* Ultimate Package */}
          {/* <Card className="border shadow-md relative overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ultimate</h3>
                  <p className="text-muted-foreground mb-4">
                    Para profesionales y usuarios intensivos
                  </p>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-3xl font-bold">$359.900</span>
                    <span className="text-muted-foreground line-through">
                      $599.900
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Lentes rojos premium",
                      "Bloquea 99.9% de la luz azul",
                      "Montura ultra cómoda y resistente",
                      "Recubrimiento anti-reflejo y anti-rayones",
                      "Garantía de por vida",
                      "Incluye estuche premium y kit de limpieza",
                      "E-book sobre mejora del sueño",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Elegir Plan</Button>
                </div>
              </Card> */}
        </div>

        {/* Additional Benefits */}
        <div className="flex justify-center mt-8 lg:mt-16">
          <div className="flex items-center gap-1 md:gap-3 lg:gap-4 text-sm lg:text-lg xl:text-xl text-muted-foreground text-pretty">
            <div className="flex items-center gap-1 xl:gap-3 font-bold text-sidebar-primary-foreground">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="#ffffff"
                class="icon icon-tabler icons-tabler-filled icon-tabler-shield"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.884 2.007l.114 -.007l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021z" />
              </svg>
              <span className="text-pretty">Garantía de devolución de dinero por 30 días</span>
            </div>
            <div className="flex items-center gap-1 xl:gap-3 font-bold text-sidebar-primary-foreground">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="#ffffff"
                class="icon icon-tabler icons-tabler-filled icon-tabler-truck"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 4a1 1 0 0 1 1 1h4a1 1 0 0 1 .783 .378l.074 .108l3 5l.055 .103l.04 .107l.029 .109l.016 .11l.003 .085v6a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2zm-6 12a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m.434 -9h-3.434v3h5.234z" />
              </svg>
              <span>Envío Gratis a todo el país</span>
            </div>
            <div className="flex items-center gap-1 xl:gap-3 font-bold text-sidebar-primary-foreground">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-clock"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 7v5l3 3" />
              </svg>
              <span>Entrega Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pricing