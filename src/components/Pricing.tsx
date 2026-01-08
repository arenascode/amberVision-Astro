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
      price: 109999,
      priceBefore: 150000,
      image: amberLensesSingle.src,
      gift1:
        "+ Estuche Carcasa Dura + Estuche Tela + Paño Microfibra + Tarjeta de Prueba Anti Luz Azul",
      gift2:
        "RECUPERA TU SUEÑO - Tu Sistema de Biohacking para despertar lleno de energía",
      gift3:
        "CUIDADO VISUAL EN LA ERA DIGITAL - Estrategias simples para reducir el daño ocular frente a pantallas y mantener tu visión saludable por años",
    },
    {
      id: "promo",
      name: "2 Pares de Gafas Amber Vision con filtro de luz azul",
      price: 199999,
      priceBefore: 300000,
      image: amberLensesPairPromo.src,
      gift1:
        "(+ Estuche Carcasa Dura + Estuche Tela + Paño Microfibra + Tarjeta de Prueba Anti Luz Azul) X 2",
      gift2:
        "RECUPERA TU SUEÑO - Tu Sistema de Biohacking para despertar lleno de energía",
      gift3:
        "CUIDADO VISUAL EN LA ERA DIGITAL - Estrategias simples para reducir el daño ocular frente a pantallas y mantener tu visión saludable por años",
    },
  ];

  const openCheckout = (productId: string) => {
    const product = products.find((p) => p.id === productId);

    if (product) {
      selectedProduct.value = product;
      isCheckoutModalOpen.value = true;
    }
  };

  return (
    <section
      id="pricing"
      className="py-6 pt-12 md:py-10 xl:flex xl:justify-center"
    >
      <div className="container px-4 md:px-6">
        {/* Urgency & Headline */}
        {/* <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div class="px-3 py-1 bg-green-600 xl:text-lg rounded-full animate-pulse">
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
        </div> */}
        <div className="flex flex-col items-center text-center gap-4 mb-12 lg:mb-16">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 rounded-full animate-pulse shadow-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
            </svg>
            <span className="text-white font-bold text-sm uppercase tracking-wide">
              Oferta Limitada
            </span>
          </div>

          {/* Main Headline */}
          <FadeIn delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Ahorra</span>{" "}
              <span className="text-amber-400">27%</span>{" "}
              <span className="text-white">en Tu Primer Pedido</span>
            </h2>
          </FadeIn>

          {/* Subheadline with Specific Value */}
          <div className="space-y-1">
            <p className="text-xl md:text-2xl text-gray-200 font-medium">
              Precio normal:{" "}
              <span className="line-through text-gray-400">$150.000</span>
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              Hoy solo: <span class="text-green-400">$109.999</span> 
            </p>
          </div>

          

          {/* Countdown Timer */}
          <div className="mt-4">
            <CountdownTimer />
          </div>
{/* Social Proof Mini */}
          <div className="flex items-center justify-center text-sm text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
              <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M17 10h2a2 2 0 0 1 2 2v1" />
              <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
            </svg>
            <span class="text-balance w-[60%]">
              <strong className="text-white">247 personas</strong> compraron a
              este precio en las últimas 48 horas
            </span>
          </div>
          {/* Reason for Discount */}
          <p className="text-sm text-gray-400 max-w-2xl">
            *Promoción válida solo para nuevos clientes mientras dure el
            inventario.
          </p>
        </div>
        {/* Pricing Section */}
        <div className="grid gap-8 lg:gap-12 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Package 1 - Single Pair */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:border-white/30 transition-all group">
            {/* Card Header */}
            <div className="p-3 lg:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    Protección Individual
                  </h3>
                  <p className="text-gray-300 text-base lg:text-lg">
                    Perfecto para uso personal
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={manCoding.src}
                  alt="Persona usando gafas Amber Vision"
                  className="w-full h-auto object-fill group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-3xl lg:text-5xl font-bold text-white">
                    $109.999
                  </span>
                  <span className="text-xl text-gray-400 line-through mb-2">
                    $150.000
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full">
                  <span className="text-amber-300 font-semibold text-sm">
                    Ahorras $40.000 (27% OFF)
                  </span>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-6">
                <p className="text-white font-semibold text-lg mb-4">
                  ✨ Qué Incluye:
                </p>
                <ul className="space-y-3">
                  {[
                    { text: "1 Par de Gafas Amber Vision", bold: true },
                    { text: "Estuche rígido + funda protectora" },
                    { text: "Paño de limpieza de microfibra" },
                    { text: "Tester de luz azul incluido" },
                    { text: "2 Guías digitales (valor $129.800)" },
                    { text: "Garantía de 6 meses" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#10b981"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span
                        className={`text-base lg:text-lg ${
                          item.bold
                            ? "text-white font-semibold"
                            : "text-gray-300"
                        }`}
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => openCheckout("basic")}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
              >
                Comprar Ahora
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#10b981"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Envío gratis
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#10b981"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  30 días garantía
                </span>
              </div>
            </div>
          </div>

          {/* Package 2 - Two Pairs (BEST VALUE) */}
          <div className="relative bg-gradient-to-br from-green-500/20 via-emerald-500/15 to-green-500/10 backdrop-blur-md border-2 border-green-500/50 rounded-2xl overflow-hidden shadow-2xl hover:border-green-500/70 transition-all group">
            {/* Best Value Badge */}
            <div className="absolute -top-1 -right-1 z-10">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-bl-2xl shadow-lg">
                <div className="flex items-center gap-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-bold text-sm uppercase tracking-wide">
                    Más Popular
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 lg:p-8 pt-9">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    Pack Pareja/Familia
                  </h3>
                  <p className="text-gray-200 text-base lg:text-lg font-medium">
                    Comparte la protección visual
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-6 shadow-lg ring-2 ring-green-500/30">
                <img
                  src={coupleWatchingMovies.src}
                  alt="Pareja usando gafas Amber Vision"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-end gap-3 mb-3">
                  <span className="text-3xl lg:text-5xl font-bold text-white">
                    $189.999
                  </span>
                  <span className="text-xl text-gray-300 line-through mb-2">
                    $300.000
                  </span>
                </div>

                {/* Savings Highlight */}
                <div className="bg-green-500 text-white rounded-xl p-4 mb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg">Solo $94.999 por par</p>
                      <p className="text-sm text-green-100">
                        Ahorras $110.001 total
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold">37%</p>
                      <p className="text-xs">OFF</p>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#10b981"
                  >
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                  </svg>
                  <span className="text-green-300 font-semibold text-sm">
                    Ahorro de $15.000 por gafa
                  </span>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-6">
                <p className="text-white font-semibold text-lg mb-4">
                  ✨ Qué Incluye:
                </p>
                <ul className="space-y-3">
                  {[
                    { text: "2 Pares de Gafas Amber Vision", bold: true },
                    { text: "2 Estuches rígidos + 2 fundas protectoras" },
                    { text: "2 Paños de limpieza de microfibra" },
                    { text: "2 Testers de luz azul" },
                    { text: "2 Guías digitales (valor $129.800)" },
                    { text: "Garantía de 6 meses en ambos pares" },
                    { text: "Envío prioritario gratis" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#10b981"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span
                        className={`text-base lg:text-lg ${
                          item.bold
                            ? "text-white font-semibold"
                            : "text-gray-200"
                        }`}
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => openCheckout("promo")}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10">Aprovechar Descuento</span>
                <svg
                  className="relative z-10"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Social Proof */}
              <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm text-green-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#10b981"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                  <span className="font-semibold">
                    El 67% elige este pack para compartir con su pareja
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 xl:gap-12 md:grid-cols-2 max-w-[1000px] mx-auto">
          {/* Basic Package - 1 Pair */}
          {/* <FadeIn delay={100}>
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
                  <span className="text-3xl font-bold">$109.999</span>
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
          </FadeIn> */}

          {/* <FadeIn delay={100}>
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
                  <span className="text-3xl font-bold">$199.999</span>
                  <span className="text-sidebar-primary-foreground italic line-through">
                    $300.000
                  </span>
                </div>
                <p className="text-white font-semibold mb-4 bg-green-600 rounded-lg p-1 text-center">
                  ¡Ahorra $100.000 y paga solo $99.999 por cada par!
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
                      <span className="text-[16px] xl:text-lg font-semibold">
                        {item}
                      </span>
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
          </FadeIn> */}
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
              <span className="text-pretty">
                Garantía de devolución de dinero por 30 días
              </span>
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
};
export default Pricing;
