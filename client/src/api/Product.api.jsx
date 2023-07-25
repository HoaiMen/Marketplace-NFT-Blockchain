import http from '../utils/http';

export const getAllProducts = (page) => {
    return http.get('http://localhost:5000/api/products', {
        params: {
            page: page,
        }
    });
};
//http://localhost:5000/api/products
export const getProduct = (id) => {
    return http.get(`http://localhost:5000/api/products/${id}`);
};

export const getProductCategory = (category) => {
    return http.get(`http://localhost:5000/api/products`, {
        body: {
            category: category
        }
    });
};

export const addProducts = async (product) => {
    return await http.post('http://localhost:5000/api/products/add', product);
};