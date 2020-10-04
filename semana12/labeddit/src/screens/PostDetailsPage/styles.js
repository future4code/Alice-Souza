import styled from "styled-components";

export const PostCardContainer = styled.div`
  text-align: center;
  padding: 0 20px;
  margin: 30px 25px;
  max-width: 500px;
  @media (min-width: 560px) {
    margin: 30px auto;
  }
`
export const CommentContainer = styled.div`
  background: white;
  text-align: center;
  padding: 5px 0;
  margin: 30px 25px;
  max-width: 500px;
  @media (min-width: 560px) {
    margin: 30px auto;
  }
`
export const FooterPost = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const Votes = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 20px;
    height: 25px;
    cursor: pointer;
    margin: 0 5px;
  }
`
export const Back = styled.img`
  width: 40px;
  margin: 20px 0 0 20px;
  cursor: pointer;
  @media (min-width: 560px){
    margin-left: 40px;
  }
  @media (min-width: 890px){
    margin-left: 60px;
  }
  @media (min-width: 1080px){
    margin-left: 110px;
  }
`