import { isSuccessModalOpen, successfulOrderNumber } from "../state"

const SuccessPurchase = () => {

  if (!isSuccessModalOpen.value) {
    
    return null
  }

  const closeSuccesModal = () => {
    isSuccessModalOpen.value = false
  }

  return (
    <div id="success-purchase" class="fixed inset-0 bg-black/70 z-50">
  <div class="container max-w-md xl:max-w-[80%] mx-auto px-2 py-6 text-center bg-[radial-gradient(circle,#2c2c2c,#1f1f1f,#000000)] xl:mt-11 relative flex flex-col lg:flex xl:h-[80%] items-center xl:p-8 gap-5 xl:gap-10">
    <div class="container lg:flex lg:flex-col lg:h-[100%]">
      <svg class="h-16 w-16 text-green-500 mx-auto mb-6 lg:mt-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <h1 class="text-3xl font-bold mb-2 text-sidebar-primary-foreground">
        Orden Confirmada!
      </h1>
      <p class="text-sidebar-primary-foreground mb-8 lg:text-lg">
        Muchas gracias por tu compra. Hemos recibido tu pedido y lo procesaremos de inmediato.
      </p>
      <p class="text-sidebar-primary-foreground lg:text-lg">
        Recibirás un correo electrónico de confirmación en breve con los detalles de tu compra.
      </p>

      <div class="space-y-4">
        <p class=" text-sidebar-primary-foreground lg:text-lg mt-2 lg:mt-4 font-extrabold">
          Orden # {successfulOrderNumber}
        </p>
      </div>
    </div>
    <div class="container nextSteps">
      <div class="bg-gray-300 p-4 rounded-lg text-left">
        <p class="font-medium mb-5 xl:text-lg text-black">¿Cuáles son los siguientes pasos?</p>
        <ol class="flex flex-col gap-3 space-y-2 text-sm lg:text-[16px] text-black list-decimal list-inside">
          <li>
            Procesaremos y enviaremos tu pedido hoy mismo. (Si es un día laboral)
          </li>
          <li>
            Recibirás información de seguimiento por correo electrónico o WhatsApp.
          </li>
          <li>
            Tu pedido llegará en aproximadamente 2-3 días laborables, dependiendo de tu ciudad.
          </li>
          <li>
            Paga al recibir y experimenta un mejor descanso y bienestar visual para optimizar tu productividad y disfrute.
          </li>
        </ol>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 mt-8">
        <a href="/" class="flex-1 bg-[radial-gradient(circle,#2c2c2c,#1f1f1f,#000000)] xl:text-xl p-4 rounded-lg text-white no-underline" onClick={closeSuccesModal}>
          <svg class="mr-2 h-4 w-4 lg:h-6 lg:w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Volver
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default SuccessPurchase