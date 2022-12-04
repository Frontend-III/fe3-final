import React from "react";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({}) => {
	return (
		<>
			<nav>
				<div
					style={{
						backgroundColor: "lightGrey",
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
						padding: "10px",
						alignItems: "center",
					}}
				>
					<div>Clinica Keep Smiling</div>
					<div>
						<Link to="/">Home </Link>
						<Link to="/contact">Contact </Link>
						<Link to="/favs">Favs </Link>
						<button>Theme</button>
					</div>
					{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
