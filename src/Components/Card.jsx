import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, odontologos }) => {
	const addFav = () => {
		// Aqui iria la logica para agregar la Card en el localStorage
	};

	return (
		<>
			{odontologos.map((odontologos) => (
				<div className="card" key={odontologos.id}>
					<h2>odontologos.name</h2>
					<h3>odontologos.username</h3>
					<h3>odontologos.id</h3>
					<Link to="/detail">Favs </Link>

					{/* En cada card deberan mostrar en name - username y el id */}

					{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

					{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
					<button onClick={addFav} className="favButton">
						Add fav
					</button>
				</div>
			))}
		</>
	);
};

export default Card;
