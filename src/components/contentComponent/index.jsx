import React from "react";
import styled from "styled-components/macro";



const RowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-block-end: 3em;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  @media screen and (max-width: 900px) {
    display: inline-block;
    align-items: center;
}
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  webkit-align-items: left !important;
  padding: 20px;
  @media screen and (max-width: 480px) {
    align-items: center;
}
`;


const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
  }
`;

const SubTitle = styled.h2`
  color: #FFFFFF;
  font-family: SyneMono-Regular;
  font-size: 32px;
  margin-block-end: 0.1em;
  line-height: 55px;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 18px;
  }
`;

const Title = styled.h2`
  color: #FFFFFF;
  font-family: ShortStack-Regular;
  font-size: 64px;
  margin-block-start: 0.1em;
  margin-block-end: 0.3em;
  line-height: 55px;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 38px;
  }
`;

const Details = styled.p`
  color: #FFFFFF;
  font-family: ZenKurenaido-Regular;
  font-size: 26px;
  @media screen and (max-width: 480px) {
    font-size: 22px;
}
`;

const Img = styled.img`
  height: 28em;
  width: 28em;
  @media screen and (max-width: 480px) {
    height: 18em;
    width: 18em;
}
`;

const styles = {
    green: {color: '#4DF52B'}
};

export function ContentComponent(props) {
const { subTitle, title, imageUrl, isReversed } = props;

  return (
    <RowContainer isReversed={isReversed}>
    <ServiceContainer >
          <Title> {title} </Title>
          <SubTitle>{subTitle}</SubTitle>
          <DescriptionContainer>
          <Details>CHFTY wants to make an impact in the fight for Food Justice. So we decided to team up with Kimbal Musk’s <span style={styles.green}>Big Green DAO</span> and embed their wallet directly into our smart contract</Details>
          <Details>As the First Non-Profit led philanthropic DAO, we are excited to help fund their members with a % of our project as they vote on how to help donors</Details>
        </DescriptionContainer>
    </ServiceContainer>
    <ServiceContainer>
    <Img src ={imageUrl} />
    </ServiceContainer>
    </RowContainer>
  );

}

export function ContentComponentTwo(props) {
  const { subTitle, title, imageUrl, isReversed } = props;
  
    return (
      <RowContainer isReversed={isReversed}>
      <ServiceContainer >
            <Title> {title} </Title>
            <SubTitle>{subTitle}</SubTitle>
            <DescriptionContainer>
            <Details>Introducing our first IRL event EXCLUSIVELY for our CHFTY Pizza holders! Join us in Washington, D.C. for the DCCK Capital Food Fight After Party on Thursday, April 7th at Hanks Oyster Bar on The Wharf. Enjoy free food & drinks with Tom Colicchio, Spike Mendelsohn, Kristen Kish, Andrew Zimmern, Maneet Chauhan & more after the Food Fight!</Details>
            <Details>We will also be GIVING AWAY Four (4) tickets to our NFT holders for the Capital Food Fight at the Anthem on Thursday, April 7th. 100% of the proceeds will be going to DCCK.</Details>
          </DescriptionContainer>
      </ServiceContainer>
      <ServiceContainer>
      <Img src ={imageUrl} />
      </ServiceContainer>
      </RowContainer>
    );
  
  }
 

