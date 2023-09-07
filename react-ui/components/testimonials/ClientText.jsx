import { useState } from "react";
import { styled } from "styled-components";

const ClientText = ({ comment, rating, name }) => {
  const [starData, setStarData] = useState([
    {
      rating: 1,
    },
    {
      rating: 2,
    },
    {
      rating: 3,
    },
    {
      rating: 4,
    },
    {
      rating: 5,
    },
  ]);

  const stars = starData.map((item) => {
    const fillColor = "#FFBC08";
    const isRated = rating >= item.rating;
    return (
      <SingleStar key={item.rating} data-rating={item.rating}>
        <svg
          width="34px"
          height="34px"
          viewBox="0 0 24 24"
          fill={isRated ? fillColor : "none"}
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffc800"
          transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
              stroke={fillColor}
              strokeWidth="0.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </SingleStar>
    );
  });

  return (
    <Container>
      <RatingContainer>{stars}</RatingContainer>
      <TextContainer>
        <QuoteContainer>
          <Quote
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M25 0.207084L24.3691 4.5805C23.1073 4.4782 22.082 4.6828 21.2934 5.19431C20.5047 5.68025 19.9527 6.39637 19.6372 7.34266C19.3481 8.26338 19.2955 9.33755 19.4795 10.5652H25V21H14.2744V10.5652C14.2744 6.8823 15.1551 4.09457 16.9164 2.20198C18.6777 0.283811 21.3722 -0.381154 25 0.207084ZM10.7256 0.207084L10.0946 4.5805C8.83281 4.4782 7.80757 4.6828 7.01893 5.19431C6.23028 5.68025 5.67823 6.39637 5.36278 7.34266C5.07361 8.26338 5.02103 9.33755 5.20505 10.5652H10.7256V21H0V10.5652C0 6.8823 0.880652 4.09457 2.64196 2.20198C4.40326 0.283811 7.09779 -0.381154 10.7256 0.207084Z"
              fill="#D0AF3D"
            />
          </Quote>
        </QuoteContainer>
        <Comment>{comment}</Comment>
        <QuoteContainer>
          <Quote
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M0 0.207084L0.630915 4.5805C1.89275 4.4782 2.91798 4.6828 3.70662 5.19431C4.49527 5.68025 5.04732 6.39637 5.36277 7.34266C5.65195 8.26338 5.70452 9.33755 5.5205 10.5652H0V21H10.7256V10.5652C10.7256 6.8823 9.8449 4.09457 8.0836 2.20198C6.32229 0.283811 3.62776 -0.381154 0 0.207084ZM14.2744 0.207084L14.9054 4.5805C16.1672 4.4782 17.1924 4.6828 17.9811 5.19431C18.7697 5.68025 19.3218 6.39637 19.6372 7.34266C19.9264 8.26338 19.979 9.33755 19.795 10.5652H14.2744V21H25V10.5652C25 6.8823 24.1193 4.09457 22.358 2.20198C20.5967 0.283811 17.9022 -0.381154 14.2744 0.207084Z"
              fill="#D0AF3D"
            />
          </Quote>
        </QuoteContainer>
      </TextContainer>
      <NameContainer>{name}</NameContainer>
    </Container>
  );
};
export default ClientText;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 24px;
  margin: 0 auto;
  @media (width >= 700px) {
    width: 70%;
  }
`;

const RatingContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: auto;
  gap: 12px;
`;

const QuoteContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const Quote = styled.svg`
  fill: #d0af3d;
`;

const Comment = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Caviar Dreams";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  @media (width >= 700px) {
    font-size: 20px;
  }
`;

const SingleStar = styled.div`
  width: fit-content;
  height: 100%;
`;

const NameContainer = styled.span`
  color: #fff;
  font-family: "Caviar Dreams";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;
`;
