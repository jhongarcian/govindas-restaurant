import { useState } from "react";
import {
  CheckboxContainer,
  FielContainerRow,
  InputFieldCheckbox,
  InputLabel,
} from "../FormStyledComponents";

const Dal = () => {
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

  const handleChange = (id) => {
    const updatedAppetizers = [...dal];

    const target = updatedAppetizers.findIndex((item) => item.id === id);

    updatedAppetizers[target].value = !updatedAppetizers[target].value;

    setDal(updatedAppetizers);
  };

  const input_fields =
    dal &&
    dal.length &&
    dal.map((item) => {
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
export default Dal;
