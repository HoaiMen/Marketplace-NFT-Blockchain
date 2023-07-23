import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Logo2 from '../public/Logo2.png';
const Logo = ({ widthh }) => {
    return (
        <Box>
            <Image src={Logo2} w={widthh} />
        </Box>
    );
};
export default Logo;