import React, { useContext } from 'react';
import {
  Box,
  CloseButton,
  AccordionPanel,
  Flex,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  useColorModeValue,
  Text,
  Button,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import SliderPrice from './SliderPrice';
import { HomeContext } from '../contexts/HomeContext';

const tabs = [
  'Tất cả',
  'Đồ nội thất',
  'Thiết bị công nghệ',
  'Phụ kiện',
  'Thực phẩm',
  'Thời trang',
  'Khác',
];
const SidebarContent = ({ onClose, ...rest }) => {
  const { type, setType, price, setPrice } = useContext(HomeContext);
  return (
    <Box
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      bg={useColorModeValue('white', 'gray.900')}
      // bg={'red.100'}
      display={{ base: 'none', md: 'block' }}
      w={{ base: 'none', md: 60 }}
      pos="fixed"
      h="100%"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box px="5">
        <Text fontWeight="bold" fontSize="lg">
          Filters
        </Text>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem ml="-4">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Danh mục
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} pt="-2">
              <RadioGroup colorScheme="green" defaultValue={type}>
                <Stack pl={6} mt={1} spacing={1} ml="-2">
                  {tabs.map((tab, index) => (
                    <Radio key={index} onChange={() => setType(tab)} value={tab}>
                      {tab}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem ml="-4">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={8} pt="-3">
              <SliderPrice />
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
        <Button w="full" my="4" variant="solid" colorScheme="green" onClick={() => { setType(tabs[0]); setPrice(10) }}>
          Xóa lựa chọn
        </Button>
      </Box>
    </Box >
  );
};

export default SidebarContent;
