import React, { useContext, useEffect, useState } from 'react';
import {
    Box,
    Flex,
    Text,
    Heading,
    HStack,
    Link,
    Stack,
    Container,
    Button
} from '@chakra-ui/react';
import DefaultLayout from '../layouts/DefaultLayout';
import ItemCart from '../components/CartItem';
import { CartOrder } from '../components/CartOrder';
import { NavLink, useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import Marketplace from '../abis/Marketplace.json';
import Web3 from 'web3';
import { getDetailCart } from '../api/Cart.api';
import { getAllProducts } from '../api/Product.api';

const Cart = () => {
    const { cart, amountInCart, getProductsCart, handleDeleteCart, total } = useContext(CartContext)
    const param = useParams()

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

    async function handleSubmit(id) {
        const product = await getDetailCart(id)
        const productss = await getAllProducts();

        // Lấy địa chỉ owner từ hợp đồng Marketplace
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const owner = await web3.eth.getAccounts();
        const currentAddress = owner[0];
        setCurrentAddress(currentAddress);

        let all = productss?.data
        let result = product?.data
        console.log('detail', result)
        for (let i = 0; i <= all.length; i++) {
            const product = await marketplace.methods.products(i).call();
            console.log('smart', product)
            if (product.name === result.name) {
                purchaseProduct(product.id, product.price)
                // console.log('itemHash:', product.itemHash)
                // console.log('address:', result.itemAddress)
                console.log('theo name', product)
            }
            if (product.purchased === true) {
                result.status = true;
            }
            console.log('kết quả', result)
        }
    };

    useEffect(() => {
        getProductsCart()
    }, [amountInCart]);
    useEffect(() => {
        if (param.id) {
            handleDeleteCart(param.id)
        }
    }, [param.id]);

    return (
        <DefaultLayout>
            <Container maxW={'full'}>
                <Box
                    maxW={{ base: '3xl', lg: 'full' }}
                    px={{ base: '4', md: '8', lg: '4' }}
                    py={{ base: '2', md: '4', lg: '4' }}
                >
                    <Stack
                        direction={{ base: 'column', lg: 'row' }}
                        align={{ lg: 'flex-start' }}
                        spacing={{ base: '8', md: '12' }}
                    >
                        <Stack spacing={{ base: '6', md: '4' }} flex="3">
                            <Heading fontSize="2xl" fontWeight="extrabold">
                                Giỏ hàng của bạn ({amountInCart} items)
                            </Heading>

                            <Stack >
                                {cart.map((item, index) => (
                                    <ItemCart
                                        key={index}
                                        id={item._id}
                                        name={item.name}
                                        price={item.price}
                                        category={item.category}
                                        image={item.image}
                                        dateCreate={item.createdAt}
                                        itemAddress={item.itemAddress}
                                        handleClick={() => handleDeleteCart(item._id)}

                                    >
                                        {item.status === false ? (<Button
                                            w={'full'}
                                            variant={'solid'}
                                            colorScheme='green'
                                            onClick={() => {
                                                handleSubmit(item._id);
                                            }}
                                        >
                                            Mua hàng
                                        </Button>) : null}
                                    </ItemCart>
                                ))}
                            </Stack>
                        </Stack>

                        <Flex direction="column" align="center" flex='1.5'>
                            <CartOrder value={Web3.utils.fromWei(total.toString(), 'ether')} />
                            <HStack mt="6" fontWeight="medium">
                                <Text>Hoặc <Link color={'blue.500'} as={NavLink} to={'/'}>
                                    Tiếp tục mua hàng
                                </Link></Text>

                            </HStack>
                        </Flex>
                    </Stack>
                </Box>
            </Container>
        </DefaultLayout>
    );
};
export default Cart;