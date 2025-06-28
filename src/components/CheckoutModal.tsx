import { useEffect } from 'preact/hooks';
import { isCheckoutModalOpen, selectedProduct } from '../state.ts';
import CheckoutForm from './CheckoutForm.tsx';

const CheckoutModal = () => {

  if (!isCheckoutModalOpen.value) {
    return null;
  }

  const closeModal = () => {
    isCheckoutModalOpen.value = false;
  };

  return (
    <div id="checkout-modal" className="fixed inset-0 bg-black/70 z-50">
      <div className="relative w-full max-w-xl xl:max-w-6xl md:max-w-full lg:max-w-full max-h-[100dvh] overflow-y-auto bg-[radial-gradient(circle,#4a4a4a,#333333,#1f1f1f)] border-none mx-auto">
        <div className="flex flex-col items-center justify-between px-4 xl:px-10 xl:gap-4 py-6">
          <h2 className="text-sidebar-primary-foreground text-xl xl:text-2xl text-center font-bold tracking-wide text-pretty my-1">
            Obten Envío Gratis y Paga Al Recibir
          </h2>
          <div className="text-lg xl:text-xl text-sidebar-primary-foreground text-center mt-2 lg:mt-0">
            Por favor completa el formulario a continuación para que te llevemos tus Amber Vision directamente a la puerta de tu casa.
          </div>
          <button id="close-modal" onClick={closeModal} className="p-1.5 transition-colors absolute right-0 top-0 xl:right-[0.5rem] xl:top-[0.5rem] cursor-pointer">
            <svg viewBox="0 0 24 24" className="h-9 w-9 lg:w-11 lg:h-11">
              <defs>
                <linearGradient id="amberGradient" x1="0" y1="0" x2="100%" y2="0">
                  <stop offset="0%" stop-color="#f3f4f6"></stop>
                  <stop offset="50%" stop-color="#6a7282"></stop>
                  <stop offset="100%" stop-color="#f3f4f6"></stop>
                </linearGradient>
              </defs>
              <rect x="4" y="11" width="16" height="2.5" rx="1.25" fill="white" transform="rotate(45 12 12)"></rect>
              <rect x="4" y="11" width="16" height="2.5" rx="1.25" fill="white" transform="rotate(-45 12 12)"></rect>
            </svg>
            <span className="sr-only">Close</span>
          </button>
        </div>
        {selectedProduct.value && <CheckoutForm product={selectedProduct.value} setSuccessPage={() => {}} handleOrderNumberFromChild={() => {}} />}
      </div>
    </div>
  );
};

export default CheckoutModal;