import React from "react";
import ImageCarousel from "../components/Testimonials";
import CateringRequest from "../components/CateringRequest";
import { AboutUs, Background, OurMenu,} from "../components"
import LeaveReviews from "../components/review/Review"

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
      <LeaveReviews />
    </>
  );
};

export default Landing;