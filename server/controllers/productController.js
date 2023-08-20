const e = require('express');
const Product = require('../models/Product');
let getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

let getProduct = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

let addProducts = async (req, res) => {
  try {
    const newProduct = await new Product({
      image: req.body.image,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      status: false,
      owner: req.body.owner,
      itemAddress: req.body.itemAddress,
    });
    const product = await newProduct.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  addProducts,
};
