import React, { useMemo } from 'react';
import { Stack, Box, Link } from '@chakra-ui/react';
import { navbarItems } from '../../common/NavbarItem';
import { NavLink, useLocation } from 'react-router-dom';

const DesktopNav = () => {
    const router = useLocation();

    const path = useMemo(() => {
        return router.pathname;
    }, [router.pathname]);
    return (
        <Stack direction={'row'} spacing={4}>
            {navbarItems.map((navItem) => (
                <Box key={navItem.label}>
                    <Link
                        px={2}
                        py={2}
                        as={NavLink}
                        to={navItem.href}
                        fontSize={'lg'}
                        fontWeight={500}
                        color={'gray.400'}
                        _hover={{
                            textDecoration: 'none',
                            bg: 'orange.100',
                        }}
                        _activeLink={path === navItem.href ? { borderBottom: '4px', color: 'black', borderColor: 'green.300' } : {}}
                    >
                        {navItem.label}
                    </Link>
                </Box>
            ))}
        </Stack>
    );
};
export default DesktopNav;