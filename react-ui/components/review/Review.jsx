import React, { useState } from "react";
import { ReviewStars } from "../index";
import styled from "styled-components";
import { Title } from "../index";
import "../../src/App.css";

const LeaveReviews = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [ratingFeedBack, setRatingFeedBack] = useState(0);
  const [isInputEmpty, setIsInputEmpty] = useState({
    name: false,
    comment: false,
    rating: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reviewRespond = {
    positive: "Thank you for your kind words!",
    negative:
      "We apologize that our service did not satisfy your expectations.",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmpty = {
      name: name === "",
      comment: comment === "",
      rating: rating === 0,
    };

    setIsInputEmpty(isEmpty);

    if (isEmpty.name || isEmpty.comment || isEmpty.rating) {
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/add-review", {
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
      });
      if (response.ok) {
        const data = await response.json();
        setName("");
        setComment("");
        setRating(0);
        setIsSubmitted(true);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (rating) => {
    setRating(rating);
    setRatingFeedBack(rating);
  };

  const handleClickReturn = () => {
    setRatingFeedBack(0);
    setIsSubmitted(false);
  };

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleKeyup = (e) => {
    e.preventDefault();

    const isEmpty = {
      name: name === "",
      comment: comment === "",
      rating: rating === 0,
    };

    setIsInputEmpty(isEmpty);
  };

  return (
    <Container>
      <OrangeVector />
      <LeafVector />
      <BowlVector />
      <FormContainer>
        <Title
          title={"Leave a reveiw"}
          subtitle={"We'd Love to hear your Feedback"}
          info={"Your opinion matters"}
        />
        <FormWrapper>
          {isSubmitted ? (
            <>
              <ThankYou>
                {ratingFeedBack < 3
                  ? reviewRespond.negative
                  : reviewRespond.positive}
              </ThankYou>
              <Button onClick={handleClickReturn} type="button">
                Exit
              </Button>
            </>
          ) : (
            <>
              <ReviewStars action={handleClick} submitted={isSubmitted} />
              <InputContainer>
                <LabelContainer>
                  <LabelText>name:</LabelText>
                  <Input
                    $isFilled={isInputEmpty.name}
                    placeholder="Your name"
                    value={name}
                    type="text"
                    onChange={handleChange(setName)}
                    onKeyUp={handleKeyup}
                    name="fname"
                  />
                </LabelContainer>
                <LabelContainer>
                  <LabelText>comment:</LabelText>
                  <CommentInput
                    $isFilled={isInputEmpty.comment}
                    placeholder="Say something about us"
                    value={comment}
                    type="text"
                    onChange={handleChange(setComment)}
                    onKeyUp={handleKeyup}
                  />
                </LabelContainer>
              </InputContainer>
              <Discount>
                Get 10% off your next order when you leave a review
              </Discount>
              <Button type="submit" onClick={handleSubmit}>
                Post
              </Button>
            </>
          )}
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default LeaveReviews;

const Container = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  background: rgba(252, 248, 239, 0.959);
  position: relative;
  padding: 40px 0;
`;

// Vectors

const OrangeVector = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  background: url("/Orange.png") no-repeat center;
  background-size: cover;
  bottom: 20%;
  left: 10%;
`;

const BowlVector = styled.div`
  width: 100px;
  height: 60px;
  position: absolute;
  background: url("/Group (1).png") no-repeat center;
  background-size: cover;
  top: 40%;
  left: 0;
`;

const LeafVector = styled.div`
  width: 50px;
  height: 60px;
  position: absolute;
  background: url("/Group.png") no-repeat center;
  background-size: cover;
  bottom: 10%;
  right: 5%;
`;

// Form

const FormContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.span`
  color: #595555;
  font-family: "Josefin Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #000;
  font-family: Caviar Dreams;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2px;
`;

const LabelContainer = styled.label`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const LabelText = styled(SubTitle)`
  text-transform: capitalize;
  font-family: "Open Sans Condensed";
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #595555;
  border-color: ${(props) => (props.$isFilled ? "red;" : "#595555")};
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #595555;
  border-color: ${(props) => (props.$isFilled ? "red;" : "#595555")};
  resize: none;
  &:focus {
    outline: none;
  }
`;

const Discount = styled.span`
  align-self: center;
  color: #000;
  font-family: "Josefin Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

const Button = styled.button`
  width: 120px;
  height: 34px;
  color: #fff;
  background: #d0af3d;
  font-family: "Josefin Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  border: transparent;
  border-radius: 14px;
  &:hover {
    background: #ad9332;
  }
`;

// After review

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 316px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ThankYou = styled.h6`
  color: #000;
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
`;
