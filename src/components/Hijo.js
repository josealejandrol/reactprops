import React from 'react'
import Subtitulo from './Subtitulo'
const Hijo = ({nombre}) =>{
    return (
        <div>
            <p>Bienvenido {nombre}</p>
            <Subtitulo texto = "Este es un subtitulo" />
            
        </div>
    )
}
export default Hijo;