import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import Fade from 'react-reveal/Fade';
import BackgroundImg from '../../assets/background.png';
import contract from '../../contracts/ChftyTwo.json';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CircularProgress } from '@mui/material';


const contractAddress = "0xf4e90C9298D552740fDEfb3762c581866ce65281";
const abi = contract.abi;

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


const ConnectButton = styled.button`
    padding: 16px 20px;
    border-radius: 5px;
    background-color: #F93B2D;
    color: #FFFFFF;
    font-weight: normal;
    font-size: 20px;
    margin: 20px 20px;
    font-family: ShortStack-Regular;
    outline: none;
    border: none;
    transition: all 220ms ease-in-out;
    cursor: pointer;
    &:hover {
    background-color: #000000;
    border: none;
    color: #FFFFFF;
    }
`;

const MintContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block-start: 5em;

`;

export function TopSection(props) {
  const MAX_SUPPLY = 18;
  const [currentAccount, setCurrentAccount] = useState(null);
  const [supplyMinted, setSupplyMinted] = useState(0);
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [isActive, setIsActive] = useState(true); // when sale is active, end of a countdown will trigger


  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
        console.log("make sure you have metamask installed!");
        return;
    } else {
        console.log("wallet exists, ready to go!");
    }

    const accounts = await ethereum.request({method: 'eth_accounts'});
    if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("found an authorized account ", account);
        setCurrentAccount(account);
    } else {
        console.log("No Authorized account found");
    }
   }


  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
        alert("please install metamask!");
    }

    try {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'})
        console.log("Found an account! address: ", accounts[0]);
        setCurrentAccount(accounts[0]);
    } catch (err) {
        console.log(err);
    }
   }


  const mintNftHandler = async () => { 
    const { ethereum } = window;

    try {
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(contractAddress, abi, signer);

            setIsMinting(true);

            console.log("initialize payment");
            let nftTxn = await nftContract.mint(1, { value: ethers.utils.parseEther("0.1")});

            console.log("mining plz wait");
            await nftTxn.wait();

            console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
            console.log("result of transaction: " + nftTxn.value);

            let supplyNum = await nftContract.totalSupply();

            console.log("current minted supply: " + supplyNum);

            setSupplyMinted(supplyNum);
            setIsSoldOut(supplyNum == MAX_SUPPLY);
            setIsMinting(false);

            console.log("sold out status: " + isSoldOut);

        } else{
            console.log("ETH object does not exist");
        }
        } catch(err) {
            console.log(err);
        }
    }

    const refreshState = async () => { 
        const { ethereum } = window;
    
        try {
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(contractAddress, abi, signer);
    
                let supplyNum = await nftContract.totalSupply();
    
                setSupplyMinted(supplyNum);
                setIsSoldOut(supplyNum == MAX_SUPPLY);
                console.log("total supply, refresh state: " + supplyNum);  
                console.log("is sold out state: " + isSoldOut);
                console.log("is minting state: " + isMinting);
                console.log("is active state: " + isActive);
    
            } else{
                console.log("ETH object does not exist");
            }
        } catch(err) {
            console.log(err);
        }
    }


  const connectWalletButton = () => {
    return (
      <ConnectButton onClick={connectWalletHandler}>
        Connect Wallet
      </ConnectButton>
    )
  }


  const mintNftButton = () => {
    return (
      <ConnectButton
       disabled={isSoldOut || isMinting || !isActive}
       onClick={mintNftHandler}
       >
            {isSoldOut ? (
              "SOLD OUT"
            ) : isActive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                "MINT"
              )
            ) : (
                "Sale Not Active"
            )}
      </ConnectButton>
    )
  }


  useEffect(() => {
    checkWalletIsConnected();
    refreshState();
  }, [])
  

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

            <MintContainer>
            {currentAccount ? mintNftButton() : connectWalletButton()}
            </MintContainer>

            </BackgroundContainer>
        </TopContainer>
    );
  }