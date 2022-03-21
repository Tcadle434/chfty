import React from "react";
import styled from "styled-components";
import TwitterImg from "../../assets/twitter.png";
import DiscordImg from "../../assets/discord.png";

const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  @media screen and (max-width: 480px) {
    height: 85px;
}
  `;

const BrandContainer = styled.div`
  margin-left: 1%;
`;


const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 5%;
  margin-top: 2%;
`;

const SocialMediaImg = styled.img`
  width: 2.5m;
  height: 2em;
  margin: 30px;
  @media screen and (max-width: 480px) {
    width: 2m;
    height: 1.75em;
    margin: 10px;

}
`;

const ButtonWrap = styled.button`
  align-items: center;
  color: transparent;
  background-color: transparent;
  outline: none;
  border: none;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  &:hover {
    border: none;
    transform:scale(1.3, 1.3);
  }

`;

const Title = styled.h2`
    color: #F93B2D;
    font-size: 42px;
    font-family: ShortStack-Regular;
    margin-left: 10%;
    margin-block-end: 0.5em;

    @media screen and (min-width: 480px) and (max-width: 900px) {
        font-size: 32px;
    }
     @media screen and (max-width: 480px) {
        font-size: 26px;
    }

`;

export function Navbar(props) {

  return (
    <NavbarContainer>
    <BrandContainer>
    <Title>CHFTY</Title>
    </BrandContainer>
    
    <AccessibilityContainer>
      <ButtonWrap>
        <a href = "https://twitter.com/CHFTYPizzas">
                <SocialMediaImg src={TwitterImg} />
        </a>
      </ButtonWrap>
      <ButtonWrap>
        <a href = "https://discord.gg/EZJFp8DkUK">
            <SocialMediaImg src={DiscordImg} />
        </a>
      </ButtonWrap>
    </AccessibilityContainer>
    </NavbarContainer>
  );

}