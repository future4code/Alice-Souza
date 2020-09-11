import styled from 'styled-components';

export const LoveOrNotLove = styled.div`
  display: flex;
  width: 25%;
  margin: 35px auto 0 auto;
  justify-content: space-between;
  @media (max-width: 415px) {
    width: 45%;
  }
  > img {
    width: 50px;
  }
`
export const Profile = styled.div`
  padding: 0 20px;
  > img {
    width: 250px;
    height: 300px;
    border-radius: 7px;
    box-shadow: 1px 1px 2px gray; 
  }
`