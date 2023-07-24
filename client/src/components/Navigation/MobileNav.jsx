import React from 'react';
import { Stack, Flex, Text, Link, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { navbarItems } from '../../common/NavbarItem';
const MobileNav = () => {
  const { onToggle } = useDisclosure();
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {navbarItems.map((navItem) => (
        <Stack key={navItem.label} spacing={4} onClick={onToggle}>
          <Flex
            py={2}
            as={Link}
            href={navItem.href ?? '#'}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Text fontWeight={600}>{navItem.label}</Text>
          </Flex>
        </Stack>
      ))}
    </Stack>
  );
};
export default MobileNav;
