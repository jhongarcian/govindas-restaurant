import React, { useState } from "react";
import styled from "styled-components";
import "../../src/App.css";
import {
  InputLabelRequired,
  InputField,
  FieldContainer,
  InputLabel,
} from "../catering/FormStyledComponents";

const Contact = () => {
  return (
    <ContactSection>
      <ContactHeader>
        <WrapContainer>
          <ContactTitle>
            <TextSpanTitle>Contact us</TextSpanTitle>
            <TextH1Title>
              How can we
              <TextH1TitleYellow> Help?</TextH1TitleYellow>
            </TextH1Title>
          </ContactTitle>
          <ImageContainer>
            <ImageWrapper>
              <Image src="/contact-us.webp" alt="contact us" />
            </ImageWrapper>
          </ImageContainer>
        </WrapContainer>
      </ContactHeader>
      <ContactForm></ContactForm>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(252, 248, 239, 0.959);
`;

const ContactHeader = styled.div`
  width: 100%;
  height: 100%;
  background: #f6f7f8;
  padding-top: 44px;
  margin-bottom: 44px;
  @media (width >= 628px) {
    height: 60vh;
  }
  @media (width >= 2000px) {
    height: 100%;
  }
`;

const WrapContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (width >= 980px) {
    flex-direction: row;
  }
  @media (width >= 2000px) {
    max-width: 1312px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;
  @media (width >= 980px) {
    margin-bottom: 0;
    height: 60vh;
    width: 50%;
  }
  @media (width >= 2000px) {
    height: 100%;
  }
`;

const TextSpanTitle = styled.span`
  line-height: 18px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 4px;
  font-family: "Open-Sans-Condensed";
  color: rgb(82, 96, 109);
  text-transform: uppercase;
  @media (width >= 980px) {
    line-height: 20px;
    font-size: 20px;
  }
`;

const TextH1Title = styled.h1`
  font-family: "Open-Sans-Condensed";
  font-size: 40px;
  font-style: normal;
  letter-spacing: 4px;
  text-transform: capitalize;
  font-weight: bold;
  line-height: 40px;
  @media (width >= 628px) {
    font-size: 60px;
    line-height: 60px;
  }
  @media (width >= 1200px) {
    font-size: 80px;
    line-height: 80px;
  }
  @media (width >= 2000px) {
    font-size: 120px;
    line-height: 120px;
  }
`;

const TextH1TitleYellow = styled.strong`
  color: #d0af3d;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (width >= 980px) {
    min-height: 200px;
    position: relative;
    width: 50%;
  }
  @media (width >= 1230px) {
    position: relative;
    width: 50%;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  @media (width >= 980px) {
    width: 50vw;
    position: absolute;
    height: 100%;
  }
  @media (width >= 2000px) {
    max-width: 655px;
    position: absolute;
    height: 100%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
  overflow: hidden;
  max-height: 200px;
  @media (width >= 980px) {
    max-height: 400px;
  }

  @media (width >= 1200px) {
    max-height: 1200px;
    border-radius: 36px;
  }
`;

const ContactForm = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
`;
