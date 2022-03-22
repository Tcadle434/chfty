import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import PizzaOutline from '../../assets/pizza-outline.png';
import PizzaOne from '../../assets/chefpizza.jpg';
import PizzaTwo from '../../assets/NickyPizza.jpg';
import PizzaThree from '../../assets/girlpizza2.jpg';


const ContentContainer = styled.div`
  width: 100%;
  background: linear-gradient(#090A0A, #151516);

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
}
`;

const TextContainer = styled.div`
    width: 70%;
    margin: auto;


    @media screen and (min-width: 1200px) and (max-width: 1440px) {
        width: 70%;
    }
      @media screen and (min-width: 480px) and (max-width: 1200px) {
        width: 80%;
    }
     @media screen and (max-width: 480px) {
        width: 85%;
    }
`;


const Details = styled.h3`
    color: #FFFFFF;
    font-size: 28px;
    text-align: center;
    word-spacing: 120%;
    font-family: ZenKurenaido-Regular;
    font-weight: 500;
    margin-block-end: 3em;

    @media screen and (min-width: 480px) and (max-width: 900px) {
        font-size: 24px;
    }
     @media screen and (max-width: 480px) {
        font-size: 20px;
        margin-block-end: 1em;
    }
`;

const SampleImg = styled.img`
    height: 15em;
    width: 15em;
    margin: 40px;
    border-radius: 20px;
    

`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-block-start: 1em;
    margin-block-end: 12em;

    @media screen and (max-width: 900px) {
    margin-block-start: 1em;
    margin-block-end: 6em;
    display: inline-block;
    align-items: center;
    }
`;

const PizzaImg = styled.img`
    height: 8em;
    width: 15em;
    margin-block-start: 6em;
    margin-block-end: 2em;


     @media screen and (max-width: 480px) {
        height: 5.5em;
        width: 11em;
    }

`;

const styles = {
    red: {color: '#F93B2D'}
};

export function ContentOne(props) {

    return(
        <ContentContainer>
            <Fade>
            <PizzaImg src={PizzaOutline} />
            <TextContainer>
            <Details>Introducing CHFTY Pizzas, a collection of the tastiest NFTs baking on the Ethereum Blockchain <br /> <br />Led by two culinary experts who are diving head first into the metaverse, <span style={styles.red}>Tom Colicchio</span> and <span style={styles.red}>Spike Mendelsohn</span> invite you to come grab a virtual slice and build a community that is focused on connecting holders with their favorite chefs and foods</Details>
            </TextContainer>
            </Fade>

            <ImageContainer>
            <Flip>

            <SampleImg src={PizzaOne} />
            <SampleImg src={PizzaTwo} />
            <SampleImg src={PizzaThree} />
            </Flip>

            </ImageContainer>

        </ContentContainer>
    );
  }