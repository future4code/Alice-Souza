import React from 'react';
import axios from 'axios';
import {
  StarContainer,
  ButtonPrevious,
  ButtonNext,
  ButtonNextPlanet,
  Footer
} from './Styled';

class TheStarWars extends React.Component{
  state = {
    name: '',
    climate: '',
    gravity: '',
    population: ''
  };
  componentDidMount() {
    this.getPlanet()
  };
  getPlanet = async () => {
    try {
      const response = await axios.get('https://www.swapi.dev/api/planets/');
      this.setState({
        name: response.data.name,
        climate: response.data.climate,
        gravity: response.data.gravity,
        population: response.data.population
      });
    } catch (error) {
      alert(error);
    };
  };
  render() {
     return (
      <StarContainer>
        <h1>Browse the universe</h1>
        <ButtonNextPlanet onClick={this.getPlanet}>NEXT PLANET TO VISIT</ButtonNextPlanet>
        <div>
          <h3>Planet: </h3>
          <p>{this.state.name}</p>
          <h3>Climate:</h3>
          <p>{this.state.climate}</p>
          <h3>Gravity:</h3>
          <p>{this.state.gravity}</p>
          <h3>Population:</h3>
          <p>{this.state.population}</p>
        </div>
        <ButtonPrevious onClick={this.props.clickPrevious}>{'<= '}PREVIOUS</ButtonPrevious>
        <Footer>
          <p>Project for API integrations</p>
        </Footer>
      </StarContainer>
    );
  };
};
export default TheStarWars;