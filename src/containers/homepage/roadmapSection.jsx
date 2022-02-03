import React from "react";
import styled from "styled-components/macro";
import { RoadmapComponent } from "../../components/roadmapComponent";
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';

const RoadmapContainer = styled.div`
  width: 100%;
  background: #090A0A;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
}
`;

const RowContainer = styled.div`
display: flex;
flex-direction: row;
margin-block-start: 1em;
margin-block-end: 1em;
width: 80%;
margin: auto;

@media screen and (max-width: 1100px) {
margin-block-start: 1em;
margin-block-end: 1em;
display: inline-block;
align-items: center;
width: 100%;
}
`;

const Title = styled.h2`
    color: #FFFFFF;
    font-size: 88px;
    text-align: left;
    font-family: ShortStack-Regular;
    margin-block-start: 2em;
    margin-block-end: 2em;


     @media screen and (max-width: 480px) {
        margin-block-start: 6em;
        font-size: 38px;
        margin-block-end: 3em;

    }
`;

const BeyondText = styled.h3`
    color: #FFFFFF;
    font-size: 32px;
    text-align: center;
    font-family: ZenKurenaido-Regular;
    margin-block-start: 3em;
    width: 60%;
    margin: auto;


     @media screen and (max-width: 480px) {
        margin-block-start: 3em;
        font-size: 20px;
        margin-block-end: 3em;
        width: 80%;
        text-align: left;

    }
`;

export function RoadmapSection(props) {

    return(
        <RoadmapContainer>
            <LightSpeed left>
            <Title>ROADMAP</Title>
            </LightSpeed>
            <Bounce bottom>
            <RowContainer>
            <RoadmapComponent
                phaseNumber='1'
                mainDescription='Build the Greatest Chef and Foodie NFT Community'
                listDetailsOne='Exclusive access to a community of verified CHFTY Pizza holders'
                listDetailsTwo='Introduce professional chefs to Web 3 by welcoming them to the CHFTY roster'
            />

            <RoadmapComponent
                phaseNumber='2'
                mainDescription='CHFTY Pizzas Mint'
                listDetailsOne='The CHFTY Pizzas come hot out of the oven and are ready to be minted to the public'
                listDetailsTwo='Each NFT will vary in utility, including digital and physical experiences with Tom and Spike'
            />

            <RoadmapComponent
                phaseNumber='3'
                mainDescription='Airdrop of the CHFTY Pass'
                listDetailsOne='All CHFTY Pizza Hodlers will get airdropped a more generic CHFTY access pass'
                listDetailsTwo='This pass will give access to future Chef NFT projects as we continue to expand. We reccomend holding on to both of these NFTs...'
            />
            </RowContainer>
            </Bounce>

        </RoadmapContainer>
    );
  }