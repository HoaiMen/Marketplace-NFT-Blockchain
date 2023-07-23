import React from 'react';
import {
    Box,
    CloseButton, AccordionPanel,
    Flex, AccordionItem, Accordion, AccordionButton, AccordionIcon,
    useColorModeValue, Text, CheckboxGroup, Checkbox, Stack
} from '@chakra-ui/react';
import SliderPrice from './SliderPrice'

const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            bg={useColorModeValue('white', 'gray.900')}
            // bg={'red.100'}
            display={{ base: 'none', md: "block" }}
            w={{ base: 'none', md: 60 }}
            pos='fixed'
            h="100%"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Box px='5'>
                <Text fontWeight='bold' fontSize='lg'>Filters</Text>
                <Accordion defaultIndex={[0]} allowMultiple >
                    <AccordionItem ml='-4'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Danh mục
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} pt='-2'>
                            <CheckboxGroup colorScheme='green' defaultValue={['all']}>
                                <Stack pl={6} mt={1} spacing={1} ml='-2'>
                                    <Checkbox value='all'>Tất cả</Checkbox>
                                    <Checkbox value='sasuke'>Đồ nội thất</Checkbox>
                                    <Checkbox value='kakashi'>Thiết bị công nghệ</Checkbox>
                                    <Checkbox value='kaka'>Phụ kiện điện tử</Checkbox>
                                    <Checkbox value='kashi'>Thực phẩm</Checkbox>
                                    <Checkbox value='kahi'>Khác</Checkbox>

                                </Stack>
                            </CheckboxGroup>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem ml='-4'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Price
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={8} pt='-3'>
                            <SliderPrice />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </Box>
        </Box>
    );
};

export default SidebarContent;