import { styled } from "styled-components";
import { Title } from "../index";
import { useState } from "react";
import { BasicInfo, Checkbox } from "./form/index";

const CateringForm = () => {
  const [personalInformation, setPersonalInformation] = useState({});
  const [rice, setRice] = useState([
    {
      id: 1,
      name: "veggie pulao rice - [V, GF] rice, vegetables, oil",
      value: false,
    },
    {
      id: 2,
      name: "veggie rice biryani - [V, GF] rice, vegetables, spices, oil",
      value: false,
    },
    {
      id: 3,
      name: "jeera rice [V, GF] rice, cumin seeds, oil",
      value: false,
    },
  ]);
  const [bread, setBread] = useState([
    {
      id: 1,
      name: "puri - puffed flat bread (fried)",
      value: false,
    },
    {
      id: 2,
      name: "roti - flat tortilla-like bread (not-fried)",
      value: false,
    },
  ]);
  const [paneer, setPaneer] = useState([
    {
      id: 1,
      name: "Paneer Tikka Masala - Paneer Cheese cubes, Butter, Tomatoes, Bell Peppers",
      value: false,
    },
    {
      id: 2,
      name: "Paneer Makhni - Paneer Cheese Cubes, Butter, Tomatoes in creamy sauce",
      value: false,
    },
    {
      id: 3,
      name: "Saag paneer (GF) - Paneer Cheese with Spinach in creamy sauce",
      value: false,
    },
    {
      id: 4,
      name: "matar paneer (GF) - Paneer Cheese with green peas in creamy sauce",
      value: false,
    },
  ]);
  const [dal, setDal] = useState([
    {
      id: 1,
      name: "chana masala - [V,GF] chickpeas cooked with oil and spices",
      value: false,
    },
    {
      id: 2,
      name: "dal fry - [V,GF] chana dal and moong dal cooked with ginger and oil",
      value: false,
    },
    {
      id: 3,
      name: "dal makhani - [V,GF] black urad and rajma dal cooked with oil",
      value: false,
    },
  ]);
  const [appetizers, setAppetizers] = useState([
    { id: 1, name: "fresh salad w/ home-made dressings", value: false },
    {
      id: 2,
      name: "raita - (yogurt mix with cucumbers and herbs",
      value: false,
    },
    { id: 3, name: "papad & chutneys - tamarind & green", value: false },
  ]);
  const [vegetables, setVegetables] = useState([
    {
      id: 1,
      name: "Baingan Bharatha (GF) - Eggplant/Tomatoes cooked with Yogurt",
      value: false,
    },
    {
      id: 2,
      name: "Bhindi Masala (Vegan, GF) - Okra and Potatoes",
      value: false,
    },
    {
      id: 3,
      name: "Malai Kofta - Cauliflower / Carrot / Potatoes / Tomatoes / Cheese cooked with Oil",
      value: false,
    },
    {
      id: 4,
      name: "Mix Vegetable Pakoras (Vegan, GF) - Vegetable with Chickpeas Flour battered/fried",
      value: false,
    },
    {
      id: 5,
      name: "Navaratan Korma (GF) - Assorted Vegetables in rich creamy sauce",
      value: false,
    },
    {
      id: 6,
      name: "Tofu Curry (Vegan, GF) - Tofu cooked with coconut milk and Chickpeas Flour",
      value: false,
    },
    {
      id: 7,
      name: "Vegetable Jalfrezi (Vegan, GF) - Mixed Vegetables, Vegetable oil, Spices",
      value: false,
    },
    {
      id: 8,
      name: "Vegetable Kofta (Vegan, GF) - Vegetables, Chickpea Flour, Oil",
      value: false,
    },
    {
      id: 9,
      name: "BBQ Tofu (Vegan, GF) - Tofu cooked in Tomato sauce",
      value: false,
    },
    {
      id: 10,
      name: "Kadi Pakora - Chickpea flour fried dumplings in curry gravy",
      value: false,
    },
    { id: 11, name: "Pasta", value: false },
  ]);

  const [desserts, setDesserts] = useState([
    {
      id: 1,
      name: "Fruit Halava (Vegan) - Semolina, Sugar, Fruit, Vegan Butter - Mango",
      value: false,
    },
    {
      id: 2,
      name: "Fruit Halava (Vegan) - Semolina, Sugar, Fruit, Vegan Butter - Vanilla",
      value: false,
    },
    {
      id: 3,
      name: "Fruit Halava (Vegan) - Semolina, Sugar, Fruit, Vegan Butter - Carob",
      value: false,
    },
    {
      id: 4,
      name: "Khir (Sweet Rice) - (GF) Rice with Milk, Sugar",
      value: false,
    },
    { id: 5, name: "Cake - Vanilla - eggless", value: false },
    { id: 6, name: "Cake - Pineapple - eggless", value: false },
    { id: 7, name: "Cake - Chocolate - eggless", value: false },
  ]);

  const [snacksAndDrinks, setSnacksAndDrinks] = useState([
    { id: 1, name: "Samosa", value: false },
    { id: 2, name: "Drink: Ginger-Mint Lemonade", value: false },
    { id: 3, name: "Drink: Iced Tea", value: false },
    { id: 4, name: "Drink: Chai", value: false },
    { id: 5, name: "Mango Lassi", value: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(appetizers);
    console.log(personalInformation);
  };

  const handleAction = (data) => {
    setPersonalInformation(data);
  };

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
          <BasicInfo action={handleAction} />
          <SectionTitle>appetizers / sides</SectionTitle>
          <Checkbox items={appetizers} setItems={setAppetizers} />
          <SectionTitle>rice</SectionTitle>
          <Checkbox items={rice} setItems={setRice} />
          <SectionTitle>bread</SectionTitle>
          <Checkbox items={bread} setItems={setBread} />
          <SectionTitle>dal</SectionTitle>
          <Checkbox items={dal} setItems={setDal} />
          <SectionTitle>panner items</SectionTitle>
          <Checkbox items={paneer} setItems={setPaneer} />
          <SectionTitle>vegetable Items</SectionTitle>
          <Checkbox items={vegetables} setItems={setVegetables} />
          <SectionTitle>desserts</SectionTitle>
          <Checkbox items={desserts} setItems={setDesserts} />
          <SectionTitle>optional sides</SectionTitle>
          <Checkbox items={snacksAndDrinks} setItems={setSnacksAndDrinks} />
          <SubmitFormButton type="submit" onClick={handleSubmit}>
            request quote
          </SubmitFormButton>
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

const SubmitFormButton = styled.button`
  background: #d0af3d;
  border-radius: 999px;
  box-shadow: #d0af3d 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
    NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
    EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
  text-transform: capitalize;
  margin: 0 auto;
  &:hover {
    background: #b99d35;
  }
`;
