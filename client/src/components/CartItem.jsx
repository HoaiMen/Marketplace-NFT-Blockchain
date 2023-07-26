import React, { useEffect, useState } from 'react';
import Marketplace from '../abis/Marketplace.json';
import Web3 from 'web3';

import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';

const ItemCart = ({ id, name, price, category, dateCreate, handleClick, image, handlePurchase }) => {
    return (
        <Stack
            mt={4}
            borderWidth="1px"
            direction={{ base: 'column', md: 'row' }}
            bg={'gray.100'}
            boxShadow={'xl'}
            padding={4}>
            <Flex flex={1} bg="blue.200">
                <Image
                    objectFit="cover"
                    // h={{ base: '150px', md: '230px' }}
                    width="100%"
                    boxSize="100%"
                    src={image}
                />
            </Flex>
            <Stack
                flex={2}
                flexDirection="column"
                alignItems="start"
                px={2}
                pt={1} spacing='-2'>

                <Heading fontSize={'xl'} fontFamily={'body'}>
                    {name}
                </Heading>
                <Text fontWeight='medium' color={'green.300'} >
                    Giá: {price} wei
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
                <Button
                    w={'full'}
                    variant={'solid'}
                    name={id}
                    value={price}
                    colorScheme='green'
                    onClick={handlePurchase}
                >
                    Mua hàng
                </Button>
            </VStack>
        </Stack>
    );
}
export default ItemCart;

