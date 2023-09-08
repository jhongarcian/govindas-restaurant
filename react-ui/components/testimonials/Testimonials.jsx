import React, { useEffect } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { Title, ClientText } from "../index";
import { useSelector } from "react-redux";
import { selectedReviews } from "../../features/get_reviewsSlice";

const ImageCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews_data = useSelector(selectedReviews);

  useEffect(() => {
    if (reviews_data) {
      console.log(reviews_data);
    }
  }, [reviews_data]);

  const handlePrev = () => {
    setCurrentReview((prevReview) =>
      prevReview === 0 ? reviews_data.length - 1 : prevReview - 1
    );
  };
  const handleNext = () => {
    setCurrentReview((prevReview) =>
      prevReview === reviews_data.length - 1 ? 0 : prevReview + 1
    );
  };

  return (
    <Container>
      <TestimonialContainer>
        <Title
          info={"Special Selection"}
          subtitle={
            "We love to hear from our customers, so please leave a comment or say hello in an email."
          }
          title={"our clients say"}
          white_color={"white"}
        />

        {reviews_data && reviews_data.length && (
          <ClientText
            name={reviews_data[currentReview].name}
            comment={reviews_data[currentReview].comment}
            rating={reviews_data[currentReview].rating}
          />
        )}

        <ButtonContainer>
          <Button onClick={handlePrev}>Prev</Button>
          <Button onClick={handleNext}>Next</Button>
        </ButtonContainer>
      </TestimonialContainer>
    </Container>
  );
};

export default ImageCarousel;

const Container = styled.section`
  width: 100%;
  background-color: black;
  opacity: 0.95;
  background-image: url("blacklogo.png");
  background-repeat: no-repeat;
  background-position: center;
  padding: 40px 0;
`;

const ReviewContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestimonialContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 24px;
  color: #fff;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  border-radius: 25px;
  font-size: 22px;
  font-family: "Caviar Dreams Bold";
  padding: 2px 40px;
  color: white;
  &:hover {
    transform: scale(1.03);
  }
`;
