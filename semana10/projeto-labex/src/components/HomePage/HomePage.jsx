import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function HomePage() {

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token !== null) {
            history.replace("/admin")
        };
    }, []);

    const history = useHistory();

    const onClickInscrever = () => {
        history.push("/inscricao")
    };

    return(
        <div>
            <h1>FAÇA UMA VIAGEM ESPACIAL</h1>
            <button onClick={onClickInscrever}>INSCREVA-SE</button>
        </div>
    );
};

export default HomePage;