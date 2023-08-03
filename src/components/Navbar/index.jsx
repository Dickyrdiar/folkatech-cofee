/* eslint-disable no-unused-vars */
// Navbar.js
import React from 'react';
import { Flex, Heading, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex bg="white" p={4}>
      <Heading as="h1" size="md">
        Coffee Shop
      </Heading>
      <Spacer />
      {/* Add any other elements you want in the navbar */}
    </Flex>
  );
};

export default Navbar;
