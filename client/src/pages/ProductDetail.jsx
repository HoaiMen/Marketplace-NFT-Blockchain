import React, { useContext, useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    Tag,
    useColorModeValue,
    Container,
    ListItem,
    List,
    Divider,
    Button,
} from '@chakra-ui/react';

import DefaultLayout from '../layouts/DefaultLayout'
import Rating from '../components/Rating';
import { getProduct } from '../api/Product.api';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'
const BlogTags = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const param = useParams();
    const { handleAddCart } = useContext(CartContext)

    const getProductDetail = async (id) => {
        try {
            const product = await getProduct(id)
            setProduct(product?.data);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (param.id) {
            getProductDetail(param.id)
        }
    }, [param.id]);
    return (
        <DefaultLayout>
            <Container maxW={'full'} px="12">
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"
                    flexDirection={{ base: 'column', sm: 'row' }}
                    justifyContent="space-between"
                >
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center"
                    >
                        {/* img */}
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}
                        >
                            <Image
                                h="330px"
                                width="650px"
                                borderRadius="lg"
                                src={product.imageURL}
                                alt="some good alt text"
                                objectFit="cover"
                            />
                        </Box>
                        {/* background */}
                        <Box zIndex="1" width="100%" position="absolute" height="80%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(orange.600 1.5px, transparent 1.5px)',
                                    'radial(red.300 1.5px, transparent 1.5px)'
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        marginTop={{ base: '3', sm: '0' }}
                    >
                        <BlogTags tags={['Engineering', 'Product']} />
                        <Heading marginTop="1">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                {product.name}
                            </Link>
                        </Heading>
                        <Text
                            color={'blue.600'}
                            fontWeight='bold'
                            fontSize={'xl'}
                        >
                            {product.price} Wei
                        </Text>
                        <Text
                            as="p"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg"
                            mb='-1'
                        >
                            {product.content}
                        </Text>
                        <Divider />
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                my={'1'}
                            >
                                Product Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Category:
                                    </Text>{' '}
                                    {product.category}
                                </ListItem>
                                <ListItem>
                                    <HStack>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Rating:
                                        </Text>{' '}
                                        <Rating
                                            rating={product.rating}
                                            numReviews={product.numReviews}
                                        />
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Đăng tải vào:
                                    </Text>{' '}
                                    {product.dateCreate}
                                </ListItem>
                            </List>
                        </Box>
                        <Button
                            variant="solid"
                            colorScheme="green"
                            w="50%"
                            mt="6"
                            onClick={() => handleAddCart(product)}
                        >
                            Add to cart
                        </Button>
                    </Box>
                </Box>
            </Container>
        </DefaultLayout>
    );
};

export default ProductDetail;