import { styled } from "styled-components";
import "../../src/App.css";
import image from "/vectors/vector-title.svg";

const Title = ({ title, info, subtitle, white_color }) => {
  return (
    <TitleContainer>
      <SectionInfoText text={info} />
      <TitleWrapper>
        <Graphic alt="icon title" src={image} />
        <SectionTitleText text={title} textColor={white_color} />
        <Graphic alt="icon title" src={image} />
      </TitleWrapper>
      <SectionSubtitleText text={subtitle} />
    </TitleContainer>
  );
};
export default Title;

const TitleContainer = styled.section`
  width: 70%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 24px;
`;

const SectionInfoStyle = styled.h2`
  color: #ffc800;
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  text-transform: capitalize;

  @media (width >= 669px) {
    font-size: 30px;
  }
`;

const SectionInfoText = ({ text }) => {
  return <SectionInfoStyle >{text}</SectionInfoStyle>;
};

const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const SectionTitleStyle = styled.h1`
  color: ${(props) => (props.$fontColor === "white" ? "#fff" : "#000")};
  font-family: "Caviar Dreams Bold";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.75px;
  text-transform: uppercase;

  @media (width >= 669px) {
    font-size: 34px;
  }
`;

const SectionTitleText = ({ text, textColor }) => {
  return <SectionTitleStyle $fontColor={textColor}>{text}</SectionTitleStyle>;
};

const Graphic = styled.img`
  width: 49px;
  height: 10.5px;
`;

const SectionSubtitleStyle = styled.p`
  color: #5a5252;
  font-family: "Josefin Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

const SectionSubtitleText = ({ text }) => {
  return <SectionSubtitleStyle>{text}</SectionSubtitleStyle>;
};
