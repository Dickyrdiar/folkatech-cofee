/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import { MobileNav } from "../../components/Layout"
import { useParams } from "react-router-dom"
import { useState } from "react";
import WithSubnavigation from "../../components/Navbar"
import {
 
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue,
  useColorModeValue,
  IconButton,
  Container,
  Icon
} from '@chakra-ui/react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi'



const DetailProcut = ({ rating }) => {
  const { params } = useParams()
  const [orderCount, setOrderCount] = useState(0);
  const response = localStorage.getItem("response")
  const {
    name,
    short_description,
    description,
    image
  } = response

  const handleAddOrder = () => {
    setOrderCount((prevCount) => prevCount + 1);
  };

  const handleRemoveOrder = () => {
    if (orderCount > 0) {
      setOrderCount((prevCount) => prevCount - 1);
    }
  };

  console.log('check id', params);

  const roundedRating = Math.round(rating * 2) / 2;
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
    <>
      <WithSubnavigation />
      <Container>
        <Stack p={10} direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1}>
            <Box
              // rounded={'lg'}
              // boxShadow={'lg'}
              border={"1px solid gray"}
              p={8}
              maxW={'715px'}
              maxH={'715px'}
              my={12}
            >
              <Image
                alt={'Login Image'}
                objectFit={'cover'}
                src={
                  'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
              />
            </Box>
          
          </Flex>
          <Flex p={10} flex={1}>
            <Stack spacing={6} maxW={'lg'}>
              <Heading lineHeight={"normal"} fontWeight={700} fontSize={'24px'}>{name}</Heading>
              <Text fontSize={"22px"} fontWeight={500}>{short_description}</Text>

              <Flex align="center" mb={4}>
                <IconButton
                  icon={<FiMinus />}
                  aria-label="Remove Order"
                  colorScheme="blue"
                  onClick={handleRemoveOrder}
                />
                <Text mx={2} fontWeight="bold">
                  {orderCount}
                </Text>
                <IconButton
                  icon={<FiPlus />}
                  aria-label="Add Order"
                  colorScheme="blue"
                  onClick={handleAddOrder}
                />
              </Flex>
            </Stack>
          </Flex> 
        </Stack>
      </Container>
     
    </>
  )
}

export default DetailProcut