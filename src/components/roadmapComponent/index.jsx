import React from "react";
import styled from "styled-components/macro";

const RoadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    margin-block-start: 2em;
    width: 28%;
    margin: auto;
    height: 800px;

    @media screen and (max-width: 1100px) {
        width: 90%;
        height: auto;
        margin-block-end: 2em;

    }
`;

const PhaseTitle = styled.h2`
    color: #EB5151;
    font-family: ShortStack-Regular;
    font-size: 50px;
    margin-block-start: 0.1em;
    margin-block-end: 0.3em;

    @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
    }
`;

const PhaseNumber = styled.h2`
  color: #EB5151;
  font-family: ShortStack-Regular;
  font-size: 144px;
  margin-block-start: 0.1em;
  margin-block-end: 0.3em;
  line-height: 150px;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 80px;
  }
`;

const PhaseDescription = styled.h3`
    color: #FFFFFF;
    font-family: ZenKurenaido-Regular;
    font-size: 32px;
    margin-block-start: 0.1em;
    margin-block-end: 0.3em;

    @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
    }
`;

const PhaseDetails = styled.p`
    color: #FFFFFF;
    font-family: ZenKurenaido-Regular;
    font-size: 24px;
    margin-block-start: 0.1em;
    margin-block-end: 0.3em;

    @media screen and (max-width: 480px) {
    text-align: left;
    font-size: 20px;
    }
`;

const CustomList = styled.ul`
    color: #FFFFFF;
`;

const PizzaImg = styled.img`
    height: 12em;
`;

export function RoadmapComponent(props) {
    const {pizzaNumber, mainDescription, listDetailsOne, listDetailsTwo} = props;
    
      return (
        <RoadContainer>
            <PhaseTitle>PHASE</PhaseTitle>
            <PizzaImg src={pizzaNumber} />
            <PhaseDescription>{mainDescription}</PhaseDescription>
            <CustomList>
                <li><PhaseDetails>{listDetailsOne}</PhaseDetails></li>
                <li><PhaseDetails>{listDetailsTwo}</PhaseDetails></li>
            </CustomList>
        </RoadContainer>
      );
    
    }