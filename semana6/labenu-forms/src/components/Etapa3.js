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
const Select = styled.select`
  margin-bottom: 40px;
  border: none;
  outline: none;
  width: 235px;
  height: 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px gray;
`

export class Etapa3 extends React.Component {
  render() {
    return (
      <FormContainer>
        <Titulo>Etapa 3 - Informações gerais de ensino:</Titulo>
        <Formulario>
          <Label>5. Por que você não terminou o curso de graduação?</Label>
          <Input/>
          <Label>6. Você fez algum curso complementar?</Label>
          <Select>
            <option value={'nenhum'}>Nenhum</option>
            <option value={'tecnico'}>Curso técnico</option>
            <option value={'ingles'}>Curso de inglês</option>
          </Select>
        </Formulario>
      </FormContainer>
    );
  };
};