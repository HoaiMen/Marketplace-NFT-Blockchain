import React, { useContext, useEffect, useState } from 'react';
import { Box, Heading, Text, SimpleGrid, } from '@chakra-ui/react';
import Web3 from 'web3';
import Marketplace from '../abis/Marketplace.json';
import { HomeContext } from '../contexts/HomeContext';
import { getAllProducts } from "../api/Product.api";

const ManagementP = () => {
  const { products, setProducts } = useContext(HomeContext);
  const [data, setData] = useState([])

  const getManageProduct = async () => {
    try {
      const productss = await getAllProducts()

      const web3 = new Web3(window.ethereum);
      const networkId = await web3.eth.net.getId();
      const networkData = Marketplace.networks[networkId];
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address);
      // Lấy địa chỉ hiện tại của người dùng
      const accounts = await web3.eth.getAccounts();
      const currentAddress = accounts[0];

      let userProductsData = [];
      let productsData = [];
      let result = productss.data
      // console.log(result)

      for (let i = 0; i < result.length; i++) {
        const product = await marketplace.methods.products(i).call();
        console.log(product)
        if (product.owner.toLowerCase() === currentAddress.toLowerCase()) {
          productsData.push(product);
          // console.log(productsData)
        }
        if (result[i].owner === currentAddress) {
          data.push(result[i])
        }
      }

      for (let i = 0; i < data.length; i++) {
        if (i < productsData.length) {
          data[i].itemAddress = productsData[i].itemHash;
          userProductsData.push(data[i]);
        }
      }

      setProducts(userProductsData);
    } catch (err) {
      console.log(err)
    }
  }
  console.log("ManagementP:", products)

  useEffect(() => {
    // getProducts();
    getManageProduct()
  }, []);

  return (
    <SimpleGrid columns={3} spacing="40px">
      {products.map((product, index) => (
        <Box
          key={index}
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
              src={product.image}
              alt="Product"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
          </Box>
          <Box p={4}>
            {/* Hiển thị thông tin sản phẩm */}
            <Heading color="black" fontSize="2xl" noOfLines={1}>
              {product.name}
            </Heading>
            <Text color="blue" fontSize="lg" fontWeight={'medium'}>Giá: {Web3.utils.fromWei(product.price.toString(), 'ether')} Eth</Text>
            <Text color="gray.500">Category: {product.category}</Text>
            <Text color="gray.500">Trạng thái: {product.purchased ? 'Đã mua' : 'Chưa mua'}</Text>
            <Text color="gray.500">Item address: {product.itemAddress}</Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
export default ManagementP;