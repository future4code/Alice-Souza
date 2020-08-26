import React from 'react';
import styled from 'styled-components';

export const AppContainer = styled.div`
  background: lightgreen;
  height: 100vh;
  color: #4b4a4a;
`
export const ContainerInputs = styled.div`
  padding: 20px;
  background: white;
  width: 40%;
  margin: 0 auto;
  height: 100vh;
  > input {
    margin-bottom: 15px;
    width: 50%;
    padding: 10px;
    border: none;
    outline: none;
    box-shadow: 0 0 3px gray;
    border-radius: 4px;
  }
  > button {
    padding: 5px;
    width: 25%;
    margin-top: 7px;
  }
`
export const ContainerLista = styled.div`
  padding: 20px;
  background: lightgreen;
  width: 40%;
  margin: 0 auto;
  height: 100vh;
`