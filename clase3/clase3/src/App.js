import React from 'react';
import './App.css';
import { render } from 'react-dom';
import Incorrecto from './Incorrecto';
import Correcto from './Correcto';

const items = [
  { nombre: "Primero", disponibles: 100 },
  { nombre: "Segundo", disponibles: 60 },
  { nombre: "Tercero", disponibles: 20 }
]

export const ListarItems = () => (
  <div>
    {items.map(item => (
      <App key={item.nombre} nombre={item.nombre} disponibles={item.disponibles}></App>
    ))
    }
  </div>
)

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: this.props.nombre,
      cantidad: this.props.disponibles,
      cantAgregar: 0
    }
  }


  handleClick = () => {
    const cant = this.state.cantidad - parseInt(this.state.cantAgregar);
    this.setState({
      cantidad: cant,
    })
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      cantAgregar: e.target.value
    })
  }

  render() {
    let hayAlgo = null;
    if (this.state.cantAgregar.length < 1) {
      hayAlgo = <Vacio></Vacio>
    }
    return (
      <>
        <h1>{this.state.nombre}</h1>
        <p>Cantidad total: {this.state.cantidad} </p>
        <input onChange={e => this.handleChange(e)}></input>
        <button onClick={this.handleClick}>AGREGAR</button>
        {hayAlgo}
        {(this.state.cantidad - this.state.cantAgregar) > 0 ? <Correcto cantidadSeleccionados={this.state.cantAgregar}></Correcto> : <Incorrecto></Incorrecto>};
      </>
    )
  }

}

const Vacio = () => <div>NO PASO NADA</div>;

export default App;
