import React from 'react';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  text-align: center;
  > h1 {
    color: white;
    text-shadow: 0 0 6px black;
    font-family: Acme;
  }
  > section {
    background: #ffffff7a;
    width: 150px;
    height: 120px;
    padding: 0 10px;
    margin: 100px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    box-shadow: 0 0 5px black;
    cursor: pointer;
  }
`
export const TituloBored = styled.div`
  color: blue;
  font-weight: 500;
`
export const TituloStar = styled.div`
  color: #c21d04;
  font-weight: 500;
`
export const TituloPicsum = styled.div`
  color: purple;
  font-weight: 500;
`
export const BoredContainer = styled.div`
  background: #43d0f386;
  color: white;
  width: 90vw;
  height: 95vh;
  margin: 2.5vh auto;
  box-shadow: 0 0 3px black;
  text-align: center;
  > h1 {
    padding: 30px 0;
    font-family: Acme;
  }
  > div {
    text-align: center;
    margin: 50px 10px;
    > h3 {
      font-size: 120%;
      font-weight: 600;
      color: black;
    }
    > p {
      color: blue;
      font-weight: 500;
    }
  }
`
export const StarContainer = styled.div`
  background: #d122077a;
  color: white;
  width: 90vw;
  height: 95vh;
  margin: 2.5vh auto;
  box-shadow: 0 0 3px black;
  text-align: center;
  > h1 {
    padding: 30px 0;
    font-family: Acme;
  }
  > div {
    text-align: center;
    margin: 50px 10px;
    > h3 {
      font-size: 120%;
      font-weight: 600;
      color: black;
    }
    > p {
      color: #c21d04;
      font-weight: 500;
    }
  }
`
export const ButtonSearch = styled.button`
  border: 1px solid white;
  outline: none;
  background: blue;
  color: white;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
`
export const ButtonNextPlanet = styled.button`
  border: 1px solid white;
  outline: none;
  background: #c21d04;
  color: white;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
`
export const Footer = styled.footer`
  position: fixed;
  bottom: 5px;
  color: #dedede;
  text-shadow: 0 0 3px black;
  width: 100%;
  text-align: center;
`
export const ButtonPrevious = styled.button`
  width: 110px;
  border: none;
  outline: none;
  background: white;
  color: black;
  padding: 7px;
  border-radius: 4px;
  box-shadow: 0 0 2px black;
  margin-right: 10px;
  cursor: pointer;
`
export const ButtonNext = styled.button`
  width: 110px;
  margin-left: 10px;
  border: none;
  outline: none;
  background: black;
  color: white;
  padding: 7px;
  cursor: pointer;
  border-radius: 4px;
`
