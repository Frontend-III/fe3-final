import React, { Fragment, useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const [texto, setTexto] = useState("Cargando...");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function onSubmitForm(values) {
    setTexto(values);

    function abrir() {
      setOpen(true);
    }
    abrir();
  }

  function enviar() {
    reset();
    setOpen(false);
  }

  return (
    <>
      <div className="h-[60rem]">
        <div className="bg-gradient-to-b from-sky-900 via-sky-500 to-sky-200 h-96 w-full">
          <div className="w-full flex items-center justify-center py-28">
            <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
              <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                Want to know more?
              </p>
              <p className="md:text-2xl text-xl italic leading-7 text-center text-gray-700 pt-5">
                Send us your questions and we will contact you
              </p>
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="md:flex justify-around items-center mt-12 ">
                  <div className="md:w-72 flex flex-col">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Nombres
                    </label>
                    <input
                      tabIndex={0}
                      arial-label="Ingrese sus nombres"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                      placeholder="Ingrese sus nombres"
                      {...register("nombre", {
                        required: "No olvides ingresar el nombre.",
                      })}
                    />
                    <span className="text-red-400">
                      {errors.nombre?.message}
                    </span>
                  </div>
                  <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Correo electrónico
                    </label>
                    <input
                      tabIndex={0}
                      arial-label="Cuál es tu correo electrónico"
                      type="email"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                      placeholder="Cuál es tu correo electrónico"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Ingrese un email valido",
                        },
                      })}
                    />
                    <span className="text-red-400">
                      {errors.email?.message}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="w-full flex flex-col mt-8">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Mensaje
                    </label>
                    <textarea
                      tabIndex={0}
                      aria-label="Envía el mensaje"
                      type="mensaje"
                      className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                      {...register("mensaje", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 mt-4">
                  Al hacer clic en enviar, acepta nuestros términos de servicio,
                  política de privacidad y cómo usamos los datos que acá se
                  envían.
                </p>
                <div className="flex items-center justify-center w-full">
                  <input
                    type="submit"
                    className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-sky-700 rounded hover:bg-sky-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                    value="Enviar"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          El siguiente mensaje será enviado.
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Nombres: {texto.nombre}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Email: {texto.email}
                          </p>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Mensaje: {texto.mensaje}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={enviar}
                    >
                      Enviar
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancelar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Form;
