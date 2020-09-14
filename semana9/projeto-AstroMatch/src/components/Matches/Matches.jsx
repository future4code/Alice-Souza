import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  MatchContainer, 
  ButtonClear
} from './styles';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alice-souza-jackson";

const Matches = () => {
  const [matchesList, setMatchesList] = useState([]);

  const getMatches = () => {
    axios.get(`${baseUrl}/matches`)
    .then(response => {
      setMatchesList(response.data.matches)
    }).catch(err => {
        console.log(err.message)
    });
  };

  const onClickClearMatches = () => {
    axios.put(`${baseUrl}/clear`)
    .then(response => {
      setMatchesList([])
    }).catch(err => {
        console.log(err.message)
    });
  };

  useEffect(() => {
    getMatches()
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      <div>
        {matchesList.map(match => {
          return (
            <MatchContainer>
              <img src={match.photo} />
              <p>{match.name}, {match.age} anos</p>
            </MatchContainer>
          )
        })}
      </div>
      <ButtonClear onClick={onClickClearMatches}>Limpar Matches</ButtonClear>
    </div>
  );
};

export default Matches;