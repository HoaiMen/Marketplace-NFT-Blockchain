import Web3 from 'web3';
import { getAllProducts } from "../api/Product.api";
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
  Heading
} from '@chakra-ui/react';
import DefaultLayout from '../layouts/DefaultLayout';
import ManagementP from '../components/ManagementP';
import React, { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../contexts/HomeContext';

const ProductsManage = () => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState(0);
  const [total, setTotal] = useState(0);
  const [sumPrice, setSumPrice] = useState(0)

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        try {
          const productss = await getAllProducts()
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);

          // Lấy địa chỉ hiện tại
          const accounts = await web3.eth.getAccounts();
          const currentAddress = accounts[0];
          setCurrentAddress(currentAddress);

          // Lấy số dư tài khoản
          const balanceInWei = await web3.eth.getBalance(currentAddress);
          const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
          setAccountBalance(balanceInEther);

          let userProductsData = [];
          let result = productss.data
          for (let i = 0; i < result.length; i++) {
            // const product = await marketplace.methods.products(i).call();
            // Kiểm tra xem sản phẩm này có thuộc về chủ sở hữu hiện tại hay không
            if (result[i].owner === currentAddress) {
              userProductsData.push(result[i]);
              console.log(userProductsData)
            }
          }

          let sum = 0;
          for (let i = 0; i < userProductsData.length; i++) {
            console.log(userProductsData[i].price)
            sum += userProductsData[i].price;
          }
          const parsedPrice = parseFloat(sum);
          const pricee = web3.utils.fromWei(parsedPrice.toString(), 'ether');
          setSumPrice(pricee);
          setTotal(userProductsData.length)

        } catch (error) {
          console.error('Lỗi khi tải dữ liệu blockchain:', error);
        }
      } else {
        console.error('Không tìm thấy trình cung cấp Web3. Vui lòng cài đặt MetaMask.');
      }
    }

    loadBlockchainData();
  }, []);

  return (
    <DefaultLayout>
      <Container maxW={'full'} px="12">
        <Box
          w="full"
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between">
          <Box
            w="60%"
            display="flex"
            flex="1"
            position="relative"
            alignItems="center"
            mr="8"
          >
            <TableContainer w={"full"} border="1px" borderColor="gray.300">
              <Table variant="simple">
                <Thead bg={"green.100"}>
                  <Tr>
                    <Th>
                      <Heading fontSize="xl" alignContent={"center"} color="blue.500">
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
                          {currentAddress}
                        </Text>
                      </VStack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <VStack alignItems="start">
                        <Heading fontSize="lg">Tổng số sản phẩm đăng tải:</Heading>
                        <Text fontWeight="medium" color="green.400">
                          {total}
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
            marginTop={{ base: '3', sm: '0' }}>
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
                        <Heading fontSize="lg">Số dư hiện tại của Account: </Heading>
                        <Text fontWeight="medium" color="green.400">
                          {accountBalance}
                        </Text>
                      </VStack>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <VStack alignItems="start">
                        <Heading fontSize="lg">Tổng Ether của tất cả sản phẩm:</Heading>
                        <Text fontWeight="medium" color="green.400">
                          {sumPrice}
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