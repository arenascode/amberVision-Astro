import { useEffect } from "preact/hooks";
import {
  isSuccessModalOpen,
  successfulOrderNumber,
  selectedProduct,
} from "../state";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const SuccessPurchase = () => {


  useEffect(() => {
    if (isSuccessModalOpen.value) {
      window.fbq("track", "Purchase", {
        currency: "COP", // Fixed: Should be COP not COL
        value: selectedProduct.value?.price,
      });
    }
  }, [isSuccessModalOpen.value]);

  // ✨ DISABLE BACKGROUND SCROLL WHEN MODAL IS OPEN
  useBodyScrollLock(isSuccessModalOpen)

  if (!isSuccessModalOpen.value) return null;

  const closeModal = () => {
    isSuccessModalOpen.value = false;
  };

  return (
    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-scroll custom-scrollbar">
      <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-slideUp m-auto">
        {/* Header */}
        <div class="bg-gradient-to-br from-green-500 to-emerald-600 px-4 py-5 text-center relative">
          <button
            onClick={closeModal}
            class="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
            <svg
              class="text-green-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 class="text-2xl md:text-4xl font-bold text-white mb-2">
            ¡Pedido Confirmado!
          </h1>
          <p class="text-green-50 text-lg">Orden #{successfulOrderNumber}</p>
        </div>

        {/* Content */}
        <div class="p-4">
          {/* Success message */}
          <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-lg">
            <p class="text-gray-800 leading-relaxed">
              <strong class="text-green-700">¡Gracias por tu compra!</strong> Tu
              pedido ha sido recibido y será procesado de inmediato. Recibirás
              un correo de confirmación en los próximos minutos.
            </p>
          </div>

          {/* Next Steps */}
          <div class="mb-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-list-check text-green-500"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                <path d="M11 6l9 0" />
                <path d="M11 12l9 0" />
                <path d="M11 18l9 0" />
              </svg>
              Próximos Pasos
            </h2>

            <div class="space-y-4">
              <StepItem
                number="1"
                title="Procesamiento Inmediato"
                description="Preparamos tu pedido hoy mismo (días laborables)"
              />
              <StepItem
                number="2"
                title="Notificación de Envío"
                description="Recibirás el número de seguimiento por email o WhatsApp"
              />
              <StepItem
                number="3"
                title="Entrega Rápida"
                description="Llega a tu puerta en 2-3 días laborables"
              />
              <StepItem
                number="4"
                title="Pago Contra Entrega"
                description="Paga cuando recibas tu pedido. Fácil y seguro."
              />
            </div>
          </div>

          {/* Trust badges */}
          <div class="bg-gray-50 rounded-xl p-4 mb-6">
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <p class="text-2xl font-bold text-green-600">30</p>
                <p class="text-xs text-gray-600">Días Garantía</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-green-600">2-3</p>
                <p class="text-xs text-gray-600">Días Entrega</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-green-600">100%</p>
                <p class="text-xs text-gray-600">Seguro</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={closeModal}
            class="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Volver al Inicio
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
        .custom-scrollbar {scrollbar-width: none}
      `}</style>
    </div>
  );
};;

const StepItem = ({ number, title, description }: Record<string, string>) => (
  <div class="flex gap-4 items-start">
    <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
      {number}
    </div>
    <div class="flex-1">
      <h3 class="font-semibold text-gray-800 mb-1">{title}</h3>
      <p class="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default SuccessPurchase;