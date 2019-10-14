import React from 'react';
import '../App.css';

const Imagen = (props) =>{
    return (
        <div className="App-content1">
           <img src={props.image} alt="Prefil" className="App-imagen"/>
           <div>
                <h3 className="App-title">{props.title}</h3>
                <p className="App-text">
                    {props.contenido}  
                </p>
           </div>
           
        </div>
        
    )
}
export default Imagen;