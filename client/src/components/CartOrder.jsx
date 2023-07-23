import React from 'react';
import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';


const OrderSummaryItem = (props) => {
    const { label, value, children } = props;
    return (
        <Flex justify="space-between" fontSize="sm">
            <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
                {label}
            </Text>
            {value ? <Text fontWeight="medium">{value}</Text> : children}
        </Flex>
    );
};

export const CartOrder = ({ value }) => {
    return (
        <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
            <Heading size="md">Tổng Order</Heading>

            <Stack spacing="6">
                <OrderSummaryItem label="Subtotal" value={value} />
                <OrderSummaryItem label="Shipping + Tax">
                    <Link href="#" textDecor="underline">
                        Phí vận chuyển
                    </Link>
                </OrderSummaryItem>
                <OrderSummaryItem label="Coupon Code">
                    <Link href="#" textDecor="underline">
                        Thêm mã giảm giá
                    </Link>
                </OrderSummaryItem>
                <Flex justify="space-between">
                    <Text fontSize="lg" fontWeight="semibold">
                        Thành tiền
                    </Text>
                    <Text fontSize="xl" fontWeight="extrabold">
                        {value}
                    </Text>
                </Flex>
            </Stack>
            <Button
                colorScheme="blue"
                size="lg"
                fontSize="md"
                rightIcon={<FaArrowRight />}
            >
                Checkout
            </Button>
        </Stack>
    );
};