import React from 'react';
import './Post.css';
import {IconeComContador} from '../IconeComContador/IconeComContador';
import {SecaoComentario} from '../SecaoComentario/SecaoComentario';
import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeComentario from '../../img/comment_icon.svg';

export class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  };
  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas + 1
    });
  };
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    });
  };
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    });
  };
  render() {
    let iconeCurtida;
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
      this.state.numeroCurtidas = 0;
    };
    let componenteComentario;
    let comentadoOk
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>;
    };
    return (
      <div className={'post-container'}>
        <div className={'post-header'}>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </div>
        <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>
        <div className={'post-footer'}>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />
          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </div>
        {componenteComentario}
      </div>
    );
  };
};
export default Post