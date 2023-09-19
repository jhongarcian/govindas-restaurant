import { styled } from "styled-components";

const Cards = ({ image, info }) => {
  return (
    <ImageContainer>
      <Image alt={info} src={image} />
    </ImageContainer>
  );
};
export default Cards;

const ImageContainer = styled.div`
  width: 20%;
  min-width: 190px;
  flex-shrink: 0;
  border-radius: 16px;
  background: lightgray 50%, no-repeat, #fff;
  background-size: cover;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
