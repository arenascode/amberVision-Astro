import { useState } from "preact/hooks";
import type { FormErrors, ValidationRules } from "../types/rulesValidationForm";
import { validateForm } from "../utils/validationForm";
import { makeRequest } from "../utils/axios";
import type { JSX } from "preact";

const ContactForm = () => {

  const [errors, setErrors] = useState<FormErrors>({});
  const [someError, setSomeError] = useState<boolean>(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleForm = (
    e: JSX.TargetedEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;

    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setSomeError(false);
  };

  const validationRules: Record<string, ValidationRules> = {
    nombre: {
      required: true,
      minLength: 3,
      messageRequired:
        "Tu nombre es requerido, queremos saber quien nos contacta 😃",
    },
    email: {
      required: true,
      minLength: 3,
      pattern: /\S+@\S+\.\S+/,
      messageInvalid:
        "¿Eso era un correo? 🤔 Revisa el formato, parece que algo falta.",
      messageRequired:
        "Necesitamos tu correo para ponernos en contacto contigo.",
    },
    telefono: {
      required: true,
      minLength: 7,
      pattern:
        /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      messageInvalid:
        "Mmm... ese número no parece de este planeta. ¡Revisa otra vez!",
      messageRequired:
        "Necesitamos tu número para avisarte cuando el pedido esté en camino. ¡Nada de llamadas molestas, lo prometemos!",
    },
    mensaje: {
      required: true,
      minLength: 10,
      messageRequired:
        "¡Queremos saber de ti! Cuéntanos qué necesitas o cómo podemos ayudarte.",
    },
  };

  const handleSubmit = async (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form, validationRules);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSomeError(true);
      return;
    } else {
      try {
        setIsLoading(true);
        await makeRequest.post("/contact", form).then((res) => {
          if (res.status === 200) {
            setErrors({});
            setSomeError(false);
            alert(res.data.message);
          } else if (res.status === 500) {
            alert(res.data.message);
          }
        });
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };


  return (
    <form
      className="p-6 rounded-lg border-1 shadow-lg space-y-5 dark:text-gray-200"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-semibold mb-2">Envíanos un mensaje</h3>

      <div>
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleForm}
          value={form.nombre}
        />
        {errors.nombre && (
          <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
            {errors.nombre}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 darkMo dark:text-gray-200"
        >
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleForm}
          value={form.email}
        />
        {errors.email && (
          <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Teléfono celular
        </label>
        <input
          type="tel"
          id="phone"
          name="telefono"
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.telefono}
          onChange={handleForm}
        />
        {errors.telefono && (
          <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
            {errors.telefono}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="mensaje"
          rows={5}
          className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleForm}
          value={form.mensaje}
        ></textarea>
        {errors.mensaje && (
          <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
            {errors.mensaje}
          </span>
        )}
      </div>
      <div className="container flex flex-col gap-4">
        <button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 flex items-center justify-center gap-4 pointer"
        >
          {
          isLoading ?  <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg> : ""
          }{" "}
          {isLoading ? "Procesando..." : "Enviar Mensaje"}
        </button>
        {someError && (
          <span className="someError text-red-500 text-[12px] text-center mt-[-0.5rem] xl:ml-3">
            Revisa todos los campos, hubo un error o faltó alguno
          </span>
        )}
      </div>
    </form>
  );
}
export default ContactForm