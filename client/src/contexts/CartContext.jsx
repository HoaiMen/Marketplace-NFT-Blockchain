import React, { useEffect } from "react";
import { addProductsCart, deleteCart, getAllCarts } from "../api/Cart.api";
import { useState } from "react";


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
    // const toast = useToast()
    const [cart, setCart] = useState([]);
    const [amountInCart, setAmountInCart] = useState(0);
    const [total, setTotal] = useState(0);
    // const [accountAdd, setAccountAdd] = useState('');


    const handleTotal = () => {
        let ans = 0;
        for (const item of cart) {
            ans += item.price;
        }
        setTotal(ans);
    };
    const handleAddCart = async (item) => {
        try {
            // Lấy địa chỉ hiện tại của người dùng
            // const web3 = new Web3(window.ethereum);
            // const accounts = await web3.eth.getAccounts();
            // const accountAd = accounts[0]
            // console.log("account hiện tại:", accountAd)
            // setAccountAdd(accounts[0]);
            // if (accountAd) {
            const cartt = await addProductsCart(item);
            setCart([...cart, cartt.data]);
            setAmountInCart((prev) => prev + 1);
            handleTotal();
            // } else {
            //     console.log("Da co trong gio")
            //     return (toast({
            //         title: 'Cảnh báo.',
            //         description: "Đang load current Address",
            //         status: 'warning',
            //         duration: 9000,
            //         isClosable: true,
            //     }))
            // }
        } catch (err) {
            console.log(err)
        }
    }
    const getProductsCart = async () => {
        try {
            const products = await getAllCarts();
            // // console.log('cart get', products.data)

            setCart(products.data)
            setAmountInCart(products.data.length)

        } catch (err) {
            console.log(err)
        }
    }
    const handleDeleteCart = async (id) => {
        try {
            await deleteCart(id);
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