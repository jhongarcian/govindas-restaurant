import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FoodCard from "./FoodCard";
import "../../src/App.css";
import Title from "../title/Title";
import { useSelector } from "react-redux";
import { selectedMenu } from "../../features/todays_menuSlice";

const TodaysMenu = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [leftMenu, setLeftMenu] = useState([]);
  const [rigthMenu, setRigthMenu] = useState([]);

  const menu_data = useSelector(selectedMenu);

  useEffect(() => {
    if (menu_data && menu_data.length) {
      const menu_list = menu_data.slice(2);
      const { firstHalf, secondHalf } = splitMenuList(menu_list);
      setLeftMenu(firstHalf);
      setRigthMenu(secondHalf);
      setTitle(menu_data[0]);
      setDate(menu_data[1]);
    }

    return () => {
      setTitle("");
      setDate("");
      setLeftMenu([]);
      setRigthMenu([]);
    };
  }, [menu_data]);

  const rightContainer =
    rigthMenu &&
    rigthMenu.length &&
    rigthMenu.map((item) => {
      return <FoodCard key={item} text={item} />;
    });

  const leftContainer = 
  leftMenu &&
  leftMenu.length &&
  leftMenu.map(item => {
    return <FoodCard key={item} text={item}/>
  })

  const splitMenuList = (menu) => {
    const midPoint = Math.floor(menu.length / 2);
    const firstHalf = menu.slice(0, midPoint);
    const secondHalf = menu.slice(midPoint);

    return { firstHalf, secondHalf };
  };

  return (
    <MenuContainer>
      <MenuWrapper>
        <FoodAndInfoContainer>
          <Title
            title={"TODAY’S MENU"}
            info={date && date.length && date}
            subtitle={title && title.length && title}
          />
          <FoodContainer>
            <LeftSection>
              {menu_data && menu_data.length && leftContainer}
              {/* <FoodCard
                text={"Basmati Rice VGF"}
                image={"/Rectangle 34624172.png"}
                imageInfo={"Basmati Rice VGF"}
              /> */}
            </LeftSection>
            <MiddleSection>
              <CircleVector src="/Vector.png" alt="main dish vector" />
              <MiddleDish src="/pexels-monica-turlui-7218637.png" alt="" />
            </MiddleSection>
            <RightSection>
              {menu_data && menu_data.length && rightContainer}
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
