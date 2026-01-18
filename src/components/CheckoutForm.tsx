"use client";
import { useState } from "preact/hooks";
import type { FunctionComponent, JSX } from "preact";
import { makeRequest } from "../utils/axios";
import { normalizePhoneNumber, validateForm } from "../utils/validationForm";
import type { FormErrors, ValidationRules } from "../types/rulesValidationForm";
import ebook1 from "/src/assets/img/ebook1.webp";
import ebook2 from "/src/assets/img/ebook2.webp";
import accessories from "/src/assets/img/accessories.webp";
import freeDelivery from "/src/assets/img/freeDelivery.webp";
// Define the product type
import type { Product } from "../types/Product";
import { isCheckoutModalOpen, isSuccessModalOpen, successfulOrderNumber } from "../state";

export interface CheckOutFormProps {
  product: Product;
  setSuccessPage: (value: boolean) => void;
  handleOrderNumberFromChild: (data: string) => void;
}

// const SimpleCheckoutForm: FunctionComponent<CheckOutFormProps> = ({
//   product,
//   setSuccessPage,
//   handleOrderNumberFromChild,
// }) => {
//   const [formData, setFormData] = useState({
//     nombre: "",
//     email: "",
//     telefono: "",
//     cedula: "",
//     ciudad: "",
//     departamento: "",
//     direccion: "",
//     datos_adicionales: "",
//     producto: product.name,
//     kit: product.id,
//     valor_compra: product.price,
//     numero_orden: `AV-${Math.floor(100000 + Math.random() * 900000)}`,
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [someError, setSomeError] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleChange = (
//     e: JSX.TargetedEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.currentTarget;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//     setSomeError(false);
//   };

//   const handleOnBlur = (e: JSX.TargetedEvent<HTMLInputElement>) => {
//     const { name, value } = e.currentTarget;
//     if (name === "telefono") {
//       const cleanedNumber = normalizePhoneNumber(value);
//       setFormData((prev) => ({ ...prev, [name]: cleanedNumber }));
//     }
//   };

//   const validationRules: Record<string, ValidationRules> = {
//     nombre: {
//       required: true,
//       minLength: 3,
//       messageRequired:
//         "Cuéntanos tu nombre para poder enviarte el pedido.",
//     },
//     email: {
//       required: true,
//       minLength: 3,
//       pattern: /\S+@\S+\.\S+/,
//       messageInvalid:
//         "¿Eso era un correo?  Revisa el formato, parece que algo falta.",
//       messageRequired:
//         "Necesitamos tu correo para enviarte los regalos incluidos en tu compra y mantenerte al tanto.",
//     },
//     cedula: {
//       required: true,
//       minLength: 5,
//       pattern: /^(\d{5,10}|[a-zA-Z0-9]{6,12})$/,
//       messageRequired:
//         "Necesitamos tu número de documento para que la transportadora sepa a quien entregarle el pedido.",
//       messageInvalid:
//         "Revisa que esté bien. Parece que hay un error",
//       messageLength:
//         "El número de documento debe tener al menos 5 caracteres.",
//     },
//     direccion: {
//       required: true,
//       minLength: 5,
//       messageRequired:
//         "¿Sin dirección? ¡Eso sí que es una misión imposible para la transportadora! Ayúdanos a llevarlo a tu puerta.",
//       messageLength:
//         "Es una dirección muy corta, danos un poco más de detalle.",
//     },
//     telefono: {
//       required: true,
//       minLength: 7,
//       pattern:
//         /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
//       messageInvalid:
//         "Mmm... ese número no parece de este planeta. ¡Revisa otra vez!",
//       messageRequired:
//         "Necesitamos tu número para avisarte cuando el pedido esté en camino.",
//     },
//     departamento: {
//       required: true,
//       minLength: 3,
//       messageRequired:
//         "¿Dónde vives? ¡El departamento no puede faltar para que el pedido llegue bien!",
//     },
//     ciudad: {
//       required: true,
//       minLength: 3,
//       messageRequired:
//         "La ciudad es fundamental para que el paquete no termine de vacaciones en otro lado.",
//     },
//   };

//   const handleSubmit = async (e: JSX.TargetedEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData, validationRules);

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setSomeError(true);
//     } else {
//       try {
//         setIsLoading(true);
//         const res = await makeRequest
//           .post("/purchase/newPurchase", formData)
        
//           if (res.status === 201) {
//             handleOrderNumberFromChild(formData.numero_orden);
//             successfulOrderNumber.value = formData.numero_orden;
//             isCheckoutModalOpen.value = false;
//             //navigate to thanks page!
//             isSuccessModalOpen.value = true;
//           } else if (res.status === 400) {
//             alert(res.data.message);
//           }

//       } catch (err: unknown) {
//         if (err instanceof Error) {
//           alert(err.message);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   // Calculate totals
//   const subtotal = product.price;

//   return (
//     <div className="container max-w-6xl lg:px-4 lg:py-4">
//       <div className="hidden justify-center lg:flex lg:flex-col">
//         <span className="text-red-500 font-semibold text-lg text-center lg:text-2xl">
//           🚨 Atencion 🚨
//         </span>
//         <div className="text-lg lg:text-xl text-gray-200 text-center w-[80%] lg:w-[72%] lg:mb-10 mx-auto">
//           Asegúrate de proporcionar la información correcta para el envío de tu
//           pedido. Es crucial incluir un número de teléfono con WhatsApp.
//         </div>
//       </div>
//       <div className="grid gap-5 md:grid-cols-1 lg:flex lg:flex-shrink md:gap-2">
//         {/* Order Summary */}
//         <div className="md:col-span-1 bg-gray-300 xl:px-1 rounded-lg">
//           <div className="p-4">
//             <h3 className="text-center tracking-wide text-xl font-bold text-black">
//               Resumen de tu compra
//             </h3>
//           </div>
//           <div className="space-y-6 p-4">
//             {/* Product */}
//             <div className="flex flex-col items-center gap-4 text-gray-900">
//               <div className="box flex gap-2 border p-2 rounded-sm bg-gray-100 w-full justify-between ">
//                 <div className="h-20 w-20  md:w-50 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 rounded-md border border-gray-400 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.name}
//                     className="h-full w-full object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="flex-1 flex items-center gap-1 justify-between ">
//                   <span className="font-medium text-left text-sm md:text-lg">
//                     {product.name}
//                   </span>
//                   <div className="font-medium text-center text-sm md:text-lg flex flex-col">
//                     <span className="italic line-through text-end">
//                       $
//                       {product.priceBefore.toLocaleString("es-CO", {
//                         minimumFractionDigits: 2,
//                         maximumFractionDigits: 2,
//                       })}
//                     </span>
//                     <span className="font-bold text-green-600">
//                       $
//                       {product.price.toLocaleString("es-CO", {
//                         minimumFractionDigits: 2,
//                         maximumFractionDigits: 2,
//                       })}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="box flex gap-1 border p-2 rounded-sm bg-gray-100">
//                 <div className="h-22 w-22 md:w-50 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={accessories.src}
//                     alt={product.gift1}
//                     className="h-full w-full object-contain"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="flex-1 flex items-center gap-1">
//                   <span className="font-medium text-left text-[13px] md:text-lg">
//                     {product.gift1}
//                   </span>
//                   <div className="font-medium text-center text-sm md:text-lg flex flex-col">
//                     <span className="italic line-through text-end">
//                       $30.000
//                     </span>
//                     <span className="font-bold text-green-600">GRATIS</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="box flex gap-1 border p-2 rounded-sm bg-gray-100">
//                 <div className="h-22 w-22  md:w-50 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={ebook1.src}
//                     alt={product.name}
//                     className="h-full w-full object-contain"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="flex-1 flex items-center gap-1">
//                   <span className="font-medium text-left text-[13px] md:text-lg">
//                     {product.gift2}
//                   </span>
//                   <div className="font-medium text-center flex flex-col md:text-lg">
//                     <span className="italic line-through text-end">
//                       $59.900
//                     </span>
//                     <span className="font-bold text-green-600">GRATIS</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="box flex gap-1 border p-2 rounded-sm bg-gray-100">
//                 <div className="h-22 w-22  md:w-50 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={ebook2.src}
//                     alt={product.name}
//                     className="h-full w-full object-contain"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="flex-1 flex items-center gap-1">
//                   <span className="font-medium text-left text-[13px] md:text-lg">
//                     {product.gift3}
//                   </span>
//                   <div className="font-medium text-center flex flex-col md:text-lg">
//                     <span className="italic line-through text-end">
//                       $49.900
//                     </span>
//                     <span className="font-bold text-green-600">GRATIS</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="box flex gap-4 border p-2 rounded-sm bg-gray-100 w-full justify-between">
//                 <div className="h-22 w-22 md:w-50 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 flex items-center justify-center overflow-hidden rounded-md border border-gray-400">
//                   <img
//                     src={freeDelivery.src}
//                     alt="Delivery Gratis"
//                     className="h-full w-full object-contain"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="flex-1 flex items-center gap-1 justify-between">
//                   <span className="font-medium text-left text-[13px] md:text-lg flex flex-col">
//                     ENTREGA DE 2 A 4 DÍAS
//                     <small className="font-italic">
//                       Dependiendo de tu ciudad
//                     </small>
//                   </span>
//                   <div className="font-medium text-center flex flex-col md:text-lg">
//                     <span className="font-bold text-green-600">GRATIS</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <hr className="border-gray-400" />

//             {/* Price Breakdown */}
//             <div className="space-y-2 font-semibold text-gray-900 text-lg">
//               <div className="flex justify-between text-lg md:text-lg">
//                 <span>Subtotal</span>
//                 <span>
//                   $
//                   {subtotal.toLocaleString("es-CO", {
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="">Envío</span>
//                 <span>
//                   <strong className="text-green-600 font-bold">GRATIS</strong>
//                 </span>
//               </div>
//               <hr className="my-2 border-gray-400" />
//               <div className="flex justify-between font-bold">
//                 <span>Total</span>
//                 <span>
//                   $
//                   {subtotal.toLocaleString("es-CO", {
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex flex-col justify-center lg:hidden mb-4">
//             <span className="text-red-500 font-semibold text-xl text-center xl:text-xl">
//               🚨 Atencion 🚨
//             </span>
//             <div className="text-lg text-white text-center w-[90%] lg:w-full lg:mb-4 self-center">
//               Asegúrate de proporcionar la información correcta para el envío de
//               tu pedido. Es crucial incluir un número de teléfono con WhatsApp.
//             </div>
//           </div>
//           {/* Customer Information Form */}
//           <div className="md:col-span-2 bg-gray-300 text-gray-900 rounded-lg">
//             <div className="pt-4 px-4">
//               <h3 className="tracking-wide text-2xl font-bold">
//                 Información para tu envío
//               </h3>
//             </div>
//             <div className="p-4">
//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-6"
//                 id="purchaseForm"
//               >
//                 <div className="grid gap-4 sm:grid-cols-2 mb-3">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">
//                       Nombre Y Apellido
//                     </label>
//                     <input
//                       name="nombre"
//                       value={formData.nombre}
//                       onChange={handleChange}
//                       placeholder="Tu nombre completo"
//                       className="border-b-gray-700 mb-0 placeholder-gray-400 flex h-10 w-full rounded-md border bg-white px-3 py-2 shadow-sm transition-all duration-300 focus:outline-none focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
//                     />
//                     {errors.nombre && (
//                       <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
//                         {errors.nombre}
//                       </span>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">
//                       Correo Electronico
//                     </label>
//                     <input
//                       name="email"
//                       type="text"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="tucorreo@ejemplo.com"
//                       className="border-b-gray-700 mb-0 flex h-10 w-full rounded-md border bg-white px-3 py-2 shadow-sm transition-all duration-300 focus:outline-none focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
//                     />
//                     {errors.email && (
//                       <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
//                         {errors.email}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <div className="grid gap-4 sm:grid-cols-2 mb-3">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">
//                       Telefono / WhatsApp
//                     </label>
//                     <input
//                       name="telefono"
//                       value={formData.telefono}
//                       onChange={handleChange}
//                       onBlur={handleOnBlur}
//                       placeholder="320 123 4567"
//                       className="border-b-gray-700 mb-0 flex h-10 w-full rounded-md border bg-white px-3 py-2 shadow-sm transition-all duration-300 focus:outline-none focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
//                     />
//                     {errors.telefono && (
//                       <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
//                         {errors.telefono}
//                       </span>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium md:text-nowrap">
//                       Documento <small>(Solo para la transportadora)</small>
//                     </label>
//                     <input
//                       name="cedula"
//                       value={formData.cedula}
//                       onChange={handleChange}
//                       placeholder="123456789"
//                       className="border-b-gray-700 mb-0 flex h-10 w-full rounded-md border bg-white px-3 py-2 shadow-sm transition-all duration-300 focus:outline-none focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
//                     />
//                     {errors.cedula && (
//                       <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
//                         {errors.cedula}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <div className="grid gap-4 sm:grid-cols-2 mb-3">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Ciudad</label>
//                     <input
//                       name="ciudad"
//                       value={formData.ciudad}
//                       onChange={handleChange}
//                       placeholder="Tu Ciudad"
//                       className="border-b-gray-700 mb-0 flex h-10 w-full rounded-md border bg-white px-3 py-2 shadow-sm transition-all duration-300 focus:outline-none focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
//                     />
//                     {errors.ciudad && (
//                       <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
//                         {errors.ciudad}
//                       </span>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-medium">Departamento</label>
//                     <select
//                       name="departamento"
//                       value={formData.departamento}
//                       onChange={handleChange}
//                       className="flex h-10 w-full mb-0 rounded-md border border-gray-500 bg-white px-3 py-2 shadow-sm transition-all duration-300 focus:outline-none focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
//                     >
//                       <option value="" className="">
//                         Selecciona tu departamento
//                       </option>
//                       <option value="Amazonas">Amazonas</option>
//                       <option value="Antioquia">Antioquia</option>
//                       <option value="Arauca">Arauca</option>
//                       <option value="Atlántico">Atlántico</option>
//                       <option value="Bogotá">Bogotá</option>
//                       <option value="Bolívar">Bolívar</option>
//                       <option value="Boyacá">Boyacá</option>
//                       <option value="Caldas">Caldas</option>
//                       <option value="Caquetá">Caquetá</option>
//                       <option value="Casanare">Casanare</option>
//                       <option value="Cauca">Cauca</option>
//                       <option value="Cesar">Cesar</option>
//                       <option value="Chocó">Chocó</option>
//                       <option value="Córdoba">Córdoba</option>
//                       <option value="Cundinamarca">Cundinamarca</option>
//                       <option value="Guainía">Guainía</option>
//                       <option value="Guaviare">Guaviare</option>
//                       <option value="Huila">Huila</option>
//                       <option value="La Guajira">La Guajira</option>
//                       <option value="Magdalena">Magdalena</option>
//                       <option value="Meta">Meta</option>
//                       <option value="Nariño">Nariño</option>
//                       <option value="Norte de Santander">
//                         Norte de Santander
//                       </option>
//                       <option value="Putumayo">Putumayo</option>
//                       <option value="Quindío">Quindío</option>
//                       <option value="Risaralda">Risaralda</option>
//                       <option value="San Andrés y Providencia">
//                         San Andrés y Providencia
//                       </option>
//                       <option value="Santander">Santander</option>
//                       <option value="Sucre">Sucre</option>
//                       <option value="Tolima">Tolima</option>
//                       <option value="Valle del Cauca">Valle del Cauca</option>
//                       <option value="Vaupés">Vaupés</option>
//                       <option value="Vichada">Vichada</option>
//                       {/* Add other states as needed */}
//                     </select>
//                     {errors.departamento && (
//                       <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
//                         {errors.departamento}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">Dirección</label>
//                   <input
//                     name="direccion"
//                     value={formData.direccion}
//                     onChange={handleChange}
//                     placeholder="ej: Calle 123 #45-67, depto 89, torre 10.."
//                     className="border-b-gray-700 mb-0 flex h-10 w-full rounded-md border bg-white px-3 py-2 shadow-sm transition-all duration-300 focus:outline-none focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
//                   />
//                   <small className="text-[0.7rem] md:text-[0.9rem] italic">
//                     Debe ser exacta para que la transportadora pueda ubicarse.
//                   </small>
//                   {errors.direccion && (
//                     <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
//                       {errors.direccion}
//                     </span>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-medium">
//                     Datos Adicionales
//                   </label>
//                   <textarea
//                     name="datos_adicionales"
//                     value={formData.datos_adicionales}
//                     onChange={handleChange}
//                     placeholder="Instrucciones de entrega, localidad, barrio, municipio cercano, area suburbana o cualquier información adicional que consideres necesaria."
//                     className="min-h-[100px] flex h-10 w-full border-input rounded-md px-3 bg-white py-2 text-base shadow-sm shadow-gray-800 transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus:placeholder:text-gray-100 focus:outline-none focus:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
//                   />
//                 </div>
//                 {/* Alert Confirm Purchase */}
//                 <div className="flex flex-col justify-center text-center items-center gap-2 mb-3 lg:mt-10">
//                   <span className="text-red-500 font-semibold text-lg text-center lg:text-xl">
//                     🚨 Atencion 🚨
//                   </span>
//                   <span className="font-bold text-center">
//                     TU COMPRA ES UN COMPROMISO
//                   </span>
//                   <p className="text-sm lg:text-[1rem] text-black">
//                     Al confirmar tu compra, activamos todo el proceso logístico:
//                     personal, preparación y el envío que te regalamos 💌.
//                   </p>
//                   <p className="text-sm lg:text-[1rem] text-black">
//                     Por eso, te pedimos que solo realices el pedido si estás
//                     seguro, así evitamos devoluciones que generan costos
//                     innecesarios y nos ayudan a seguir ofreciendo este beneficio
//                     a más personas 🙏
//                   </p>
//                   <span className="text-center font-bold lg:text-xl lg:mt-4">
//                     ¡Gracias por tu comprensión! 🩶
//                   </span>
//                 </div>
//                 {someError && (
//                   <span className="someError text-red-500 text-[12px] text-center mt-[-0.5rem]">
//                     Revisa todos los campos, hubo un error o faltó alguno
//                   </span>
//                 )}
//                 <button
//                   type="submit"
//                   className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-green-600 hover:bg-green-600/80 text-white font-semibold mb-0 cursor-pointer tracking-wider text-lg"
//                   id="formPurchaseBtn"
//                   data-purchasedproduct={product.name}
//                 >
//                   {isLoading && (
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         stroke-width="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                   )}
//                   {isLoading ? "Procesando..." : "Confirmar Compra"}
//                 </button>
//                 <p className="text-sm mt-1 mb-2 text-center">
//                   🔒 Solo pagas al recibir!
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const SimpleCheckoutForm: FunctionComponent<CheckOutFormProps> = ({
  product,
  setSuccessPage,
  handleOrderNumberFromChild,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    cedula: "",
    ciudad: "",
    departamento: "",
    direccion: "",
    datos_adicionales: "",
    producto: product.name,
    kit: product.id,
    valor_compra: product.price,
    numero_orden: `AV-${Math.floor(100000 + Math.random() * 900000)}`,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [someError, setSomeError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: JSX.TargetedEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setSomeError(false);
  };

  const handleOnBlur = (e: JSX.TargetedEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "telefono") {
      const cleanedNumber = normalizePhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: cleanedNumber }));
    }
  };

  const validationRules: Record<string, ValidationRules> = {
    nombre: {
      required: true,
      minLength: 3,
      messageRequired: "Por favor ingresa tu nombre completo.",
    },
    email: {
      required: true,
      pattern: /\S+@\S+\.\S+/,
      messageInvalid: "Ingresa un correo válido (ejemplo@mail.com)",
      messageRequired: "Necesitamos tu correo para enviarte la confirmación.",
    },
    cedula: {
      required: true,
      minLength: 5,
      pattern: /^(\d{5,10}|[a-zA-Z0-9]{6,12})$/,
      messageRequired: "La transportadora necesita tu documento.",
      messageInvalid: "Verifica que tu documento sea correcto.",
    },
    direccion: {
      required: true,
      minLength: 5,
      messageRequired: "Ingresa tu dirección completa para el envío.",
    },
    telefono: {
      required: true,
      minLength: 7,
      pattern:
        /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      messageInvalid: "Ingresa un número válido (320 123 4567)",
      messageRequired: "Necesitamos tu WhatsApp para confirmar el envío.",
    },
    departamento: {
      required: true,
      messageRequired: "Selecciona tu departamento.",
    },
    ciudad: {
      required: true,
      minLength: 3,
      messageRequired: "Ingresa tu ciudad.",
    },
  };

  const handleSubmit = async (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData, validationRules);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSomeError(true);
    } else {
      try {
        setIsLoading(true);
        const res = await makeRequest.post("/purchase/newPurchase", formData);

        if (res.status === 201) {
          handleOrderNumberFromChild(formData.numero_orden);
          successfulOrderNumber.value = formData.numero_orden;
          isCheckoutModalOpen.value = false;
          isSuccessModalOpen.value = true;
        } else if (res.status === 400) {
          alert(res.data.message);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          alert(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const subtotal = product.price;
  const totalValue = subtotal + product.priceBefore + 30000 + 59900 + 49900;

  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-6 lg:gap-8">
      {/* Left Column - Form */}
      <div className="order-2 lg:order-1">
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
          {/* Form Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Datos de Envío
            </h3>
            <p className="text-sm text-gray-600">
              Completa la información para recibir tu pedido en 3-5 días
              hábiles.
            </p>
          </div>

          {/* Alert Banner */}
          <div className="mb-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex-1">
                <p className="text-sm font-semibold text-amber-800 mb-1">
                  Verifica tus datos antes de confirmar
                </p>
                <p className="text-xs text-amber-700">
                  Asegúrate de incluir un número de WhatsApp activo para
                  coordinar la entrega.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                {errors.nombre && (
                  <p className="text-xs text-red-500 mt-1">{errors.nombre}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  onBlur={handleOnBlur}
                  placeholder="320 123 4567"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                {errors.telefono && (
                  <p className="text-xs text-red-500 mt-1">{errors.telefono}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Documento <span className="text-red-500">*</span>
                </label>
                <input
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                  placeholder="123456789"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                {errors.cedula && (
                  <p className="text-xs text-red-500 mt-1">{errors.cedula}</p>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Departamento <span className="text-red-500">*</span>
                </label>
                <select
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecciona</option>
                  <option value="Amazonas">Amazonas</option>
                  <option value="Antioquia">Antioquia</option>
                  <option value="Arauca">Arauca</option>
                  <option value="Atlántico">Atlántico</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Bolívar">Bolívar</option>
                  <option value="Boyacá">Boyacá</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Caquetá">Caquetá</option>
                  <option value="Casanare">Casanare</option>
                  <option value="Cauca">Cauca</option>
                  <option value="Cesar">Cesar</option>
                  <option value="Chocó">Chocó</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Guainía">Guainía</option>
                  <option value="Guaviare">Guaviare</option>
                  <option value="Huila">Huila</option>
                  <option value="La Guajira">La Guajira</option>
                  <option value="Magdalena">Magdalena</option>
                  <option value="Meta">Meta</option>
                  <option value="Nariño">Nariño</option>
                  <option value="Norte de Santander">Norte de Santander</option>
                  <option value="Putumayo">Putumayo</option>
                  <option value="Quindío">Quindío</option>
                  <option value="Risaralda">Risaralda</option>
                  <option value="San Andrés y Providencia">
                    San Andrés y Providencia
                  </option>
                  <option value="Santander">Santander</option>
                  <option value="Sucre">Sucre</option>
                  <option value="Tolima">Tolima</option>
                  <option value="Valle del Cauca">Valle del Cauca</option>
                  <option value="Vaupés">Vaupés</option>
                  <option value="Vichada">Vichada</option>
                </select>
                {errors.departamento && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.departamento}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Ciudad <span className="text-red-500">*</span>
                </label>
                <input
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  placeholder="Bogotá"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
                {errors.ciudad && (
                  <p className="text-xs text-red-500 mt-1">{errors.ciudad}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Dirección Completa <span className="text-red-500">*</span>
              </label>
              <input
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Calle 123 #45-67, Apto 89"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              />
              {errors.direccion && (
                <p className="text-xs text-red-500 mt-1">{errors.direccion}</p>
              )}
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Información Adicional{" "}
                <span className="text-gray-400">(Opcional)</span>
              </label>
              <textarea
                name="datos_adicionales"
                value={formData.datos_adicionales}
                onChange={handleChange}
                placeholder="Barrio, referencias, instrucciones de entrega..."
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Error Message */}
            {someError && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-red-700">
                  Por favor revisa los campos marcados en rojo.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Procesando...</span>
                </>
              ) : (
                <>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Confirmar Pedido</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <div className="order-1 lg:order-2">
        <div className="bg-white rounded-xl p-6 shadow-lg lg:sticky lg:top-4">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Resumen del Pedido
          </h3>

          {/* Product */}
          <div className="space-y-4 mb-6">
            <div className="flex gap-4 pb-4 border-b border-gray-200">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">
                  {product.name}
                </p>
                <div className="mt-2">
                  <span className="text-sm text-gray-500 line-through block">
                    ${product.priceBefore.toLocaleString("es-CO")}
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    ${product.price.toLocaleString("es-CO")}
                  </span>
                </div>
              </div>
            </div>

            {/* Bonuses - Collapsed */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-green-800 text-sm">
                  🎁 Bonos Incluidos
                </p>
                <span className="text-green-600 font-bold text-sm">GRATIS</span>
              </div>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• {product.gift1}</li>
                <li>• {product.gift2}</li>
                <li>• {product.gift3}</li>
                <li>• Envío gratis (2-4 días)</li>
              </ul>
            </div>
          </div>

          {/* Totals */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">
                ${subtotal.toLocaleString("es-CO")}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Envío</span>
              <span className="font-semibold text-green-600">GRATIS</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Bonos</span>
              <span className="font-semibold text-green-600">GRATIS</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-gray-200">
              <span className="font-bold text-gray-900">Total a Pagar</span>
              <span className="text-2xl font-bold text-gray-900">
                ${subtotal.toLocaleString("es-CO")}
              </span>
            </div>
          </div>

          {/* Value Summary */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-amber-900 mb-1">
                  Valor Total del Paquete
                </p>
                <p className="text-xs text-amber-700">
                  Ahorras{" "}
                  <strong>
                    ${(totalValue - subtotal).toLocaleString("es-CO")}
                  </strong>{" "}
                  con este pedido
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SimpleCheckoutForm;
