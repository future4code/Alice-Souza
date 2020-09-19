import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function Admin() {

    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token === null) {
            history.push("/");
        };
    }, [history]);

    const onClickListaDeViagens = () => {
        history.push("/listadeviagens")
    };

    const onClickCreateTripPage = () => {
        history.push("/paginacriarviagem")
    };

    return(
        <div>
            <div>
                <div>
                    <h2>LISTA DE VIAGENS</h2>
                    <p>Aqui você pode visualizar detalhes de uma viagem e aprovar/reprovar um candidato.</p>
                </div>
                <button onClick={onClickListaDeViagens}>Lista de Viagens</button>
            </div>
            <div>
                <div>
                    <h2>CRIAR VIAGEM</h2>
                    <p>Aqui você pode criar novas viagens de modo rápido e fácil.</p>
                </div>
                <button onClick={onClickCreateTripPage}>Criar Viagem</button>
            </div>
        </div>
    );
};

export default Admin;