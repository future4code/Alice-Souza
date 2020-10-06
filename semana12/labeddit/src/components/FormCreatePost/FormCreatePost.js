// Libs
import React from 'react';
import axios from 'axios';
// Files for organization
import { baseUrl, axiosConfig } from '../../constants/axiosConstants';
import { useForm } from '../../hooks/useForm';
// Styles
import { CreatePostContainer, FormContainer, Input } from './styles';

function FormCreatePost() {

  // useForm - custom hook
  const createPostForm = {
    text: '',
    title: ''
  }
  const {form, onChange, resetForm} = useForm(createPostForm)
  const handleFormChange = event => {
    const {name, value} = event.target
    onChange(name, value)
  }

  // Create post function --(TO MAKE CUSTOM HOOK)--
  const createPost = (event) => {
    event.preventDefault()
    const body = {
      text: form.text,
      title: form.title
    }
    axios.post(`${baseUrl}/posts`, body, axiosConfig)
    .then(res => {
      alert('Post criado com sucesso!')
      resetForm()
    })
    .catch(err => {
      alert(err.message)
    })
  }

  return(
    <CreatePostContainer>
      <FormContainer onSubmit={createPost}>
        <h2>Crie seu post aqui</h2>
        <input
          placeholder={'Título'}
          name={'title'}
          value={form.title}
          onChange={handleFormChange}
          type={'text'}
          required
        /> <br></br>
        <Input
          placeholder={'Texto'}
          name={'text'}
          value={form.text}
          onChange={handleFormChange}
          type={'text'}
          required
        /> <br></br>
        <button>Criar</button>
      </FormContainer>
    </CreatePostContainer>
  )

}

export default FormCreatePost;
