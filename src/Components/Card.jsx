import React, { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const Card = ({ name, username, id }) => {
  const[dentist, setDentist]= React.useState([]);
  const navigate = useNavigate();

  const getData = useCallback(async(url, setState) =>{
    const data = await (await fetch(url)).json()
    setState(data.dentist)
  },[])

  useEffect(()=>{
    getData("jsonplaceholder.typicode.com/users",setDentist)
  },[getData])

  function onClickDetail(id){
    navigate(`dentist/${id}`)
  }

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  
  }

  return (
    <div className="card">
      {dentist?.map((dentist) => (
      <div key={dentist.id} onClick={() => onClickDetail(dentist.id)}>
        <p>{dentist.name}</p>
        <p>{dentist.username}</p>
        <p>{dentist.id}</p>

      <button onClick={addFav} className="favButton">Add fav</button>  
      </div>
      ))}


        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
  );
};

export default Card;
