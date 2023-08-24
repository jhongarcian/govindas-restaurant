import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import ItemCard from "../components/success/ItemCard";
import Title from "../components/title/Title";
import "../src/App.css";

const Success = () => {
  const [sessionInfo, setSessionInfo] = useState({});
  const navigate = useNavigate();

  const handleClick = () => navigate("/")

  // Params
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionParams = searchParams.get("session_id");
  const session = {
    id: sessionParams,
  };
  const jsonString = JSON.stringify(session);

  useEffect(() => {
    retriveCheckoutInfo(jsonString);

    return () => setSessionInfo([]);
  }, [sessionParams]);

  const retriveCheckoutInfo = async (body) => {
    const callOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body,
    };
    try {
      const response = await fetch(
        "http://localhost:8080/retrive-checkout-session",
        callOptions
      );
      if (response.ok) {
        const data = await response.json();
        setSessionInfo(data);
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SuccessContainer>
      <WrapContainer className="y-wrap y-space">
        <FlexColContainer>
          <Title
            title={"Thanks for ordering"}
            subtitle={
              "We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!"
            }
            info={"Payment successful"}
          />
        </FlexColContainer>
        <ItemProductsContainer>
          {sessionInfo && sessionInfo.id && (
            <ItemCard
              name={"Gift certificate"}
              price={sessionInfo.metadata.price / 100}
              image={sessionInfo.metadata.image}
            />
          )}
        </ItemProductsContainer>
        <FlexColContainer>
          <WrapAmount>
            <FlexRowContainer>
              <SpanStyles>Sub-total:</SpanStyles>
              <SpanStyles>
                $
                {sessionInfo &&
                  sessionInfo.id &&
                  sessionInfo.amount_subtotal / 100}
              </SpanStyles>
            </FlexRowContainer>
            <FlexRowContainer>
              <SpanStyles>Tax:</SpanStyles>
              <SpanStyles>$0</SpanStyles>
            </FlexRowContainer>
            <BorderFlexRowContainer>
              <DarkTextStyles>Total amount:</DarkTextStyles>
              <DarkTextStyles>
                $
                {sessionInfo &&
                  sessionInfo.id &&
                  sessionInfo.amount_total / 100}
              </DarkTextStyles>
            </BorderFlexRowContainer>
          </WrapAmount>
        </FlexColContainer>
        <ButtonContainer>
          <Button onClick={handleClick} type="button">Continue Shopping</Button>
        </ButtonContainer>
      </WrapContainer>
    </SuccessContainer>
  );
};
export default Success;

const SuccessContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const WrapContainer = styled.div`
  padding: 40px 0;
`;

const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
  width: 100%;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
`;

const BorderFlexRowContainer = styled(FlexRowContainer)`
  border-top: 1px solid #d0af3d;
`;

const ItemProductsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const WrapAmount = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-top: 1px solid #d0af3d;
  border-bottom: 1px solid #d0af3d;
  max-width: 860px;
  padding: 24px;
`;

const SpanStyles = styled.span`
  color: #5a5252;
  text-align: left;
  font-family: "Josefin Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
`;

const HeadingStyles = styled.h1`
  color: #000;
  font-family: "Caviar Dreams";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.75px;
  text-transform: capitalize;
`;

const SubHeadingStyles = styled.h2`
  color: #d0af3d;
  text-align: left;
  font-family: "Josefin Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

const DarkTextStyles = styled.span`
  color: #000;
  font-family: "Caviar Dreams";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  padding-top: 24px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`;

const Button = styled.button`
  padding: 18px 24px;
  flex-shrink: 0;
  color: #fff;
  background: #d0af3d;
  font-family: Open Sans Condensed;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  border: 0px;
  border-radius: 8px;

  &:hover {
    box-shadow: 0px 0px 1px 1px #d0b03d;
  }
`;
