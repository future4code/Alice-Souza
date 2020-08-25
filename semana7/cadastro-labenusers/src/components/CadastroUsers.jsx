import React from 'react';
import {ContainerInputs} from './Styled';

class CadastroUsers extends React.Component{
  render() {
    return (
      <ContainerInputs>
        <h1>Cadastro Labenusers:</h1>
        <input
          value={this.props.valueName}
          onChange={this.props.changeName}
          placeholder={'Seu nome'}
        /> <br></br>
        <input
          value={this.props.valueEmail}
          onChange={this.props.changeEmail}
          placeholder={'Seu email'}
        /> <br></br>
        <button onClick={this.props.clickSend}>Enviar</button>
      </ContainerInputs>
    );
  };
};
export default CadastroUsers;
