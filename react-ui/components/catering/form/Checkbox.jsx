import {
  CheckboxContainer,
  FielContainerRow,
  InputFieldCheckbox,
  InputLabel,
} from "../FormStyledComponents";

const Checkbox = ({ items, setItems }) => {
  const handleChange = (id) => {
    const updatedAppetizers = [...items];

    const target = updatedAppetizers.findIndex((item) => item.id === id);

    updatedAppetizers[target].value = !updatedAppetizers[target].value;

    setItems(updatedAppetizers);
  };

  const input_fields =
    items &&
    items.length &&
    items.map((item) => {
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
export default Checkbox;
