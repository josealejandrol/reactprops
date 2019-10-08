import React from "react";
import "./App.css";
import Hijo from "./components/Hijo";
import Data from "./components/DataPerson";

const person = {
  nombre: "Isai",
  apellido: "Gomez",
  edad: 23
};
const { nombre, apellido, edad } = person;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Estos son unas pruebas en react...</h1>
        <Data
          name={`Mi nommbre es ${nombre}`}
          lastname={`${apellido},`}
          age={`tengo ${edad} años`}
        ></Data>
      </header>
      <Hijo nombre={"José es mi perra"} />
    </div>
  );
}

export default App;
