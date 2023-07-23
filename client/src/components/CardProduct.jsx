import React from "react";
import { Box, Link, Badge, SimpleGrid, Card, CardBody, Image, Stack, Heading, Text, CardFooter, ButtonGroup, Button, HStack, Flex } from "@chakra-ui/react";
import Rating from './Rating';

const CardProduct = () => {
    return (
        //1600: 4
        <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing='40px'>
            <Box>
                <Card maxW='sm'>
                    <CardBody>
                        <Box borderRadius="lg" overflow="hidden">
                            <Link
                                textDecoration="none"
                                _hover={{ textDecoration: 'none' }}
                            // onClick={handleView}
                            >
                                <Image
                                    transform="scale(1.0)"
                                    src='https://cdn-www.vinid.net/2019/10/an-cam-co-tac-dung-gi-nen-an-cam-luc-nao-tot-nhat-1024x682.jpg'
                                    alt={`Picture of `}
                                    objectFit="cover"
                                    h={{ base: '150px', md: '230px' }}
                                    width="100%"
                                    transition="0.3s ease-in-out"
                                    _hover={{
                                        transform: 'scale(1.05)',
                                    }}
                                />
                            </Link>
                        </Box>
                        <Stack mt='4' spacing='2'>
                            <Box w={{ base: '50%', md: '100%' }}>
                                <Status color="blue" lable="New" />
                                <Status color="red" lable="Hot" />
                                <Status color="green" lable="On Sale" />
                            </Box>
                            <Heading size="md">Card đồ họa</Heading>

                            <Text fontSize="sm" mb='-0.5'>Đăng tải vào: 22/07/2023</Text>
                            <Rating rating='2.5' numReviews='28' />
                            <HStack spacing='4'>
                                <Text fontWeight="bold" fontSize='md'>Giá: </Text>
                                <Text fontWeight="bold" fontSize='md' color='blue'>10.000000 ether</Text>
                            </HStack>
                        </Stack>
                    </CardBody>
                    <CardFooter mt={-8}>
                        <SimpleGrid columns={[1, null, 2]} spacing={8} w="full">
                            <Button
                                variant="solid"
                                w="100%"
                                colorScheme='blue'
                            // onClick={handleAdd}
                            >
                                Add to cart
                            </Button>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                w="100%"
                            // onClick={handleView}
                            >
                                View detail
                            </Button>
                        </SimpleGrid>
                    </CardFooter>
                </Card>
            </Box>
            <Box>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='4' spacing='2'>
                            <Heading size='md'>Card đồ họa NVIDIA RTX 3090</Heading>
                            <Text noOfLines={2} fontSize="sm" mb='-0.5'>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text fontSize="sm" mb='-0.5'>Đăng tải vào: 22/07/2023</Text>
                            <Rating rating='2.5' numReviews={28} />
                            <HStack spacing='4'>
                                <Text fontWeight="bold" fontSize='md'>Giá: </Text>
                                <Text fontWeight="bold" fontSize='md' color='blue'>10.000000 ether</Text>
                            </HStack>
                        </Stack>
                    </CardBody>
                    <CardFooter mt={-8}>
                        <SimpleGrid columns={[1, null, 2]} spacing={8} w="full">
                            <Button
                                variant="solid"
                                w="100%"
                                colorScheme='blue'
                            // onClick={handleAdd}
                            >
                                Add to cart
                            </Button>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                w="100%"
                            // onClick={handleView}
                            >
                                View detail
                            </Button>
                        </SimpleGrid>
                    </CardFooter>
                </Card>
            </Box>
            <Box>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='4' spacing='2'>
                            <Heading size='md'>Card đồ họa NVIDIA RTX 3090</Heading>
                            <Text noOfLines={2} fontSize="sm" mb='-0.5'>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text fontSize="sm" mb='-0.5'>Đăng tải vào: 22/07/2023</Text>
                            <Rating rating='2.5' numReviews={28} />
                            <HStack spacing='4'>
                                <Text fontWeight="bold" fontSize='md'>Giá: </Text>
                                <Text fontWeight="bold" fontSize='md' color='blue'>10.000000 ether</Text>
                            </HStack>
                        </Stack>
                    </CardBody>
                    <CardFooter mt={-8}>
                        <Flex w='full' justify='space-between'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='solid' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </Flex>
                    </CardFooter>
                </Card>
            </Box>
            <Box>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='4' spacing='2'>
                            <Heading size='md'>Card đồ họa NVIDIA RTX 3090</Heading>
                            <Text noOfLines={2} fontSize="sm" mb='-0.5'>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text fontSize="sm" mb='-0.5'>Đăng tải vào: 22/07/2023</Text>
                            <Rating rating='2.5' numReviews={28} />
                            <HStack spacing='4'>
                                <Text fontWeight="bold" fontSize='md'>Giá: </Text>
                                <Text fontWeight="bold" fontSize='md' color='blue'>10.000000 ether</Text>
                            </HStack>
                        </Stack>
                    </CardBody>
                    <CardFooter mt={-8}>
                        <Flex w='full' justify='space-between'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='solid' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </Flex>
                    </CardFooter>
                </Card>
            </Box>
            <Box>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='4' spacing='2'>
                            <Heading size='md'>Card đồ họa NVIDIA RTX 3090</Heading>
                            <Text noOfLines={2} fontSize="sm" mb='-0.5'>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text fontSize="sm" mb='-0.5'>Đăng tải vào: 22/07/2023</Text>
                            <Rating rating='2.5' numReviews={28} />
                            <HStack spacing='4'>
                                <Text fontWeight="bold" fontSize='md'>Giá: </Text>
                                <Text fontWeight="bold" fontSize='md' color='blue'>10.000000 ether</Text>
                            </HStack>
                        </Stack>
                    </CardBody>
                    <CardFooter mt={-8}>
                        <Flex w='full' justify='space-between'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='solid' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </Flex>
                    </CardFooter>
                </Card>
            </Box>
        </SimpleGrid>
    )
}
const Status = ({ lable, color }) => {
    return (
        <Badge rounded="full" px="2" mr="2" fontSize="0.8em" colorScheme={color}>
            {lable}
        </Badge>
    );
};
export default CardProduct;
//959 : 3
//599 : 2