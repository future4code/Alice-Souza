import React, {useState, useEffect} from 'react'
import axios from 'axios'
import useInput from '../../hooks/useInput';
import {useHistory} from 'react-router-dom';
import ListCountries from '../ListCountries/ListCountries';

function ApplicationFormPage() {

    const [viagens, setViagens] = useState([]);
    const history = useHistory();

    const {form, onChange, resetaEntrada} = useInput({
        nome: "",
        idade: "",
        why: "", 
        profissao: "",
        pais: "",
        trip: ""
    });

    useEffect (()=> {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/alice-souza-jackson/trips",)
        .then((response) => {
            setViagens(response.data.trips)
        })
        .catch((error) => {
            console.log(error.message)
        });      
    }, []);

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value);
    };

    const handleSave = (event) => {
        onClickCadastrarCandidato()
        event.preventDefault()
    };

    const onClickHomePage = () => {
        history.push("/")
    };

    const onClickCadastrarCandidato = () => {
        const body = {
            name: form.nome,
            age: form.idade,
            applicationText: form.why,
            profession: form.profissao,
            country: form.pais
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alice-souza-jackson/trips/${form.trip}/apply`, body)
        .then((response) => {
            resetaEntrada()
            alert("Cadastro realizado com sucesso!");
        }).catch((error) => {
            alert("Desculpe, aconteceu um erro!");
        });
    };

    return (
            <div>
                <form onSubmit={handleSave}>
                    <div>
                        <h1>Formulário de Inscrição</h1>
                        <div>
                            <h2>NOME COMPLETO:</h2>
                            <input
                                name="nome" 
                                type="text" 
                                value={form.nome} 
                                onChange={handleInputChange}
                                title="Deve ter no mínimo 3 letras"
                                pattern={"[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ0-9' ']{3,}"}
                                required 
                            /> 
                        </div>   
                        <div>
                            <h2>IDADE:</h2>
                            <input
                                name="idade" 
                                type="number"
                                min="18" 
                                value={form.idade} 
                                onChange={handleInputChange}
                                required 
                            />
                        </div>
                        <div>
                            <h2>POR QUE EU SOU UM BOM CANDIDATO(A)?:</h2>
                            <input
                                name="why" 
                                type="text" 
                                value={form.why} 
                                onChange={handleInputChange}
                                title="Deve ter no mínimo 30 letras"
                                pattern={"[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ0-9' ']{30,}"}
                                required  
                            />
                        </div>
                        <div>
                            <h2>PROFISSÃO:</h2>
                            <input
                                name="profissao" 
                                type="tex" 
                                value={form.profissao} 
                                onChange={handleInputChange}
                                title="Deve ter no mínimo 10 letras"
                                pattern={"[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ0-9' ']{10,}"}
                                required  
                            />
                        </div>
                        <div>
                            <h2>PAÍS:</h2>
                            <select name="pais" value={form.pais} onChange={handleInputChange} required>
                                <ListCountries />
                            </select>
                        </div>
                        
                        <div>
                            <h2>Viagem</h2>
                            <select name="trip" value={form.trip} onChange={handleInputChange}>
                                <option value="">Escolha uma viagem</option>
                                {viagens.map((viagem) => {
                                    return <option key={viagem.id} value={viagem.id}>{viagem.name}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <button>CADASTRAR</button>
                        </div>
                    </div>
                </form>
                <button onClick={onClickHomePage}>Voltar</button>
            </div>
    );
};

export default ApplicationFormPage;