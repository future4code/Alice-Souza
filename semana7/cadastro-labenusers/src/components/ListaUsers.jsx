import React from 'react';
import {ContainerLista} from './Styled';

class ListaUsers extends React.Component{
  render() {
    return (
      <ContainerLista>
        <h1>Lista Labenusers:</h1>
        <ul>
          <li>{this.props.nameUser}</li>
        </ul>
      </ContainerLista>
    );
  };
};
export default ListaUsers;
