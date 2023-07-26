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
    const [account, setAccount] = useState('');
    const [productCount, setProductCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [marketplace, setMarketplace] = useState(null);
    const [currentAddress, setCurrentAddress] = useState('');

    useEffect(() => {
        const loadBlockchainData = async () => {
            await loadWeb3();
            const web3 = window.web3;
            // Load account
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            const networkId = await web3.eth.net.getId();
            const networkData = Marketplace.networks[networkId];
            if (networkData) {
                const marketplaceContract = new web3.eth.Contract(Marketplace.abi, networkData.address);
                setMarketplace(marketplaceContract);
                const productCount = await marketplaceContract.methods.productCount().call();
                setProductCount(productCount);
                // Load products
                const loadedProducts = [];
                for (let i = 1; i <= productCount; i++) {
                    const product = await marketplaceContract.methods.products(i).call();
                    loadedProducts.push(product);
                }
                setProducts(loadedProducts);
                setLoading(false);
            } else {
                window.alert('Marketplace contract not deployed to detected network.');
            }
        };

        loadBlockchainData();
    }, []);

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    };


    const purchaseProduct = async (id, price) => {
        setLoading(true);
        await marketplace.methods
            .purchaseProduct(id)
            .send({ from: account, value: price })
            .once('receipt', (receipt) => {
                setLoading(false);
            });
    };

    async function handleSubmit(event) {
        event.preventDefault();

        // Lấy địa chỉ owner từ hợp đồng Marketplace
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const owner = await web3.eth.getAccounts();
        const currentAddress = owner[0];
        setCurrentAddress(currentAddress);

        // name={id}
        // value={price}
        purchaseProduct(event.target.name, event.target.value)
        // console.log("productttt", productt)
    };


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

