const e = require('express');
const Cart = require('../models/Cart');
let getAllCart = async (req, res) => {
  try {
    const products = await Cart.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

let addCart = async (req, res) => {
  try {
    console.log(req.body);
    const newProductCart = await new Cart({
      image: req.body.image,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    });
    console.log(req.body);
    const product = await newProductCart.save();
    console.log(newProductCart);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

let deleteCarts = async (req, res) => {
  try {
    const products = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllCart,
  addCart,
  deleteCarts,
};
