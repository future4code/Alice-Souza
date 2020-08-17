import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 7px;
  color: white;
  background: #faa82a;
  box-shadow: 1px 1px 3px gray;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  width: 130px;
  margin: 10px auto 0 auto;
  &:hover {
    background-color: #f09000;
  }
  font-weight: 600;
`

export class ButtonNext extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.onClick}>PRÓXIMA ETAPA</Button>
      </div>
    );
  };
};