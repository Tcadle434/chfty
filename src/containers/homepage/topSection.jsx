import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import Fade from 'react-reveal/Fade';
import BackgroundImg from '../../assets/background.png';
import contract from '../../contracts/ChftyTwo.json';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CircularProgress } from '@mui/material';
import Countdown from "react-countdown";


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
    margin-block-start: 2em;
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
    font-size: 200px;
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
    font-size: 24px;
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

const MintInfo = styled.h3`
    color: #FFFFFF;
    font-size: 20px;
    text-align: left;
    font-family: ShortStack-Regular;

    @media screen and (min-width: 480px) and (max-width: 900px) {
        font-size: 18px;
    }
     @media screen and (max-width: 480px) {
        font-size: 16px;
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
    margin-block-start: 3.5em;

`;

const DataContainer = styled.div`
    padding: 5px 20px;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    color: #FFFFFF!important;
    border: 2px solid;
    border-radius: 10px;

`;

const IncrementButton = styled.button`
    padding: 12px 12px;
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

const IncrementRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export function TopSection(props) {
  const MAX_SUPPLY = 25;
  const [currentAccount, setCurrentAccount] = useState(null);
  const [supplyMinted, setSupplyMinted] = useState(0);
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [isActive, setIsActive] = useState(false); // when sale is active, end of a countdown will trigger
  const [mintCount, setMintCount] = useState(1);
  const [startDate, setStartDate] = useState(new Date(1643997600000));


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
            setMintCount(mintCount);
            console.log("mint count before minting: " + mintCount);

            console.log("initialize payment");
            let nftTxn = await nftContract.mint(mintCount, { value: ethers.utils.parseEther((mintCount * 0.1).toString())});

            console.log("mining plz wait");
            await nftTxn.wait();

            console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
            console.log("result of transaction: " + nftTxn.value);

            let supplyNum = await nftContract.totalSupply();

            console.log("current minted supply: " + supplyNum);

            setSupplyMinted(Number(supplyNum));
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
    
                setSupplyMinted(Number(supplyNum));
                setIsSoldOut(supplyNum == MAX_SUPPLY);
                console.log("refreshState | total supply: " + supplyNum);  
                console.log("refreshState | is sold out state: " + isSoldOut);
                console.log("refreshState | is minting state: " + isMinting);
                console.log("refreshState | is active state: " + isActive);
                console.log("refreshState | current mint count: " + mintCount);
    
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
                <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            )}
      </ConnectButton>
    )
  }

  const incrementCount = () => {
    if (mintCount < 3) {
        let count = mintCount + 1;
        setMintCount(count);
    }
  }

  const decrementCount = () => {
    if (mintCount > 1) {
        let count = mintCount - 1;
        setMintCount(count);
    }
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
                <IncrementRow>
                    <DataContainer>
                    <MintInfo>Delivered: <br/>{supplyMinted} / 25</MintInfo>
                    </DataContainer>
                <DataContainer>
                    <MintInfo>Price: <br/>0.1 ETH</MintInfo>
                </DataContainer>
                </IncrementRow>

                {currentAccount ? mintNftButton() : connectWalletButton()}

                <IncrementRow>
                    <IncrementButton onClick={decrementCount}>-</IncrementButton>
                    <SubTitle>{mintCount}</SubTitle>
                    <IncrementButton onClick={incrementCount}>+</IncrementButton>
                </IncrementRow>
            </MintContainer>

            </BackgroundContainer>
        </TopContainer>
    );

  }


  const renderCounter = ({days, hours, minutes, seconds, completed }) => {
    return (
      <MintInfo>
        {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
      </MintInfo>
    );
  };