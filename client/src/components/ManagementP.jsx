import React, { useEffect, useState, } from 'react';
import Marketplace from '../abis/Marketplace.json';
import { Box, Heading, Text, SimpleGrid, } from '@chakra-ui/react';
import Web3 from 'web3';

const ManagementP = () => {
  const [userProducts, setUserProducts] = useState([]);
  const [products, setProducts] = useState([]);

  // Hàm lấy thông tin sản phẩm từ hợp đồng thông minh
  const getProducts = async () => {
    const web3 = new Web3(window.ethereum);
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];
    const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address);
    const totalProducts = await marketplace.methods.productCount().call();

    // Lấy địa chỉ hiện tại của người dùng
    const accounts = await web3.eth.getAccounts();
    const currentAddress = accounts[0];

    const productsData = [];
    const userProductsData = [];

    for (let i = 1; i <= totalProducts; i++) {
      const product = await marketplace.methods.products(i).call();
      productsData.push(product);

      // Kiểm tra xem sản phẩm này có thuộc về chủ sở hữu hiện tại hay không
      if (product.owner.toLowerCase() === currentAddress.toLowerCase()) {
        userProductsData.push(product);
      }
    }

    setProducts(productsData);
    setUserProducts(userProductsData);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <SimpleGrid columns={3} spacing="40px">
      {userProducts.map((product) => (
        <Box
          key={product.id}
          rounded="sm"
          my={5}
          mx={[0, 5]}
          overflow="hidden"
          bg="white"
          border="1px"
          borderColor="black"
          boxShadow="6px 6px 0 green"
        >
          <Box h="200px" borderBottom="1px" borderColor="black">
            {/* Hiển thị hình ảnh sản phẩm */}
            <img
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Product"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </Box>
          <Box p={4}>
            {/* Hiển thị thông tin sản phẩm */}
            <Heading color="black" fontSize="2xl" noOfLines={1}>
              {product.name}
            </Heading>
            <Text color="gray.500">Giá: {Web3.utils.fromWei(product.price.toString(), 'ether')} Eth</Text>
            <Text color="gray.500">Trạng thái: {product.purchased ? 'Đã mua' : 'Chưa mua'}</Text>
            <Text color="gray.500">Item address: {product.itemHash}</Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
export default ManagementP;