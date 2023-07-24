import http from '../utils/http';

export const addProductsCart = async (product) => {
    return await http.post('http://localhost:3000/cart', product);
};

export const getAllCarts = () => {
    return http.get(`http://localhost:3000/cart`);
};

export const deleteCart = (id) => {
    return http.delete(`http://localhost:3000/cart/${id}`);
};