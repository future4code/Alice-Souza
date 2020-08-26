import React from 'react';
import {AppContainer} from './components/Styled';
import CadastroUsers from './components/CadastroUsers';
import ListaUsers from './components/ListaUsers';

class App extends React.Component{
  state = {
    pagina: 'cadastroPage',
  };
  mudaPagina = () => {
    this.state.pagina === 'cadastroPage' 
    ? this.setState({pagina: 'listaPage'})
    : this.setState({pagina: 'cadastroPage'})
  };
  render() {
    const carregaPagina = () => {
      if (this.state.pagina === 'listaPage') {
        return (
          <ListaUsers
            clickUserCadastro={this.mudaPagina}
          />
        )
      } else if (this.state.pagina === 'cadastroPage') {
        return (
          <CadastroUsers
            clickUsersList={this.mudaPagina}
          />
        )
      };
    };
    return (
      <AppContainer>
        {carregaPagina()}
      </AppContainer>
    );
  };
};
export default App;
