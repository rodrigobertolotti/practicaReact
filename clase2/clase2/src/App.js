import React from 'react';
import Tarjeta from './Tarjeta';
import NoBusco from './NoBusco';
import Axios from 'axios';

class App extends React.Component {
        state={
            valorSelect: '',
            data: null
        }
    
     handleSelect = async (evento) => {
        let nombrePelicula= evento.target.value;
        const response = await Axios.get('http://omdbapi.com/?apikey=93064b0b&t=' + nombrePelicula);
        this.setState({
            valorSelect: nombrePelicula,
            data: response.data
        })
    } // si aca llamo a la api , puedo llamar a un dumb component, dESOUES DE LLAMAR A LA API, ASIGNO A STATE CON EL RESPONSE
        // Y LLAMO A TARJETA CON EL DATA DEL STATE, ACORDARSE QUE AHORA EL HANDLESELECT VA A TENER QUE SER ASINCRONO. De esta forma,
        // la api es llamada por medio del componente inteligente, y la tarjeta lo unico que va a hacer es mostrar al elemeno. 
        // de esta forma no tendria que usar el componentdidupdate en la clase tarjeta.

    render() {
        let body=null;
        if (this.state.valorSelect.length>0) {
            body = <Tarjeta data={this.state.data}></Tarjeta>
        }else{
            body= <NoBusco></NoBusco>
        }
        return (
            <>
                <h3 className="titulo">Busca tu pelicula:</h3>
                <select value={this.state.valorSelect} onChange={this.handleSelect}>
                    <option value="Batman">Batman</option>
                    <option value="Superman">Superman</option>
                    <option value="Hulk">Hulk</option>
                </select>
                <div>{body}</div>
                </>
        )
    }
}


export default App;