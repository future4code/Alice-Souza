// Libs
import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// Files for organization
import { goToSignUpPage } from '../../router/goToPages';
import { baseUrl } from '../../constants/axiosConstants';
import { useForm } from '../../hooks/useForm';
// Styles
import { HeaderContainer, FormContainer } from './styles';

// Login screen
function HomePage() {

  // Lib
  const history = useHistory()

  // For security (Token true, enter feed page)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/feed');
    }
  }, [history]);

  // useForm - custom hook
  const loginForm = {
    email: '',
    password: ''
  }
  const {form, onChange} = useForm(loginForm)
  const handleFormChange = (event) => {
    const {name, value} = event.target
    onChange(name, value)
  }

  // Login function (create token)
  const login = (event) => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post(`${baseUrl}/login`, body)
    .then(response => {
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
          <button onClick={() => goToSignUpPage(history)}>Cadastrar</button>
        </div>
      </HeaderContainer>
      <FormContainer onSubmit={login}>
        <h1>Entrar</h1>
        <input
          name={"email"}
          value={form.email}
          onChange={handleFormChange}
          type={"email"}
          placeholder={"Seu e-mail *"}
          autoComplete={"email"}
          required
          autoFocus
        /> 
        <br></br>
        <input
          name={"password"}
          value={form.password}
          onChange={handleFormChange}
          type={"password"}
          placeholder={"Sua senha *"}
          required
        />
        <br></br>
        <button>Entrar</button>
      </FormContainer>
    </div>
  )

}

export default HomePage;