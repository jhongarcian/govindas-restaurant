import React from "react";
import ImageCarousel from "../components/Testimonials";
import CateringRequest from "../components/CateringRequest";
import { AboutUs, Background, OurMenu } from "../components"


const Landing = () => {
  return (
    <>
      <Background />
      <ImageCarousel />
      <CateringRequest />
      <AboutUs />
      <ImageCarousel />
      <CateringRequest />
      <OurMenu />
    </>
  );
};

export default Landing;