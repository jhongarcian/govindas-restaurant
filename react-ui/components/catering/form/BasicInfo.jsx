import { styled } from "styled-components";
import { useState } from "react";
import {
  FieldContainer,
  InputField,
  InputLabel,
  CustomFieldContainer,
  InputLabelRequired,
  FielContainerRow,
  InputFieldCheckbox,
  CheckboxContainer,
} from "../FormStyledComponents";

const BasicInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [delivery, setDelivery] = useState(true);
  const [pickUp, setPickUp] = useState(false);
  const [location, setLocation] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [desiredDate, setDesiredDate] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [time, setTime] = useState("AM");
  const [howMany, setHowMany] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handlePreferenceChange = (e) => {
    if (e.target.value === "true") return;
    setDelivery(!delivery);
    setPickUp(!pickUp);
  };

  return (
    <BasicInfoContainer>
      <NameInputContainer>
        <FieldContainer>
          <InputLabelRequired>first name</InputLabelRequired>
          <InputField
            value={firstName}
            type="text"
            name="fname"
            onChange={handleChange(setFirstName)}
          />
        </FieldContainer>
        <FieldContainer>
          <InputLabelRequired>last name</InputLabelRequired>
          <InputField
            value={lastName}
            type="text"
            name="lname"
            onChange={handleChange(setLastName)}
          />
        </FieldContainer>
      </NameInputContainer>
      <SingleInputContainer>
        <CustomFieldContainer $size={"60%;"}>
          <InputLabelRequired>email</InputLabelRequired>
          <InputField
            value={email}
            type="email"
            onChange={handleChange(setEmail)}
          />
        </CustomFieldContainer>
      </SingleInputContainer>
      <SingleInputContainer>
        <CustomFieldContainer $size={"220px;"}>
          <InputLabelRequired>phone</InputLabelRequired>
          <InputField
            value={phone}
            type="tel"
            onChange={handleChange(setPhone)}
          />
        </CustomFieldContainer>
      </SingleInputContainer>
      <CheckboxContainer>
        <InputLabelRequired>preference</InputLabelRequired>
        <FielContainerRow>
          <InputFieldCheckbox
            checked={delivery}
            type="checkbox"
            onChange={handlePreferenceChange}
            value={delivery}
          />
          <InputLabel>Delivery</InputLabel>
        </FielContainerRow>
        <FielContainerRow>
          <InputFieldCheckbox
            checked={pickUp}
            type="checkbox"
            onChange={handlePreferenceChange}
            value={pickUp}
          />
          <InputLabel>Pick-up</InputLabel>
        </FielContainerRow>
      </CheckboxContainer>
      <NameInputContainer>
        <FieldContainer>
          <InputLabelRequired>street address</InputLabelRequired>
          <InputField
            value={location}
            type="text"
            onChange={handleChange(setLocation)}
            name="address"
          />
        </FieldContainer>
        <FieldContainer>
          <InputLabelRequired>Zipcode</InputLabelRequired>
          <InputField
            value={zipCode}
            type="text"
            name="zip"
            onChange={handleChange(setZipCode)}
          />
        </FieldContainer>
      </NameInputContainer>
      <NameInputContainer>
        <FieldContainer>
          <InputLabelRequired>desired date</InputLabelRequired>
          <InputField
            value={desiredDate}
            type="date"
            onChange={handleChange(setDesiredDate)}
          />
        </FieldContainer>
        <FieldContainer>
          <InputLabelRequired>desired time</InputLabelRequired>
          <FielContainerRow>
            <TimeInput
              placeholder="HH"
              type="text"
              maxLength={2}
              value={hours}
              onChange={handleChange(setHours)}
            />
            <span>:</span>
            <TimeInput
              placeholder="MM"
              type="text"
              maxLength={2}
              value={minutes}
              onChange={handleChange(setMinutes)}
            />
            <TimeSpaced
              type="text"
              value={time}
              onChange={handleChange(setTime)}
            >
              <option value={"PM"}>PM</option>
              <option value={"AM"}>AM</option>
            </TimeSpaced>
          </FielContainerRow>
        </FieldContainer>
      </NameInputContainer>
      <SingleInputContainer>
        <CustomFieldContainer $size={"100px;"}>
          <InputLabelRequired>how many</InputLabelRequired>
          <HowManyInput
            value={howMany}
            type="text"
            onChange={handleChange(setHowMany)}
            maxLength={5}
          />
        </CustomFieldContainer>
      </SingleInputContainer>
      <SingleInputContainer>
        <FieldContainer>
          <InputLabelRequired>special notes</InputLabelRequired>
          <SpecialNotes
            maxLength={150}
            value={specialNotes}
            type="text"
            onChange={handleChange(setSpecialNotes)}
          />
        </FieldContainer>
      </SingleInputContainer>
    </BasicInfoContainer>
  );
};
export default BasicInfo;

const BasicInfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const NameInputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (width >= 690px) {
    flex-wrap: nowrap;
  }
`;

const SingleInputContainer = styled.div`
  width: 100%;
`;

const TimeInput = styled.input`
  width: 50px;
  height: 34px;
  padding: 4px 8px;
  text-align: center;
`;

const HowManyInput = styled(TimeInput)`
  width: 80px;
`;

const TimeSpaced = styled.select`
  margin-left: 8px;
  width: 70px;
  height: 34px;
  padding: 4px 8px;
  text-align: center;
`;

const SpecialNotes = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  resize: none;
`;
