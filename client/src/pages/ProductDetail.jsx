import React, { useContext, useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    Tag,
    SpaceProps,
    useColorModeValue,
    Container,
    ListItem,
    List,
    Divider,
    VStack,
    Button,
} from '@chakra-ui/react';

import DefaultLayout from '../layouts/DefaultLayout'
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';

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
                                src='https://icdn.dantri.com.vn/thumb_w/680/2022/11/25/bapcai-1669346646495.jpg'
                                alt="some good alt text"
                                objectFit="cover"
                            />
                        </Box>
                        {/* background */}
                        <Box zIndex="1" width="100%" position="absolute" height="80%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(orange.600 1px, transparent 1px)',
                                    'radial(orange.300 1px, transparent 1px)'
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
                                Card đồ họa
                            </Link>
                        </Heading>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={300}
                            fontSize={'xl'}
                        >
                            10.000000 ether
                        </Text>
                        <Text
                            as="p"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg"
                            mb='-1'
                        >
                            This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
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
                                    Hàng tiêu dùng
                                </ListItem>
                                <ListItem>
                                    <HStack>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Rating:
                                        </Text>{' '}
                                        <Rating
                                            rating='4.5'
                                            numReviews='78'
                                        />
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Đăng tải vào:
                                    </Text>{' '}
                                    23/07/2023
                                </ListItem>
                            </List>
                        </Box>
                        <Button
                            variant="solid"
                            colorScheme="green"
                            w="50%"
                            mt="6"
                        // onClick={() => handleAddCart(product)}
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