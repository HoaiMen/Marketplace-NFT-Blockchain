import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <Box>
      <Box mx={{ base: '4', md: '0' }} w="full" position="fixed" zIndex="2" bg="orange.100">
        <Navbar />
      </Box>
      <Box mx={{ base: '4', md: '12' }} py="16" position="sticky">
        {children}
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
export default DefaultLayout;
