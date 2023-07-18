import { styled } from "styled-components";

const Cards = ({ image }) => {
  return (
    <ImageContainer>
      <Image src={image} />
    </ImageContainer>
  );
};
export default Cards;

const ImageContainer = styled.div`
  width: 20%;
  min-width: 190px;
  min-height: 100%;
  flex-shrink: 0;
  border-radius: 16px;
  background: lightgray 50%, no-repeat, #fff;
  background-size: cover;
  overflow: hidden;
`;

const Image = styled.img``;
