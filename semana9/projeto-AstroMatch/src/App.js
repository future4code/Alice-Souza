import React, {useState} from 'react';
import Home from './components/Home/Home';
import Matches from './components/Matches/Matches';
import {
  AppContainer,
  ButtonHeader
} from './styles';
import match from './img/match.png';
import back from './img/back.png';
import logo from './img/logo.png';

function App() {
  const [screen, setScreen] = useState(true);

  const onClickChangeScreen = () => {
    setScreen(!screen);
  };

  const changeButton = () => {
    return screen 
    ? <ButtonHeader src={match} alt="Ver matches" onClick={onClickChangeScreen}/>
    : <ButtonHeader src={back} alt="Voltar para o início" onClick={onClickChangeScreen}/>
  };

  return (
    <AppContainer>
      <header>
        <div><img src={logo} alt='Logo do astromatch'/></div>
        {changeButton()}
      </header>
      {screen ? <Home/> : <Matches/>}
    </AppContainer>
  );
};

export default App;