import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-container">
        <div className="info">
          <img className="bowl" src="/Group (1).png" alt="" />
          <div className="mission">
            <img
              className="logo"
              src="/Primary_main-Govindas-Logo-T-(1)d 3.png"
              alt=""
            />
            We strive to offer you the best and humblest tastings with
            dedication to quality, healthy living, and a higher taste. Govinda’s
            uses the finest ingredients to prepare fresh vegetarian meals every
            day with a diverse variety of dining options.
          </div>
          <div className="reach-us">
            <div className="contact">Contact</div>
            <div className="coninfo">1320 W 34th St, Houston, TX 77018</div>
            <div className="coninfo">hello@govindashou.com</div>
            <div className="coninfo">(832) 831-9951</div>
            <img className="orange" src="/Orange.png" alt="" />
          </div>

          <div className="contact-container">
            <div className="contact">Open Every Day!</div>
            <div className="coninfo">Monday to Sunday</div>
            <div className="coninfo">Dine-In | Carryout | Curbside</div>
            <div className="serving">Lunch (Daily)</div>
            <div className="coninfo">11:00 Am to 2:30 PM</div>
            <div className="serving">Dinner (Daily)</div>
            <div className="coninfo">5:00 to 9:00 PM</div>
          </div>
          <div className="contact-container">
            <a className="contact">Quick Links</a>
            <a href="/" className="coninfo">
              Home
            </a>
            <a href="/about-us" className="coninfo">
              About Us
            </a>
            <a href="/menus" className="coninfo">
              Menus
            </a>
            <a href="/gift-cards" className="coninfo">
              Gift Cards
            </a>
            <a href="/contact" className="coninfo">
              Contact
            </a>
            <a href="/order-pay" className="coninfo">
              Order+ Pay
            </a>
          </div>
          <div className="leaf-container"><img className="leaf" src="/Group.png" alt="" /></div>
        </div>

        <div className="bar"></div>
        <div className="bottom">
          <div className="copyright-section">
            <div className="copyright">Copyright 2023{" "}
            <div className="govinda">Govinda's Vegetarian Cuisine</div>{" "}
            <div className="space">|</div> All Rights Reserved</div>
            <div className="socials">Follow By :</div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.section`
  .footer-container {
    height: 440px;
    background-color: #121618;
  }
  .bar {
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.11);
  }
  .info {
    padding-top: 40px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .mission {
    width: 350px;
    color: #fff;
    font-family: Josefin Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
    text-transform: capitalize;
    opacity: 0.800000011920929;
  }
  .logo {
    display: flex;
    margin: 4% 0% 2% 4%;
    width: 115px;
    height: 105px;
    flex-shrink: 0;
  }
  .govinda {
    color: #d0af3d;
    font-family: Josefin Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .bottom {
    height: 10px;
  }
  .reach-us{
    display: flex;
    flex-direction: column;
    width: 250px;
  }
  .contact-container {
    display: flex;
    flex-direction: column;
  }
  .contact {
    color: #d0af3d;
    font-family: Caviar Dreams;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 25px 0px 25px 0px;
  }
  .serving {
    color: #d0af3d;
    font-family: Caviar Dreams;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 15px 0px 0px 0px;
  }
  .coninfo {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0px 0px 0px;
    color: #fff;
    font-family: Josefin Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .space {
    color: rgba(188, 186, 186, 0.16);
    font-family: Josefin Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .orange {
    width: 186px;
    height: 164px;
    flex-shrink: 0;
    align-self: flex-end;
  }
  .bowl {
    opacity: 0.5;
    width: 203.978px;
    height: 153.5px;
    flex-shrink: 0;
  }
  .hours-container {
    color: #d0af3d;
    font-family: Caviar Dreams;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .leaf-container{
    display: flex;
    flex-direction:column-reverse;
    padding: 0px 20px 40px 0px
  }
  .leaf {
    width: 69.391px;
    height: 101.57px;
    flex-shrink: 0;
  }
  .copyright-section {
    height: 39px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .copyright {
    color: #fff;
    font-family: Josefin Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .socials{
    color: #fff;
    font-family: Josefin Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
