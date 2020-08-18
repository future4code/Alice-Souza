import React from 'react';
import styled from 'styled-components';
import {Etapa1} from './components/Etapa1';
import {Etapa2} from './components/Etapa2';
import {Etapa3} from './components/Etapa3';
import {Final} from './components/Final';
import {ButtonNext} from './components/ButtonNext';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  background: #fadfc5;
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
  state = {
    etapa: 1,
    valorNome: '',
    valorIdade: '',
    valorEmail: ''
  };
  onChangeNome = e => {
    this.setState({
      valorNome: e.target.value
    });
  };
  onChangeIdade = e => {
    this.setState({
      valorIdade: e.target.value
    });
  };
  onChangeEmail = e => {
    this.setState({
      valorEmail: e.target.value
    });
  };
  irProximaEtapa = () => {
    if (this.state.valorNome === '' ||
        this.state.valorIdade === '' || 
        this.state.valorEmail === '') {
      alert('Preencha os campos obrigatórios (*)!')
    } else {
      this.setState({
        etapa: this.state.etapa + 1
      });
    };
  };
  render() {
    let etapa;
    let botao;
    switch (this.state.etapa) {
      case 1:
        etapa =
         <Etapa1
          valorNome={this.state.valorNome}
          valorIdade={this.state.valorIdade}
          valorEmail={this.state.valorEmail}
          changeNome={this.onChangeNome}
          changeIdade={this.onChangeIdade}
          changeEmail={this.onChangeEmail}
         />;
         botao = <ButtonNext onClick={this.irProximaEtapa}/>;
        break;
      case 2:
        etapa = <Etapa2/>;
        botao = <ButtonNext onClick={this.irProximaEtapa}/>;
        break;
      case 3:
        etapa = <Etapa3/>;
        botao = <ButtonNext onClick={this.irProximaEtapa}/>;
        break;
      case 4: 
        etapa = <Final/>;
        break;
    };
    return (
      <AppContainer>
        <Titulo>Labenu Forms</Titulo>
        {etapa}
        {botao}
      </AppContainer>
    );
  };
};
export default App;
