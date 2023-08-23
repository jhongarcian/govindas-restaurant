import React from "react";
import styled from "styled-components";
import FoodCard from "./FoodCard";
import "../../src/App.css";
import Title from "../title/Title";

const TodaysMenu = () => {
  // We need to bring the date from the post
  return (
    <MenuContainer>
      <MenuWrapper>
        <FoodAndInfoContainer>
          <Title
            title={"TODAY’S MENU"}
            info={"May 31, Wednesday"}
            subtitle={
              "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area"
            }
          />
          <FoodContainer>
            <LeftSection>
              <FoodCard
                text={"Basmati Rice VGF"}
                image={"/Rectangle 34624172.png"}
                imageInfo={"Basmati Rice"}
              />
              <FoodCard
                text={"Dal Fry VGF"}
                image={"/Rectangle 34624173.png"}
                imageInfo={"Dal fry"}
              />
              <FoodCard
                text={"Basmati Rice VGF"}
                image={"/Rectangle 34624172.png"}
                imageInfo={"Basmati Rice VGF"}
              />
              <FoodCard
                text={"Basmati Rice VGF"}
                image={"/Rectangle 34624172.png"}
                imageInfo={"Basmati Rice VGF"}
              />
            </LeftSection>
            <MiddleSection>
              <CircleVector src="/Vector.png" alt="main dish vector" />
              <MiddleDish src="/pexels-monica-turlui-7218637.png" alt="" />
            </MiddleSection>
            <RightSection>
              <FoodCard
                text={"Basmati Rice VGF"}
                image={"/Rectangle 34624172.png"}
                imageInfo={"Basmati Rice VGF"}
              />
              <FoodCard
                text={"Basmati Rice VGF"}
                image={"/Rectangle 34624172.png"}
                imageInfo={"Basmati Rice VGF"}
              />
              <FoodCard
                text={"Basmati Rice VGF"}
                image={"/Rectangle 34624172.png"}
                imageInfo={"Basmati Rice VGF"}
              />
            </RightSection>
          </FoodContainer>
          <MenuTextContainer>
            <MenuTime>*Wednesday, Friday & Sunday 100% Vegan Menu</MenuTime>
            <MenuTimeSeparator />
            <MenuTimeSocials>
              <MenuTimeText>Follow us on Twitter:</MenuTimeText>
              <MenuTimeTextYellow>@GovindashouM</MenuTimeTextYellow>
            </MenuTimeSocials>
          </MenuTextContainer>
        </FoodAndInfoContainer>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default TodaysMenu;

const MenuContainer = styled.section`
  height: 1229px;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  background: #fff;
`;

const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FoodAndInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
  padding-top: 3%;
`;

const FoodContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const LeftSection = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const MiddleSection = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 2% 2% 2% 2%;
`;

const CircleVector = styled.img`
  width: 452px;
  height: 452px;
  flex-shrink: 0;
  z-index: 1;
`;

const MiddleDish = styled.img`
  width: 408px;
  height: 408px;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const RightSection = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const MenuTextContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2%;
  height: 10%;
  align-items: center;
`;

const MenuTime = styled.span`
  color: #000;
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MenuTimeSeparator = styled.span`
  width: 1px;
  height: 20px;
  background: #000;
`;

const MenuTimeSocials = styled.div`
  display: flex;
  color: #000;
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MenuTimeText = styled.span`
  margin-right: 6px;
`;

const MenuTimeTextYellow = styled.a`
  color: #d0af3d;
`;
