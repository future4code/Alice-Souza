import React from 'react';
import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
  color: #a9abaa;
  > h1 {
    color: white;
    font-family: 'Covered By Your Grace';
    font-weight: 200;
    font-size: 250%;
  }
  > footer {
    position: fixed;
    bottom: 0;
    color: #dedede;
    text-shadow: 0 0 3px black;
    width: 100%;
    text-align: center;
  }
`
export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 3px;
  width: 250px;
  margin-bottom: 30px;
`
export const ButtonCriar = styled.button`
  border: 1px solid gray;
  outline: none;
  background: black;
  color: white;
  padding: 7px;
  width: 150px;
  border-radius: 5px;
  margin: 15px 0;
`
export const ButtonMudaPage = styled.button`
  border: 1px solid gray;
  outline: none;
  background: purple;
  color: white;
  padding: 7px;
  width: 150px;
  border-radius: 5px;
  margin-top: 50px;
`
export const PlaylistInList = styled.div`
  width: 285px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted #a9abaa;
  padding: 5.5px;
  margin: 0 auto 10px auto;
  color: white;
  text-shadow: 0 0 2px black;
`
export const ButtonPlay = styled.button`
  border: 1px solid white;
  outline: none;
  background: #00000085;
  color: white;
  font-weight: 500;
  padding: 5px;
  border-radius: 4px;
`
export const ButtonDelete = styled.button`
  border: none;
  outline: none;
  background: #ff00009f;
  color: white ;
  border-radius: 50%;
  text-shadow: 0 0 3px white;
`
