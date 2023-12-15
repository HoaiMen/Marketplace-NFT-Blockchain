import React, { useContext } from 'react';
import {
  Box,
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Slider,
  NumberInput,
  NumberInputField,
  SliderThumb,
  SliderMark,
  SliderTrack,
  Tooltip,
  SliderFilledTrack,
} from '@chakra-ui/react';
import { HomeContext } from '../contexts/HomeContext';

const numbers = [0, 2, 4, 6, 8, 10];
const SliderPrice = () => {
  const { price, setPrice } = useContext(HomeContext);
  // const [sliderValue, setSliderValue] = React.useState(10)
  const [showTooltip, setShowTooltip] = React.useState(false);
  const handleChange = (value) => {
    setPrice(value);
  };
  return (
    <Box>
      <Slider
        id="slider"
        defaultValue={0}
        min={0}
        max={10}
        colorScheme="green"
        value={price}
        onChange={handleChange}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {numbers.map((number, index) => (
          <SliderMark
            key={index}
            onChange={() => setPrice(number)}
            value={number}
            mt="1"
            ml="-1"
            fontSize="sm"
          >
            {number}
          </SliderMark>
        ))}
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${price}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
      <VStack py="8">
        <InputGroup>
          <InputLeftAddon children="Min" />
          <Input type="tel" defaultValue={0} disabled />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="Max" />
          {/* <Input type='text' placeholder='Max' value={sliderValue} onChange={handleChange} /> */}
          <NumberInput maxW="full" mr="0rem" value={price} onChange={handleChange}>
            <NumberInputField />
          </NumberInput>
        </InputGroup>


      </VStack>
    </Box>
  );
};

export default SliderPrice;
