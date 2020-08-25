import React from 'react';
import axios from 'axios';
import {AppContainer} from './components/Styled';
import CadastroUsers from './components/CadastroUsers';
import ListaUsers from './components/ListaUsers';

class App extends React.Component{
  state = {
    users: [],
    valueNameUser: '',
    valueEmailUser: '',
    listaAberta: false
  };
  onChangeName = e => {
    this.setState({valueNameUser: e.target.value})
  };
  onChangeEmail = e => {
    this.setState({valueEmailUser: e.target.value})
  };
  getUsers = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "alice-souza-jackson"
        }
      }
    );
    request
    .then((resposta) => {
      console.log(resposta.data.result.list);
    })
    .catch((erro) => {
      console.log(erro);
    });  
  }
  criarListaUsers = name => {
    const body = {
      name: this.state.valueNameUser
    };
    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "alice-souza-jackson"
        }
      }
    )
    request
      .then((resposta) => {
        alert("Usuário cadastrado com sucesso!!!");
        this.getUsers();
        this.setState({
          valueNameUser: '',
          valueEmailUser: ''
        })
      })
      .catch((erro) => {
        alert('Desculpe, aconteceu ERRO no cadastro.');
      });
  }
  componentDidMount() {
    this.getUsers();
  }
  verLista = () => {
    this.setState({listaAberta: !this.state.listaAberta})
  }
  render() { 
    return (
      <AppContainer>
      <CadastroUsers
        valueName={this.state.valueNameUser}
        changeName={this.onChangeName}
        valueEmail={this.state.valueEmailUser}
        changeEmail={this.onChangeEmail}
        clickSend={() => {this.criarListaUsers(this.state.valueNameUser)}}
      />
      <ListaUsers
        nameUser={'nome exemplo'}
      />
      </AppContainer>
    );
  };
};
export default App;
