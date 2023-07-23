import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import {
    Button,
    Flex,
    FormControl,
    InputGroup,
    Input,
    Link,
    Stack,
    Container,
    Text,
    InputRightAddon,
    Select,
} from "@chakra-ui/react";
import Lottie from 'react-lottie';
import animationData from '../Lottie/create.json';
import { NavLink } from 'react-router-dom';

const options = ['Thực phẩm', 'Đồ nội thất', 'Thiết bị công nghệ', 'Phụ kiện điện tử', 'Khác'];

const PostProducts = () => {

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
            <Container maxW="full" px="20" py='8'>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    shadow={'2xl'}
                >
                    <Flex p={4} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={4} w={'full'} maxW={'md'}>
                            <FormControl isRequired>
                                <Input type="text" placeholder="Nhập url hình ảnh sản phẩm" />
                            </FormControl>
                            <FormControl isRequired>
                                <Input type="text" placeholder="Nhập tên sản phẩm" />
                            </FormControl>
                            <Select
                                defaultValue=''
                                w='full'
                                bg={'white'}
                            // onChange={(e) => handleChange(e)}
                            >
                                {options.map((option, index) => (
                                    <option key={index}>{option}</option>
                                ))}
                            </Select>
                            <FormControl isRequired>
                                <InputGroup size='md'>
                                    <Input type="text" placeholder='Nhập giá sản phẩm' />
                                    <InputRightAddon children='wei' />
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <Input type="text" placeholder="Mô tả sản phẩm" />
                            </FormControl>
                            <Button variant="solid" colorScheme="green">
                                ĐĂNG SẢN PHẨM
                            </Button>

                        </Stack>
                    </Flex>
                    <Flex flex={1} bg="green.200" >
                        <Lottie options={defaultOptions} height={500} width={500} />
                    </Flex>
                </Stack>
            </Container>
        </DefaultLayout>
    )
}
export default PostProducts;