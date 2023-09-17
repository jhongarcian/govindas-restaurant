import { useState } from "react";
import {
  CheckboxContainer,
  FielContainerRow,
  InputFieldCheckbox,
  InputLabel,
} from "../FormStyledComponents";

const Rice = () => {
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

  const handleChange = (id) => {
    const updatedAppetizers = [...rice];

    const target = updatedAppetizers.findIndex((item) => item.id === id);

    updatedAppetizers[target].value = !updatedAppetizers[target].value;

    setRice(updatedAppetizers);
  };

  const input_fields =
    rice &&
    rice.length &&
    rice.map((item) => {
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
export default Rice;
