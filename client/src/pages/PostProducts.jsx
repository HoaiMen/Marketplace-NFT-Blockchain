import React, { useState, useEffect, useRef, useContext } from 'react';
import Web3 from 'web3';
import Marketplace from '../abis/Marketplace.json';
import { ethers } from 'ethers';
import DefaultLayout from '../layouts/DefaultLayout';
import {
  Button,
  Flex,
  FormControl,
  InputGroup,
  Input,
  Stack,
  Container,
  InputRightAddon,
  Select
} from '@chakra-ui/react';
import Lottie from 'react-lottie';
import animationData from '../Lottie/create.json';
import axios from 'axios';
import { ProductContext } from '../contexts/ProductContext';
import { BiChevronsLeft } from 'react-icons/bi';

const options = ['Thực phẩm', 'Đồ nội thất', 'Thiết bị công nghệ', 'Phụ kiện điện tử', 'Khác'];

const PostProducts = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const productNameRef = useRef(null);
  const productPriceRef = useRef(null);
  const productImgRef = useRef(null);
  const productDescRef = useRef(null);
  const productCategoryRef = useRef(null);
  const { handleAddProduct } = useContext(ProductContext)

  const [account, setAccount] = useState('');
  const [productCount, setProductCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [marketplace, setMarketplace] = useState(null);
  // const [currentAddress, setCurrentAddress] = useState('');
  const [itemHash, setItemHash] = useState('')

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async function loadBlockchainData() {
    try {
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      const networkId = await web3.eth.net.getId();
      const networkData = Marketplace.networks[networkId];

      if (networkData) {
        const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address);
        setMarketplace(marketplace);
        const productCountHex = await marketplace.methods.productCount().call();
        const parsedProductCount = ethers.BigNumber.from(productCountHex).toString();
        setProductCount(parsedProductCount);

        // Load products
        const productsArray = [];
        for (var i = 1; i <= productCount; i++) {
          const product = await marketplace.methods.products(i).call();
          productsArray.push(product);
        }
        setProducts(productsArray);
        setLoading(false);
      } else {
        window.alert('Marketplace contract not deployed to detected network.');
      }
    } catch (error) {
      console.error('Error while loading blockchain data:', error);
    }
  }

  async function createProduct(name, price) {
    try {
      setLoading(true);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);
      const owner = await web3.eth.getAccounts();
      const currentAddress = owner[0];

      // Gửi giao dịch
      const transactionReceipt = await marketplace.methods
        .createProduct(name, price)
        .send({ from: currentAddress });

      // Lấy ID giao dịch từ kết quả giao dịch
      const transactionId = transactionReceipt.transactionHash;
      const productIndex = itemHash; // Lấy chỉ số của sản phẩm sau khi tạo
      setLoading(false);
      return { transactionId, productIndex }; // Trả về ID giao dịch và chỉ số của sản phẩm
    } catch (error) {
      console.error('Lỗi trong quá trình tạo sản phẩm:', error);
      setLoading(false);
      return null; // Trả về null nếu có lỗi
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const rawPrice = productPriceRef.current.value;
    const parsedPrice = parseFloat(rawPrice);
    const price = window.web3.utils.toWei(parsedPrice.toString(), 'ether');

    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      console.error('Vui lòng nhập một số nguyên không âm vào trường giá sản phẩm.');
      return;
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(window.ethereum);
    const owner = await web3.eth.getAccounts();
    const currentAddress = owner[0];

    try {
      // Lấy thông tin giao dịch và chỉ số của sản phẩm từ createProduct
      const { transactionId, productIndex } = await createProduct(productNameRef.current.value, price);

      if (transactionId) {
        // Nếu giao dịch thành công, lấy thông tin của sản phẩm từ smart contract
        const itemAddress = await marketplace.methods.getItemHash(productIndex).call();

        const productt = {
          name: productNameRef.current.value,
          price: price,
          image: productImgRef.current.value,
          description: productDescRef.current.value,
          category: productCategoryRef.current.value,
          owner: currentAddress,
          itemAddress: itemAddress // Sử dụng địa chỉ của sản phẩm đã lấy
        }

        handleAddProduct(productt);
        console.log("productttt", productt);
      } else {
        console.error('Giao dịch thất bại.');
      }
    } catch (error) {
      console.error('Lỗi trong quá trình xử lý:', error);
    }
  };

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit}>
        <Container maxW="full" px="20" py="8">
          <Stack direction={{ base: 'column', md: 'row' }} shadow={'2xl'}>
            <Flex p={4} flex={1} align={'center'} justify={'center'}>
              <Stack spacing={4} w={'full'} maxW={'md'}>
                <FormControl isRequired>
                  <Input type="text" placeholder="Nhập tên sản phẩm" ref={productNameRef} />
                </FormControl>
                <FormControl isRequired>
                  <Input type="text" placeholder="Nhập URL hình ảnh" ref={productImgRef} />
                </FormControl>
                <Select defaultValue="" w="full" bg={'white'} ref={productCategoryRef}>
                  {options.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </Select>
                <FormControl isRequired>
                  <InputGroup size="md">
                    <Input type="text" placeholder="Nhập giá sản phẩm" ref={productPriceRef} />
                    <InputRightAddon children="Ether" />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <Input type="text" placeholder="Mô tả sản phẩm" ref={productDescRef} />
                </FormControl>
                <Button variant="solid" colorScheme="green" type="submit">
                  ĐĂNG SẢN PHẨM
                </Button>
              </Stack>
            </Flex>
            <Flex flex={1} bg="green.200">
              <Lottie options={defaultOptions} height={500} width={500} />
            </Flex>
          </Stack>
        </Container>
      </form>
    </DefaultLayout>
  );
};

export default PostProducts;