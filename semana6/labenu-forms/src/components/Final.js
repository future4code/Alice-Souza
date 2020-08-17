import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h2`
  margin-top: 50px; 
  color: #63625f;
`

export class Final extends React.Component {
  render() {
    return (
      <div>
        <Titulo>O formulário acabou :D</Titulo>
        <p>Muito obrigado por participar!</p> 
        <p>Entraremos em contato.</p>
      </div>
    );
  };
};