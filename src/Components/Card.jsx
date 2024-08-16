import React from "react";
import CardStyles from "../Styles/Card.module.css";

const Card = ({customer}) => {
    return (
    <div className={CardStyles.cardContainer}>
      <h3>Información del personaje:</h3>
      <p>Personaje: {customer.personaje}</p>
      <p>Película: {customer.pelicula}</p>
    </div>
    )
  };
  
  
export default Card;