import React from "react";
import styled from "styled-components/macro";
import { RoadmapComponent } from "../../components/roadmapComponent";
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import PizzaOne from '../../assets/Pizzas_1.png';
import PizzaTwo from '../../assets/Pizzas2.png';
import PizzaThree from '../../assets/Pizzas3.png';
import RoadmapImg from '../../assets/crop-roadmap-min.png';
import EventImg from '../../assets/event.jpg';

const RoadmapContainer = styled.div`
  width: 100%;
  background: #090A0A;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
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

@media screen and (max-width: 1150px) {
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
    text-align: center;
    font-family: ShortStack-Regular;
    margin-block-start: 3em;


     @media screen and (max-width: 480px) {
        margin-block-start: 2em;
        font-size: 38px;

    }
`;

const BeyondText = styled.h3`
    color: #FFFFFF;
    font-size: 30px;
    text-align: center;
    font-family: ZenKurenaido-Regular;
    margin-block-start: 3em;
    width: 65%;
    margin: auto;


     @media screen and (max-width: 480px) {
        margin-block-start: 3em;
        font-size: 20px;
        margin-block-end: 3em;
        width: 80%;
        text-align: left;

    }
`;

const RoadmapImage = styled.img`
    width: 65%;
    margin: auto;
    align-items: center;
    margin-block-end: 4em;
    margin-block-start: 8em;

    @media screen and (max-width: 900px) {
        width: 95%;
        margin-block-start: 6em;
        margin-block-end: 1em;

    }

`;

export function RoadmapSection(props) {

    return(
        <RoadmapContainer>
            <RoadmapImage src={RoadmapImg} />
            <Fade>
            <BeyondText>In 2020, the restaurant community had to adapt and evolve in major ways. In order to reimagine how this space could survive and flourish, a new community of forward-thinkers had to be formed. Enter CHFTY. CHFTY will position itself as an ecosystem to help chefs, foodies, and brands integrate into Web3… and CHFTY Pass holders get premier access to it all!</BeyondText>
            </Fade>
        </RoadmapContainer>
    );
  }