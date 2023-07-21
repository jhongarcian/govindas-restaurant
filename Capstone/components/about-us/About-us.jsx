import { styled } from "styled-components";
import background from "/bg-about-us.png";
import { Cards, Title } from "../";
import first_image from "/about-images/food-1.png";
import second_image from "/about-images/Rectangle 15.png";
import third_image from "/about-images/Rectangle 16.png";
import fourth_image from "/about-images/Rectangle 17.png";

const AboutUs = () => {
  
  const information = {
    info: "our story",
    title: "about us",
    subtitle:
      "Located next to the stunning International Society for Krishna Consciousness (ISKCON) temple in the Garden Oaks area of Houston, we started our journey to serve healthy and plant-based food in July 2016. We are located on West 34th Street between Ella and North Shepherd, just a few blocks from North Loop.",
  };

  return (
    <BackgroundContainer>
      <ImageFaded>
        <ImageBg src={background} />
        <ImageOverlay />
      </ImageFaded>
      <Wrapper className="y-wrap">
        <Title
          title={information.title}
          info={information.info}
          subtitle={information.subtitle}
        />
        <ImagesContainer>
          <Cards image={first_image} />
          <Cards image={second_image} />
          <Cards image={third_image} />
          <Cards image={fourth_image} />
        </ImagesContainer>
      </Wrapper>
    </BackgroundContainer>
  );
};
export default AboutUs;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 1200px;
  position: relative;

  @media (width >= 996px) {
    height: 100%;
  }
`;

const ImageFaded = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgba(208, 175, 61, 0.03) 0%,
      rgba(208, 175, 61, 0.03) 100%
    ),
    no-repeat;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 44px;
`;
