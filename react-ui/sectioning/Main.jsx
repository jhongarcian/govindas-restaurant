import { Route, Routes } from "react-router-dom";
import {
  Landing,
  Contact,
  GiftCards,
  Menu,
  OrderPay,
  Error,
  Success,
  Catering,
} from "../view";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gift-cards" element={<GiftCards />} />
        <Route path="menus" element={<Menu />} />
        <Route path="order-pay" element={<OrderPay />} />
        <Route path="order/success" element={<Success />} />
        <Route path="catering" element={<Catering />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};
export default Main;
