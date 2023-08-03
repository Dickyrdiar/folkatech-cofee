/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import {
  Box,
  Stack,
  Checkbox,
  CheckboxGroup,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue
} from '@chakra-ui/react';

const Sidebar = ({ filters, setFilters }) => {
  const handlePriceChange = (value) => {
    setFilters({ ...filters, price: value });
  };

  const handleCheckboxChange = (name, checkedItems) => {
    setFilters({ ...filters, [name]: checkedItems });
  };

  return (
    <Box p={4}>
      <Stack spacing={4}>
        {/* Price Slider */}
        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Slider defaultValue={filters.price} min={0} max={100} step={1} onChange={handlePriceChange}>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          {/* Origin Filter */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <Box
                    rounded={'sm'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'sm'}
                    maxW={'100vh'}
                  >
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Origin
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Box>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckboxGroup colorScheme="green" value={filters.origin} onChange={(checkedItems) => handleCheckboxChange('origin', checkedItems)}>
                    <Stack spacing={2}>
                      <Checkbox value="Africa">Africa</Checkbox>
                      <Checkbox value="Asia">Asia</Checkbox>
                      <Checkbox value="Central America">Central America</Checkbox>
                      {/* Add more origin options as needed */}
                    </Stack>
                  </CheckboxGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          {/* Species Filter */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Species
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckboxGroup colorScheme="purple" value={filters.species} onChange={(checkedItems) => handleCheckboxChange('species', checkedItems)}>
                    <Stack spacing={2}>
                      <Checkbox value="Arabica">Arabica</Checkbox>
                      <Checkbox value="Robusta">Robusta</Checkbox>
                      {/* Add more species options as needed */}
                    </Stack>
                  </CheckboxGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          {/* Roast Level Filter */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Roast Level
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckboxGroup colorScheme="blue" value={filters.roastLevel} onChange={(checkedItems) => handleCheckboxChange('roastLevel', checkedItems)}>
                    <Stack spacing={2}>
                      <Checkbox value="Light">Light</Checkbox>
                      <Checkbox value="Medium">Medium</Checkbox>
                      <Checkbox value="Dark">Dark</Checkbox>
                      {/* Add more roast level options as needed */}
                    </Stack>
                  </CheckboxGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          {/* Tested Filter */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Tested
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckboxGroup colorScheme="teal" value={filters.tested} onChange={(checkedItems) => handleCheckboxChange('tested', checkedItems)}>
                    <Stack spacing={2}>
                      <Checkbox value="Yes">Yes</Checkbox>
                      <Checkbox value="No">No</Checkbox>
                      {/* Add more tested options as needed */}
                    </Stack>
                  </CheckboxGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          {/* Processing Filter */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Processing
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckboxGroup colorScheme="orange" value={filters.processing} onChange={(checkedItems) => handleCheckboxChange('processing', checkedItems)}>
                    <Stack spacing={2}>
                      <Checkbox value="Washed">Washed</Checkbox>
                      <Checkbox value="Natural">Natural</Checkbox>
                      <Checkbox value="Honey">Honey</Checkbox>
                      {/* Add more processing options as needed */}
                    </Stack>
                  </CheckboxGroup>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Stack>
    </Box>
  );
};

export default Sidebar;
