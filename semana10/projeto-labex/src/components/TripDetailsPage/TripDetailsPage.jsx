import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';

function TripDetailsPage() {

    const history = useHistory();
    const pathParams = useParams();

    const [detalheViagem, setdetalheViagem] = useState({});
    const [candidatos, setCandidatos] = useState([]);
    const [aprovados, setAprovados] = useState([]);

    const onClickAdmin = () => {
        history.push("/admin")
    };

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            history.push("/")
        } else {
            detalhesDaViagem()
        };
    }, [history]);

    const detalhesDaViagem = () => {
        const token = window.localStorage.getItem("token")
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alice-souza-jackson/trip/${pathParams.codigo}`, {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            setdetalheViagem(response.data.trip)
            setCandidatos(response.data.trip.candidates)
            setAprovados(response.data.trip.approved)
        })
        .catch((error) => {
            console.log(error.message)
        });
    };

    const onClickAprova = (Identificador) => {
        const token = window.localStorage.getItem("token")
        const body = {
            approve: true
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alice-souza-jackson/trips/${pathParams.codigo}/candidates/${Identificador}/decide`, body, {
            headers: {
                auth: token 
            }
        }).then((response) => {
            detalhesDaViagem()
            alert("Ótimo, você aprovou um candidato!");
        }).catch((error) => {
            alert("Desculpe, aconteceu um erro!");
        });
    };

    const onClickReprova = (Identificador) => {
        const token = window.localStorage.getItem("token")
        const body = {
            approve: false
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alice-souza-jackson/trips/${pathParams.codigo}/candidates/${Identificador}/decide`, body, {
            headers: {
                auth: token
            }
        }).then((response) => {
            detalhesDaViagem()
            alert("Que pena, você reprovou um candidato!");
        }).catch((error) => {
            alert("Desculpe, aconteceu um erro");
        });
    };

    return (
        <div>
            <div>
                <div>
                    <h2>{detalheViagem.name}</h2>
                    <h3>{detalheViagem.description}</h3>
                    <h5>Duração: {detalheViagem.durationInDays} dias</h5>
                    <h5>Embarque: {detalheViagem.date}</h5>
                    <h5>Destino: {detalheViagem.planet}</h5>
                </div>
            </div>
            <div>
                <div><h1>Aprovados</h1></div>
                <div>
                    {aprovados.map((aprovado) => {
                        return (
                            <div key={aprovado.id}>
                                <div>
                                    <h3>{aprovado.name}</h3>
                                    <h4>{aprovado.applicationText}</h4>
                                    <h5>{aprovado.age}</h5>
                                    <h5>{aprovado.country}</h5>
                                    <h5>{aprovado.profession}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <div><h1>Candidatos</h1></div>
                <div>
                    {candidatos.map((candidato) => {
                        return (                        
                            <div key={candidato.id}>
                                <div>
                                    <h3>{candidato.name}</h3>
                                    <h5>{candidato.age}</h5>
                                    <h5>{candidato.applicationText}</h5>
                                    <h5>{candidato.country}</h5>
                                    <h5>{candidato.profession}</h5>
                                    <div>
                                        <button onClick={() => onClickAprova(candidato.id)}>APROVAR</button>
                                        <button onClick={() => onClickReprova(candidato.id)}>REPROVAR</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <button onClick={onClickAdmin}>VOLTAR</button>
        </div>
    );
};

export default TripDetailsPage;