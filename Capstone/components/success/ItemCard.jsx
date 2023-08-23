import "../../src/App.css";
import { styled } from "styled-components";

const ItemCard = ({ image, name, price }) => {
  return (
    <ItemContainer>
      <FlexRowContainer>
        <ImgContainer>
          <Image src={image} />
        </ImgContainer>
        <TextContainer>
          <DarkTextStyles>{name}</DarkTextStyles>
        </TextContainer>
        <TextContainer className="x-margin">
          <DarkTextStyles>${price}</DarkTextStyles>
        </TextContainer>
      </FlexRowContainer>
    </ItemContainer>
  );
};
export default ItemCard;

const ItemContainer = styled.div`
  border-top: 1px solid #d0af3d;
  .x-margin {
    justify-content: flex-end;
  }
  max-width: 860px;
  margin: 0 auto;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: space-between;
  padding: 24px;
`;

const ImgContainer = styled.div`
  width: 200px;
  height: auto;
  border-radius: 8px;
  border: transparent;
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const DarkTextStyles = styled.span`
  color: #000;
  font-family: "Caviar Dreams";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;
