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
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../actions/auth';

import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <DefaultLayout>
      <FoolLayout defaultOptions={defaultOptions} background={'green.200'}>
        <form onSubmit={(e) => onSubmit(e)}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Center>
              <VStack>
                <Heading fontSize={'3xl'}>Đăng Nhập</Heading>
              </VStack>
            </Center>
            <FormControl id="email">
              <FormLabel>Địa chỉ Email</FormLabel>
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength="6"
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}
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
              <Button variant="solid" colorScheme="green" type="submit">
                ĐĂNG NHẬP
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Bạn chưa có tài khoản?{' '}
                <Link as={NavLink} to={'/register'} color={'blue.400'} fontWeight={'medium'}>
                  Đăng ký ngay
                </Link>
              </Text>
            </Stack>
          </Stack>
        </form>
      </FoolLayout>
    </DefaultLayout>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
