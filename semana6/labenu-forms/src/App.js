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
const Button = styled.button`
  padding: 5px;
  color: white;
  background: #f09000;
  border: 1px solid gray;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  margin: 20px auto 0 auto;
`

class App extends React.Component {
  state = {
    etapa: 1
  };
  irProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    });
  };
  render() {
    let etapa;
    switch (this.state.etapa) {
      case 1:
        etapa = <Etapa1/>;
        break;
      case 2:
        etapa = <Etapa2/>;
        break;
      case 3:
        etapa = <Etapa3/>;
        break;
      case 4: 
        etapa = <Final/>;
        break;
    }   
    return (
      <AppContainer>
        <Titulo>Labenu Forms</Titulo>
        {etapa}
        <Button onClick={this.irProximaEtapa}>Próxima etapa</Button>
      </AppContainer>
    );
  };
};
export default App;
