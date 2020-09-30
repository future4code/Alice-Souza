import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
width: 100%;
height: 80px;
background-color: brown;
text-align: center;
color: white;
> p {
    padding-top: 28px;
}
`

function Footer() {
    return (
        <FooterContainer>
            <p>LabeX - LTDA. 2020.</p>
        </FooterContainer>
    );
};

export default Footer;