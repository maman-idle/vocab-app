/* collect the components for Headers, and export into one Header Component*/

import React from "react";
import { Wrapper, Content, VocabLogo } from "./Header.styles";
import VocabLogoImage from "../../images/vocab-logo.svg";

const Header = () => (
    <Wrapper>
        <Content>            
            <VocabLogo src={VocabLogoImage} />
            <h2>The Vocab App</h2>            
        </Content>
    </Wrapper>
)

export default Header;