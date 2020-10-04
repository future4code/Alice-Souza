import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 7px gray;
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
      outline: none;
      border: none;
      box-shadow: 0px 0px 4px gray;
      cursor: pointer;
    }
  }
`
export const FormContainer = styled.form`
  margin-top: 65px;
  text-align: center;
  > input {
    width: 250px;
    border: none;
    outline: none;
    padding: 10px;
    box-shadow: 1px 1px 3px gray;
    margin-bottom: 10px;
  }
  > button {
    width: 270px;
    outline: none;
    padding: 10px;
    margin-top: 8px;
  }
`
