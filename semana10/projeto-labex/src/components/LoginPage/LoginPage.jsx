import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import useInput from '../../hooks/useInput';
import {useHistory} from 'react-router-dom';

const LoginContainer = styled.div`
margin-right: 5vw;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: white;
`
const BotaoLogin = styled.button`
height: 5vh;
width: 6vw;
border-style: none;
border-radius: 1vw;
background-color: #FF4500;
color: white;
`
const BotaoLogout = styled.button`
margin-left: 1vw;
height: 5vh;
width: 6vw;
border-style: none;
border-radius: 1vw;
background-color: #FF4500;
color: white;
`
const EntradaDeDados = styled.input`
height: 4vh;
margin-left: 1vw;
margin-right: 1vw;
border: none;
outline: none;
`

function LoginPage() {

    const {form, onChange, resetaEntrada} = useInput({
        email: "",
        senha: ""
    });
    
    const [atualizaEstado, setAtualizaEstado] = useState(false);

    const history = useHistory();

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    };

    const handleSave = (event) => {
        event.preventDefault()
        onClickEntrar()
    };

    const onClickEntrar = () => {
        const body = {
            email: form.email,
            password: form.senha
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/alice-souza-jackson/login", body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            resetaEntrada()
            history.replace("/admin")
            setAtualizaEstado(!atualizaEstado)
        })
        .catch((error) => {
            console.log(error.message);
        });       
    };

    const onClickSair = () => {
        window.localStorage.clear()
        setAtualizaEstado(!atualizaEstado)
        history.push("/")
    };

    const renderizaNaTela = () => {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            return (
                <div>
                    <form onSubmit={handleSave}>
                        <EntradaDeDados
                            name="email" 
                            type="email" 
                            value={form.email} 
                            onChange={handleInputChange} 
                            placeholder="Seu email"
                        />
                        <EntradaDeDados
                            name="senha" 
                            type="password" 
                            value={form.senha} 
                            onChange={handleInputChange} 
                            placeholder="Sua senha"
                        />
                        <BotaoLogin>ENTRAR</BotaoLogin>
                    </form>
                </div>
            );
        } else {
            return (
                <LoginContainer>
                    <p>Seja bem-vindo, Administrador!</p>
                    <BotaoLogout onClick={onClickSair}>LOGOUT</BotaoLogout> 
                </LoginContainer>
            );
        };
    };

    return (
        <LoginContainer>
            {renderizaNaTela()}
        </LoginContainer>
    );
};

export default LoginPage;