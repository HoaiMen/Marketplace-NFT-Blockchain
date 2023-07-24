import React from 'react';
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const ItemCart = () => {
  return (
    <Stack
      borderWidth="1px"
      // w={{ sm: '100%', md: '700px' }}
      // height={{ sm: '476px', md: '200px' }}
      direction={{ base: 'column', md: 'row' }}
      bg={'gray.100'}
      boxShadow={'2xl'}
      padding={4}
    >
      <Flex flex={1} bg="blue.200">
        <Image
          objectFit="cover"
          // h={{ base: '150px', md: '230px' }}
          width="100%"
          boxSize="100%"
          src={
            'https://noithathoanlong.com/wp-content/uploads/2020/09/sofa-vang-chan-quy-go-soi-SFS29.jpg'
          }
        />
      </Flex>
      <Stack flex={2} flexDirection="column" alignItems="start" px={2} pt={1} spacing="-2">
        <Heading fontSize={'xl'} fontFamily={'body'}>
          Bộ bàn ghế sofa gỗ sồi Nga SFS29
        </Heading>
        <Text fontWeight="medium" color={'green.300'}>
          Giá: 5000000000000000000 wei
        </Text>

        <Text fontSize="sm" color={'gray.400'}>
          Ngày tải lên: 23/7/2023
        </Text>
        <Text fontSize="sm" color={'gray.400'}>
          Danh mục: Đồ nội thất
        </Text>
      </Stack>
      <VStack flex={1} alignItems={'start'}>
        <Button w={'full'} variant={'solid'} colorScheme="green">
          Xóa sản phẩm
        </Button>
        <Button w={'full'} variant={'solid'} colorScheme="green">
          Mua hàng
        </Button>
      </VStack>
    </Stack>
  );
};
export default ItemCart;
