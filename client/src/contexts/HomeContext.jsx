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
      const web3 = new Web3(window.ethereum);
      const networkId = await web3.eth.net.getId();
      const networkData = Marketplace.networks[networkId];
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address);
      // Lấy địa chỉ hiện tại của người dùng
      const accounts = await web3.eth.getAccounts();
      const currentAddress = accounts[0];

      let productsData = [];
      let data = [];
      let result = productss.data

      for (let i = 0; i < result.length; i++) {
        const product = await marketplace.methods.products(i).call();
        console.log('mongo', result)
        // console.log('market ', [...product])
        if (product) {
          productsData.push(product)
          console.log('MetaMask', productsData)
        }
        if (result[i].owner !== currentAddress) {
          data.push(result[i])
        }
      }

      setProducts(data);
      let alt;
      if (pricee <= 2) {
        alt = data.filter((el) => el.price <= 2000000000000000000)
        setProducts(alt)
      } else if (pricee <= 4) {
        alt = data.filter((el) => el.price <= 4000000000000000000)
        setProducts(alt)
      } else if (pricee <= 6) {
        alt = data.filter((el) => el.price <= 6000000000000000000)
        setProducts(alt)
      } else if (pricee <= 8) {
        alt = data.filter((el) => el.price <= 8000000000000000000)
        setProducts(alt)
      } else if (pricee <= 10) {
        setProducts(data);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getProductCate = async (category) => {
    try {
      const productss = await getAllProducts()
      const web3 = new Web3(window.ethereum);
      const networkId = await web3.eth.net.getId();
      const networkData = Marketplace.networks[networkId];
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address);
      // Lấy địa chỉ hiện tại của người dùng
      const accounts = await web3.eth.getAccounts();
      const currentAddress = accounts[0];

      let productsData = [];
      let data = [];
      let result = productss.data

      for (let i = 0; i < result.length; i++) {
        const product = await marketplace.methods.products(i).call();
        if (product.name !== "" && product.owner.toLowerCase() !== currentAddress.toLowerCase()) {
          productsData.push(product)
          console.log('MetaMask', productsData)
        }
        if (result[i].owner !== currentAddress) {
          data.push(result[i])
        }
      }

      setProducts(data);
      let alt;
      switch (category) {
        case 'Đồ nội thất':
          alt = data.filter((el) => el.category === "Đồ nội thất");
          setProducts(alt);
          break;
        case 'Thiết bị công nghệ':
          alt = data.filter((el) => el.category === "Thiết bị công nghệ");
          setProducts(alt);
          break;
        case 'Phụ kiện điện tử':
          alt = data.filter((el) => el.category === "Phụ kiện điện tử");
          setProducts(alt);
          break;
        case 'Thực phẩm':
          alt = data.filter((el) => el.category === "Thực phẩm");
          setProducts(alt);
          break;
        case 'Khác':
          alt = data.filter((el) => el.category === "Khác");
          setProducts(alt);
          break;
        default:
          setProducts(data);
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
