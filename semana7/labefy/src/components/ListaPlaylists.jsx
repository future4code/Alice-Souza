import React from 'react';
import axios from 'axios';
import {
  ButtonMudaPage,
  PlaylistInList,
  ButtonDelete,
  ButtonPlay
} from './Styled';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const axiosConfig = {
  headers: {
    Authorization: 'alice-souza-jackson'
  }
};
class ListaPlaylists extends React.Component{
  state = {
    playlists: [],
    openMusics: false
  };
  componentDidMount = () => {
    this.getPlaylists();
  };
  getPlaylists = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({playlists: response.data.result.list});
    } catch (error) {
      alert('Desculpe, aconteceu um erro ' + error);
    };
  };
  deletePlaylist = async (playlistId) => {
    if (window.confirm('Tem certeza que deseja deletar esta playlist?')){
      try {
        const response = await axios.delete(`${baseUrl}/${playlistId}`, axiosConfig);
        this.getPlaylists();
      } catch (error) {
        alert('Desculpe, não foi possível deletar a playlist!');
      };
    };
  };
  verMusicas = () => {
    this.setState({openMusicas: true});
  };
  render(){
    const playlistsList = this.state.playlists.map((playlist) => {
      return (
        <PlaylistInList key={playlist.id}> 
          <ButtonPlay onClick={this.props.clickPlaylist}>{"> "} {playlist.name}</ButtonPlay>
          <ButtonDelete onClick={() => this.deletePlaylist(playlist.id)}>X</ButtonDelete>
        </PlaylistInList>
      );
    })
    return (
      <div>
        <h2>Minhas Playlists</h2>
        {playlistsList}
        <ButtonMudaPage onClick={this.props.clickHome}>Home</ButtonMudaPage>
      </div>
    );
  };
};
export default ListaPlaylists;
