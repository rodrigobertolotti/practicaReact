import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tarjeta from './Tarjeta';
import axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  async componentDidMount(){
    const result = await axios.get("http://www.omdbapi.com/?apikey=93064b0b&s=batman");
    this.setState({
      peliculas: result.data.Search,
      titulo: result.data.Search[0].Title,
      ano: result.data.Search[0].Year,
      imagen: result.data.Search[0].Poster,
      titulo1: result.data.Search[1].Title,
      ano1: result.data.Search[1].Year,
      imagen1: result.data.Search[1].Poster,
    })
    console.log(this.state.peliculas);
  }

  //Vieja
  esVieja = (ano) => parseInt(ano)< 2006 ? "malo" : "bueno"

  render(){
    let arr = [];
    for (var i=0; i< Object.keys(this.state.peliculas).length ; i++){
      arr.push(Object.keys(this.state.peliculas)[i]);
    }
    console.log(arr);
  return (
    <div className="App">
      <Tarjeta 
      className="tarjeta" 
      nombre= {this.state.titulo}
      titulo= {this.state.ano}
      src={this.state.imagen}
      calif={this.esVieja(this.state.ano)}>
      </Tarjeta>  

      <Tarjeta 
      className="tarjeta"
       nombre={this.state.titulo1}
       titulo={this.state.ano1}
       src={this.state.imagen1}
       calif={this.esVieja(this.state.ano1)}
       ></Tarjeta>
    </div>
  );
  }
}

export default App;
