import React, { useState } from "react";
import { getAllProducts } from "../api/Product.api";
import { useNavigate } from "react-router-dom";
export const HomeContext = React.createContext({
  products: [],
  setProducts: () => { },
  type: "",
  setType: () => { },
  price: 0,
  setPrice: () => { },
  getAllProduct: () => { },
  getProductCate: () => { },
  handleView: () => { },
  keyWord: "",
  setKeyWord: () => { },
  handleSearch: () => { }
})

const HomeContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState('Tất cả');
  const [price, setPrice] = useState(10);
  const [keyWord, setKeyWord] = useState('');
  const navigate = useNavigate()
  const handleView = (id) => {
    navigate(`/products/${id}`);
  };
  const handleSearch = () => {
    let arr = products;
    if (keyWord) {
      arr = arr.filter((item) => item.name.toLowerCase().includes(keyWord.toLowerCase()));
      setProducts(arr);
      console.log('lấy ra ', arr)
    } else {

    }
  }
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
        case 'Phụ kiện':
          alt = productss.data.filter((el) => el.category === "Phụ kiện");
          setProducts(alt);
          break;
        case 'Thực phẩm':
          alt = productss.data.filter((el) => el.category === "Thực phẩm");
          setProducts(alt);
          break;
        case 'Thời trang':
          alt = productss.data.filter((el) => el.category === "Thời trang");
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
    <HomeContext.Provider value={{ products, setProducts, getAllProduct, type, setType, price, setPrice, getProductCate, handleView, keyWord, setKeyWord, handleSearch }}>
      {children}
    </HomeContext.Provider>
  )
};
export default HomeContextProvider;
