import { useEffect, useState } from "preact/hooks";
import CountdownTimer from "./CountdownTimer";
import FadeIn from "./FadeIn";
import amberLensesSingle from "/src/assets/img/product/singlePair.webp";
import amberLensesPairPromo from "/src/assets/img/product/pairLenses.webp";
import manCoding from "/src/assets/img/manCodingUsingAV.webp";
import coupleWatchingMovies from "/src/assets/img/coupleWatchingTVAVLogo.webp";
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

  const randomBuyersCount = () => {

    return Math.round(Math.random() * (100 - 50) + 80)
  }

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
              <strong className="text-white">
                {randomBuyersCount()} personas
              </strong>{" "}
              compraron a este precio en las últimas 48 horas
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
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full">
                  <span className="text-green-300 font-semibold text-sm">
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
                    { text: "2 Guías digitales (valor $109.800)" },
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
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 hover:cursor-pointer"
              >
                Comprar Ahora
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    stroke-width="2"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <path d="M3 9l4 0" />
                  </svg>
                  Envío Gratis
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-coins"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3" />
                    <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
                    <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598" />
                    <path d="M3 6v10c0 .888 .772 1.45 2 2" />
                    <path d="M3 11c0 .888 .772 1.45 2 2" />
                  </svg>
                  Pago Contra Entrega
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
                    $199.999
                  </span>
                  <span className="text-xl text-gray-300 line-through mb-2">
                    $300.000
                  </span>
                </div>

                {/* Savings Highlight */}
                <div className="bg-green-500 text-white rounded-xl p-4 mb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg">Solo $99.999 por par</p>
                      <p className="text-sm text-green-100">Ahorras $100.000</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold">33%</p>
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
                    Ahorro de $50.000 en cada par
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
                    { text: "2 Guías digitales (valor $109.800)" },
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
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </button>

              {/* Social Proof */}
              <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm text-green-300">
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path>
                    <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
                    <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
                  </svg>
                  <span className="font-semibold">
                    El 67% elige este pack para compartir con su pareja
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:text-sm text-gray-300 mt-3">
          <div class="flex items-center gap-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              stroke-width="2"
              class="icon icon-tabler icons-tabler-outline icon-tabler-contract"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5" />
              <path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2" />
              <path d="M19 3h-11a3 3 0 0 0 -3 3v11" />
              <path d="M9 7h4" />
              <path d="M9 11h4" />
              <path d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3l6.42 -6.39" />
            </svg>
            <span>Garantía de devolución de dinero por 30 días</span>
          </div>
          <span class="text-gray-600">•</span>
          <div class="flex items-center gap-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              stroke-width="2"
              class="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
              <path d="M3 9l4 0" />
            </svg>
            <span>Envío gratis a todo el país</span>
          </div>
          <span class="text-gray-600">•</span>
          <div class="flex items-center gap-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              stroke-width="2"
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
    </section>
  );
};
export default Pricing;
