import React from 'react';
import Home from './components/Home';
import Bored from './components/Bored';
import TheStarWars from './components/TheStarWars';

class App extends React.Component{
  state = {
    page: 'home'
  };
  openPageBored = () => {
    this.setState({page: 'bored'});
  };
  openPageStarWars = () => {
    this.setState({page: 'star-wars'});
  };
  backPageHome = () => {
    this.setState({page: 'home'});
  };
  render() {
    const renderPage = () => {
      if (this.state.page === 'home') {
        return (
          <Home
            clickOpenBored={this.openPageBored}
            clickOpenStarWars={this.openPageStarWars}
            clickOpenPicsum={this.openPagePicsum}
          />
        )
      } else if (this.state.page === 'bored') {
        return (
          <Bored
            clickHome={this.backPageHome}
            clickNext={this.openPageStarWars}
          />
        )
      } else if (this.state.page === 'star-wars') {
        return (
          <TheStarWars
            clickPrevious={this.openPageBored}
          />
        )
      };
    };
     return (
      <div className={'app-container'}>
        {renderPage()}
      </div>
    );
  };
};
export default App;
