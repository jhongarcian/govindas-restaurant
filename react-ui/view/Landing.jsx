import React from "react";
import ImageCarousel from "../components/Testimonials";
import { AboutUs, Background, OurMenu, CateringRequest} from "../components"
import LeaveReviews from "../components/review/Review"
import OrderRedirect from "../components/order+pay/order+pay"
import GiftCards from "../components/gifts/gift-cards"
import TodaysMenu from "../components/todaysmenu/todays-menu";



const Landing = () => {
  return (
    <>
      <Background />
      <AboutUs />
      <OurMenu />
      <ImageCarousel />
      <LeaveReviews />
      <TodaysMenu/>
      <CateringRequest />
      <OrderRedirect />
      <GiftCards/>
    </>
  );
};

export default Landing;