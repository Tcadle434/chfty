import React from "react";
import styled from "styled-components/macro";
import Fade from 'react-reveal/Fade';
import SpikeImg from '../../assets/spike.jpg';
import TomImg from '../../assets/tom.jpeg';
import BlockStopImg from '../../assets/blockstop.jpg';
import DoorImg from '../../assets/door.png';
import './TeamSection.css';

const TeamContainer = styled.div`
  width: 100%;
  background: linear-gradient(#090A0A,#F93B2D);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
}
`;

const Title = styled.h2`
color: #FFFFFF;
font-size: 88px;
text-align: center;
font-family: ShortStack-Regular;
margin-block-start: 1.5em;
margin-block-end: 1em;


 @media screen and (max-width: 480px) {
    margin-block-start: 3em;
    font-size: 38px;
    margin-block-end: 1em;

}
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-block-start: 0.5em;
    margin-block-end: 3em;

    @media screen and (max-width: 900px) {
        display: inline-block;
        align-items: center;
        margin: auto;
    }
`;


const SampleImg = styled.img`
    height: 25em;
    width: 25em;
    margin: 40px;
    border-radius: 20px;
    

    @media screen and (max-width: 480px) {
        height: 20em;
        width: 20em;
    
    }
`;


const NameTitle = styled.h3`
    color: #FFFFFF;
    font-size: 32px;
    text-align: center;
    font-family: ShortStack-Regular;
    text-align: center;
    align-items: center;
    margin-block-start: 0.1em;
    margin-block-end: 0.2em;


 @media screen and (max-width: 900px) {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    margin-left: 100%;
}
`;

export function TeamSection(props) {

    return(
        <TeamContainer>
            <Title>MEET THE CHFTY TEAM</Title>
            <ImageContainer>
            <div className="container">
                <SampleImg className="image" alt='tom' src={TomImg} />
                    <div className="overlay"> 
                    <div className="text">Tom Colicchio is the chef and owner of Crafted Hospitality, which currently includes New York’s Craft, Temple Court and Vallata; Long Island's Small Batch Los Angeles’ Craft Los Angeles; and Las Vegas’ Heritage Steak and Craftsteak. An 8-time James Beard Award winner, he is the Head Judge and Executive Producer of Bravo’s Top Chef, host of the Citizen Chef Podcast on iHeartRadio and founding member of the Independent Restaurant Coalition.
                    </div>
                    </div>
                    <NameTitle>Tom Colicchio</NameTitle>                
            </div>
            
            <div className="container">
                <SampleImg className="image" alt='tom' src={SpikeImg} />
                    <div className="overlay"> 
                    <div className="text">Spike has several restaurant concepts in the Washington DC area including PLNT Burger, Vim & Victor and We, The Pizza. Leveraging his close proximity to our nation’s capital, Spike combined his passion for food equity and education by working with organizations like CARE, DC Central Kitchen and Food Rescue US. He also serves as the chairman of DC’s Food Policy Council.
                    </div>
                    </div>
                    <NameTitle>Spike Mendelsohn</NameTitle>                
            </div>
            </ImageContainer>

            <ImageContainer>
            <div className="container">
                <SampleImg className="image" alt='tom' src={BlockStopImg} />
                    <div className="overlay"> 
                    <div className="text">BlockStop is your NFT one stop shop. With experts in product strategy, marketing, and development, BlockStop serves as a creative hub to grow, build and deploy NFT projects for your business</div>
                    </div>
                    <NameTitle>BlockStop</NameTitle>                
            </div>                  
            
            <div className="container">
                <SampleImg className="image" alt='tom' src={DoorImg} />
                    <div className="overlay"> 
                    <div className="text">The Door | idea house is a creative marketing shop focused on metaverse, NFT, technology, hospitality, celebrity, culinary and lifestyle projects. @thedooronline thedooronline.com
                    </div>
                    </div>
                    <NameTitle>The Door</NameTitle>                
            </div>  
            </ImageContainer>
        </TeamContainer>
    );
  }