import styled from "styled-components";

const GiftCards = () => {
  return (
    <Gift>
      <div className="main"> 
        <div className="container">
          <div className="img-container">
            <img className="img" src="../assets/Rectangle 34624185.png" alt="" />
          </div>
          <div className="info-section">
            <div className="info-container">
              <h1 className="title">Gift Cards</h1>
              <div className="sub-title">Purchase an Instant Gift Certificate to Govindas Vegetarian Cuisine</div>
              <div className="headings" >Gift Amount</div>
              <input className="fill-ins" type="text" />
              <div className="headings">To :</div>
              <input className="fill-ins" type="text" />
              <div className="headings" >From :</div>
              <input className="fill-ins" type="text" />
              <div className="headings" >Include a gift message (optinal)</div>
              <input className="message" type="text" />
            <div className="btn-container">
              <button className="btn">Add To Cart</button>
              <div>Get 10%off first order</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Gift>
  );
};
export default GiftCards

const Gift = styled.section`
  .main{
    height: 1229px;
    width: 100%;
    display: flex;
    flex-shrink: 0;
    background-color: #D0AF3D ;
    background: linear-gradient(0deg, rgba(208, 175, 61, 0.05) 0%, rgba(208, 175, 61, 0.05) 100%), url(<../assets/Rectangle 34624131.png>), lightgray 0px -1473.534px / 100% 265.483% no-repeat;
  }
  .container{
    width: 100%;
    display: flex; 
    justify-content: center;
  }
  .img-container{
    display: flex;
    align-items: center;
    flex: 0;
    padding: 0px 5% 0px 5%; 
  }
  .img{
    width: 686px;
    height: 898px;
    flex-shrink: 0;
  }
  .info-section{
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  }
  .info-container{
    display: flex;
    flex-direction: column;
    align-self: center;
    align-content: space-around;
  }
  .title{ 
    color: #000;
    font-family: Caviar Dreams;
    font-size: 33px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.75px;
    text-transform: uppercase;
  }
  .sub-title{
    color: #595555;
    font-family: Josefin Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .headings{
    color: #000;
    font-family: Caviar Dreams;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .fill-ins{
    width: 730px;
    height: 65px;
    flex-shrink: 0;
    margin: 10px 0px 10px 0px;
  }
  .message{
    width: 730px;
    height: 166px;
    flex-shrink: 0;
    fill: #FFF;
    stroke-width: 1px;
    stroke: rgba(0, 0, 0, 0.34);
  }
  .btn-container{
    display: flex;
    padding: 10% 0px 0px 0px;
  }
  .btn{
    width: 240px;
    height: 70px;
    flex-shrink: 0;
    color: #FFF;
    background: #D0AF3D;
    font-family: Open Sans Condensed;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    border: 0px;
  }
  .discount{
    
  }
`