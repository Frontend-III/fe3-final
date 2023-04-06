import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Card from "../Components/Card";
const Dentist = () => {
    // TODO: use tables instead of card
    const { id } = useParams();
    const [dentist, setDentist] = useState({});
    useEffect(() => {
        const getDentist = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
            const parsedDentist = await response.json();
            setDentist(parsedDentist);
        }
        getDentist();
    })
    return(
        <Card id={dentist.id} username={dentist.username} name={dentist.name} email={dentist.email} phone={dentist.phone} website={dentist.website} />
    )
}

export default Dentist;