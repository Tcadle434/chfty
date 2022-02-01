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
                mainDescription='Locked Supply Giveaways Weekly'
                listDetailsOne='5% of the total CHFTY Pizza supply will be locked and distributed back to CHFTY Pizza holders on a weekly cadence'
                listDetailsTwo='1/1 unique chef experiences will also be included in this process'
            />

            <RoadmapComponent
                phaseNumber='3'
                mainDescription='CHFTY Exclusive Events and Experiences'
                listDetailsOne='Meetups, events, and physical experiences for verified CHFTY Pizza holders to interact with our CHFTY Allstar roster'
                listDetailsTwo='Digital classes and virtual Top Chef based competitions'
            />
            </RowContainer>
            </Bounce>

            <Fade>
            <BeyondText>And Beyond... The CHFTY brand is continuing to expand and add new top tier chefs to our team. The future utilities are endless and CHFTY Pizza holders have priority access to it all </BeyondText>
            </Fade>
        </RoadmapContainer>
    );
  }