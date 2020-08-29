import React from 'react';
import {
  ButtonMudaPage
} from './Styled';

class Playlist extends React.Component {
  render() {
    return (
      <div>
        Você não adicionou músicas a esta playlist!
        <ButtonMudaPage onClick={this.props.clickListaPlaylists}>Voltar para playlists</ButtonMudaPage>
      </div>
    );
  };
};
export default Playlist;