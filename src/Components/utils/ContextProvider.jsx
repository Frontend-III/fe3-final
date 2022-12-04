import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
	//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
	const [odontologos, setOdontologos] = useState([]);

	/* useEffect(() => { */
	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((res) => setOdontologos(res.data))
		.catch((error) => console.log(error));
	/* }, []); */

	return (
		<ContextGlobal.Provider value={{ odontologos, setOdontologos }}>
			{children}
		</ContextGlobal.Provider>
	);
};

export default ContextProvider;

export const useContextGlobal = () => {
	return useContext(ContextGlobal);
};

/* import { createContext, useContext, useState } from "react";

const SalarioState = createContext()

const Context = ({children}) => {

    const [salario, setSalario] = useState(150000)

    return (
        <SalarioState.Provider 
            value={{
                salario, 
                setSalario
            }}
        >
            {children}
        </SalarioState.Provider>
    )
}

export default Context

export const useSalarioState = () => {
    return useContext(SalarioState)
} */
