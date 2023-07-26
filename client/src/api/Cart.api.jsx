import http from '../utils/http';

export const addProductsCart = async (product) => {
    return await http.post('http://localhost:5000/api/cart/add', product);
};

export const getAllCarts = () => {
    return http.get(`http://localhost:5000/api/cart`);
};
//cart/delete/
export const deleteCart = (id) => {
    return http.delete(`http://localhost:5000/api/cart/delete/${id}`);
};

export const getDetailCart = (id) => {
    return http.get(`http://localhost:5000/api/cart/detail/${id}`);
};