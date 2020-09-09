import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {PokeCardContainer} from './Styles';

const PokeCard = (props) => {

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemon(props.pokemon)
  }, [props.pokemon]);

  const getPokemon = pokeName => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => {
      setPokemon(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

    return (
      <PokeCardContainer>
        <h3>{pokemon.name}</h3>
        <h4>{pokemon.weight} Kg</h4>
        {pokemon.types && <h5>{pokemon.types[0].type.name}</h5>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </PokeCardContainer>
    );
};
export default PokeCard;
