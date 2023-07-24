import http from '../utils/http';

export const getAllProducts = (page) => {
    return http.get('http://localhost:3000/data', {
        params: {
            page: page,
        }
    });
};

export const getProduct = (id) => {
    return http.get(`http://localhost:3000/data/${id}`);
};

export const getProductCategory = (category) => {
    return http.get(`http://localhost:3000/data`, {
        body: {
            category: category
        }
    });
};