import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const dentist = state.dentists.find((d) => d.id.toString() === id);

  return (
    <div className={state.theme === "light" ? "card-grid-dark" : "card-grid"}>
        <Card
      id={dentist.id}
      username={dentist.username}
      name={dentist.name}
      email={dentist.email}
      phone={dentist.phone}
      website={dentist.website}
      isInDetails={true}
    />
    </div>
    
  );
};

export default Detail;
