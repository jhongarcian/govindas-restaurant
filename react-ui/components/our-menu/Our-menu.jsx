import { styled } from "styled-components";
import { Title, MenuPrice } from "../index.js";
import logo from "/Primary_main-Govindas-Logo-T-(1)d 3.png";
import data from "../../mocks/our_menu.json";
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
      return <EventsStyle key={item}>{item}</EventsStyle>;
    });

  const dataMenu =
    data &&
    data.length &&
    data.map((item) => {
      return (
        <MenuPrice
          key={item.name}
          price={item.price}
          title={item.name}
          allergy={item.allergy}
          image={item.image}
          imageInfo={item.name}
        />
      );
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
          <MenuListContainer>
            <MenuWrapper>
              <Logo src={logo} alt={"logo creart"} />
              <WrapperText>
                <OurMenuTitleText />
                <Divider alt="divider" src={burger} />
                <ListOfEvents>{list}</ListOfEvents>
              </WrapperText>
            </MenuWrapper>
          </MenuListContainer>
        </SpecialEventContainer>
        <MenuContainer>{dataMenu}</MenuContainer>
      </Wrapper>
    </OurMenuContainer>
  );
};
export default OurMenu;

const OurMenuContainer = styled.section`
  width: 90%;
  height: 100%;
  position: relative;
  background: #fff;
  padding: 44px 0;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.388);
  border-bottom: 1px solid rgba(0, 0, 0, 0.388);
  backdrop-filter: blur(25px);
  @media (width >= 992px) {
    flex-direction: row;
  }
`;

const SpecialEventContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  border-radius: 16px;
  overflow: hidden;

  &::before {
    content: "";
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
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/our-menu/bg-special-event.jpeg") no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
  }

  @media (width >= 992px) {
    width: 40%;
  }
`;

const MenuListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const MenuWrapper = styled.div`
  position: relative;
  z-index: 2;
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
  aspect-ratio: 4/3;
  object-fit: contain;
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
