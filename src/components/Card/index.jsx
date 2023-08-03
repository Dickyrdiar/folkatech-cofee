/* eslint-disable react/prop-types */

import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Card = ({ title, description, rating }) => {
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
    <Box borderWidth="1px" borderRadius="lg" p="4">
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text mt="2" color="gray.600">
        {description}
      </Text>
      <Flex mt="3" color="yellow.400">
        {starIcons}
      </Flex>
    </Box>
  );
};

export default Card;
