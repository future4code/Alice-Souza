import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 300px;
  margin: 30px auto;
`
const Formulario = styled.div`
  text-align: start;
  margin-left: 30px;
`
const Titulo = styled.h2`
  color: #63625f;
  padding-bottom: 10px;
`
const Label = styled.p`
  margin-bottom: 7px;
`
const Input = styled.input`
  margin-bottom: 10px;
  border: none;
  outline: none;
  width: 84%;
  height: 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px gray;
  padding: 5px;
` 

export class Etapa2 extends React.Component {
  render() {
    return (
      <FormContainer>
        <Titulo>Etapa 2 - Informações do Ensino superior:</Titulo>
        <Formulario>
          <Label>5. Qual curso?</Label>
          <Input/>
          <Label>6. Qual a unidade de ensino?</Label>
          <Input/>
        </Formulario>
      </FormContainer>
    );
  };
};