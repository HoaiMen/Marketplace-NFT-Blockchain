import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Logo2 from '../public/Logo2.png';
import { Link } from 'react-router-dom';
const Logo = ({ widthh }) => {
  return (
    <Box as={Link} to="/">
      <Image src={Logo2} w={widthh} />
    </Box>
  );
};
export default Logo;
