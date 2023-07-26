import React, { useContext, useEffect } from 'react';
import {
  Box,
  Link,
  Badge,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
  HStack,
} from '@chakra-ui/react';
import Rating from './Rating';
import { HomeContext } from "../contexts/HomeContext";
import { CartContext } from "../contexts/CartContext";

const CardProduct = () => {
  const { products, price, type, getAllProduct, getProductCate, handleView } = useContext(HomeContext);
  const { handleAddCart } = useContext(CartContext)
  console.log('new', products)
  useEffect(() => {
    getAllProduct(price)
  }, [price]);

  useEffect(() => {
    getProductCate(type)
  }, [type])


  return (
    <SimpleGrid columns={{ sm: 2, md: 2, lg: 3, xl: 4 }} spacing='40px'>
      {products.map((product, index) => (
        <Box key={index}>
          <Card maxW='sm'>
            <CardBody>
              <Box borderRadius="lg" overflow="hidden">
                <Link
                  textDecoration="none"
                  _hover={{ textDecoration: 'none' }}
                  onClick={() => handleView(product?._id)}
                >
                  <Image
                    transform="scale(1.0)"
                    src={product.image}
                    alt={`Picture of`}
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
                {/* <Box w={{ base: '50%', md: '100%' }}>
                  {product.isNew && (<Status color="blue" lable="New" />)}
                  {product.isHot && (<Status color="red" lable="Hot" />)}
                  {product.onSale && (<Status color="green" lable="On Sale" />)}
                </Box> */}
                <Heading size="md">{product.name}</Heading>
                <Rating rating={3.5} numReviews={34} />
                <Text fontSize="md" mb='-0.5'>Danh mục: {product.category}</Text>
                <Text fontSize="sm" mb='-0.5'>Đăng tải vào: {product.createdAt}</Text>
                <HStack spacing='4'>
                  <Text fontWeight="bold" fontSize='md'>Giá: </Text>
                  <Text noOfLines={1} fontWeight="bold" fontSize='md' color='blue'>{product.price} wei</Text>
                </HStack>
              </Stack>
            </CardBody>
            <CardFooter mt={-8}>
              <SimpleGrid columns={[1, null, 2]} spacing={8} w="full">
                <Button
                  variant="solid"
                  w="100%"
                  colorScheme='blue'
                  onClick={() => handleAddCart(product)}
                >
                  Add to cart
                </Button>
                <Button
                  variant="outline"
                  colorScheme="blue"
                  w="100%"
                  onClick={() => handleView(product?._id)}
                >
                  View detail
                </Button>
              </SimpleGrid>
            </CardFooter>
          </Card>
        </Box>
      ))}
    </SimpleGrid>
  );
};
const Status = ({ lable, color }) => {
  return (
    <Badge rounded="full" px="2" mr="2" fontSize="0.8em" colorScheme={color}>
      {lable}
    </Badge>
  );
};

export default CardProduct;