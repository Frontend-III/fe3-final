import React from "react";
import Card from "../Components/Card";

import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
	const { odontologos, setOdontologos } = useContextGlobal();
	const { name, username, id } = odontologos;
	return (
		<main className="">
			<h1>Home</h1>

			<div className="card-grid">
				<Card
					name={name}
					username={username}
					id={id}
					odontologos={odontologos}
				/>
			</div>
		</main>
	);
};

export default Home;
