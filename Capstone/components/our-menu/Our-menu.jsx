import { styled } from "styled-components";
import { Title, MenuPrice } from "../index.js";
import restaurant from "/our-menu/bg-special-event.jpeg";
import logo from "/Primary_main-Govindas-Logo-T-(1)d 3.png";
import dish1 from "/our-menu/dishpic.png";
import dish2 from "/our-menu/Ellipse 3588 (1).png";
import dish3 from "/our-menu/Ellipse 3588 (2).png";
import dish4 from "/our-menu/Ellipse 3588 (3).png";
import dish5 from "/our-menu/Ellipse 3588 (5).png";
import burger from "/vectors/burger-two.svg";
import "../../src/App.css";

const OurMenu = () => {
  const information = {
    info: "special selection",
    title: "from our menu",
    subtitle:
      "The menu at Govinda’s uses fresh ingredients and a variety of spices – giving each dish and a bite a unique flavor of India. If you have a special craving for an item, best thing we can suggest is to call us (832) 831-9951 or see today’s menu. Our menu items change daily.",
  };

  const specialMenuList = [
    "new year's day",
    "valentine's day",
    "easter",
    "mother's day",
    "father's day",
    "independence day",
    "thanksgiving day",
    "christmas day",
  ];

  const list =
    specialMenuList &&
    specialMenuList.length &&
    specialMenuList.map((item) => {
      return <EventsStyle>{item}</EventsStyle>;
    });

  return (
    <OurMenuContainer>
      <Title
        title={information.title}
        info={information.info}
        subtitle={information.subtitle}
      />
      <Wrapper className="y-wrap">
        <SpecialEventContainer>
          <ImageFaded>
            <Image src={restaurant} />
            <ImageOverlay />
          </ImageFaded>
          <MenuListContainer>
            <MenuWrapper>
              <Logo src={logo} alt={"logo creart"} />
              <WrapperText>
                <OurMenuTitleText />
                <Divider src={burger} />
                <ListOfEvents>{list}</ListOfEvents>
              </WrapperText>
            </MenuWrapper>
          </MenuListContainer>
        </SpecialEventContainer>
        <MenuContainer>
          <MenuPrice
            price={50}
            title={"Tofu Cooked in Tomato Sauce"}
            alergy={"Vegan, Gluten Friendly"}
            image={dish1}
          ></MenuPrice>
          <MenuPrice
            price={50}
            title={"Eggplant/Tomatoes cooked with Yogurt"}
            alergy={"Gluten Friendly"}
            image={dish2}
          ></MenuPrice>
          <MenuPrice
            price={50}
            title={"Bhindi Masala Okra and Potatoes"}
            alergy={"Vegan, Gluten Friendly"}
            image={dish3}
          ></MenuPrice>
          <MenuPrice
            price={50}
            title={"Chickpeas cooked with Oil and Spices"}
            alergy={"Vegan, Gluten Friendly"}
            image={dish4}
          ></MenuPrice>
          <MenuPrice
            price={50}
            title={"Chana Dal & Moong Dal cooked with Ginger"}
            alergy={"Vegan, Gluten Friendly"}
            image={dish5}
          ></MenuPrice>
        </MenuContainer>
      </Wrapper>
    </OurMenuContainer>
  );
};
export default OurMenu;

const OurMenuContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  background: #fff;
  padding: 24px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.388);
  border-bottom: 1px solid rgba(0, 0, 0, 0.388);
  backdrop-filter: blur(25px);
  @media (width >= 992px) {
    flex-direction: row;
  }
`;

const SpecialEventContainer = styled.div`
  position: relative;
  /* flex-grow: 1; */
  min-width: 280px;
  width: 100%;
  height: fit-content;
  max-height: 570px;

  @media (width >= 992px) {
    width: 40%;
  }
`;

const ImageFaded = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  max-height: 570px;
  object-fit: cover;
  border-radius: 20px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.47) 0%,
    rgba(0, 0, 0, 0.47) 100%
  );
  border-radius: 20px;
`;

const MenuListContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const WrapperText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Logo = styled.img`
  width: 90px;
  height: 90px;
  display: block;
`;

const OurMenuTitleStyle = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Caviar Dreams";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

const OurMenuTitleText = () => {
  return <OurMenuTitleStyle>some especial events include</OurMenuTitleStyle>;
};

const ListOfEvents = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  color: #fff;
  text-transform: capitalize;
  padding-left: 24px;
`;

const EventsStyle = styled.li`
  color: #fff;
  font-family: "Josefin Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
`;

const Divider = styled.img`
  width: 100px;
  height: 14px;
  display: block;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (width >= 992px) {
    width: 60%;
  }
`;
