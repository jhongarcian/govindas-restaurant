import { styled } from "styled-components";

const FoodCard = ({ text, image, imageInfo }) => {
  return (
    <CardContainer>
      <Card>
        <Image src={image} alt={imageInfo} />
        <Text>{text}</Text>
      </Card>
    </CardContainer>
  );
};
export default FoodCard;

const CardContainer = styled.div`
  width: 100%;
  max-width: 300px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 35px 90px 0px rgba(157, 165, 175, 0.48);
  width: 100%;
  height: 120px;
  padding: 14px;
  gap: 14px;
  
`;

const Image = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

const Text = styled.span`
  color: #000;
  font-family: "Caviar Dreams";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
