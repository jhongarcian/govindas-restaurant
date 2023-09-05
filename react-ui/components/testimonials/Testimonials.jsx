import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { Title } from "../index";

const data = [
  {
    name: "Shane LargeTummy",
    quote: "I have never been so full in my life! My large tummy is happy.",
    src: "/testimonials/shane-largetummy.png",
    id: 1,
  },
  {
    name: "Sally SmallTummy",
    quote:
      "This buffet was no disappointment. You should be disappointed if you do not check this place out ASAP!",
    src: "/testimonials/sally-smalltummy.png",
    id: 2,
  },
  {
    name: "Jimmy Buffet",
    quote:
      "No margaritas in this place, but the buffet certainly makes up for that! Now where is that shaker of salt?",
    src: "/testimonials/jimmy-buffet.png",
    id: 3,
  },
  {
    name: "Samantha HungryForMore",
    quote:
      "I am hungry for more! I will be back for sure. Buffet was out of this world!",
    src: "/testimonials/samantha-hungryformore.png",
    id: 4,
  },
  {
    name: "Patti Pickyeater",
    quote:
      "I am a picky eater, but this place has something for everyone. I will be back for more.",
    src: "/testimonials/patti-pickyeater.png",
    id: 5,
  },
  {
    name: "Betty SecondPlate",
    quote:
      "I am on my second plate and I am still craving more of this delicious yum yum to my tum tum buffet!",
    src: "/testimonials/betty-secondplate.png",
    id: 6,
  },
];

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? data.length - 1 : prevImage - 1
    );
  };
  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === data.length - 1 ? 0 : prevImage + 1
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
