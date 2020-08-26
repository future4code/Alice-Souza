import React from 'react';
import axios from 'axios';
import {ContainerLista, ButtonMudaPagina, UserInList} from './Styled';
import {BaseURL, Authorization} from './APIConsts';

class ListaUsers extends React.Component{
  state = {
    users: []
  };
  componentDidMount = () => {
    this.getUsers();
  };
  getUsers = async () => {
    try{
      const response = await axios.get(BaseURL, Authorization);
      this.setState({users: response.data});
    } catch (error) {
      alert (error.message)
    }
  }
  deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`${BaseURL}/${userId}`, Authorization);
      this.getUsers();
      alert('Usuário deletado com sucesso!');
    } catch (error) {
      alert('Desculpe, não foi possível deletar o usuário!');
    };
  };
  render() {
    return (
      <ContainerLista>
        <ButtonMudaPagina onClick={this.props.clickUserCadastro}>Voltar para cadastro</ButtonMudaPagina>
        <h1>Lista Labenusers:</h1>
        {this.state.users.map((user) => {
          return (
            <UserInList key={user.id}>
              {user.name} 
              <button onClick={() => this.deleteUser(user.id)}>X</button>
            </UserInList>
          );
        })}
      </ContainerLista>
    );
  };
};
export default ListaUsers;
