import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paula'}
          fotoUsuario={'https://picsum.photos/id/7/50/50'}
          fotoPost={'https://picsum.photos/id/10/200/150'}
        />
        <Post
          nomeUsuario={'André'}
          fotoUsuario={'https://picsum.photos/id/3/50/50'}
          fotoPost={'https://picsum.photos/id/4/200/150'}
        />
        <Post
          nomeUsuario={'Maria'}
          fotoUsuario={'https://picsum.photos/id/1/50/50'}
          fotoPost={'https://picsum.photos/id/2/200/150'}
        />
      </div>
    );
  };
};
export default App;


