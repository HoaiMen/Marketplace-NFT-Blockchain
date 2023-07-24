import React from 'react';
import {
  Box,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  TableContainer,
  VStack,
  Heading,
} from '@chakra-ui/react';
import DefaultLayout from '../layouts/DefaultLayout';
import ManagementP from '../components/ManagementP';

const ProductsManage = () => {
  return (
    <DefaultLayout>
      <Container maxW={'full'} px="12">
        <Box
          w="full"
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
          <Box w="60%" display="flex" flex="1" position="relative" alignItems="center" mr="8">
            <TableContainer w={'full'} border="1px" borderColor="gray.300">
              <Table variant="simple">
                <Thead bg={'green.100'}>
                  <Tr>
                    <Th>
                      <Heading fontSize="xl" alignContent={'center'} color="blue.500">
                        Thông tin Account
                      </Heading>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <VStack alignItems="start">
                        <Heading fontSize="lg">Quản lý tiêu dùng:</Heading>
                        <Text>Cập nhật lần cuối lúc: 23/1/2023</Text>
                      </VStack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <VStack alignItems="start">
                        <Heading fontSize="lg">Address hiện tại:</Heading>
                        <Text fontWeight="medium" color="green.400">
                          Cập nhật lần cuối lúc: 23/1/2023
                        </Text>
                      </VStack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <VStack alignItems="start">
                        <Heading fontSize="lg">Tổng số sản phẩm đăng tải:</Heading>
                        <Text fontWeight="medium" color="green.400">
                          Cập nhật lần cuối lúc: 23/1/2023
                        </Text>
                      </VStack>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            w="40%"
            display="flex"
            flex="1"
            flexDirection="column"
            marginTop={{ base: '3', sm: '0' }}
          >
            <TableContainer border="1px" borderColor="gray.300">
              <Table variant="simple">
                <Thead bg={'green.100'}>
                  <Tr>
                    <Th>
                      <Heading fontSize="xl" alignContent={'center'} color="blue.500">
                        Quản lý số dư
                      </Heading>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <VStack alignItems="start">
                        <Heading fontSize="lg">Số dư hiện tại của Account:</Heading>
                        <Text fontWeight="medium" color="green.400">
                          Cập nhật lần cuối lúc: 23/1/2023
                        </Text>
                      </VStack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <VStack alignItems="start">
                        <Heading fontSize="lg">Tổng Ether của tất cả sản phẩm:</Heading>
                        <Text fontWeight="medium" color="green.400">
                          Cập nhật lần cuối lúc: 23/1/2023
                        </Text>
                      </VStack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <VStack alignItems="start">
                        <Heading fontSize="lg">Số Ether đã bán được:</Heading>
                        <Text fontWeight="medium" color="green.400">
                          Cập nhật lần cuối lúc: 23/1/2023
                        </Text>
                      </VStack>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box>
          <ManagementP />
        </Box>
      </Container>
    </DefaultLayout>
  );
};
export default ProductsManage;
