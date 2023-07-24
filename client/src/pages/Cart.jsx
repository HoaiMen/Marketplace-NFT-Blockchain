import React, { useContext, useEffect } from 'react';
import {
    Box,
    Flex,
    Text,
    Heading,
    HStack,
    Link,
    Stack,
    Container,
} from '@chakra-ui/react';
import DefaultLayout from '../layouts/DefaultLayout';
import ItemCart from '../components/CartItem';
import { CartOrder } from '../components/CartOrder';
import { NavLink, useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { cart, amountInCart, getProductsCart, handleDeleteCart, total } = useContext(CartContext)
    const param = useParams()

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
                                {cart.map((item) => (
                                    <ItemCart
                                        key={item.id}
                                        name={item.name}
                                        price={item.price}
                                        category={item.category}
                                        image={item.imageURL}
                                        dateCreate={item.dateCreate}
                                        handleClick={() => handleDeleteCart(item.id)} />
                                ))}
                            </Stack>
                        </Stack>

                        <Flex direction="column" align="center" flex='1.5'>
                            <CartOrder value={total} />
                            <HStack mt="6" fontWeight="medium">
                                <Text>Hoặc <Link color={'blue.500'} as={NavLink} to={'/home'}>
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