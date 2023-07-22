import React from "react";
import "./order+pay.css";


const OrderRedirect = () => {
  return (
    <div className="redirectSpecialsContainer">
      <div className="titleContainer">
        <div className="section">
          <div className="order">
            <img src="linedeco.png" className="lineDeco" alt="line" />
            <span className="orderTitle">ORDER ONLINE</span>
            <img src="linedeco.png" className="lineDeco" alt="line" />
          </div>
      <div className="orderpay">
        <a href="/order-pay" className="orderLink">
          Order & Pay Online
        </a>
      </div>
        <div className="description">UberEats can bring the yummies to you now! (Get 10%off first order)</div>
      <div> 
        <img src="uberImage.png" className="uber" />
      </div>
      <div className="socialLinksContainer">
        <div className="leftSocial">
          <span className="twitterLink">
            View Our Daily Specials on
            <a href="https://twitter.com/GovindashouM" target="_blank" className="tweet">
              {" "}
              Twitter
            </a>{" "}
            &
            <a href="https://www.instagram.com/govindashou/" target="_blank" className="insta">
              {" "}
              Instagram
            </a>
            .
          </span>
        </div>        
      </div>

        </div>
        <div className="section">
          <div className="specials">
            <img src="linedeco.png" className="lineDeco" alt="line" />
            <span className="specialTitle"> SPECIAL MENU</span>
            <img src="linedeco.png" className="lineDeco" alt="line" />
          </div>
          <span className="keep-up">Keep up with specials: <span className="insta">iNSTAGRAM</span></span>
          <div>
          <div className="description">Make sure to follow us on social media to see our latest menu additions</div>
          </div>
          <img src="specials.png" className="specialsImage" />
          <div className="rightSocial">
          <span className="followUs">Follow Us On Social Media :</span>
           <a href="https://www.facebook.com/GovindasHouston/" target="_blank">
           <img src="facebook.png" className="facebook" href="" />
           </a>
          <a href="https://www.instagram.com/govindashou/" target="_blank">
          <img
            src="instagram.png"
            className="instagram"
          />
          </a>
          <a href="https://twitter.com/GovindashouM" target="_blank">
          <img
            src="twitter.png"
            className="twitter"
          />
          </a>
        </div>


        </div>
      </div>
    </div>
  );
};

export default OrderRedirect;