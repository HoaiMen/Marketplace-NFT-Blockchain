import React from 'react';
// import Marketplace from '../abis/Marketplace.json';
// import Web3 from 'web3';

import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';

const ItemCart = ({ children, id, name, price, category, dateCreate, handleClick, image, itemAddress }) => {
    return (
        <Stack
            mt={4}
            borderWidth="1px"
            direction={{ base: 'column', md: 'row' }}
            bg={'gray.100'}
            boxShadow={'xl'}
            padding={4}>
            <Flex
                flex={1}
                w={{ base: '150px', md: '240px' }}
                bg="blue.200">
                <Image
                    objectFit="cover"
                    w='100%'
                    boxSize="100%"
                    src={image}
                />
            </Flex>
            <Stack
                flex={2}
                flexDirection="column"
                alignItems="start"
                px={2}
                w='200px'
                pt={1} spacing='-2'>

                <Heading fontSize={'xl'} fontFamily={'body'}>
                    {name}
                </Heading>
                <Text fontWeight='medium' color={'green.300'} >
                    Giá: {price} Ether
                </Text>
                <Text fontSize='sm' color={'gray.400'} >
                    ItemAddress: {itemAddress}
                </Text>

                <Text
                    fontSize='sm'
                    color={'gray.400'}
                >
                    Ngày tải lên: {dateCreate}
                </Text>
                <Text
                    fontSize='sm'
                    color={'gray.400'}
                >
                    Danh mục: {category}
                </Text>
            </Stack>
            <VStack flex={1} alignItems={'start'}>
                <Button w={'full'} variant={'solid'} colorScheme='green' onClick={handleClick}>
                    Xóa sản phẩm
                </Button>
                {children}
            </VStack>
        </Stack>
    );
}
export default ItemCart;

