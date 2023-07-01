import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import axios from "axios";
import { useParams } from "react-router-dom";
import doctor from "../assets/images/doctor.png";
import { THEME } from "../assets/themes/theme"; //1

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const [dentist, setDentist] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchDentistByID = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setDentist(response.data);
      } catch (error) {
        console.log("Error fetching dentist: ", error);
      }
    };

    fetchDentistByID();
  }, [id]);

  return (
    <div className={theme === THEME.darkMode ? "dark home" : ""}>
      <div className="detail">
        <div className="detail-container">
          <img src={doctor} alt="dentist-img" />
          <div className="right">
            <h2>{dentist.name}</h2>
            <h3>{dentist.username}</h3>
            <p>{dentist.email}</p>
            <p>{dentist.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
