import React from 'react';
import axios from 'axios';
import {ContainerInputs, ButtonMudaPagina, ButtonCadastra} from './Styled';
import {BaseURL, Authorization} from './APIConsts';

class CadastroUsers extends React.Component{
  state = {
    valueName: '',
    valueEmail: ''
  };
  onChangeName = e => {
    this.setState({valueName: e.target.value})
  };
  onChangeEmail = e => {
    this.setState({valueEmail: e.target.value})
  };
  createUsers = async () => {
    const body = {
      name: this.state.valueName,
      email: this.state.valueEmail
    };
    try {
      const response = await axios.post (BaseURL, body, Authorization);
      this.setState({
        valueName: '',
        valueEmail: ''
      });
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert('Desculpe, aconteceu um ERRO no cadastro!')
    };
  };
  render() {
    return (
      <ContainerInputs>
        <ButtonMudaPagina 
          onClick={this.props.clickUsersList}
        >Ver lista de usuários</ButtonMudaPagina>
        <h1>Cadastro Labenusers:</h1>
        <input
          value={this.state.valueName}
          onChange={this.onChangeName}
          placeholder={'Seu nome'}
        /> <br></br>
        <input
          value={this.state.valueEmail}
          onChange={this.onChangeEmail}
          placeholder={'Seu email'}
        /> <br></br>
        <ButtonCadastra onClick={this.createUsers}>Cadastrar</ButtonCadastra> 
      </ContainerInputs>
    );
  };
};
export default CadastroUsers;
