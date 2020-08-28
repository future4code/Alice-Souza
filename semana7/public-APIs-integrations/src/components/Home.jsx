import React from 'react';
import {
  HomeContainer,
  TituloBored,
  TituloStar,
  TituloPicsum, 
  Footer
} from './Styled';

class Home extends React.Component{
  render() {
     return (
      <HomeContainer>
        <h1>Playing with API</h1>
        <section onClick={this.props.clickOpenBored}>
          <TituloBored>ACTIVITIES FOR THE BORED</TituloBored>
        </section>
        <section onClick={this.props.clickOpenStarWars}>
          <TituloStar>EXPLORE THE STAR WARS UNIVERSE</TituloStar>
        </section>
        <Footer>
          <p>Project for API integrations</p>
        </Footer>
      </HomeContainer>
    );
  };
};
export default Home;
