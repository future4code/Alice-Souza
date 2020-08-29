import React from 'react';
import axios from 'axios';
import {
  Input,
  ButtonCriar,
  ButtonMudaPage
} from './Styled';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const axiosConfig = {
  headers: {
    Authorization: 'alice-souza-jackson'
  }
};
class CreatePlaylist extends React.Component{
  state = {
    newPlaylist: ''
  };
  onChangePlaylist = e => {
    this.setState({newPlaylist: e.target.value});
  };
  createPlaylist = async () => {
    const body = {
      name: this.state.newPlaylist
    };
    try {
      const response = await axios.post(baseUrl, body, axiosConfig);
      alert('Playlist criada com sucesso!');
      this.setState({newPlaylist: ''});
    } catch (error) {
      (error.message === 'Request failed with status code 400') 
      ? alert('Não foi possível criar a playlist, pois ela já existe!')
      : alert('Desculpe, aconteceu um erro ' + error.message)
    };
  };
  render(){
    return (
      <div>
        <h2>Crie sua Playlist</h2>
        <Input 
          value={this.state.newPlaylist}
          onChange={this.onChangePlaylist}
          placeholder="Nome da playlist"
        /> 
        <br></br>
        <ButtonCriar onClick={this.createPlaylist}>Criar Playlist</ButtonCriar> 
        <br></br>
        <ButtonMudaPage onClick={this.props.clickListaPlaylists}>Ver minhas playlists</ButtonMudaPage>
      </div>
    );
  };
};
export default CreatePlaylist;
