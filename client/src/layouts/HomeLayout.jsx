import { Box, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navigation/Navbar";
import SidebarContent from '../components/Sidebar'

const HomeLayout = ({ children }) => {
    const { onClose } = useDisclosure();
    return (
        <Box>
            <Box minH="100vh"
                bg={useColorModeValue('gray.100', 'gray.900')}
            >
                <Box zIndex='2'>
                    <SidebarContent onClose={onClose} />
                </Box>
                {/* mobilenav */}
                <Box w="full" position="fixed" zIndex="1" bg="orange.300">
                    <Navbar />
                </Box>
                <Box ml={{ base: 0, md: 64 }} py="20" px='4' position="sticky">
                    {children}
                </Box>
                {/* <Box bg='orange.200' position="sticky" zIndex="4"><Footer /></Box> */}
            </Box>
        </Box>
    )
}
export default HomeLayout;