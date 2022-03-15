import React from "react";
import styled from "styled-components";
import { ContentComponent, ContentComponentTwo } from "../../components/contentComponent";
import Fade from 'react-reveal/Fade';
import BigGreenImg from '../../assets/big-green.png';
import EventImg from '../../assets/event.jpg';


const ContentContainer = styled.div`
  width: 100%;
  background: linear-gradient(#151516,#090A0A);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
}
`;

const ContentContainerEvent = styled.div`
  width: 100%;
  background: #090A0A;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
}
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-block-start: 0em;
  margin-block-end: 1.2em;
  @media screen and (min-width: 480px) and (max-width: 1420px) {
    width: 80%;
  }
    @media screen and (max-width: 480px) {
      align-items: center;
      justify-content: center;
      display: inline-block;
      width: 90%;
  }
`;

const ComponentContainerEvent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-block-start: 14em;
  margin-block-end: 0em;
  @media screen and (min-width: 480px) and (max-width: 1420px) {
    width: 80%;
  }
    @media screen and (max-width: 480px) {
      align-items: center;
      justify-content: center;
      display: inline-block;
      width: 90%;
      margin-block-start: 6em;
      margin-block-end: 0em;

  }
`;

const SubTitle = styled.h2`
    color: #FFFFFF;
    font-size: 42px;
    text-align: center;
    word-spacing: 120%;
    font-family: Cuciniere-Regular;
    margin-block-start: 2em;
    margin-block-end: 3em;


    @media screen and (min-width: 480px) and (max-width: 1200px) {
        font-size: 28px;
    }
     @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

const Banner = styled.img`
    width: 75%;

    @media screen and (max-width: 480px) {
        font-size: 20px;
        width: 100%;

    }
`;

export function ContentTwo(props) {

    return(
        <ContentContainer>
            <ComponentContainer> 

            <Fade top>
            <ContentComponent
                title= "PHILANTHROPY"
                imageUrl={BigGreenImg}
            />
            </Fade>
        </ComponentContainer>

        </ContentContainer>
    );
  }


export function ContentFlyer(props) {

  return(
      <ContentContainerEvent>
          <ComponentContainerEvent> 

          <Fade top>
          <ContentComponentTwo
              title= "OUR FIRST IRL EVENT"
              imageUrl={EventImg}
          />
          </Fade>
      </ComponentContainerEvent>

      </ContentContainerEvent>
  );
}