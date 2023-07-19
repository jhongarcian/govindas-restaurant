import React from "react";
import { useState } from "react";

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
    quote: "I am hungry for more! I will be back for sure. Buffet was out of this world!",
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
      (prevImage === 0?data.length - 1:prevImage - 1));
  };
  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === data.length - 1 ? 0 : prevImage + 1));
  };
  
  return (
    <div className="imageCarousel">
      <div className="testHeadContainer1">
        <h2 className="testSubTitle">Special Selection</h2>
      </div>
      <div className="testHeadContainer2">
        <img src="/linedeco.png" className="lineDeco" alt="line" />
        <br></br>
        <h1 className="testTitle"> OUR CLIENTS SAY</h1>
        <br />
        <img src="/linedeco.png" className="lineDeco" alt="line" />
      </div>
      <h3 className="testTitle2">
        We love to hear from our customers, so please leave a comment or say
        hello in an email.
      </h3>
      <br />
      <div className="imageContainer">
        <div className="quoteControl">
          <img
            src={data[currentImage].src}
            className="image-pic"
            alt={`Image ${currentImage + 1}`}
          />
          <br />
          <br />
          <div className="quoteContainer">
            <div className="quoteBox">
              <img src="/openquote.png" className="openquote" />
              <br />
              <div className="quote">
              <span className="quotes"> {data[currentImage].quote} </span>
              </div>
              <br />
              <img src="/closequote.png" className="closequote" />
            </div>
          </div>

        </div>

        <br />
        <br />
      </div>
      <br />
      <div className="dots">
        <h2 className="name"> {data[currentImage].name} </h2>
      </div>
      <br />
      <div className="buttons">
        <button onClick={handlePrev} className="button1">
          Prev
        </button>
        <button onClick={handleNext} className="button2">
          Next
        </button>
      </div>
    </div>
  );
  
};

export default ImageCarousel;