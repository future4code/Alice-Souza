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

export class Etapa1 extends React.Component {
  render() {
    return (
      <FormContainer>
        <Titulo>Etapa 1 - Dados gerais:</Titulo>
        <Formulario>
          <Label>1. Qual o seu nome? *</Label>
          <Input
            value={this.props.valorNome}
            onChange={this.props.changeNome}
          />
          <Label>2. Qual sua idade? *</Label>
          <Input
            value={this.props.valorIdade}
            onChange={this.props.changeIdade}
          />
          <Label>3. Qual seu email? *</Label>
          <Input
            value={this.props.valorEmail}
            onChange={this.props.changeEmail}
          />
          <Label>4. Qual a sua escolaridade?</Label>
          <Select>
            <option value={''}>Selecione uma opção</option>
            <option value={'medioCompleto'}>Ensino médio completo</option>
            <option value={'medioInompleto'}>Ensino médio incompleto</option>
            <option value={'superiorCompleto'}>Ensino superior completo</option>
            <option value={'superiorInCompleto'}>Ensino superior incompleto</option>
          </Select>
        </Formulario>
      </FormContainer>
    );
  };
};