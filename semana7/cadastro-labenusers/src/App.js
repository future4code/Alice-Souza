import React from 'react';
import axios from 'axios';
import {AppContainer} from './components/Styled.js';

class App extends React.Component{
  render() {
    return (
      <AppContainer>
        <h1>Cadastro Labenusers:</h1>
        <CadastroUsers
          
        />
      </AppContainer>
    );
  };
};
export default App;
