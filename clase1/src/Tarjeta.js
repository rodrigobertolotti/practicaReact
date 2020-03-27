import React from 'react';
import logo from './logo.svg';
import './App.css';

const Titulo = params =>

    <div className="titulo">
      {params.nombre}
    </div>

const Visto = params =>
    <div className={params.calif}>
      {params.titulo}
    </div>

const Imagen = params =>
    <div >
      <img className="imagen" src={params.src}></img>
    </div>


const Tarjeta = (props) => {
  return (
    <div className="tarjeta">
      <Titulo nombre={props.nombre}></Titulo>
      <Visto titulo={props.titulo} calif={props.calif}></Visto>
      <Imagen src={props.src}></Imagen>
    </div>
  )
}

export default Tarjeta;