import { useEffect } from 'preact/hooks';
import { isCheckoutModalOpen, selectedProduct } from '../state.ts';
import CheckoutForm from './CheckoutForm.tsx';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock.tsx';

const CheckoutModal = () => {
  
  console.log(isCheckoutModalOpen)
  useBodyScrollLock(isCheckoutModalOpen)
  
  if (!isCheckoutModalOpen.value) {
    return null;
  }
  
  const closeModal = () => {
    isCheckoutModalOpen.value = false;
  };

  return (
    <div
      id="checkout-modal"
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 pr-0"
    >
      <div className="relative w-full max-w-4xl h-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-white/10">
        {/* Close Button */}
        <button
          id="close-modal"
          onClick={closeModal}
          className="absolute right-2 top-2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all group"
          aria-label="Cerrar"
        >
          <svg
            className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        

        {/* Form Container */}
        <div className="overflow-y-auto h-[calc(100dvh-70px)] px-2 pt-8 md:px-10 md:py-10">
          <div className="max-w-3xl mx-auto">
            {/* Progress Indicator (Optional) */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-400">
                  Paso 1 de 2
                </span>
                <span className="text-sm font-medium text-amber-400">
                  50% Completado
                </span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full transition-all duration-500"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>

            

            {/* Checkout Form Component */}
            {selectedProduct.value && (
              <CheckoutForm
                product={selectedProduct.value}
                setSuccessPage={() => {}}
                handleOrderNumberFromChild={() => {}}
              />
            )}
          </div>
        </div>

        {/* Footer Trust Badges */}
        <div className="border-t border-white/10 bg-gray-900/50 px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#10b981">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Datos Protegidos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#10b981">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>+3,147 Órdenes Seguras</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div id="checkout-modal" className="fixed inset-0 bg-black/70 z-50">
    //   <div className="relative w-full max-w-xl xl:max-w-6xl md:max-w-full lg:max-w-full max-h-[100dvh] overflow-y-auto bg-[radial-gradient(circle,#4a4a4a,#333333,#1f1f1f)] border-none mx-auto">
    //     <div className="flex flex-col items-center justify-between px-4 xl:px-10 xl:gap-4 py-6 ">
    //       <h2 className="text-white text-xl lg:text-2xl text-center font-bold tracking-wide text-pretty my-1">
    //         Obten Envío Gratis y Paga Al Recibir
    //       </h2>
    //       <div className="text-lg lg:text-xl text-white text-center mt-2 lg:mt-5 lg:w-[60%]">
    //         Por favor completa el formulario a continuación para que te llevemos tus Amber Vision directamente a la puerta de tu casa.
    //       </div>
    //       <button id="close-modal" onClick={closeModal} className="p-1.5 transition-colors absolute right-0 top-0 xl:right-[0.5rem] xl:top-[0.5rem] cursor-pointer">
    //         <svg viewBox="0 0 24 24" className="h-9 w-9 lg:w-11 lg:h-11">
    //           <defs>
    //             <linearGradient id="amberGradient" x1="0" y1="0" x2="100%" y2="0">
    //               <stop offset="0%" stop-color="#f3f4f6"></stop>
    //               <stop offset="50%" stop-color="#6a7282"></stop>
    //               <stop offset="100%" stop-color="#f3f4f6"></stop>
    //             </linearGradient>
    //           </defs>
    //           <rect x="4" y="11" width="16" height="2.5" rx="1.25" fill="white" transform="rotate(45 12 12)"></rect>
    //           <rect x="4" y="11" width="16" height="2.5" rx="1.25" fill="white" transform="rotate(-45 12 12)"></rect>
    //         </svg>
    //         <span className="sr-only">Close</span>
    //       </button>
    //     </div>
    //     {selectedProduct.value && <CheckoutForm product={selectedProduct.value} setSuccessPage={() => {}} handleOrderNumberFromChild={() => {}} />}
    //   </div>
    // </div>
  );
};

export default CheckoutModal;