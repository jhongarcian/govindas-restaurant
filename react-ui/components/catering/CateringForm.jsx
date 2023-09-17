import { styled } from "styled-components";
import { Title } from "../index";
import { useState } from "react";
import { BasicInfo, Appetizers, Rice, Bread, Dal } from "./form/index";

const CateringForm = () => {
  const [formData, setFormData] = useState([
    {
      dal: {
        chana_masala: false,
        dal_fry: false,
        dal_makhani: false,
      },
    },
    {
      paneer_items: {
        paneer_tikka_masala: false,
        paneer_makhani: false,
        saag_paneer: false,
        matar_paneer: false,
      },
    },
    {
      vegetable_items: {
        baigan_bharatha: false,
        bhindi_masala: false,
        malai_kofta: false,
        mix_veggie_pakoras: false,
        vegetable_kurma: false,
        tofu_curry: false,
        vegetable_jalfrezi: false,
        vegetable_kofta: false,
        bbq_tofu: false,
        kadi_pakora: false,
        pasta: false,
      },
    },
    {
      desserts: {
        mango_halava: false,
        vanilla_halava: false,
        carob_halava: false,
        khir: false,
        custard_pudding: false,
        vanilla_cake: false,
        pineapple_cake: false,
        chocolate_cake: false,
      },
    },
    {
      optional_sides: {
        samosa: false,
        drink_lemonade: false,
        drink_mango_lassi: false,
        drink_chai: false,
      },
    },
    { note: "" },
  ]);
  return (
    <CateringContainer>
      <Wrapper>
        <Title
          info={"Catering request form"}
          title={"request a qoute today"}
          subtitle={"Suggest: At least 10-day notice"}
        />
        <Form>
          <SectionTitle>personal information</SectionTitle>
          <BasicInfo />
          <SectionTitle>appetizers / sides</SectionTitle>
          <Appetizers />
          <SectionTitle>rice</SectionTitle>
          <Rice />
          <SectionTitle>bread</SectionTitle>
          <Bread />
          <SectionTitle>dal</SectionTitle>
          <Dal />
          <SectionTitle>panner items</SectionTitle>
          <SectionTitle>vegetable Items</SectionTitle>
          <SectionTitle>desserts</SectionTitle>
          <SectionTitle>optional sides</SectionTitle>
        </Form>
      </Wrapper>
    </CateringContainer>
  );
};
export default CateringForm;

const CateringContainer = styled.section`
  height: 100%;
  width: 100%;
  background: #fff;
  padding: 44px 0;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: auto;
  @media (width >= 990px) {
    width: 60%;
  }
`;

const SectionTitle = styled.span`
  width: 100%;
  color: #d0af3d;
  font-family: "Caviar Dreams";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 10px;
  border-bottom: 1px solid #d0af3d;
  text-transform: uppercase;
`;
