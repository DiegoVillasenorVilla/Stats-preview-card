import React from "react";
import "./App.css";
import styled from "styled-components";
import main from "./images/image-header-desktop.jpg";

const Contenedor = styled.div`
  width: 1110px;
  height: 446px;
  box-shadow: 0px 20px 20px -10px;
  border-radius: 8px;
  background: #1b1937;
  box-sizing: border-box;
  
  margin-top: 179px;
  margin-bottom: 175px;
  margin-left: 165px;
  margin-right: 75px;
`;

const TextContainer = styled.div`
  box-sizing: border-box;
  margin-top: 67px;
  margin-left: 72px;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

const Black = styled.b`
  color: blueviolet;
`;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-top: 20px;
`;

const BottomContainer = styled.div`
  box-sizing: border-box;
  margin-top: 77px;
  margin-left: 72px;
  position: absolute;
`;

const Numbers = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  padding-right: 87px;
`;

const InfoContainer = styled.div`
  box-sizing: border-box;
  
`;

const Info = styled.span`
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.6;
  padding-top: 10px;
  padding-right: 68px;
`;

const ImageContainer = styled.div`
 box-sizing: border-box;
 position: absolute;
 display: flex;
 z-index: 2;
 mix-blend-mode: multiply;
 opacity: 0.75;

`

const Image = styled.img`
  padding-left: 570px;
`;

function App() {
  return (
    <div className="App">
      <Contenedor>

        <ImageContainer>
          <Image src={main}/>
        </ImageContainer>
      
        <TextContainer>
          <Title>
            Get <Black>insights </Black> that help <br />
            your business grow.
          </Title>
          <Text>
            Discover the benefits of data analytics and make <br />
            better decisions regarding revenue, customer <br />
            experience, and overall efficiency.
          </Text>
        </TextContainer>

        <BottomContainer>
          <Numbers> 10k+</Numbers>
          <Numbers> 314</Numbers>
          <Numbers>12M+</Numbers>

          <InfoContainer>
            <Info> Companies</Info>
            <Info>Templates</Info>
            <Info>Queries</Info>
          </InfoContainer>

        </BottomContainer>

      </Contenedor>
    </div>
  );
}

export default App;
