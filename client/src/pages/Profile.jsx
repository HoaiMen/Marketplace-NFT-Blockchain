import {
    Box, Flex, VStack, Avatar, Divider,
    Text,
    Container, Heading, HStack, Button, Image, Spacer,
} from '@chakra-ui/react';
import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
const arr = [
    { lable: 'Owner Address: ', value: '0xD2B400CA114180c27D4b0276599EC4D9A63Dbd0C' },
    { lable: 'Số dư hiện tại: ', value: '100 ether' },
    { lable: 'Tổng số sp đã tạo: ', value: '11' },
    { lable: 'Tổng số ether của tất cả sp: ', value: '170 ether' },
    { lable: 'Số ether bán đc: ', value: '70 ether' },
]
const Profile = () => {
    return (
        <DefaultLayout>
            <Container maxW={'full'} py="8" >
                <Flex w={'full'} gap={4}>
                    <Box flex={2} bg={'blue'} height={'30'}>

                    </Box>
                    <Box flex={1} >
                        <VStack p='4'>
                            <TestimonialCard />
                            <Flex
                                direction={'column'}
                                width={'full'}
                                boxShadow={'lg'}
                                maxW={'640px'}
                                rounded={'xl'}
                                bg={'gray.300'}
                                p='2'
                            >
                                <Heading fontSize="md" textAlign={'center'} >
                                    Đã mua
                                </Heading>
                                {arr.map((item, indext) => (
                                    <Flex
                                        key={indext}
                                        direction={{ base: 'column-reverse', md: 'row' }}
                                        position={'relative'}
                                        bg='whiteAlpha.600'
                                        p='2'
                                        mt='3'
                                    >
                                        <Image
                                            src='https://vn-live-01.slatic.net/p/007874b466067416982e2c579adc2522.jpg'
                                            alt='Dan Abramov'
                                            borderRadius='md'
                                            w='90px'
                                            h='90px' />
                                        <Flex
                                            direction={'column'}
                                            textAlign={'left'}
                                            px='4'
                                            maxW='310px'
                                            position={'relative'}
                                        >
                                            <Text my='0' fontFamily='sans-serif' fontWeight='medium' fontSize='20'>May loc nuoc cong nghe cao </Text>
                                            <Text noOfLines={1} mb='2' fontFamily='sans-serif' fontWeight='normal' fontSize='15'>ItemAddress: 0xD2B400CA114180c27D4b0276599EC4D9A63Dbd0C</Text>
                                            <Flex
                                                direction={'row'}
                                                textAlign={'left'}
                                                position={'relative'}
                                                fontWeight={'bold'}
                                                fontSize={'17'}
                                                mb='-3'
                                            >
                                                <Text>5 Ether</Text>
                                                <Spacer />
                                                <Text>x1</Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                ))}

                            </Flex>
                        </VStack>
                    </Box>
                </Flex>
            </Container>
        </DefaultLayout>
    )
}
function TestimonialCard() {
    return (
        <Flex
            direction={'column'}
            width={'full'}
            boxShadow={'lg'}
            maxW={'640px'}
            rounded={'xl'}
            bg={'gray.300'}
            p='2'
        >
            <Flex
                direction={{ base: 'column-reverse', md: 'row' }}
                width={'full'}
                position={'relative'}
                justifyContent='flex-start'
            >
                <Avatar
                    src={'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}
                    height={'60px'}
                    width={'60px'}
                />
                <Flex
                    direction={'column'}
                    textAlign={'left'}
                    px='2'
                    justifyContent={'space-between'}
                >
                    <Text pt='1' mb='0' fontFamily={'Work Sans'} fontWeight={'bold'} fontSize='17' >
                        Brandon P.
                    </Text>
                    <Text
                        fontWeight={'light'}
                        fontSize={'14'}
                        color='gray'
                    >
                        brandon@gmail.com
                    </Text>
                </Flex>
            </Flex>
            <Divider mt='-0.5' color={'black'} />
            <Box textAlign={'center'} >
                <Heading fontSize="md" >
                    Thông tin Account
                </Heading>
                {arr.map((item, index) => (
                    <HStack maxW='400px' textAlign={'left'} key={index} alignItems="start">
                        <Text fontWeight='bold' fontSize='sm'>{item.lable}</Text>
                        <Text noOfLines={1} fontSize='sm' color="gray.700">
                            {item.value}
                        </Text>
                    </HStack>
                ))}
                <Button py='2' w='85%' bg='green.300'>Create Product</Button>
            </Box>
        </Flex>
    );
}

export default Profile;