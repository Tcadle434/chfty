import React from "react";
import styled from "styled-components";


const FooterContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  @media screen and (max-width: 480px) {
    display: inline-block;

}
  `;

const BrandContainer = styled.div`
  margin-left: 5%;
`;


const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const NameText = styled.p`
    font-family: ZenKurenaido-Regular;
    font-size: 64px;
    color: #000000;
    margin-block-start: 0.2em;
    margin-block-end: 0.5em;

`;

const FooterText = styled.p`
    font-family: ZenKurenaido-Regular!important;
    font-size: 18px!important;
    color: #000000;

`;

export function FooterSection(props) {

    return (
      <FooterContainer>
      <BrandContainer> 
        <TextContainer>
            <NameText>CHFTY</NameText>
            <FooterText>All rights reserved. <br />© 2022</FooterText>
        </TextContainer>
      </BrandContainer>

      <AccessibilityContainer>
      <a href = "https://twitter.com/CHFTYPizzas">
            <FooterText> Twitter </FooterText>
        </a>
        <a href = "https://discord.gg/EZJFp8DkUK">
            <FooterText> Discord </FooterText>
        </a>
      </AccessibilityContainer>
      </FooterContainer>
  
    );
  
  }