import React, { useState } from 'react';
import { addProducts } from '../api/Product.api';
export const ProductContext = React.createContext({
    product: {},
    setProduct: () => { },
    handleAddProduct: () => { }
})

const ProductContextProvider = ({ children }) => {
    const [product, setProduct] = useState({});

    const handleAddProduct = async (item) => {
        try {
            const product = await addProducts(item);
            setProduct(product.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <ProductContext.Provider value={{ product, setProduct, handleAddProduct }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;