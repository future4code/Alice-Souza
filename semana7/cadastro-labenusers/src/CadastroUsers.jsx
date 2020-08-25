import React from 'react';
import {ContainerInputs} from './Styled';

class CadastroUsers extends React.Component{
  render() {
    return (
      <ContainerInputs>
        <input
          value={this.props.valueName}
          onChange={this.props.changeName}
          placeholder={'Seu nome'}
        />
        <input
          value={this.props.valueEmail}
          onChange={this.props.changeEmail}
          placeholder={'Seu email'}
        />
        <button onClick={this.props.clickSend}>Enviar</button>
      </ContainerInputs>
    );
  };
};
export default CadastroUsers;
