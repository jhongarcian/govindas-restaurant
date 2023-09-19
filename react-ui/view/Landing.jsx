import React from "react";
import { AboutUs, Background, OurMenu, CateringRequest, Testimonials} from "../components"
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
      <CateringRequest />
      <TodaysMenu/>
      <OrderRedirect />
      <Testimonials />
      <LeaveReviews />
    </>
  );
};

export default Landing;