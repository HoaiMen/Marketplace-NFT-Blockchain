import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import CardProduct from '../components/CardProduct';
import {
  Box,
  Flex,
  Select,
  Text,
  Stack,
} from '@chakra-ui/react';
import Search from '../components/Search';
const options = ['Tất cả', 'New', 'Hot', 'On Sale'];
const Home = () => {


  return (
    <HomeLayout>
      <Box>
        <Flex h={12} w="full" alignItems={'center'} justifyContent={'space-between'} mb={4}>
          <Flex w="60%">
            <Search />
          </Flex>
        </Flex>
        <CardProduct />
      </Box>
    </HomeLayout>
  );
};
export default Home;
