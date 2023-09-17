import { useState } from "react";
import {
  CheckboxContainer,
  FielContainerRow,
  InputFieldCheckbox,
  InputLabel,
} from "../FormStyledComponents";

const Bread = () => {
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

  const handleChange = (id) => {
    const updatedAppetizers = [...bread];

    const target = updatedAppetizers.findIndex((item) => item.id === id);

    updatedAppetizers[target].value = !updatedAppetizers[target].value;

    setBread(updatedAppetizers);
  };

  const input_fields =
    bread &&
    bread.length &&
    bread.map((item) => {
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
export default Bread;
