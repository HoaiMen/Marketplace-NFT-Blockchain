import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import {
  Box,
  Flex,
  Avatar,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  Collapse,
  MenuItem,
  Link,
  MenuDivider,
  useDisclosure,
  Stack,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const authLinks = (
    <Stack direction={'row'} spacing={7}>
      <Button as={NavLink} to={'/cart'}>
        <BsFillCartPlusFill />
      </Button>
      <Menu>
        <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
          <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
        </MenuButton>
        <MenuList alignItems={'center'}>
          <br />
          <Center>
            <Avatar size={'2xl'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
          </Center>
          <br />
          <Center>
            <p>Username</p>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem>
            <a onClick={logout} href="/login">
              Logout
            </a>
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );

  const guestLinks = (
    <Stack direction={'row'} spacing={7}>
      <Button as={NavLink} to={'/cart'}>
        <BsFillCartPlusFill />
      </Button>
      <Menu>
        <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
          <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
        </MenuButton>
        <MenuList alignItems={'center'}>
          <br />
          <Center>
            <Avatar size={'2xl'} src={'https://avatars.dicebear.com/api/male/username.svg'} />
          </Center>
          <br />
          <Center>
            <p>Username</p>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem>
            <Link as={NavLink} to={'/login'}>
              Login
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NavLink} to={'/register'}>
              Register
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );

  return (
    <>
      <Box px={4} bg="white" w="full">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Logo widthh={32} />
            </Box>
            <HStack px={24} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
              <DesktopNav />
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            {!loading && (isAuthenticated ? authLinks : guestLinks)}
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
