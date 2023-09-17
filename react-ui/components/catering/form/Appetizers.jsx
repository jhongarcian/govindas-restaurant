import { useState } from "react";
import {
  CheckboxContainer,
  FielContainerRow,
  InputFieldCheckbox,
  InputLabel,
} from "../FormStyledComponents";

const Appetizers = () => {
  const [appetizers, setAppetizers] = useState([
    { id: 1, name: "fresh salad w/ home-made dressings", value: false },
    {
      id: 2,
      name: "raita - (yogurt mix with cucumbers and herbs",
      value: false,
    },
    { id: 3, name: "papad & chutneys - tamarind & green", value: false },
  ]);

  const handleChange = (id) => {
    const updatedAppetizers = [...appetizers];

    const target = updatedAppetizers.findIndex((item) => item.id === id);

    updatedAppetizers[target].value = !updatedAppetizers[target].value;

    setAppetizers(updatedAppetizers);
  };

  const input_fields =
    appetizers &&
    appetizers.length &&
    appetizers.map((item) => {
      return (
        <FielContainerRow key={item.id}>
          <InputFieldCheckbox
            checked={item.value}
            type="checkbox"
            onChange={() => handleChange(item.id)}
            value={item.value}
          />
          <InputLabel>{item.name}</InputLabel>
        </FielContainerRow>
      );
    });

  return <CheckboxContainer>{input_fields}</CheckboxContainer>;
};
export default Appetizers;
