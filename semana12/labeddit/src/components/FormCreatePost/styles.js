import styled from 'styled-components';

export const CreatePostContainer = styled.div`
  background: #f0fcfc;
  padding: 2px 10px 25px 10px;
  margin-bottom: 15px;
  max-width: 500px;
  box-shadow: 0 0 3px gray;
  margin: 30px 25px;
  @media (min-width: 560px) {
    margin: 30px auto;
  }
`
export const FormContainer = styled.form`
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
export const Input = styled.textarea`
  height: 100px;
  width: 250px;
  border: none;
  outline: none;
  padding: 10px;
  box-shadow: 1px 1px 3px gray;
  margin-bottom: 10px;
` 