import React, { useState } from 'react';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Container,
    Text,
    InputGroup,
    InputRightElement, FormHelperText,
} from '@chakra-ui/react';
import Lottie from 'react-lottie';
import animationData from '../Lottie/SignUp.json'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
const SignUp = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const [showPassword, setShowPassword] = useState(false);

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

                            <Heading w="100%" textAlign={'center'} fontWeight="bold" mb="2%">
                                User Registration
                            </Heading>
                            <Flex>
                                <FormControl mr="5%">
                                    <FormLabel htmlFor="first-name" >
                                        First name
                                    </FormLabel>
                                    <Input id="first-name" placeholder="First name" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="last-name">
                                        Last name
                                    </FormLabel>
                                    <Input id="last-name" placeholder="First name" />
                                </FormControl>
                            </Flex>
                            <FormControl mt="2%">
                                <FormLabel htmlFor="email">
                                    Email address
                                </FormLabel>
                                <Input id="email" type="email" />
                                <FormHelperText>We'll never share your email.</FormHelperText>
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
                            <Button variant="solid" colorScheme="green">
                                Sign Up
                            </Button>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Do you have any account?{' '}
                                    <Link
                                        as={NavLink}
                                        to={'/signIn'}
                                        color={'blue.400'}
                                        fontWeight={'medium'}
                                    >
                                        Sign In
                                    </Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1} bg="blue.200" roundedRight={'3xl'}>
                        <Lottie options={defaultOptions} height={600} width={600} />
                    </Flex>
                </Stack>
            </Container>
        </DefaultLayout>
    );
};
export default SignUp;