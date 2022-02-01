import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import Fade from 'react-reveal/Fade';
import BackgroundImg from '../../assets/background.png'


const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
  object-fit: cover;

  @media screen and (max-width: 480px) {
}
`;

const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.68);
    
    @media screen and (max-width: 480px) {
        max-width: 100%;
        margin-block-end: 5em;
        align-items: center;
    }
`;

const ContainerContent = styled.div`
    margin-block-start: 10em;
    margin-block-end: 2em;

    @media screen and (max-width: 480px) {
        margin-block-start: 6em;
        align-items: center;
    }
`;

const ContentRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-block-start: 4em;

    @media screen and (max-width: 480px) {
        display: inline-block;
        align-items: center;
        }
`;

const TextContainer = styled.div`
    width: 75%;

    @media screen and (min-width: 1200px) and (max-width: 1440px) {
        width: 60%;
    }
      @media screen and (min-width: 480px) and (max-width: 1200px) {
        width: 65%;
    }
     @media screen and (max-width: 480px) {
        width: 70%;
    }
`;


const Title = styled.h2`
    color: #F93B2D;
    font-size: 240px;
    font-family: ShortStack-Regular;
    line-height: 100px;
    margin-left: 10%;
    margin-block-end: 0.5em;

    @media screen and (min-width: 480px) and (max-width: 900px) {
        font-size: 140px;
    }
     @media screen and (max-width: 480px) {
        font-size: 88px;
    }

`;

const SubTitle = styled.h2`
    color: #FFFFFF;
    font-size: 28px;
    text-align: left;
    font-family: ShortStack-Regular;
    margin-left: 10%;

    @media screen and (min-width: 480px) and (max-width: 900px) {
        font-size: 24px;
    }
     @media screen and (max-width: 480px) {
        font-size: 20px;
    }

`;

const LandingContent = styled.h3`
    color: #FFFFFF;
    font-size: 20px;
    text-align: left;
    margin-left: 10%;
    font-family: SyneMono-Regular;

    @media screen and (min-width: 480px) and (max-width: 1200px) {
        font-size: 16px;
    }
     @media screen and (max-width: 480px) {
        font-size: 12px;
    }

`;

const ToppingsImg = styled.img`
    height: 40em;
    width: 40em;

    @media screen and (max-width: 480px) {
        height: 20em;
        width: 20em;
        }
`;


export function TopSection(props) {
  
    return(
        <TopContainer>
            <BackgroundContainer> 
            <Navbar />
            <Fade>
            <ContainerContent>
                <TextContainer>
                <Title>CHFTY</Title>
                <SubTitle>Bridging the gap between the Food & Beverage community and the Metaverse</SubTitle>
                </TextContainer>
            </ContainerContent>
            </Fade>

            </BackgroundContainer>
        </TopContainer>
    );
  }