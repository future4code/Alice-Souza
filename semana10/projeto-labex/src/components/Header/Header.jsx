import React from 'react';
import styled from 'styled-components';
import LoginPage from '../components/LoginPage';

const HeaderContainer = styled.div`
width: 100%;
height: 15vh;
background-color: black;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

function Header() {
    return (
        <HeaderContainer>
            <p>LabeX</p>
            <LoginPage/>
        </HeaderContainer>
    );
};

export default Header;