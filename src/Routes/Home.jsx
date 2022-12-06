import React, { useEffect, useState } from "react";
import axios from "axios";
import CardO from "../Components/CardO";
import styles from "../Home.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
	const [odontologos, setOdontologos] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => setOdontologos(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<div className={styles.containerCards}>
				{odontologos.map((odontologo) => {
					return <CardO key={odontologo.id} odontologo={odontologo} />;
				})}
			</div>
		</>
	);
};

export default Home;
