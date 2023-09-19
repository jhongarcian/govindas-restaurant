import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Title } from "../index";
import styled from "styled-components";
import mobile_image from "/gift-card/gift-card.webp";
import desktop_image from "/gift-card/gift-card-desktop-1.webp";
import "../../src/App.css";

const GiftCards = () => {
  const [amount, setAmount] = useState("");
  const [destinataryFirstName, setDestinataryFirstName] = useState("");
  const [destinataryLastName, setDestinataryLastName] = useState("");
  const [destinataryEmail, setDestinataryEmail] = useState("");
  const [destinataryPhone, setDestinataryPhone] = useState("");
  const [buyerFirstName, setBuyerFirstName] = useState("");
  const [buyerLastName, setBuyerLastName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [comment, setComment] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [stripeUrl, setStripeUrl] = useState("");
  const location = useLocation();

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    if (stripeUrl && stripeUrl.length) {
      window.location.replace(stripeUrl);
    }
    return () => setStripeUrl("");
  }, [stripeUrl]);

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputFields = {
      product_name: "Gift Card",
      buyer: {
        email: buyerEmail,
        first_name: buyerFirstName,
        last_name: buyerLastName,
        phone: buyerPhone,
      },
      recipient: {
        email: destinataryEmail,
        first_name: destinataryFirstName,
        last_name: destinataryLastName,
        phone: destinataryPhone,
      },
      comment: comment,
      amount: amount * 100,
      quantity: 1,
      location,
    };

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(inputFields),
      };
      const response = await fetch(
        "http://localhost:8080/buy-gift-card",
        options
      );
      if (response.ok) {
        const data = await response.json();
        const { url } = data;
        url && url.length && setStripeUrl(url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Gift>
      <div className="main">
        <div className="container">
          <div className="img-container">
            <img
              className="img"
              src={windowWidth >= 920 ? desktop_image : mobile_image}
              alt=""
            />
          </div>
          <FormContainer onSubmit={handleSubmit}>
            <div className="info-container">
              <Title
                info={"get your's now"}
                title={"Gift Cards"}
                subtitle={
                  "Purchase an Instant Gift Certificate from Govindas Vegetarian Cuisine"
                }
              />
              <WrapContainer>
                <Headings>
                  <Label htmlFor="amount">Amount:</Label>
                  <InputField
                    id="amount"
                    type="text"
                    value={amount}
                    onChange={handleChange(setAmount)}
                    list="amount-list"
                    placeholder="Add amount"
                    required
                  />
                  <datalist id="amount-list">
                    <option value="25" />
                    <option value="50" />
                    <option value="75" />
                    <option value="100" />
                  </datalist>
                </Headings>
                <TextWrapper>
                  <span>Purchaser's Info</span>
                </TextWrapper>
                <Headings>
                  <Label htmlFor="buyer">From:</Label>
                  <FlexContainer>
                    <InputField
                      id="buyer"
                      type="text"
                      name="fname"
                      value={buyerFirstName}
                      onChange={handleChange(setBuyerFirstName)}
                      placeholder="First Name"
                      required
                    />
                    <InputField
                      type="text"
                      name="lname"
                      value={buyerLastName}
                      onChange={handleChange(setBuyerLastName)}
                      placeholder="Last Name"
                      required
                    />
                  </FlexContainer>
                </Headings>
                <Headings>
                  <Label htmlFor="buyer-email">Email:</Label>
                  <InputField
                    id="buyer-email"
                    type="email"
                    value={buyerEmail}
                    onChange={handleChange(setBuyerEmail)}
                    placeholder="gift-card@mail.com"
                    required
                  />
                </Headings>
                <Headings>
                  <Label htmlFor="buyer-phone">Phone Number:</Label>
                  <InputField
                    id="buyer-phone"
                    type="tel"
                    value={buyerPhone}
                    onChange={handleChange(setBuyerPhone)}
                    placeholder=""
                    required
                  />
                </Headings>
                <TextWrapper>
                  <span>Recipient's Info</span>
                </TextWrapper>
                <Headings>
                  <Label htmlFor="destinatary">To:</Label>
                  <FlexContainer>
                    <InputField
                      id="destinatary"
                      type="text"
                      value={destinataryFirstName}
                      onChange={handleChange(setDestinataryFirstName)}
                      placeholder="First Name"
                      required
                      name="fname"
                    />
                    <InputField
                      type="text"
                      value={destinataryLastName}
                      onChange={handleChange(setDestinataryLastName)}
                      placeholder="Last Name"
                      required
                      name="lname"
                    />
                  </FlexContainer>
                </Headings>
                <Headings>
                  <Label htmlFor="destinatary-email">Email:</Label>
                  <InputField
                    id="destinatary-email"
                    type="email"
                    value={destinataryEmail}
                    onChange={handleChange(setDestinataryEmail)}
                    placeholder="gift-card@mail.com"
                    required
                  />
                </Headings>
                <Headings>
                  <Label htmlFor="destinatary-phone">Phone Number:</Label>
                  <InputField
                    id="destinatary-phone"
                    type="tel"
                    value={destinataryPhone}
                    onChange={handleChange(setDestinataryPhone)}
                    placeholder=""
                    required
                  />
                </Headings>
                <Headings>
                  <LabelOptional htmlFor="comment">
                    Message: (optional)
                  </LabelOptional>
                  <TextAreaField
                    id="comment"
                    className="fill-ins message"
                    type="text"
                    value={comment}
                    onChange={handleChange(setComment)}
                  />
                </Headings>
                <div className="btn-container">
                  <button type="submit" className="btn">
                    Add To Cart
                  </button>
                  <div className="discount">Get 10% off first order</div>
                </div>
              </WrapContainer>
            </div>
          </FormContainer>
        </div>
      </div>
    </Gift>
  );
};

export default GiftCards;

const Gift = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(252, 248, 239, 0.959);
  .main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-shrink: 0;
    margin: 0 auto;
    padding: 44px 0;
    @media (width >= 920px) {
      width: 90%;
    }
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    @media (width >= 920px) {
      flex-direction: row;
      position: relative;
    }
  }
  .img-container {
    width: 100%;
    height: 200px;
    @media (width >= 920px) {
      height: auto;
      max-height: fit-content;
      flex: 1;
    }
  }
  .img {
    width: 90%;
    height: 200px;
    object-fit: cover;
    object-position: bottom;
    margin: 0 auto;

    @media (width >= 920px) {
      object-position: center;
      float: left;
      height: 90vh;
      width: 100%;
      position: sticky;
      top: calc(0% + 5vh);
    }
  }
  .info-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-content: space-around;
    width: 90%;
  }
  .title {
    color: #000;
    font-family: Caviar Dreams;
    font-size: 33px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.75px;
    text-transform: uppercase;
  }
  .sub-title {
    color: #595555;
    font-family: Josefin Sans;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .required::after {
    content: "*";
    color: #ee3a3a;
    padding-left: 4px;
  }

  input:focus {
    border: 1px solid #d0af3d;
  }
  .btn-container {
    display: flex;
    padding-top: 8px;
    gap: 24px;
  }
  .btn {
    padding: 18px 24px;
    flex-shrink: 0;
    color: #fff;
    background: #d0af3d;
    font-family: Open Sans Condensed;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    border: 0px;
    border-radius: 8px;
  }

  .btn:hover {
    box-shadow: 0px 0px 1px 1px #d0b03d;
  }

  .discount {
    display: flex;
    align-self: center;
    color: #000;
    font-family: Josefin Sans;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 160% */
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: auto;
  font-weight: bold;
  font-family: "Josefin Sans";
  font-size: 22px;
  padding: 12px 0;
`;

const Headings = styled.div`
  color: #000;
  font-family: "Caviar Dreams";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2px;
  width: 100%;
`;

const Label = styled.label`
  &::after {
    content: "*";
    color: #ee3a3a;
    padding-left: 4px;
  }
`;

const LabelOptional = styled.label`
  &::after {
    content: "";
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 36px;
  flex: 1;
  margin: 6px 0px 6px 0px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid grey;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  height: 166px;
  flex: 1;
  margin: 10px 0px 10px 0px;
  padding: 12px;
  fill: #fff;
  resize: none;
  outline: none;
`;
