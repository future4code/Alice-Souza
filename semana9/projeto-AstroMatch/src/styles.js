import styled from 'styled-components'; 

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #f7dece;
  width: 40%;
  margin: 0 auto;
  text-align: center;
  > header {
    display: flex;
    width: 90%;
    margin: 0 auto;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 0;
    margin-bottom: 20px;
    > h1 {
      margin-top: 0;
    }
    > div {
      > img {
        width: 200px;
      }
    }
  }
  @media (max-width: 415px) {
    width: 100%;
  } 
`
export const ButtonHeader = styled.img`
  height: 50px;
  width: 50px;
` 

