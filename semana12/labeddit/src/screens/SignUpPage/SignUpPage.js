// Libs
import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// Files for organization
import { goToHomePage } from '../../router/goToPages';
import { baseUrl } from '../../constants/axiosConstants';
import { useForm } from '../../hooks/useForm';
// Styles
import { HeaderContainer, FormContainer } from './styles';

function SignUpPage() {

  // Lib
  const history = useHistory()

  // Token true - enter FeedPage
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/feed');
    }
  }, [history]);

  // useForm - custom hook
  const signUpForm = {
    username: '',
    email: '',
    password: ''
  }
  const {form, onChange} = useForm(signUpForm)
  const handleFormChange = (event) => {
    const {name, value} = event.target
    onChange(name, value)
  }

  // Create User function (create token too)
  const createUser = (event) => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password,
      username: form.username
    }
    axios.post(`${baseUrl}/signup`, body)
    .then(response => {
      alert('Cadastro feito com sucesso!')
      localStorage.setItem('token', response.data.token)
      history.push('/feed');
    })
    .catch(error => {
      alert('Ops, ocorreu um erro!')
      console.error(error)
    })
  }

  return (
    <div>
      <HeaderContainer>
        <div>
          <h1>LabEddit</h1>
          <button onClick={() => goToHomePage(history)}>Entrar</button>
        </div>
      </HeaderContainer>
      <FormContainer onSubmit={createUser}>
        <h1>Cadastrar</h1>
        <input
          name={"username"}
          value={form.username}
          onChange={handleFormChange}
          type={"text"}
          placeholder={"Nome de usuário *"}
          autoComplete={"username"}
          required
          autoFocus
        />
        <br></br>
        <input
          name={"email"}
          value={form.email}
          onChange={handleFormChange}
          type={"email"}
          placeholder={"E-mail *"}
          autoComplete={"email"}
          required
        />
        <br></br>
        <input
          name='password'
          value={form.password}
          onChange={handleFormChange}
          type='password'
          placeholder='Senha *'
          required
        />
        <br></br>
        <button>Cadastrar</button>
      </FormContainer>
    </div>

  )

}

export default SignUpPage;