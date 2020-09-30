import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function ListTripsPage() {

    const [viagens, setViagens] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token === null) {
           history.push("/") 
        } else {
            axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/alice-souza-jackson/trips")
            .then((response) => {
                setViagens(response.data.trips);
            })
            .catch((error) => {
                console.log(error.message);
            });
        };
    }, [history]);

    const onClickAdmin = () => {
        history.push("/admin")
    };

    const onClickDetalhes = (Identificador) => {
        history.push("/detalhesdaviagem/" + Identificador)
    };

    return(
        <div>
                <div>
                    {viagens.map((viagem) => {
                        return <div key={viagem.id}> 
                                    <div>
                                        <h1>{viagem.name}</h1> 
                                        <h3>{viagem.description}</h3> 
                                        <h5>Duração: {viagem.durationInDays}</h5>
                                        <h5>Data de embarque: {viagem.date}</h5> 
                                        <h5>Destino: {viagem.planet}</h5> 
                                    </div>
                                    <div>
                                        <button onClick={() => onClickDetalhes(viagem.id)}>
                                            Ver Detalhes
                                        </button>     
                                    </div>   
                                </div>
                    })}
                </div>
            <button onClick={onClickAdmin}>Voltar</button>
        </div>
    );
};

export default ListTripsPage;