import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
width: 100%;
height: 15vh;
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
`

function Footer() {
    return (
        <FooterContainer>
            <p>LabeX</p>
        </FooterContainer>
    );
};

export default Footer;