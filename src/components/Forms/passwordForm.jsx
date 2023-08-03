/* eslint-disable react/prop-types */
import { FormControl, Input, InputGroup, InputRightElement, Button, Box } from "@chakra-ui/react";
import { styled } from "styled-components";

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

const FormInputPassword = ({placeholder, showPassword, value, onChange, onClick}) => {
  return (
    <FormControl mb={4}>
    <InputGroup>
      <StyledInput
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <InputRightElement>
        <Button h='66px' padding={'8px'} size={'sm'} mt={1} onClick={onClick}>
          {showPassword ? <Box color={'#730C07'} fontSize="16px" fontWeight={400}>Hide</Box> :  <Box color={'#730C07'} fontSize="16px" fontWeight={400}>Show</Box>}
        </Button>
      </InputRightElement>
    </InputGroup>
  </FormControl>
  );
};

export default FormInputPassword;