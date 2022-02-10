import React from "react";
import styled from "styled-components/macro";
import { RoadmapComponent } from "../../components/roadmapComponent";
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import PizzaOne from '../../assets/Pizzas_1.png'
import PizzaTwo from '../../assets/Pizzas2.png'
import PizzaThree from '../../assets/Pizzas3.png'

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
    margin-block-start: 1em;
    margin-block-end: 2em;


     @media screen and (max-width: 480px) {
        margin-block-start: 6em;
        font-size: 38px;
        margin-block-end: 3em;

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

export function RoadmapSection(props) {

    return(
        <RoadmapContainer>
            <LightSpeed left>
            <Title>ROADMAP</Title>
            </LightSpeed>
            <Bounce bottom>
            <RowContainer>
            <RoadmapComponent
                pizzaNumber={PizzaOne}
                mainDescription='Build the Greatest Chef and Foodie NFT Community'
                listDetailsOne='Exclusive access to a community of verified CHFTY Pizza holders'
                listDetailsTwo='Introduce professional chefs to Web 3 by welcoming them to the CHFTY roster'
            />

            <RoadmapComponent
                pizzaNumber={PizzaTwo}
                mainDescription='CHFTY Pizzas Mint'
                listDetailsOne='The CHFTY Pizzas come hot out of the oven and are ready to be minted to the public'
                listDetailsTwo='Each CHFTY Pizza NFT contains utility tied to digital and physical experiences with Tom and Spike'
            />

            <RoadmapComponent
                pizzaNumber={PizzaThree}
                mainDescription='Drop of the CHFTY Pass'
                listDetailsOne='All CHFTY Pizza Hodlers will be elligible to claim a FREE CHFTY Pass'
                listDetailsTwo='New utility incoming...'
            />
            </RowContainer>
            </Bounce>

            <Fade>
            <BeyondText>By bringing together this food loving community, we aim to position ourselves as an ecosystem where we can help chefs, brands and foodies integrate into Web3 and launch their own projects... And CHFTY Pass holders get access to it all</BeyondText>
            </Fade>
        </RoadmapContainer>
    );
  }