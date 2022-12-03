import React from "react";
import { useEffect } from "react";

const Card = ({ name, username, id }) => {
	const [odontologos, setOdontologos] = React.useState([]);
	useEffect(() => {
		async function getOdontologo() {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);
				const json = await response.json();
				setOdontologos(
					json.map((odontologo) => {
						return {
							id: odontologo.id,
							name: odontologo.name,
							username: odontologo.username,
						};
					})
				);
			} catch (e) {
				console.log(e);
			}
		}
		getOdontologo();
	}, []);

	const addFav = () => {
		// Aqui iria la logica para agregar la Card en el localStorage
	};

	const imgStyle = { height: "60px", width: "60px" };

	return (
		<>
			{odontologos.map((odontologo) => (
				<div className="grid-cols-3" key={odontologo.id}>
					<img src="./images/doctor.jpg" alt="Odontologo" style={imgStyle} />

					<button onClick={addFav} className="favButton">
						Add fav
					</button>
				</div>
			))}
			{/* En cada card deberan mostrar en name - username y el id */}
			{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
			{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
		</>
	);
};

export default Card;
