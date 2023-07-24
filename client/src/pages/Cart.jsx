import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  HStack,
  Link,
  Stack,
  useDisclosure,
  Container,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import DefaultLayout from '../layouts/DefaultLayout';
import ItemCart from '../components/ItemCart';
import { CartOrder } from '../components/CartOrder';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  return (
    <DefaultLayout>
      <Container maxW={'full'}>
        {/* {dataProduct && (
          <ModalDetail open={isOpen} close={onClose} overlayy={overlay}>
            <BodyModal
              image={dataProduct?.imageURL[0]}
              namep={dataProduct?.name}
              content={dataProduct?.content}
              price={dataProduct?.price}
              category={dataProduct?.category}
              numReviews={dataProduct?.numReviews}
              rating={dataProduct?.rating}
            />
          </ModalDetail>
        )} */}
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
                Giỏ hàng của bạn (3 items)
              </Heading>

              <Stack>
                <ItemCart />
              </Stack>
            </Stack>

            <Flex direction="column" align="center" flex="1.5">
              <CartOrder value={1000000} />
              <HStack mt="6" fontWeight="medium">
                <Text>
                  Hoặc{' '}
                  <Link color={'blue.500'} as={NavLink} to={'/home'}>
                    Tiếp tục mua hàng
                  </Link>
                </Text>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      </Container>
    </DefaultLayout>
  );
};
export default Cart;
