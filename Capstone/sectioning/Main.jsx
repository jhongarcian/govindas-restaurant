import { Route, Routes } from "react-router-dom";
import { Landing, AboutUs, Contact, GiftCards, Menu, OrderPay, Error } from "../view";


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gift-cards" element={<GiftCards />} />
        <Route path="menus" element={<Menu />} />
        <Route path="order-pay" element={<OrderPay />} />
        <Route path="*" element={<Error />} />
      </Routes>
     
    </main>
  );
};
export default Main;
