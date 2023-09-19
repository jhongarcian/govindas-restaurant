import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const linkPaths = {
    home: "/",
    aboutUs: "/about-us",
    menus: "/menus",
    giftCards: "/gift-cards",
    contact: "/contact",
    orderAndPay: "/order-pay",
  };

  const handleClick = (targetPath) => (e) => {
    navigate(targetPath);
    window.scrollTo(0, 0);
  };

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <FooterContainer>
      <BowlVector />
      <OrangeVector />
      <LeafVector />
      <FooterWrapper>
        <TopContainer>
          {windowWidth >= 920 && (
            <Container>
              <LogoContainer onClick={handleClick(linkPaths.home)} />
            </Container>
          )}
          <Container>
            <YellowHeader>Contact</YellowHeader>
            <ContactWrapper
              href="https://www.google.com/maps/place/Govinda's/@29.8177565,-95.4262318,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c7a793081815:0xa368b1c70ee2e165!8m2!3d29.8177519!4d-95.4236569!16s%2Fg%2F11c0w0g5fw?entry=ttu"
              target="_blank"
              aria-label="google maps"
            >
              <SmallLink>
                <IconSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0023 11.1912C11.4383 11.1912 12.6023 10.0272 12.6023 8.59121C12.6023 7.15527 11.4383 5.99121 10.0023 5.99121C8.5664 5.99121 7.40234 7.15527 7.40234 8.59121C7.40234 10.0272 8.5664 11.1912 10.0023 11.1912Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3.0148 7.07484C4.65646 -0.141827 15.3481 -0.133494 16.9815 7.08317C17.9398 11.3165 15.3065 14.8998 12.9981 17.1165C11.3231 18.7332 8.67313 18.7332 6.9898 17.1165C4.6898 14.8998 2.05646 11.3082 3.0148 7.07484Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </IconSvg>
              </SmallLink>
              <WhiteSpan>1320 W 34th St, Houston, TX 77018</WhiteSpan>
            </ContactWrapper>
            <ContactWrapper
              aria-label="email"
              href="mailto:hello@govindashou.com"
              target="_blank"
            >
              <SmallLink>
                <IconSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.1667 17.0832H5.83334C3.33334 17.0832 1.66667 15.8332 1.66667 12.9165V7.08317C1.66667 4.1665 3.33334 2.9165 5.83334 2.9165H14.1667C16.6667 2.9165 18.3333 4.1665 18.3333 7.08317V12.9165C18.3333 15.8332 16.6667 17.0832 14.1667 17.0832Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.1667 7.5L11.5583 9.58333C10.7 10.2667 9.29166 10.2667 8.43332 9.58333L5.83333 7.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </IconSvg>
              </SmallLink>
              <WhiteSpan>hello@govindashou.com</WhiteSpan>
            </ContactWrapper>
            <ContactWrapper href="tel:8328319951" aria-label="phone number">
              <SmallLink >
                <IconSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3109 15.2758C18.3109 15.5758 18.2443 15.8841 18.1026 16.1841C17.9609 16.4841 17.7776 16.7675 17.5359 17.0341C17.1276 17.4841 16.6776 17.8091 16.1693 18.0175C15.6693 18.2258 15.1276 18.3341 14.5443 18.3341C13.6943 18.3341 12.7859 18.1341 11.8276 17.7258C10.8693 17.3175 9.91093 16.7675 8.96093 16.0758C8.0026 15.3758 7.09427 14.6008 6.2276 13.7425C5.36927 12.8758 4.59427 11.9675 3.9026 11.0175C3.21927 10.0675 2.66927 9.11748 2.26927 8.17581C1.86927 7.22581 1.66927 6.31748 1.66927 5.45081C1.66927 4.88415 1.76927 4.34248 1.96927 3.84248C2.16927 3.33415 2.48593 2.86748 2.9276 2.45081C3.46093 1.92581 4.04427 1.66748 4.66093 1.66748C4.89427 1.66748 5.1276 1.71748 5.33593 1.81748C5.5526 1.91748 5.74427 2.06748 5.89427 2.28415L7.8276 5.00915C7.9776 5.21748 8.08593 5.40915 8.16093 5.59248C8.23593 5.76748 8.2776 5.94248 8.2776 6.10081C8.2776 6.30081 8.21927 6.50081 8.1026 6.69248C7.99427 6.88415 7.83593 7.08415 7.63593 7.28415L7.0026 7.94248C6.91093 8.03415 6.86927 8.14248 6.86927 8.27581C6.86927 8.34248 6.8776 8.40081 6.89427 8.46748C6.91927 8.53415 6.94427 8.58415 6.96093 8.63415C7.11093 8.90915 7.36927 9.26748 7.73593 9.70081C8.11093 10.1341 8.51093 10.5758 8.94427 11.0175C9.39427 11.4591 9.8276 11.8675 10.2693 12.2425C10.7026 12.6091 11.0609 12.8591 11.3443 13.0091C11.3859 13.0258 11.4359 13.0508 11.4943 13.0758C11.5609 13.1008 11.6276 13.1091 11.7026 13.1091C11.8443 13.1091 11.9526 13.0591 12.0443 12.9675L12.6776 12.3425C12.8859 12.1341 13.0859 11.9758 13.2776 11.8758C13.4693 11.7591 13.6609 11.7008 13.8693 11.7008C14.0276 11.7008 14.1943 11.7341 14.3776 11.8091C14.5609 11.8841 14.7526 11.9925 14.9609 12.1341L17.7193 14.0925C17.9359 14.2425 18.0859 14.4175 18.1776 14.6258C18.2609 14.8341 18.3109 15.0425 18.3109 15.2758Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </IconSvg>
              </SmallLink>
              <WhiteSpan>(832)831-9951</WhiteSpan>
            </ContactWrapper>
          </Container>
          <Container>
            <YellowHeader>Open Every Day!</YellowHeader>
            <WhiteSpan>Monday to Sunday</WhiteSpan>
            <WhiteSpan>Dine-in | Carryout | Curbside</WhiteSpan>
            <YellowHeader>Lunch (Daily)</YellowHeader>
            <WhiteSpan>11:00 AM to 2:30 PM</WhiteSpan>
            <YellowHeader>Dinner (Daily)</YellowHeader>
            <WhiteSpan>5:00 PM to 9 PM</WhiteSpan>
          </Container>
          {windowWidth >= 920 && (
            <Container>
              <YellowHeader>Quick Links</YellowHeader>
              <NavigationLink onClick={handleClick(linkPaths.home)}>
                Home
              </NavigationLink>
              <NavigationLink onClick={handleClick(linkPaths.aboutUs)}>
                About Us
              </NavigationLink>
              <NavigationLink onClick={handleClick(linkPaths.menus)}>
                Menus
              </NavigationLink>
              <NavigationLink onClick={handleClick(linkPaths.giftCards)}>
                Gift Cards
              </NavigationLink>
              <NavigationLink onClick={handleClick(linkPaths.contact)}>
                Contact
              </NavigationLink>
              <NavigationLink onClick={handleClick(linkPaths.orderAndPay)}>
                Order + pay
              </NavigationLink>
            </Container>
          )}
        </TopContainer>
        <BottomContainer>
          <CopyRigthContainer>
            <WhiteSpan>Copyrigth 2023</WhiteSpan>
            <YellowSpan>Govinda's Vegetarian Cuisine</YellowSpan>
            <WhiteSpan>All Rights</WhiteSpan>
          </CopyRigthContainer>
          <SocialMediaContainer>
            <WhiteSpan>Follow By:</WhiteSpan>
            <SocialMediaLinksContainer>
              <Link
                aria-label="twitter icon"
                href="https://twitter.com/GovindashouM"
                target="_blank"
              >
                <IconSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width={38}
                  height={38}
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="23.5" stroke="#827F7F" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.44 31.6766C27.6889 31.6766 31.6539 25.7677 31.6539 20.6443C31.6539 20.4761 31.6539 20.3091 31.6424 20.1428C32.4136 19.5948 33.0793 18.9143 33.6085 18.1356C32.8901 18.4494 32.1265 18.6551 31.3456 18.7458C32.1678 18.261 32.7834 17.4995 33.0783 16.6008C32.3042 17.0525 31.4579 17.3713 30.5752 17.5423C29.0826 15.9813 26.5863 15.9056 24.9986 17.3741C23.9756 18.3209 23.5405 19.7326 23.8584 21.0792C20.6897 20.9223 17.7371 19.4501 15.7355 17.0282C14.6895 18.8 15.2245 21.0657 16.9563 22.2034C16.3291 22.1855 15.7153 22.0194 15.1668 21.7189V21.7681C15.1678 23.6136 16.4904 25.2026 18.3288 25.5683C17.7487 25.7242 17.1397 25.7468 16.55 25.6344C17.0658 27.2143 18.5459 28.2965 20.2316 28.3276C18.836 29.4068 17.1119 29.9927 15.3368 29.9909C15.0237 29.9899 14.7106 29.9719 14.3984 29.9351C16.2013 31.0728 18.2981 31.6766 20.44 31.6737"
                    fill="white"
                  />
                </IconSvg>
              </Link>
              <Link
                href="https://www.facebook.com/GovindasHouston/"
                target="_blank"
                aria-label="facebook icon"
              >
                <IconSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width={38}
                  height={38}
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="23.5" stroke="#827F7F" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.755 33.5928V24.9553H28.3795L28.8082 21.1165H25.755V19.2467C25.755 18.2582 25.7803 17.2776 27.1627 17.2776H28.5629V14.5329C28.5629 14.4917 27.3602 14.3984 26.1434 14.3984C23.6022 14.3984 22.0111 15.9889 22.0111 18.9093V21.1165H19.2031V24.9553H22.0111V33.5928H25.755Z"
                    fill="white"
                  />
                </IconSvg>
              </Link>
            </SocialMediaLinksContainer>
          </SocialMediaContainer>
        </BottomContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.section`
  height: 100%;
  width: 100%;
  background: #121618;
  position: relative;
`;

const FooterWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: transparent;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

// Top Container

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  padding: 40px 0;

  @media (width >= 920px) {
    width: 70%;
  }
`;

const Container = styled.div`
  max-width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 20px;
`;

const ContactWrapper = styled.a`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const NavigationLink = styled.button`
  width: fit-content;
  border: none;
  background: transparent;
  color: #fff;
  font-family: "Josefin Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 110px;
  background: url("/Primary_main-Govindas-Logo-T-(1)d 3.png") no-repeat center;
  background-size: cover;
  cursor: pointer;
`;

// Vectors

const BowlVector = styled.div`
  width: 100px;
  height: 60px;
  position: absolute;
  background: url("/Group (1).png") no-repeat center;
  background-size: cover;
  top: 40%;
`;

const LeafVector = styled.div`
  width: 50px;
  height: 60px;
  position: absolute;
  background: url("/Group.png") no-repeat center;
  background-size: cover;
  bottom: 20%;
  right: 10%;
`;

const OrangeVector = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  background: url("/Orange.png") no-repeat center;
  background-size: cover;
  bottom: 10%;
  left: 60%;
`;

// Botton Container

const BottomContainer = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.11);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 0;

  @media (width >= 920px) {
    flex-direction: row;
  }
`;

const CopyRigthContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const WhiteSpan = styled.span`
  color: #fff;
  font-family: "Josefin Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (width >= 920px) {
    font-size: 18px;
  }
`;

const YellowHeader = styled.span`
  color: #d0af3d;
  font-family: "Caviar Dreams";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (width >= 920px) {
    font-size: 24px;
  }
`;

const YellowSpan = styled(WhiteSpan)`
  color: #d0af3d;
`;

const SocialMediaContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SocialMediaLinksContainer = styled.div`
  display: flex;
  gap: 6px;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  width: 38px;
  height: 38px;
`;

const SmallLink = styled.div`
  width: 20px;
  height: 20px;
`;

const IconSvg = styled.svg`
  width: 100%;
  height: 100%;
`;
