import Card from "./Components/Card";
import React, { useState } from "react";
import "./Styles/App.css";

function App() {
  
    const [customer, setCustomer] = useState({
      personaje: "",
      pelicula: "",
    });
    console.log(customer);
    const [showCard, setShowCard] = useState(false);
    const [error, setError] = useState(false);
  
    const handleChangePersonaje = (event) => {
      
      setCustomer({ ...customer, personaje: event.target.value });
    
    };
    const handleChangePelicula = (event) => {
      setCustomer({ ...customer, pelicula: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (
        customer.personaje.trim().length > 3 &&
        customer.pelicula.trim().length > 6
      ) {
        setShowCard(true);
        setError(false);
      } else {
        setError(true);
      }
    };
  
    const reset = () => {
      setCustomer({
        personaje: "",
        pelicula: "",
      });
      setShowCard(false);
    };
  
    return (
      <div>
          <>
            <form onSubmit={handleSubmit}>
              <label>Nombre del Personaje:</label>
              <input
                type="text"
                value={customer.personaje}
                onChange={handleChangePersonaje}
              />
              <label>Pelicula a la que pertenece: </label>
              <input
                type="text"
                value={customer.pelicula}
                onChange={handleChangePelicula}
              />
              <button>Enviar</button>
            </form>
            <button onClick={reset}>Reset form</button>
          </>
  
        {error ? (
          <h4 style={{ color: "red" }}>
            Error: Por favor, coloque la información correctamente
          </h4>
        ) : null}

    {showCard && <Card customer={customer} />}
      </div>
    );
  };


export default App
