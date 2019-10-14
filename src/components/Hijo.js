import React from 'react';
import '../App.css';

const Hijo = (props) =>{
    return (
        <div className="App-content">
             <p>Bienvenido {props.nombre}</p>
        </div>
    )
}
export default Hijo;