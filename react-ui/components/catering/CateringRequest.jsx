import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router";

const CateringRequest = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catering");
  };

  return (
    <CateringContainer>
      <WrapContainer>
        <TextContainer>
          <TitleText>
            do you <TitleTextYellow>govinda's vegetarian</TitleTextYellow>
            cuisine
          </TitleText>
          <InfoText>
            Please give us at least 10 days before the desired Catering Date
          </InfoText>
        </TextContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleClick}>
            catering request
          </Button>
        </ButtonContainer>
      </WrapContainer>
    </CateringContainer>
  );
};

export default CateringRequest;

const CateringContainer = styled.section`
  width: 100%;
  min-height: 300px;
  background: url("https://i.postimg.cc/MxYVwcdV/background-Catering-Section.png")
    no-repeat;
  background-position: center;
  background-size: cover;
`;

const WrapContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px 0;
  @media (width >= 660px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: #fff;
  font-family: "Caviar Dreams Bold";
  @media (width >= 660px) {
    flex: 1;
  }
`;

const TitleText = styled.span`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  @media (width >= 660px) {
    font-size: 30px;
  }
`;

const TitleTextYellow = styled(TitleText)`
  color: #d0af3d;
  margin-right: 8px;
`;

const InfoText = styled.span`
  width: 100%;
  font-size: 18px;
  @media (width >= 660px) {
    font-size: 24px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: #d0af3d;
  border-radius: 999px;
  box-shadow: #d0af3d 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
    NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
    EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
  text-transform: capitalize;
  margin: 0 auto;
  &:hover {
    background: #b99d35;
  }
`;
