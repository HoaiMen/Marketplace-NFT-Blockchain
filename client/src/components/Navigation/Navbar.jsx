import React, { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs'
import {
    Text,
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
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { amountInCart } = useContext(CartContext)
    return (
        <>
            <Box px={4} bg='white' w='full' >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><Logo widthh={32} /></Box>
                        <HStack
                            px={24}
                            alignItems={'center'}
                            display={{ base: 'none', md: 'flex' }}>
                            <DesktopNav />
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Flex px="4" display={{ base: 'none', md: 'inline-flex' }}>
                                <IconButton
                                    zIndex="1"
                                    size={'md'}
                                    icon={<BsFillCartPlusFill />}
                                    aria-label={'Open Cart'}
                                    as={NavLink}
                                    to={'/cart'}
                                // onClick={navigator}
                                />
                                <Box ml="-1.5" mt="-1.5" zIndex="2">
                                    <Text
                                        bg="green.400"
                                        rounded={'full'}
                                        w="5"
                                        h="6"
                                        align="center"
                                        textColor="white"
                                    >
                                        {amountInCart}
                                    </Text>
                                </Box>
                            </Flex>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem><Link as={NavLink} to={'/signIn'}>Sign In</Link></MenuItem>
                                    <MenuItem><Link as={NavLink} to={'/signUp'}>Sign Up</Link></MenuItem>
                                    <MenuItem><Link as={NavLink} to={'/signIn'}>Logout</Link></MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>



                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
            </Box>
        </>
    );
}
export default Navbar