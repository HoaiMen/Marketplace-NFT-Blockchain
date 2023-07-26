import http from '../utils/http';

export const getAllProducts = () => {
    return http.get('http://localhost:5000/api/products');
};
export const getProduct = (id) => {
    return http.get(`http://localhost:5000/api/products/${id}`);
};


export const addProducts = async (product) => {
    return await http.post('http://localhost:5000/api/products/add', product);
};