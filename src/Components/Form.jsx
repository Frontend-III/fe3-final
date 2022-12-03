import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Form = () => {
	//Aqui deberan implementar el form completo con sus validaciones

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	async function onSubmitForm(values) {
		let config = {
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			data: values,
		};
		try {
			const res = await axios(config);
			if (res.status === 200) {
				reset();
			}
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="h-[60rem]">
			<div className="bg-gradient-to-b from-purple-600 to-indigo-700 h-96 w-full">
				<div className="w-full flex items-center justify-center py-28">
					<div className="bg-white shadow rounded py-12 lg:px-28 px-8">
						<p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
							Este es el inicio de algo sorprendente.
						</p>
						<p className="md:text-2xl text-xl italic leading-7 text-center text-gray-700 pt-5">
							Enviarme tus datos será el primer paso.
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
									<span className="text-red-400">{errors.nombre?.message}</span>
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
												message: "This needs to be a valid email address",
											},
										})}
									/>
								</div>
							</div>
							<div className="md:flex justify-around items-center mt-8">
								<div className="md:w-72 flex flex-col">
									<label className="text-base font-semibold leading-none text-gray-800">
										Empresa / compañía
									</label>
									<input
										tabIndex={0}
										aria-label="Indicame el nombre de tu compañía"
										type="empresa"
										className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
										placeholder="Indicame el nombre de tu compañía"
										{...register("empresa", {
											required: true,
										})}
									/>
								</div>
								<div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
									<label className="text-base font-semibold leading-none text-gray-800">
										Teléfono
									</label>
									<input
										tabIndex={0}
										arial-label="Desde que país te comunicas"
										type="telefono"
										className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
										placeholder="Desde que país te comunicas"
										{...register("telefono", {
											required: true,
										})}
									/>
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
									className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
									value="Enviar"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
