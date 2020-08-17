import React from 'react';
import styled from 'styled-components';
import {Etapa1} from './components/Etapa1';
import {Etapa2} from './components/Etapa2';
import {Etapa3} from './components/Etapa3';
import {Final} from './components/Final';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  background: #fad9b9;
  height: 100vh;
  box-shadow: 0 0 2px gray;
  text-align: center;
  font-family: Roboto;
  color: gray;
  @media(max-width: 415px){
    width: 100%;
  }
`
const Titulo = styled.h1`
  color: #f09000;
  background: #fcf3e8;
  margin-top: 15px;
  margin-bottom: 5px;
  font-family: Abel;
`

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Titulo>Labenu Forms</Titulo>
        <Etapa1/>
        <Etapa2/>
        <Etapa3/>
        <Final/>
      </AppContainer>
    );
  };
};
export default App;
