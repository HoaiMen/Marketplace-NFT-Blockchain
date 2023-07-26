import React, { useEffect } from "react";
import { addProductsCart, deleteCart, getAllCarts } from "../api/Cart.api";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'

export const CartContext = React.createContext({
    cart: [],
    setCart: () => { },
    amountInCart: 0,
    setAmountInCart: () => { },
    total: 0,
    setTotal: () => { },
    handleTotal: () => { },
    handleAddCart: () => { },
    getProductsCart: () => { },
    handleDeleteCart: () => { }
})

const CartContextProvider = ({ children }) => {
    const toast = useToast()
    const [cart, setCart] = useState([]);
    const [amountInCart, setAmountInCart] = useState(0);
    const [total, setTotal] = useState(0);


    const handleTotal = () => {
        let ans = 0;
        for (const item of cart) {
            ans += item.price;
        }
        setTotal(ans);
    };
    const handleAddCart = async (item) => {
        try {
            const index = cart.findIndex((c) => c.id === item.id);
            console.log('cart:', cart)
            console.log('cart:', index)
            const cartt = await addProductsCart(item);
            setCart([...cart, cartt.data]);
            setAmountInCart((prev) => prev + 1);
            handleTotal();
        } catch (err) {
            console.log(err)
        }
    }
    const getProductsCart = async () => {
        try {
            const products = await getAllCarts();
            setCart(products.data)
            setAmountInCart(products.data.length)
        } catch (err) {
            console.log(err)
        }
    }
    const handleDeleteCart = async (id) => {
        try {
            const products = await deleteCart(id);
            setCart([...cart])
            setAmountInCart((pre) => pre - 1)
            handleTotal();
        } catch (err) {
            console.log(err)
        }
    }

    console.log('so san pham trong gio', cart)


    useEffect(() => {
        handleTotal();
    }, [cart]);

    return (
        <CartContext.Provider
            value={{ cart, setCart, amountInCart, setAmountInCart, handleAddCart, getProductsCart, handleDeleteCart, total, setTotal, handleTotal }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;