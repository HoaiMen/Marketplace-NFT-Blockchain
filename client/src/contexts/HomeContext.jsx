import React, { useState } from 'react';
import { getAllProducts, getProductCategory } from '../api/Product.api';

export const HomeContext = React.createContext({
  products: [],
  setProducts: () => {},
  page: 0,
  setPage: () => {},
  type: '',
  setType: () => {},
  price: 0,
  setPrice: () => {},
  getAllProduct: () => {},
  getProductCate: () => {},
});

const HomeContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('Tất cả');
  const [price, setPrice] = useState(10);
  const [page, setPage] = useState(1);
  const getAllProduct = async (page, pricee, status) => {
    try {
      const products = await getAllProducts(page);
      setProducts(products.data);
      let result, alt;
      // switch (pricee) {
      //     case 2:
      //         result = products.data.filter((el) => el.price <= 2000000000000000000);
      //         setProducts(result);
      //         break;
      //     case 4:
      //         result = products.data.filter((el) => el.price <= 4000000000000000000);
      //         setProducts(result);
      //         break;
      //     case 6:
      //         result = products.data.filter((el) => el.price <= 6000000000000000000);
      //         setProducts(result);
      //         break;
      //     case 8:
      //         result = products.data.filter((el) => el.price <= 8000000000000000000);
      //         setProducts(result);
      //         break;
      //     default:
      //         setProducts(products.data);
      //         break;
      // }

      if (pricee <= 2) {
        alt = products.data.filter((el) => el.price <= 2000000000000000000);
        setProducts(alt);
      } else if (pricee <= 4) {
        alt = products.data.filter((el) => el.price <= 4000000000000000000);
        setProducts(alt);
      } else if (pricee <= 6) {
        alt = products.data.filter((el) => el.price <= 6000000000000000000);
        setProducts(alt);
      } else if (pricee <= 8) {
        alt = products.data.filter((el) => el.price <= 8000000000000000000);
        setProducts(alt);
      } else if (pricee <= 10) {
        setProducts(products.data);
      }
      console.log('alt:', alt);
      switch (status) {
        case 'Đồ nội thất':
          result = products.data.filter((el) => el.category === 'Đồ nội thất');
          setProducts(result);
          break;
        case 'Thiết bị công nghệ':
          result = products.data.filter((el) => el.category === 'Thiết bị công nghệ');
          setProducts(result);
          break;
        case 'Phụ kiện điện tử':
          result = products.data.filter((el) => el.category === 'Phụ kiện điện tử');
          setProducts(result);
          break;
        case 'Thực phẩm':
          result = products.data.filter((el) => el.category === 'Thực phẩm');
          setProducts(result);
          break;
        case 'Khác':
          result = products.data.filter((el) => el.category === 'Khác');
          setProducts(result);
          break;
        default:
          setProducts(products.data);
          break;
      }
      console.log('result:', result);
    } catch (err) {
      console.log(err);
    }
  };
  const getProductCate = async (category) => {
    try {
      const products = await getProductCategory(category);
      console.log('category', products.data);
      setProducts(products.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <HomeContext.Provider
      value={{
        products,
        setProducts,
        getAllProduct,
        page,
        setPage,
        type,
        setType,
        price,
        setPrice,
        getProductCate,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
export default HomeContextProvider;
