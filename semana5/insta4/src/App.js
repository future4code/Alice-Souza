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
    ]
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
        {postsRender}
      </div>
    );
  };
};
export default App;


