/* eslint-disable react/prop-types */

import { Box, Flex, Text, Icon, Stack, useColorModeValue } from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Card = ({ title, description, rating, onClick, image, disabled, index, clicked }) => {
  const roundedRating = Math.round(rating * 2) / 2;

  // Generate an array of star icons based on the rating
  const starIcons = Array.from({ length: 5 }, (_, index) => {
    if (index + 1 <= roundedRating) {
      return <Icon key={index} as={FaStar} color="yellow.400" />;
    } else if (index + 0.5 === roundedRating) {
      return <Icon key={index} as={FaStarHalfAlt} color="yellow.400" />;
    } else {
      return <Icon key={index} as={FaRegStar} color="gray.300" />;
    }
  });

  return (
   <Stack spacing={8} mx={'auto'} maxW={'100vh'} py={12} px={6}>
      <Box 
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
        maxW={'20rem'}
        my={12}
        onClick={onClick}
        alignContent={'center'}
        style={{
          padding: "11px 10px",
          background: disabled ? "#F7F9FF" : "#FFFFFF",
          border: index === clicked ? "1px solid #730C07" : "1px solid #BCC8E7",
          borderRadius: 8,
          cursor: "pointer",
          boxShadow: index === clicked ? "#730C07 0px 0px 0px 3px" : "none",
        }}
      >
         {/* <Image src={image} alt={title} /> */}
        <img src={image} alt={title} />
        <Text fontSize="md" fontWeight="bold">
          {title}
        </Text>
        <Text mt="2" color="gray.600">
          {description}
        </Text>
        <Flex align={'center'} mt="3" color="yellow.400">
          {starIcons}
        </Flex>
      </Box>
   </Stack>
  );
};

export default Card;
