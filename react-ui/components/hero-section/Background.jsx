import { styled, keyframes } from "styled-components";
import restaurant from "/restaurant.webp";
import "../../src/App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Background = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/order-pay");
  };

  return (
    <BackgroundContainer>
      <ImageFaded>
        <Image alt="restaurant indoor" src={restaurant} />
        <ImageOverlay />
      </ImageFaded>
      <TextContainer>
        <WelcomeText />
        <GovindasText />
        {windowWidth >= 500 && <ParagraphText />}
        {windowWidth >= 500 && (
          <CallActionButton type="button" onClick={handelClick}>
            Order Now!
          </CallActionButton>
        )}
      </TextContainer>
    </BackgroundContainer>
  );
};
export default Background;

// Animation

const SlideFromLeft = keyframes`
    0% { margin-left: -100%; opacity: 0;}
    100% { margin-left: 0%; opacity: 1}
`;

const BackgroundContainer = styled.section`
  width: 100%;
  height: 100%;
  max-height: 121vh;
  min-height: 550px;
  position: relative;
`;

const ImageFaded = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  width: 80%;
  color: #fff;
  z-index: 30;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const WelcomeStyle = styled.h2`
  font-family: "Josefin-Sans-regular";
  font-size: 40px;
`;

const WelcomeText = () => {
  return <WelcomeStyle>Welcome to</WelcomeStyle>;
};

const GovindasStyle = styled.h1`
  font-family: "Metropolis 1920";
  font-size: 30px;
  font-style: normal;
  letter-spacing: 13.2px;
  text-transform: uppercase;
  font-weight: 400;
  line-height: normal;
  @media (width >= 628px) {
    font-size: 60px;
  }
  @media (width >= 1200px) {
    font-size: 80px;
  }
  animation-name: ${SlideFromLeft};
  animation-duration: 1s;
  animation-iteration-count: initial;
`;

const GovindasText = () => {
  return <GovindasStyle>govinda's restaurant</GovindasStyle>;
};

const ParagraphStyle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  height: 100%;
  @media (width >= 628px) {
    font-size: 20px;
  }
  @media (width >= 1200px) {
    font-size: 24px;
  }
`;

const ParagraphText = () => {
  return (
    <ParagraphStyle>
      "At Govinda's, we offer fresh, diverse vegetarian meals daily, made with
      the finest ingredients. Our commitment to quality means no garlic, onions,
      or mushrooms in our dishes."
    </ParagraphStyle>
  );
};

const CallActionButton = styled.button`
  font-family: "Open-Sans-Condensed";
  border: 1px solid #d0af3d;
  padding: 18px 24px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  background: transparent;
  &:hover {
    background: #d0b03d48;
    transform: scale(1.04);
    transition: transform 0.3s;
  }

  @media (width >= 628px) {
    font-size: 20px;
  }
`;
