import React from 'react';
import { Container, Stack, Flex } from '@chakra-ui/react';
import Lottie from 'react-lottie';

const FoolLayout = ({ children, defaultOptions, background }) => {
  return (
    <Container maxW="full" px="20" py="8">
      <Stack rounded={'3xl'} direction={{ base: 'column', md: 'row' }} shadow={'2xl'}>
        <Flex p={4} flex={1} align={'center'} justify={'center'}>
          {children}
        </Flex>
        <Flex flex={1} bg={background} roundedRight={'3xl'}>
          <Lottie options={defaultOptions} height={600} width={600} />
        </Flex>
      </Stack>
    </Container>
  );
};

export default FoolLayout;
