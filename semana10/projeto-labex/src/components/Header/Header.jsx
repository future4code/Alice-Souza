import React from 'react';
import styled from 'styled-components';
import LoginPage from '../LoginPage/LoginPage';

const HeaderContainer = styled.div`
width: 100%;
height: 80px;
background-color: brown;
align-items: center;
> div {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    > p {
        color: white;
        font-size: 150%;
    }
}
`

function Header() {
    return (
        
        <HeaderContainer>
            <div>
                <p>LabeX</p>
                <LoginPage/>
            </div>
        </HeaderContainer>
    );
};

export default Header;