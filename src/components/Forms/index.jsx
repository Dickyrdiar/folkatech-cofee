/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, FormControl, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import styled from "styled-components";

const StyledInput = styled(Input)`
  border: 2px solid #bcc8e7;
  border-radius: 6px;
  padding: 10px;
  font-size: 15px;
  color: #2b2f3c;
  width: 25rem;
  margin-top: 14px;

  @media (max-width: 765px) {
    max-width: 100%;
  }
`;

const FormInput = ({value, placeholder, type, onChange, handleClick, show}) => {
  return (
    <InputGroup>
      <FormControl>
        {/* <FormLabel>{label}</FormLabel> */}
        <StyledInput
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
        />
      </FormControl>
    </InputGroup>
  );
};

export default FormInput;