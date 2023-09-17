import { useState } from "react";
import {
  CheckboxContainer,
  FielContainerRow,
  InputFieldCheckbox,
  InputLabel,
} from "../FormStyledComponents";

const Paneer = () => {
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
      id: 3,
      name: "matar paneer (GF) - Paneer Cheese with green peas in creamy sauce",
      value: false,
    },
  ]);

  const handleChange = (id) => {
    const updatedAppetizers = [...paneer];

    const target = updatedAppetizers.findIndex((item) => item.id === id);

    updatedAppetizers[target].value = !updatedAppetizers[target].value;

    setPaneer(updatedAppetizers);
  };

  const input_fields =
    paneer &&
    paneer.length &&
    paneer.map((item) => {
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
export default Paneer;
