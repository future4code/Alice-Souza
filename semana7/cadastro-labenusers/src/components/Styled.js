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
  border-radius: 0 0 15px 15px;
  box-shadow: 0 0 5px gray;
  text-align: center;
  > input {
    margin-bottom: 15px;
    width: 50%;
    padding: 10px;
    border: none;
    outline: none;
    box-shadow: 0 0 3px gray;
    border-radius: 4px;
  }
`
export const ButtonCadastra = styled.button`
  padding: 5px;
  width: 25%;
  margin-top: 7px;
  margin-bottom: 30px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 3px gray;
`
export const ButtonMudaPagina = styled.button`
  padding: 7px;
  margin: 20px 0 30px 0;
  background: green;
  color: white;
  border: none;
  border-radius: 3px;
  box-shadow: 2px 2px 3px gray;
  cursor: pointer;
`
export const ContainerLista = styled.div`
  border-radius: 0 0 15px 15px;
  box-shadow: 0 0 5px gray;
  padding: 20px;
  text-align: center;
  background: white;
  width: 40%;
  margin: 0 auto;
`
export const UserInList = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted gray;
  padding: 4px;
  margin: 0 auto 10px auto;
  > button {
    background: red;
    color: white;
    border: none;
    outline: none;
    border-radius: 4px;
  }
`