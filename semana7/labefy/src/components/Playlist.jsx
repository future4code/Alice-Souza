import React from 'react';
import {
  ButtonMudaPage
} from './Styled';

class Playlist extends React.Component {
  render() {
    return (
      <div>
        <h3>Você não adicionou músicas a esta playlist!</h3>
        <br></br>
        <ButtonMudaPage onClick={this.props.clickListaPlaylists}>Voltar para playlists</ButtonMudaPage>
      </div>
    );
  };
};
export default Playlist;