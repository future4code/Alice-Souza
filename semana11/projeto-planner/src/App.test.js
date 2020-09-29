import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios'
import userEvent from '@testing-library/user-event';

// Mocks
axios.get = jest.fn().mockResolvedValue({
  data: []
})
axios.delete = jest.fn().mockResolvedValue()


describe('Planner requests', () => {

  // Teste 
  test('Renders elements correctly', async () => {
    const {getByTestId, getByText} = render(<App/>)

    expect(getByTestId('new-task-input')).toBeInTheDocument()
    expect(getByTestId('day-select')).toBeInTheDocument()
    expect(getByText('Criar tarefa')).toBeInTheDocument()

    await wait()
  });

})
