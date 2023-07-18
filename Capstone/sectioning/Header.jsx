import { NavLink, useNavigate } from "react-router-dom";
import data from "../navs/navs.json";
import { styled } from "styled-components";
import image from "../assets/gvc.png";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import "../src/App.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  const handleNavClick = (e) => {
    setIsOpen(!isOpen);
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
        <NavList>
          <NavLink onClick={handleNavClick} key={item.id} to={item.href}>
            {item.name}
          </NavLink>
        </NavList>
      );
    });

  return (
    <HeaderContainer size={windowWidth}>
      <NavContainer className="y-wrap">
        <IconContainer size={windowWidth} onClick={handleClick}>
          <Image src={image} />
        </IconContainer>
        {windowWidth >= 992 && (
          <LargeScreenContainer className="y-navs">{navs}</LargeScreenContainer>
        )}
        {windowWidth <= 992 && (
          <MobileContainer>
            <SmallScreenContainer isMobile={isOpen}>
              {navs}
            </SmallScreenContainer>
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} />
          </MobileContainer>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
font-family: "Open-Sans-Condensed";
  background: transparent;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-transform: uppercase;
  position: absolute;
  width: ${(props) => (props.size <= 992) ? "100%;" : "90%;"};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  color: #fff;
  margin: 0 auto;
`;

const NavContainer = styled.nav`
position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 12px;
  margin: 0 auto;
`;

const IconContainer = styled.a`
  height: ${(props) => (props.size <= 992 ? "60px;" : "110px:;")};
  width: ${(props) => (props.size <= 992 ? "60px;" : "110px;")};
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
  background-color: #0f78d3;
  position: absolute;
  top: ${(props) => (props.isMobile ? "0;" : "-100%;")};
  opacity: ${(props) => (props.isMobile ? "1;" : "0;")};
  transition: top 1s ease-in-out;
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

const NavList = styled.li`
  text-transform: uppercase;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;
