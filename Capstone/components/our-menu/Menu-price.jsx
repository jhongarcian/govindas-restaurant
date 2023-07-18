import { styled } from "styled-components";
import "../../src/App.css";

const MenuPrice = ({ title, alergy, price, image }) => {
  return (
    <Container>
      <DishContainer>
        <ImageDish src={image} />
      </DishContainer>
      <NameContainer>
        <FoodTitleText text={title} />
        <AlergiesText text={alergy} />
      </NameContainer>
      <Price text={price} />
    </Container>
  );
};
export default MenuPrice;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
`;

const DishContainer = styled.div`
  min-width: 70px;
  max-width: 120px;
  min-height: 70px;
  max-height: 120px;
  border-radius: 50%;
  border: none;
  overflow: hidden;
`;

const ImageDish = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex-grow: 1;
`;

const FoodTitleStyle = styled.span`
  color: #000;
  font-family: "Caviar Dreams";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  @media (width >= 662px) {
    font-size: 30px;
  }
`;

const FoodTitleText = ({ text }) => {
  return <FoodTitleStyle>{text}</FoodTitleStyle>;
};

const AlergiesStyle = styled.span`
  color: #5a5252;
  font-family: "Josefin Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

const AlergiesText = ({ text }) => {
  return <AlergiesStyle>{text}</AlergiesStyle>;
};

const PriceStyle = styled.span`
  color: #000;
  font-family: "Josefin Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

`;

const Price = ({ text }) => {
  return <PriceStyle>${text}</PriceStyle>;
};
