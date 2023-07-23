import React, { useState } from 'react';
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Container,
    Center,
    Text,
    VStack,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import Lottie from 'react-lottie';
import animationData from '../Lottie/SignIn.json';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <DefaultLayout>
            <Container maxW="full" px="20" py='8'>
                <Stack
                    rounded={'3xl'}
                    direction={{ base: 'column', md: 'row' }}
                    shadow={'2xl'}
                >
                    <Flex p={4} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={4} w={'full'} maxW={'md'}>
                            {/* <Center>
                <Logo textSize={45} iconSize={45} />
              </Center> */}
                            <Center>
                                <VStack>
                                    <Heading fontSize={'3xl'}>Sign in</Heading>
                                </VStack>
                            </Center>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }
                                        >
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={6}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.500'} fontWeight={'medium'}>
                                        Forgot password?
                                    </Link>
                                </Stack>
                                <Button variant="solid" colorScheme="green">
                                    Sign in
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Do you have any account?{' '}
                                    <Link
                                        as={NavLink}
                                        to={'/signUp'}
                                        color={'blue.400'}
                                        fontWeight={'medium'}
                                    >
                                        Sign Up
                                    </Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1} bg="green.200" roundedRight={'3xl'}>
                        <Lottie options={defaultOptions} height={600} width={600} />
                    </Flex>
                </Stack>
            </Container>
        </DefaultLayout>
    );
};
export default SignIn;