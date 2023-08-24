import { useState } from "react";
import { styled } from "styled-components";
import { IoAdd } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import Title from "../title/Title";
import "../../src/App.css";

const PostMenu = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileReadyToSend, setIsFileReadyToSend] = useState(false);
  const [isPostSuccessful, setIsPostSuccessul] = useState(false);
  const [items, setItems] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
    { id: 9, value: "" },
    { id: 10, value: "" },
    { id: 11, value: "" },
    { id: 12, value: "" },
  ]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setIsFileReadyToSend(!!file);
  };

  const handleInputChange = (event, index) => {
    const newInputsValues = [...items];
    newInputsValues[index].value = event.target.value;
    setItems(newInputsValues);
  };

  const handleAddInput = () => {
    const newItems = [...items];
    const prevId = newItems.pop().id;
    setItems((prevItemValues) => [
      ...prevItemValues,
      { id: prevId + 1, value: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isInputFilled = items.some((item) => item.value === "");

    if (isFileReadyToSend && !isInputFilled) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      items.forEach((item) => {
        formData.append(`input_${item.id}`, item.value);
      });

      try {
        const options = {
          method: "POST",
          body: formData,
        };
        const response = await fetch("http://localhost:8080/upload", options);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setIsPostSuccessul(true);
          setSelectedFile(null);
          setItems(items.map((item) => ({ ...item, value: "" })));
          setIsFileReadyToSend(false);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setIsFileReadyToSend(false);
  };

  const renderLabel = (index) => {
    if (index === 0) return "Header";
    if (index === 1) return "Date";
    return `Food item ${index - 1}`;
  };

  const inputClass = (index) => {
    if (index === 0) return "full-width";
    return "strict-width";
  };

  const inputs =
    items &&
    items.length &&
    items.map((input, index) => {
      return (
        <InputContainer className={inputClass(index)} key={input.id}>
          <Label>
            {renderLabel(index)}
            <Input
              required
              type="text"
              value={input.value}
              onChange={(e) => handleInputChange(e, index)}
            ></Input>
          </Label>
        </InputContainer>
      );
    });

  return (
    <BackGroundContainer>
      {isPostSuccessful && <FileName>Your tweet has been posted!</FileName>}
      {!isPostSuccessful && (
        <FormContainer>
          <Title
            info={"Twitter post"}
            title={"Daily Tweet"}
            subtitle={"Please fill out all the information below"}
          />
          <Wrapper>{inputs}</Wrapper>
          <Button type="button" onClick={handleAddInput}>
            <IoAdd />
          </Button>
          <FileContainer>
            <FileInput
              required
              accept="image/jpeg, image/png, image/jpg"
              type="file"
              onChange={handleFileChange}
              id="fileInput"
            />
            <CustomInputFile
              $readyToSend={isFileReadyToSend}
              htmlFor="fileInput"
            ></CustomInputFile>
            <FileName>
              {selectedFile ? `${selectedFile.name}` : "No file choosen"}
            </FileName>
            {isFileReadyToSend && (
              <RemoveButton
                $readyToSend={isFileReadyToSend}
                type="button"
                onClick={handleRemove}
              >
                <CiCircleRemove />
              </RemoveButton>
            )}
          </FileContainer>
          <SendTweet type="submit" onClick={handleSubmit}>
            Send Tweet
          </SendTweet>
        </FormContainer>
      )}
    </BackGroundContainer>
  );
};
export default PostMenu;

const BackGroundContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Caviar Dreams Bold";
`;

const FormContainer = styled.form`
  width: 90%;
  height: 100%;
  max-width: 800px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px;
`;

const InputContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 6px;
  position: relative;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .full-width {
    width: 100%;
  }
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 34px;
  border-radius: 8px;
  border: 1px solid grey;
  padding: 10px;
  -webkit-box-shadow: 5px 6px 6px -6px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 6px 6px -6px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 6px 6px -6px rgba(0, 0, 0, 0.2);
  &:focus {
    border-color: #084cdf;
    outline: none;
  }
`;

const FileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  font-family: "Caviar Dreams Bold";
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
`;

const FileInput = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

const CustomInputFile = styled.label`
  position: relative;
  width: 180px;
  height: 50%;
  border: none;
  background: #1976d2;

  padding: 10px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  font-family: "Caviar Dreams Bold";
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    background: #1976d2c8;
  }

  &::after {
    content: "Choose File";
    width: 100%;
    text-align: center;
    font-family: "Caviar Dreams Bold";
    height: fit-content;
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    font-size: 20px;
    ${(props) => props.$readyToSend && "content: 'Ready!';"}
    ${(props) => props.$readyToSend && "color: #fff;"}
    display: inline-block;
  }

  &::before {
    content: "";
    width: 220px;
    background: #4caf50;
    position: absolute;
    left: -200%;
    opacity: 0;
    transition: left 0.8s ease-in-out;
    height: 100px;
    ${(props) => props.$readyToSend && "left: 0%;"}
    ${(props) => props.$readyToSend && "opacity: 1;"}
  }
`;

const FileName = styled.span`
  font-size: 20px;
  color: #000;
  width: fit-content;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  font-size: 25px;
  font-family: "Caviar Dreams Bold";
  margin: 0 auto;
  background: #1976d2;
  color: #fff;
  -webkit-box-shadow: 5px 6px 62px -6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 5px 6px 62px -6px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 6px 62px -6px rgba(0, 0, 0, 0.3);
  &:hover {
    background: #1976d2c8;
    transform: translateY(-2px);
    transition: transform 0.2s ease-in-out;
  }
`;

const SendTweet = styled(Button)`
  width: 200px;
  height: 40px;
  border-radius: 16px;
  background: #1976d2;

  &:hover {
    background: #1976d2c8;
  }
`;

const RemoveButton = styled(Button)`
  opacity: 0;
  ${(props) => props.$readyToSend && "opacity: 1;"}
  transition: opacity 0.9s ease-in-out;
  background: #f54646fc;
  height: 35px;
  width: 35px;
  margin: 0;
  &:hover {
    background: #f54646a1;
    transform: translateY(-2px);
    transition: transform 0.2s ease-in-out;
  }
`;
