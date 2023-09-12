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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState([]);

  const menu_data = useSelector(selectedMenu);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menu_data && menu_data.length) {
      const menu_list = menu_data.slice(2);
      const { firstHalf, secondHalf } = splitMenuList(menu_list);
      setMenu(menu_list);
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

  const fullMenu =
    menu &&
    menu.length &&
    menu.map((item) => {
      return <FoodCard key={item} text={item} />;
    });

  const rightContainer =
    rigthMenu &&
    rigthMenu.length &&
    rigthMenu.map((item) => {
      return <FoodCard key={item} text={item} />;
    });

  const leftContainer =
    leftMenu &&
    leftMenu.length &&
    leftMenu.map((item) => {
      return <FoodCard key={item} text={item} />;
    });

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
          <FoodContainer $size={windowWidth}>
            {windowWidth >= 768 ? (
              <>
                <LeftSection $size={windowWidth}>
                  {menu_data && menu_data.length && leftContainer}
                </LeftSection>
                <MiddleSection $size={windowWidth}>
                  <CircleVector src="/Vector.png" alt="main dish vector" />
                  <MiddleDish src="/pexels-monica-turlui-7218637.png" alt="" />
                </MiddleSection>
                <RightSection $size={windowWidth}>
                  {menu_data && menu_data.length && rightContainer}
                </RightSection>
              </>
            ) : (
              <>
                <MiddleSection>
                  <CircleVector src="/Vector.png" alt="main dish vector" />
                  <MiddleDish src="/pexels-monica-turlui-7218637.png" alt="" />
                </MiddleSection>
                <FullMenuContainer>{fullMenu}</FullMenuContainer>
              </>
            )}
          </FoodContainer>
          <MenuTextContainer $size={windowWidth}>
            <MenuTime>*Wednesday, Friday & Sunday 100% Vegan Menu</MenuTime>
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
  width: 100%;
  display: flex;
  flex-shrink: 0;
  background: #fff;
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 44px 0;
`;

const FoodAndInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
`;

const FoodContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$size >= 768 ? "row;" : "column;")};
  align-items: center;
  padding-bottom: 24px ;
  flex-wrap: wrap;
`;

const FullMenuContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

const LeftSection = styled.div`
  gap: 24px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${(props) => (props.$size >= 768 ? "flex-end;" : "center;")};
  width: 100%;
  padding: 24px 0;
`;

const MiddleSection = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 2% 2% 2% 2%;
  ${(props) => props.$size <= 768 && "order: -1;"};
`;

const CircleVector = styled.img`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  z-index: 1;
`;

const MiddleDish = styled.img`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const RightSection = styled.div`
  gap: 24px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${(props) => (props.$size >= 768 ? "flex-start;" : "center;")};
  width: 100%;
  padding: 24px 0;
`;

const MenuTextContainer = styled.div`
  width: ${(props) => (props.$size >= 768 ? "60%;" : "100%;")};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  column-gap: 10px;
  align-items: center;
  margin: 0 auto;
  gap: 14px;
`;

const MenuTime = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  color: #000;
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MenuTimeSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: "Josefin Sans";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 90%;
`;

const MenuTimeText = styled.span`
  margin-right: 6px;
`;

const MenuTimeTextYellow = styled.a`
  color: #d0af3d;
`;
