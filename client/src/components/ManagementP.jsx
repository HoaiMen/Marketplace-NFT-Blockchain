import React from 'react';
import { Box, Heading, Text, Img, SimpleGrid, useColorModeValue, VStack } from '@chakra-ui/react';

const ManagementP = () => {
  return (
    <SimpleGrid py={6} columns={[2, null, 3]} spacing="40px">
      <Box
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 green', '6px 6px 0 cyan')}
      >
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Card đồ họa
          </Heading>
          <VStack alignItems={'start'} spacing="-4">
            <Text color={'gray.500'}>Giá: 1000000000000000000 wei</Text>
            <Text color={'gray.500'}>Danh mục: Hàng tiêu dùng</Text>
            <Text color={'gray.500'}>Trạng thái: Tạo sản phẩm</Text>
            <Text color={'gray.500'}>Item address: 0x0d05dc15D1932333E1A6e8AFe4Ca1b486237E983</Text>
          </VStack>
        </Box>
      </Box>
      <Box
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 green', '6px 6px 0 cyan')}
      >
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Card đồ họa
          </Heading>
          <VStack alignItems={'start'} spacing="-4">
            <Text color={'gray.500'}>Giá: 1000000000000000000 wei</Text>
            <Text color={'gray.500'}>Danh mục: Hàng tiêu dùng</Text>
            <Text color={'gray.500'}>Trạng thái: Tạo sản phẩm</Text>
            <Text color={'gray.500'}>Item address: 0x0d05dc15D1932333E1A6e8AFe4Ca1b486237E983</Text>
          </VStack>
        </Box>
      </Box>
      <Box
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 green', '6px 6px 0 cyan')}
      >
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Card đồ họa
          </Heading>
          <VStack alignItems={'start'} spacing="-4">
            <Text color={'gray.500'}>Giá: 1000000000000000000 wei</Text>
            <Text color={'gray.500'}>Danh mục: Hàng tiêu dùng</Text>
            <Text color={'gray.500'}>Trạng thái: Tạo sản phẩm</Text>
            <Text color={'gray.500'}>Item address: 0x0d05dc15D1932333E1A6e8AFe4Ca1b486237E983</Text>
          </VStack>
        </Box>
      </Box>
    </SimpleGrid>
  );
};
export default ManagementP;
