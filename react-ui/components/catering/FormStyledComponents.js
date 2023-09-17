import { styled } from "styled-components";
import "../../src/App.css"

export const InputLabel = styled.span`
  color: #5a5252;
  font-family: "Caviar Dreams";
  font-size: 18px;
  font-style: normal;
  text-transform: capitalize;
  font-weight: bold;
  padding-bottom: 4px;
`;

export const InputLabelRequired = styled(InputLabel)`
    &::after {
    content: "*";
    margin-left: 4px;
    color: red;
  }
`;

export const InputField = styled.input`
  height: 34px;
  padding: 4px 4px 4px 8px;
  border-radius: 4px;
  border: 1px solid #5a5252;
`;

export const InputFieldCheckbox = styled.input`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: none;
    background-color: aliceblue;
    cursor: pointer;
`;

export const FieldContainer = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1 0 240px;
  `;

export const FielContainerRow = styled(FieldContainer)`
    flex-direction: row;
    gap: 8px;
    width: fit-content;
    justify-content: center;
    align-items: center;
    flex: 0;
`;

export const CustomFieldContainer = styled(FieldContainer)`
    width: 100%;
  @media (width >= 690px) {
    width: ${props => props.$size };
  }
`;


