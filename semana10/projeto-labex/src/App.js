import React from 'react'
import styled from 'styled-components'
import Router from './components/Router/Router';

const AppContainer = styled.div`
width: 100%;
min-height: 100vh;
text-align: center
`

function App () {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
};

export default App; 