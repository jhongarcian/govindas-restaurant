import { NavLink, useNavigate, useLocation } from "react-router-dom";
import data from "../navs/navs.json";
import { styled } from "styled-components";
import image from "/Primary_main-Govindas-Logo-T-(1)d 3.png";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import "../src/App.css";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  const handleNavClick = (e) => {
    if (windowWidth <= 992) {
      setIsOpen(!isOpen);
    }
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const navs =
    data &&
    data.map((item) => {
      return (
        <NavList key={item.id}>
          <NavLink onClick={handleNavClick} to={item.href}>
            {item.name}
          </NavLink>
        </NavList>
      );
    });

  return (
    <HeaderContainer
      size={windowWidth}
      $path={currentPath}
      $mobile={windowWidth <= 992}
    >
      <NavContainer className="y-wrap" $mobile={isOpen.toString()}>
        <IconContainer size={windowWidth} onClick={handleClick}>
          <Image alt="govindas-logo" src={image} />
        </IconContainer>
        {windowWidth >= 992 && (
          <LargeScreenContainer className="y-navs">{navs}</LargeScreenContainer>
        )}
        {windowWidth <= 992 && (
          <MobileContainer>
            <SmallScreenContainer $mobile={isOpen}>{navs}</SmallScreenContainer>
            <BurgerContainer $mobile={isOpen}>
              <Hamburger
                aria-label="menu trigger"
                toggled={isOpen}
                toggle={setIsOpen}
                size={28}
              />
            </BurgerContainer>
          </MobileContainer>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  font-family: "Open-Sans-Condensed";
  background: ${(props) => (props.$path === "/" ? "transparent;" : "#121618;")};
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-transform: uppercase;
  position: ${(props) => (props.$path === "/" ? "absolute;" : "relative;")};
  color: ${(props) => (props.$mobile === true ? "#000;" : "#fff;")};
  top: 0;
  left: 0;
  z-index: 1000;
  margin: 0 auto;
  width: 100%;
`;

const NavContainer = styled.nav`
  width: ${(props) => (props.$mobile === true ? "100%;" : "90%;")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 12px;
  margin: 0 auto;
`;

const IconContainer = styled.button`
  background: none;
  border: none;
  height: ${(props) => (props.size <= 992 ? "70px;" : "110px:;")};
  width: ${(props) => (props.size <= 992 ? "70px;" : "110px;")};
`;

const LargeScreenContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
`;

const SmallScreenContainer = styled.ul`
  width: 100vw;
  height: 100vh;
  background-color: #fbf8ef;
  position: fixed;
  top: ${(props) => (props.$mobile ? "0;" : "-1000%;")};
  opacity: ${(props) => (props.$mobile ? "1;" : "0;")};
  transition: top 7ms ease-in-out;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BurgerContainer = styled.div`
  position: ${(props) => (props.$mobile === true ? "fixed;" : "relative;")};
  color: ${(props) => (props.$mobile === true ? "#000;" : "#fff;")};
`;

const NavList = styled.li`
  text-transform: uppercase;
  &:hover {
    color: #d1b142;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 4/3;
  object-fit: contain;
  display: block;
`;
