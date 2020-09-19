import React, {useEffect, useState} from 'react';
import useInput from '../hooks/useInput';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function CreateTripPage() {

    const [dataMinima, setDataMinima] = useState("");

    useEffect (() => {
        pegaDataAtual();
    }, []);

    const pegaDataAtual = () => {
        const dataAtual = new Date()
        const diaAtual = dataAtual.getDate()
        const mesAtual = dataAtual.getMonth() + 1
        const anoAtual = dataAtual.getFullYear()
        setDataMinima(`${anoAtual}-0${mesAtual}-${diaAtual}`)
    };

    const {form, onChange, resetaEntrada} = useInput({
        nome: "",
        planeta: "",
        data: "",
        descricao: "",
        duracao: ""
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    };

    const handleSave = (event) => {
        event.preventDefault()
        const [ year, month, day ] = form.data.split("-")
        const formatDate = `${day}/${month}/${year}`
        onClickCriarViagem(formatDate)
    };

    const history = useHistory();

    const onClickAdmin = () => {
        history.push("/admin")
    };

    const onClickCriarViagem = (formatDate) => {
        const token = window.localStorage.getItem("token");
        const body = {
            name: form.nome, 
            planet: form.planeta,
            date: formatDate,
            description: form.descricao,
            durationInDays: form.duracao
        };
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alice-souza-jackson/trips`, body, {
            headers: {
                auth: token
            }
        }).then((response) => {
            alert("Cadastro realizado com sucesso!");
            resetaEntrada()
        }).catch((error) => {
            alert("Desculpe, aconteceu um erro!");
            console.log(error.message);
        });
    };

    return(
        <div>
            <h1>CADASTRAR NOVA VIAGEM</h1>
                <form onSubmit={handleSave}>
                    <div>
                        <label>NOME:</label>
                        <input
                            name="nome" 
                            type="text" 
                            value={form.nome} 
                            title="O nome deve ter no mínimo 5 letras"
                            onChange= {handleInputChange} 
                            pattern={"[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ0-9' ']{5,}"}
                            required
                        />
                    </div>
                    <div>
                        <label>PLANETA:</label>
                        <select name="planeta" value={form.planeta} onChange={handleInputChange} required>
                            <option value="">Selecione um planeta</option>
                            <option value="Mercúrio">Mercúrio</option>
                            <option value="Vênus">Vênus</option>
                            <option value="Marte">Marte</option>
                            <option value="Júpiter">Jupiter</option>
                            <option value="Saturno">Saturno</option>
                            <option value="Urano">Urano</option>
                            <option value="Netuno">Netuno</option>
                            <option value="Plutão">Plutão</option>
                        </select>
                    </div>
                    <div>
                        <label>DATA:</label>
                        <input
                            name="data"
                            type="date"
                            min={dataMinima} 
                            value={form.data}
                            onChange={handleInputChange}
                            required 
                        />
                    </div>
                    <div>
                        <label>DURAÇÃO</label>
                        <input
                            name="duracao" 
                            type="number" 
                            value={form.duracao}
                            min="50" 
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>DESCRIÇÃO:</label>
                        <input
                            name="descricao" 
                            type="text" 
                            value={form.descricao}
                            title="Deve conter no mínimo 50 letras" 
                            onChange={handleInputChange}
                            pattern={"[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ0-9' ']{50,}"} 
                            required
                        />
                    </div>
                    <div>
                    <button>CADASTRAR</button>
                    </div>
                </form>
            <button onClick={onClickAdmin}>Voltar</button>
        </div>
    );
};

export default CreateTripPage;