import React, { useState } from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Center,
    Text,
    VStack,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import animationData from '../Lottie/SignIn.json';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import FoolLayout from '../layouts/FoolLayout';

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
            <FoolLayout defaultOptions={defaultOptions} background={'green.200'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Center>
                        <VStack>
                            <Heading fontSize={'3xl'}>Đăng nhập</Heading>
                        </VStack>
                    </Center>
                    <FormControl id="email">
                        <FormLabel>Địa chỉ mail</FormLabel>
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
                            <Checkbox>Nhớ mật khẩu</Checkbox>
                            <Link color={'blue.500'} fontWeight={'medium'}>
                                Quên mật khẩu?
                            </Link>
                        </Stack>
                        <Button variant="solid" colorScheme="green">
                            ĐĂNG NHẬP
                        </Button>
                    </Stack>
                    <Stack pt={6}>
                        <Text align={'center'}>
                            Bạn chưa có tài khoản?{' '}
                            <Link
                                as={NavLink}
                                to={'/signUp'}
                                color={'blue.400'}
                                fontWeight={'medium'}
                            >
                                Đăng ký ngay
                            </Link>
                        </Text>
                    </Stack>
                </Stack>
            </FoolLayout>
        </DefaultLayout>
    );
};
export default SignIn;