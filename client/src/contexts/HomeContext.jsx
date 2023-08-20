import React, { useState } from "react";
import { getAllProducts } from "../api/Product.api";
import { useNavigate } from "react-router-dom";
import Web3 from 'web3';
import Marketplace from '../abis/Marketplace.json';
export const HomeContext = React.createContext({
  products: [],
  setProducts: () => { },
  type: "",
  setType: () => { },
  price: 0,
  setPrice: () => { },
  getAllProduct: () => { },
  getProductCate: () => { },
  handleView: () => { }
})

const HomeContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('Tất cả');
  const [price, setPrice] = useState(10);
  const navigate = useNavigate()
  const handleView = (id) => {
    navigate(`/products/${id}`);
  };

  const getAllProduct = async (pricee) => {
    try {
      const productss = await getAllProducts();

      setProducts(productss.data);
      let alt;
      if (pricee <= 2) {
        alt = productss.data.filter((el) => el.price <= 2000000000000000000)
        setProducts(alt)
      } else if (pricee <= 4) {
        alt = productss.data.filter((el) => el.price <= 4000000000000000000)
        setProducts(alt)
      } else if (pricee <= 6) {
        alt = productss.data.filter((el) => el.price <= 6000000000000000000)
        setProducts(alt)
      } else if (pricee <= 8) {
        alt = productss.data.filter((el) => el.price <= 8000000000000000000)
        setProducts(alt)
      } else if (pricee <= 10) {
        setProducts(productss.data);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getProductCate = async (category) => {
    try {
      const productss = await getAllProducts()
      const web3 = new Web3(window.ethereum);

      let result = productss.data


      // for (let i = 0; i < result.length; i++) {
      // console.log('price chang eth', result[i].price)
      //   const product = await marketplace.methods.products(i).call();
      //   if (product.name !== "" && product.owner.toLowerCase() !== currentAddress.toLowerCase()) {
      //     productsData.push(product)
      //     console.log('MetaMask', productsData)
      //   }
      //   if (result[i].owner !== currentAddress) {
      //     data.push(result[i])
      //   }
      // }
      // setProducts(data);
      setProducts(productss.data);
      let alt;
      switch (category) {
        case 'Đồ nội thất':
          alt = productss.data.filter((el) => el.category === "Đồ nội thất");
          setProducts(alt);
          break;
        case 'Thiết bị công nghệ':
          alt = productss.data.filter((el) => el.category === "Thiết bị công nghệ");
          setProducts(alt);
          break;
        case 'Phụ kiện điện tử':
          alt = productss.data.filter((el) => el.category === "Phụ kiện điện tử");
          setProducts(alt);
          break;
        case 'Thực phẩm':
          alt = productss.data.filter((el) => el.category === "Thực phẩm");
          setProducts(alt);
          break;
        case 'Khác':
          alt = productss.data.filter((el) => el.category === "Khác");
          setProducts(alt);
          break;
        default:
          setProducts(productss.data);
          break;
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <HomeContext.Provider value={{ products, setProducts, getAllProduct, type, setType, price, setPrice, getProductCate, handleView }}>
      {children}
    </HomeContext.Provider>
  )
};
export default HomeContextProvider;
