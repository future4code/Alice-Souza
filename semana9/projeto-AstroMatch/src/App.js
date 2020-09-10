import React, {useState} from 'react';
import Home from './components/Home/Home';
import Matches from './components/Matches/Matches';

function App() {
  const [screen, setScreen] = useState(true);

  const onClickChangeScreen = () => {
    setScreen(!screen);
  };

  const changeButton = () => {
    return screen 
    ? <button onClick={onClickChangeScreen}>Ver Matches</button>
    : <button onClick={onClickChangeScreen}>Home</button>
  };

  return (
    <div>
      <header>
        <h1>AstroMatch</h1>
        {changeButton()}
      </header>
      {screen ? <Home/> : <Matches/>}
    </div>
  );
};

export default App;