import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background: #a3fdff;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px gray;
  > div {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    > h1 {
      margin: 0;
      font-family: 'BenchNine', sans-serif;
      color: #1f2063;
    }
    > button {
      width: 90px;
      border: none;
      outline: none;
      box-shadow: 0px 0px 4px gray;
      cursor: pointer;
    }
  }
`
