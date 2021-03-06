import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {AppContainer} from './StylesApp';
import PokeCard from './components/PokeCard/PokeCard';

const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

const App = () => {
    const [pokeList, setPokeList] = useState([]);
    const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const changePokeName = event => {
    setPokeName (event.target.value);
  };

    return (
      <AppContainer>
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </AppContainer>
    );
  };
  export default App;