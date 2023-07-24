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
  InputRightElement,
  FormHelperText,
} from '@chakra-ui/react';
import animationData from '../Lottie/SignUp.json';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink, useNavigate, Navigate } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import FoolLayout from '../layouts/FoolLayout';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  // State for showing/hiding password
  const [showPassword, setShowPassword] = useState(false);

  // State for registration form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  // Function to handle input changes
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Use the useHistory() hook to get access to the history object
  const navigate = useNavigate();

  // Function to handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Mật khẩu không hợp lệ!', 'danger');
    } else {
      // Call the register action from redux
      register({ name, email, password });

      // Redirect to the login page after successful registration
    }
  };

  // If the user is already authenticated, redirect to the login page
  if (isAuthenticated) {
    return navigate('/login');
  }

  return (
    <DefaultLayout>
      <FoolLayout defaultOptions={defaultOptions} background={'blue.100'}>
        <form onSubmit={onSubmit}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading w="100%" textAlign={'center'} fontWeight="bold" mb="2%">
              Đăng Ký Tài Khoản
            </Heading>
            <Flex>
              <FormControl mr="5%">
                <FormLabel htmlFor="first-name">Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </FormControl>
            </Flex>
            <FormControl mt="2%">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
                <InputRightElement h={'full'}>
                  <Button variant={'ghost'} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password2">
              <FormLabel>Nhập Lại Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={onChange}
                />
                <InputRightElement h={'full'}>
                  <Button variant={'ghost'} onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button variant="solid" colorScheme="green" type="submit">
              ĐĂNG KÝ
            </Button>
            <Stack pt={6}>
              <Text align={'center'}>
                Bạn đã có tài khoản?{' '}
                <Link as={NavLink} to={'/login'} color={'blue.400'} fontWeight={'medium'}>
                  Đăng Nhập
                </Link>
              </Text>
            </Stack>
          </Stack>
        </form>
      </FoolLayout>
    </DefaultLayout>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
