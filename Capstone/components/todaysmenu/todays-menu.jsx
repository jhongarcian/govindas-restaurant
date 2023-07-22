import React from "react";
import styled from "styled-components";
import "../../src/App.css";

const TodaysMenu = () => {
  return (
    <Menu>
      <div className="main">
        <div className="container">
          <div className="center-container">
            <h1 className="day">May 31, Wednesday</h1>
            <div className="heading-container">
              <img className="decoration" src="/linedeco.png" alt="" />
              <h1 className="heading">TODAY’S MENU</h1>
              <img className="decoration" src="/linedeco.png" alt="" />
            </div>
            <p className="description">
              Every time you perfectly dine with us, it should happy for great
              inspired food in an environment designed with individual touches
              unique to the local area.
            </p>
            <div className="food-container">
              <div className="left-section">
                <div className="rectangle-container">
                <div className="rectangle">
                  <img
                    className="small-images"
                    src="/Rectangle 34624172.png"
                    alt=""
                  />
                  <p className="item">Basmati Rice VGF</p>
                </div>
                </div>
                <div className="rectangle">
                  <img
                    className="small-images"
                    src="/Rectangle 34624173.png"
                    alt=""
                  />
                  <p className="item" id="2" >Dal Fry VGF</p>
                </div>
                <div className="rectangle-container">
                <div className="rectangle">
                  <img
                    className="small-images"
                    src="/Rectangle 34624174.png"
                    alt=""
                  />
                  <p className="item" id="3" >Vegetable Barley...</p>
                </div>
                </div>
              </div>
              <div className="middle-section">
                <img className="vector" src="/Vector.png" alt="" />
                <img
                  className="center-img"
                  src="/pexels-monica-turlui-7218637.png"
                  alt=""
                />
              </div>
              <div className="right-section">
              <div className="rectangle-container2">
                <div className="rectangle">
                  <img
                    className="small-images"
                    src="/Rectangle 34624175.png"
                    alt=""
                  />
                  <p className="item" id="4" >Bhindi Masala VGF</p>
                </div>
                </div>
                <div className="rectangle">
                  <img
                    className="small-images"
                    src="/Rectangle 34624177.png"
                    alt=""
                  />
                  <p className="item" id="5" >Saag Aloo VGF</p>
                </div>
                <div className="rectangle-container2">
                <div className="rectangle">
                  <img
                    className="small-images"
                    src="/Rectangle 34624176.png"
                    alt=""
                  />
                  <p className="item" id="6" >Tofu stir-fry VGF</p>
                </div>
                </div>
              </div>
            </div>
            <div className="menu-footer">
                <p className="times">*Wednesday, Friday & Sunday 100% Vegan Menu</p>
                <p className="bar">|</p>
                <p className="socials">Follow us on Twitter:<a href="https://twitter.com/GovindashouM" target="_blank" className="govindas">@GovindashouM</a></p>
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default TodaysMenu;

const Menu = styled.section`
  .main {
    height: 1229px;
    width: 100%;
    display: flex;
    flex-shrink: 0;
    background: #FFF;
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .center-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
    padding-top: 3%;
  }
  .day {
    color: #d0af3d;
    text-align: center;
    font-family: Josefin Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 133.333% */
  }
  .heading-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .heading {
    color: #000;
    font-family: Caviar Dreams;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.75px;
    text-transform: uppercase;
    margin: 2%;
  }
  .decoration {
    width: 49px;
    height: 10.5px;
  }
  .description {
    display: flex;
    color: #5a5252;
    text-align: center;
    font-family: Josefin Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 200% */
    width: 1044px;
    align-self: center;
  }
  .food-container {
    display: flex;
    flex: 1;
    align-items: center;
  }
  .rectangle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 35px 90px 0px rgba(157, 165, 175, 0.48);
    width: 468px;
    height: 151px;
    flex-shrink: 0;
  }
  .small-images {
    width: 108px;
    height: 108px;
    flex-shrink: 0;
    border-radius: 60000px;
    background: url(<path-to-image>),
      lightgray -14.775px -14.775px / 126.643% 126.643% no-repeat, #d9d9d9;
  }
  .center-img {
    width: 408px;
    height: 408px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #ede4e1;
    position: absolute;
    padding: 40px 20px 0px 20px;
  }
  .vector {
    width: 452px;
    height: 452px;
    flex-shrink: 0;
  }
  .middle-section {
    display: flex;
    justify-content: center;
    padding: 2% 2% 2% 2%;
  }
  .item{
    color: #000;
    font-family: Caviar Dreams;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .left-section{
    height: 100%;
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .right-section{
    height: 100%;
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .rectangle-container{
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  .rectangle-container2{
    display: flex;
    width: 100%;
    justify-content: flex-start;
  }
  .menu-footer{
    display:flex;
    justify-content: center;
    column-gap: 2%;
    height: 10%;
    align-items: center;
  }
  .times{
    color: #000;
    text-align: center;
    font-family: Josefin Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .socials{
    display: flex;
    color: #000;
    text-align: center;
    font-family: Josefin Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

  }
  .govindas{
    color: #D0AF3D;
    font-family: Josefin Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
  }
  .bar{
    width: 1px;
    height: 21px;
    opacity: 0.20000000298023224;
    background: #000;
  }
  @media (max-width: 1640px) {
    .container {
      width: 75%;
      display: flex;
      justify-content: center;
    }
  }

`;
