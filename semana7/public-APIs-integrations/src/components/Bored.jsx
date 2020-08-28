import React from 'react';
import axios from 'axios';
import {
  BoredContainer, 
  ButtonSearch,
  Footer,
  ButtonPrevious,
  ButtonNext
} from './Styled.js';

class Bored extends React.Component{
  state = {
    activity: '',
    type: '',
    participants: '',
    price: ''
  };
  componentDidMount() {
    this.getActivity()
  };
  getActivity = async () => {
    try {
      const response = await axios.get("https://www.boredapi.com/api/activity/");
      this.setState({
        activity: response.data.activity,
        type: response.data.type,
        participants: response.data.participants,
        price: response.data.price
      });
    } catch (error) {
      alert(error);
    };
  };
  render() {
     return (
      <BoredContainer>
        <h1>Find an activicty</h1>
        <ButtonSearch onClick={this.getActivity}>SEARCH</ButtonSearch>
        <div>
          <h3>Activity: </h3>
          <p>{this.state.activity}</p>
          <h3>Type:</h3>
          <p>{this.state.type}</p>
          <h3>Participants:</h3>
          <p>{this.state.participants}</p>
          <h3>Price:</h3>
          <p>US$ {this.state.price}</p>
        </div>
        <ButtonPrevious onClick={this.props.clickHome}>{'<= '}HOME</ButtonPrevious>
        <ButtonNext onClick={this.props.clickNext}>NEXT{' =>'}</ButtonNext>
        <Footer>
          <p>Project for API integrations</p>
        </Footer>
      </BoredContainer>
    );
  };
};
export default Bored;