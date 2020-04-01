import React from 'react';

class Correcto extends React.Component{

    render(){
        return(
            <div className="CORRECTO">
                <h1>{this.props.cantidadSeleccionados} ok</h1>
            </div>
        )
    }
}

export default Correcto;