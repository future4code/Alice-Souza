import React from 'react';
import {AppContainer} from './components/Styled';
import CreatePlaylist from './components/CreatePlaylist';
import ListaPlaylists from './components/ListaPlaylists';
import Playlist from './components/Playlist';


class App extends React.Component{
  state = {
    page: 'home'
  };
  verPlaylists = () => {
    this.setState({page: 'playlists'});
  };
  voltarHome = () => {
    this.setState({page: 'home'});
  };
  verMusicas = () => {
    this.setState({page: 'musicas'});
  };
  render(){
    const pageOpen = () => {
      switch (this.state.page) {
        case 'home':
          return (
            <CreatePlaylist
              clickListaPlaylists={this.verPlaylists}
            />
          );
        case 'playlists':
          return (
            <ListaPlaylists
            clickHome={this.voltarHome}
            clickPlaylist={this.verMusicas}
            />
          );
        case 'musicas':
          return (
            <Playlist
              clickListaPlaylists={this.verPlaylists}
            />
          );
      };
    };
    return (
      <AppContainer>
        <h1>LABEFY</h1>
        {pageOpen()}
        <footer>
          <p>Project for API Labefy integration.</p>
        </footer>
      </AppContainer>
    );
  };
};
export default App;
