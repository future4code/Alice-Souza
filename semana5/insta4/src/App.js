import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'Beatriz Julian',
        fotoUsuario: 'https://picsum.photos/id/7/50/50',
        fotoPost: 'https://picsum.photos/id/10/200/150'
      },
      {
        nomeUsuario: 'André Turing',
        fotoUsuario: 'https://picsum.photos/id/3/50/50',
        fotoPost: 'https://picsum.photos/id/4/200/150'
      },
      {
        nomeUsuario: 'Maria Jackson',
        fotoUsuario: 'https://picsum.photos/id/1/50/50',
        fotoPost: 'https://picsum.photos/id/2/200/150'
      }
    ],
    valorInputNomeUser: '',
    valorInputFotoUser: '',
    valorInputFotoPost: ''
  };
  criarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUser,
      fotoUsuario: this.state.valorInputFotoUser,
      fotoPost: this.state.valorInputFotoPost
    };
    const novosPosts = [...this.state.posts, novoPost];
    this.setState({
      posts: novosPosts 
    });
  };
  onChangeInputNome = e => {
    this.setState({ valorInputNomeUser: e.target.value });
  };
  onChangeInputUser = e => {
    this.setState({ valorInputFotoUser: e.target.value });
  };
  onChangeInputPost = e => {
    this.setState({ valorInputFotoPost: e.target.value });
  };
  render() {
    const postsRender = this.state.posts.map(post => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })
    return (
      <div className={'app-container'}>
        <FormPost>
          <input
            value={this.state.valorInputNomeUser}
            onChange={this.onChangeInputNome}
            placeholder={"Seu nome"}
          />
          <input
            value={this.state.valorInputFotoUser}
            onChange={this.onChangeInputUser}
            placeholder={"URL da sua foto para perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputPost}
            placeholder={"URL da sua foto para o post"}
          />
          <button onClick={this.criarPost}>Criar Post</button>
        </FormPost>
        {postsRender}
      </div>
    );
  };
};
export default App;


