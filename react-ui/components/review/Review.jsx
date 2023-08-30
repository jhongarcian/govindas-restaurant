import React, { useState } from "react";
import styled from "styled-components";
import "../../src/App.css";

const LeaveReviews = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/add-review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
          },
          body: JSON.stringify({
            rating: rating,
            comment: comment,
            name: name,
          }),
        }
      );
      const data = await response.json();
      setName("");
      setComment("");
      setRating("");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Reviews>
      {
        <form className="main" onSubmit={handleSubmit}>
          <div className="container">
            <div className="img-container">
              <div></div>
            </div>
            <div className="info-section">
              <div className="info-container">
                <h1 className="title">Leave A Review</h1>
                <div className="sub-title">We'd Love to hear your Feedback</div>
                <div className="headings">Name :</div>
                <input
                  className="fill-ins"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <div className="headings">Comment :</div>
                <input
                  className="message"
                  type="text"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                />
                <div className="headings">Rating : 1-5</div>
                <input
                  className="fill-ins"
                  type="text"
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                />
                <div className="btn-container">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                  <div className="discount">
                    Get 10% off your next order when you leave a review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      }
    </Reviews>
  );
};

export default LeaveReviews;

const Reviews = styled.div`
  .main {
    height: 1229px;
    width: 100%;
    display: flex;
    flex-shrink: 0;
    background-color: rgba(252, 248, 239, 0.959);
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .img-container {
    display: flex;
    align-items: center;
    flex: 0;
    padding: 0px 2% 0px 5%;
  }
  .img {
    width: 686px;
    height: 898px;
    flex-shrink: 0;
  }
  .info-section {
    display: flex;
    flex-direction: column;
    // flex: 1;
    justify-content: center;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-content: space-around;
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
  .headings {
    color: #000;
    font-family: Caviar Dreams;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 2px;
  }
  .fill-ins {
    width: 730px;
    height: 65px;
    flex-shrink: 0;
    margin: 10px 0px 10px 0px;
  }
  .message {
    width: 730px;
    height: 166px;
    flex-shrink: 0;
    fill: #fff;
    stroke-width: 1px;
    stroke: rgba(0, 0, 0, 0.34);
  }
  .btn-container {
    display: flex;
    padding: 10% 0px 0px 0px;
    column-gap: 10%;
  }
  .btn {
    width: 240px;
    height: 70px;
    flex-shrink: 0;
    color: #fff;
    background: #d0af3d;
    font-family: Open Sans Condensed;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    border: 0px;
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
