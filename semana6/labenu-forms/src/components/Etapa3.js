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
  padding: 5px;
  padding-left: 8px;
  color: #6e6f70;
` 
const Select = styled.select`
  margin-bottom: 10px;
  border: none;
  outline: none;
  width: 237.5px;
  height: 20px;
  border-radius: 5px;
  height: 30px;
  padding: 0 5px;
  color: #6e6f70;
`

export class Etapa3 extends React.Component {
  render() {
    return (
      <FormContainer>
        <Titulo>Etapa 3 - Informações gerais de ensino:</Titulo>
        <Formulario>
          <Label>5. Caso não tenha concluído uma graduação, por que não concluiu?</Label>
          <Input/>
          <Label>6. Você fez algum curso complementar?</Label>
          <Select>
            <option value={''}>Selecione uma opção</option>
            <option value={'nenhum'}>Nenhum</option>
            <option value={'tecnico'}>Curso técnico</option>
            <option value={'ingles'}>Curso de inglês</option>
          </Select>
        </Formulario>
      </FormContainer>
    );
  };
};