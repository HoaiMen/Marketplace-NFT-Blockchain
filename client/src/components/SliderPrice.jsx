import React from "react";
import { Box, VStack, InputGroup, InputLeftAddon, Input, Slider, NumberInput, NumberInputField, SliderThumb, SliderMark, SliderTrack, Tooltip, SliderFilledTrack } from "@chakra-ui/react";

const SliderPrice = () => {
    const [sliderValue, setSliderValue] = React.useState(10)
    const [showTooltip, setShowTooltip] = React.useState(false)
    const handleChange = (value) => { setSliderValue(value) }
    return (
        <Box>
            <Slider
                id='slider'
                defaultValue={0}
                min={0}
                max={10}
                colorScheme='green'
                value={sliderValue}
                onChange={handleChange}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderMark value={0} mt='1' ml='-1' fontSize='sm'>
                    0
                </SliderMark>
                <SliderMark value={2} mt='1' ml='-1' fontSize='sm'>
                    2
                </SliderMark>
                <SliderMark value={4} mt='1' ml='-1' fontSize='sm'>
                    4
                </SliderMark>
                <SliderMark value={6} mt='1' ml='-1' fontSize='sm'>
                    6
                </SliderMark>
                <SliderMark value={8} mt='1' ml='-1' fontSize='sm'>
                    8
                </SliderMark>
                <SliderMark value={10} mt='1' ml='-1' fontSize='sm'>
                    10
                </SliderMark>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg='teal.500'
                    color='white'
                    placement='top'
                    isOpen={showTooltip}
                    label={`${sliderValue}%`}
                >
                    <SliderThumb />
                </Tooltip>
            </Slider>
            <VStack py='8'>
                <InputGroup>
                    <InputLeftAddon children='Min' />
                    <Input type='tel' defaultValue={0} disabled />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='Max' />
                    {/* <Input type='text' placeholder='Max' value={sliderValue} onChange={handleChange} /> */}
                    <NumberInput maxW='full' mr='0rem' value={sliderValue} onChange={handleChange}>
                        <NumberInputField />
                    </NumberInput>
                </InputGroup>



            </VStack>
        </Box>

    )
}

export default SliderPrice