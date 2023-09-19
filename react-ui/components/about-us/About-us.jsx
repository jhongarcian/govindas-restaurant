import { styled } from "styled-components";
import { Cards, Title } from "..";
import first_image from "/about-images/food-1-1.webp";
import second_image from "/about-images/Rectangle-15.webp";
import third_image from "/about-images/Rectangle-16.webp";
import fourth_image from "/about-images/Rectangle-17.webp";

const AboutUs = () => {
  const information = {
    info: "our story",
    title: "about us",
    subtitle:
      "Located next to the stunning International Society for Krishna Consciousness (ISKCON) temple in the Garden Oaks area of Houston, we started our journey to serve healthy and plant-based food in July 2016. We are located on West 34th Street between Ella and North Shepherd, just a few blocks from North Loop.",
  };

  return (
    <BackgroundContainer>
      <Wrapper className="y-wrap">
        <Title
          title={information.title}
          info={information.info}
          subtitle={information.subtitle}
        />
        <ImagesContainer>
          <Cards info={"paratha"} image={first_image} />
          <Cards info={"paneer tikka"} image={second_image} />
          <Cards info={"chat masala"} image={third_image} />
          <Cards info={"bhindi curry"} image={fourth_image} />
        </ImagesContainer>
      </Wrapper>
    </BackgroundContainer>
  );
};
export default AboutUs;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/bg-about-us.webp") no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgba(252, 248, 239, 0.959);

  @media (width >= 996px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  padding: 44px 0;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const ImagesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  gap: 44px;
  @media (width >= 700px) {
  }
`;
