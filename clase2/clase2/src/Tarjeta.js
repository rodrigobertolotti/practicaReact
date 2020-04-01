import React from 'react';
import Axios from 'axios';

class Tarjeta extends React.Component {

    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <>
                <div>
                    <div className="contenedor">
                        <p className="centrado">{`Titulo: ${this.props.data.Title}`}</p>
                    </div>
                    <div className="contenedor">
                        <p className="centrado">{`Ranking: ${this.props.data.imdbRating}`}</p>
                    </div>
                    <div className="contenedor">
                        <img className="poster" src={this.props.data.Poster} alt=""></img>
                    </div>

                </div>
            </>
        )
    }
}

export default Tarjeta;