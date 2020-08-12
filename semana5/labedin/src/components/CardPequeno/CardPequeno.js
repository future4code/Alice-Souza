import React from 'react';
import './CardPequeno.css'

export default function CardPequeno(props) {
  return (
    <div className="minicard-container">
      <img src={props.imagemDado}/>
      <span><strong>{props.tituloDado}</strong>{props.dado}</span>
    </div>
  );
};
