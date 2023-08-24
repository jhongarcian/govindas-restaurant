import React from "react";
import { styled } from "styled-components";
import { SiUbereats } from "react-icons/si";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import Title from "../title/Title";

const OrderRedirect = () => {
  return (
    <OrderContainer className="redirectSpecialsContainer">
      <WrapContainer>
        <CardContainer>
          <Title title={"Order online"} />
          <AnchorContainer>
            <Anchor
              href="https://www.ubereats.com/store/govindas-vegetarian-cuisine/TEe_ZaVCQiCrwEaTsBy65Q?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE0MDUlMjBXJTIwMzR0aCUyMFN0JTIwYTMwNSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkVpc3hOREExSUZjZ016UjBhQ0JUZENCaE16QTFMQ0JJYjNWemRHOXVMQ0JVV0NBM056QXhPQ3dnVlZOQklpQWFIZ29XQ2hRS0VnbXAtNF8wcDhkQWhoSGhZMUZkSHhDT2RoSUVZVE13TlElMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMjkuODE2OTg5NyUyQyUyMmxvbmdpdHVkZSUyMiUzQS05NS40MjQyMDkxOTk5OTk5OSU3RA%3D%3D&ps=1"
              target="_blank"
            >
              order & pay online
            </Anchor>
          </AnchorContainer>
          <DescriptionContainer>
            <span>
              UberEats can bring the yummies to you now! (Get 10%off first
              order)
            </span>
          </DescriptionContainer>
          <ImageContainer>
            <Image src="uberImage.png" />
          </ImageContainer>
          <SocialLinkContainer>
            <Button href="https://www.ubereats.com/store/govindas-vegetarian-cuisine/TEe_ZaVCQiCrwEaTsBy65Q?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE0MDUlMjBXJTIwMzR0aCUyMFN0JTIwYTMwNSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkVpc3hOREExSUZjZ016UjBhQ0JUZENCaE16QTFMQ0JJYjNWemRHOXVMQ0JVV0NBM056QXhPQ3dnVlZOQklpQWFIZ29XQ2hRS0VnbXAtNF8wcDhkQWhoSGhZMUZkSHhDT2RoSUVZVE13TlElMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMjkuODE2OTg5NyUyQyUyMmxvbmdpdHVkZSUyMiUzQS05NS40MjQyMDkxOTk5OTk5OSU3RA%3D%3D&ps=1">
              <SiUbereats />
            </Button>
          </SocialLinkContainer>
        </CardContainer>
        <CardContainer>
          <Title title={"Special Menu"} />
          <AnchorContainer>
            <Anchor
              href="https://www.instagram.com/govindashou/"
              target="_blank"
            >
              keep up with our specials in instagram
            </Anchor>
          </AnchorContainer>
          <DescriptionContainer>
            <span>
              Make sure to follow us on social media to see our latest menu
              additions
            </span>
          </DescriptionContainer>
          <ImageContainer>
            <Image src="specials.png" />
          </ImageContainer>
          <SocialFlexContainer>
            <Facebook
              href="https://z-upload.facebook.com/GovindasHouston"
              target="_blank"
            >
              <BiLogoFacebookCircle />
            </Facebook>
            <Instagram
              href="https://www.instagram.com/govindashou/"
              target="_blank"
            >
              <BiLogoInstagram />
            </Instagram>
            <Twitter
              href="https://twitter.com/govindashoum?lang=en"
              target="_blank"
            >
              <BiLogoTwitter />
            </Twitter>
          </SocialFlexContainer>
        </CardContainer>
      </WrapContainer>
    </OrderContainer>
  );
};

export default OrderRedirect;

const OrderContainer = styled.section`
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
`;

const WrapContainer = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  gap: 24px;
  padding: 24px 0;
  margin: 0 auto;
  @media (width >= 990px) {
    flex-direction: row;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 500px;
  flex: 1;
  border: 2px solid #f5f2e8;
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const AnchorContainer = styled.div`
  width: 100%;
  text-align: center;
  color: #f2c94c;
  font-family: "Josefin Sans";
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  font-style: normal;
`;

const Anchor = styled.a`
  text-decoration: underline;
  text-transform: capitalize;
`;

const DescriptionContainer = styled.div`
  color: #5a5252;
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 300px;
  border-radius: 15px;
  border: 1px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
`;

const SocialLinkContainer = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Caviar Dreams";
  font-weight: bold;
  font-size: 20px;
`;

const Button = styled.a`
  width: 120px;
  padding: 6px 24px;
  border: 1px solid #04a357;
  border-radius: 12px;
  background: transparent;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  &:hover {
    background: #04a357;
    transition: background color 0.1s ease-in-out;
    transition-delay: 0.1s;
    color: #fff;
  }
`;

const SocialFlexContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Facebook = styled(SocialLink)`
  border: 2px solid #0675e8;
  color: #0675e8;
  &:hover {
    color: #fff;
    background: #0675e8;
  }
`;

const Instagram = styled(SocialLink)`
  border: 2px solid #ed0fa9;
  color: #ed0fa9;
  &:hover {
    color: #fff;
    background: #ed0fa9;
  }
`;

const Twitter = styled(SocialLink)`
  border: 2px solid #0f94ed;
  color: #0f94ed;
  &:hover {
    color: #fff;
    background: #0f94ed;
  }
`;
