import React from 'react';

class Buscador extends React.Component{
    render(){
        return(
            <>
            <h1 className="titulo">
                BUSCADOR
            </h1>
            <select>
                <option>Elegir una opcion</option>
                <option>Batman</option>
                <option>Superman</option>
                <option>Hulk</option>
            </select>
            </>
        )
    }
}

export default Buscador;
