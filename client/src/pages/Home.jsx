import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import CardProduct from "../components/CardProduct";
import { Box, Flex, Select, Text, Stack, Input, InputRightElement, InputGroup, Button } from '@chakra-ui/react';
const options = ['Tất cả', 'New', 'Hot', 'On Sale'];
const Home = () => {
    return (
        <HomeLayout>
            <Box >
                <Flex
                    h={12}
                    w='full'
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    mb={4}
                >
                    <Flex w='60%'>
                        <Stack direction={'row'} w='full'  >
                            <InputGroup w='full'>
                                <Input
                                    bg='white'
                                    pr="4.5rem"
                                    type='text'
                                    placeholder="Enter password"
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        colorScheme="green"
                                        h="1.75rem"
                                        size="sm"
                                    // onClick={handleClick}
                                    >
                                        Search
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Stack>
                    </Flex>
                    <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
                        <Stack direction={'row'} alignItems={'center'} >
                            <Box mt='4' w='50%' >
                                <Text fontWeight={'medium'} fontSize='md'>Xắp sếp theo: </Text>
                            </Box>
                            <Select
                                w='200px'
                                bg={'white'}
                            // onChange={(e) => handleChange(e)}
                            >
                                {options.map((option, index) => (
                                    <option key={index}>{option}</option>
                                ))}
                            </Select>
                        </Stack>
                    </Flex>
                </Flex>
                <CardProduct />
            </Box>
        </HomeLayout>
    )
}
export default Home