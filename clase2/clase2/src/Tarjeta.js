import React from 'react';
import Axios from 'axios';

class Tarjeta extends React.Component {

    constructor(props){
    super(props);
    this.state = {
        nombre: "",
        rating: ""
    }

}

    componentDidMount() {
        Axios.get('http://omdbapi.com/?apikey=93064b0b&t='+this.props.name)
            .then(response => {
                this.setState({
                    nombre: response.data.Title,
                    rating: response.data.imdbRating,
                    imagen: response.data.Poster,
                })
            })
    }

    render() {
        return (
            <div>
            <div className="contenedor">
                <p className="centrado">{this.state.nombre}</p>
            </div>
            <div className="contenedor">
                <p className="centrado">{this.state.rating}</p>
            </div>
            <div className="contenedor">
                <img className="poster" src={this.state.imagen} alt=""></img>
            </div>

            </div>
        )
    }
}

export default Tarjeta;