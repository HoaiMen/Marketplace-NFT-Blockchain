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
    Text,
    InputGroup,
    InputRightElement, FormHelperText,
} from '@chakra-ui/react';
import animationData from '../Lottie/SignUp.json'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import FoolLayout from '../layouts/FoolLayout';
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
            <FoolLayout defaultOptions={defaultOptions} background={'blue.100'}>
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
            </FoolLayout>
        </DefaultLayout>
    );
};
export default SignUp;