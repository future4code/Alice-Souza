import styled from "styled-components";

export const PostCardContainer = styled.div`
  background: white;
  padding: 10px;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 0 3px gray;
  margin: 30px 25px;
  @media (min-width: 560px) {
    margin: 30px auto;
  }
`
export const FooterPost = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin: 20px auto 0 auto;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    > img {
      width: 20px;
      height: 25px;
      cursor: pointer;
      margin: 0 5px;
    }
  }
  > button {
    cursor: pointer;
    height: 30px;
    border: none;
    outline: none;
    box-shadow: 0 0 2px black;
  }  
`
export const TextsPost = styled.div`
  cursor: pointer;
  padding: 0 5px;
`
export const Loading = styled.div`
  text-align: center;
`