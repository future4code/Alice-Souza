import React from 'react';
import axios from 'axios';
import {ContainerLista, ButtonMudaPagina} from './Styled';

class ListaUsers extends React.Component{
  render() {
    return (
      <ContainerLista>
        <ButtonMudaPagina onClick={this.props.clickUserCadastro}>Voltar para cadastro</ButtonMudaPagina>
        <h1>Lista Labenusers:</h1>
      </ContainerLista>
    );
  };
};
export default ListaUsers;
