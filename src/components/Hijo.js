import React from 'react';

//Por destructurin estamos pasando props
const Hijo = ({nombre, segundonombre}) =>{
    
    return (
        <div>
             <p>Bienvenido {nombre} {segundonombre}</p>
        </div>
    )
}

export default Hijo;