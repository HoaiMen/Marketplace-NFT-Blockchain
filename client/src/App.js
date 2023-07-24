import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import ProductsManage from './pages/ProductsManage';
import PostProducts from './pages/PostProducts';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create-product" element={<CreateProduct />}></Route>
      <Route path="/products-management" element={<ProductsManage />}></Route>
      <Route path="/post-products" element={<PostProducts />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
      <Route path="/detail-product/:id" element={<ProductDetail />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}

export default App;
