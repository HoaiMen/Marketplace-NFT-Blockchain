import Products from '../models/products';
let getAllProducts = async (req, res) => {
  const products = await Products.find();
  return res.render('Home.ejs', { dataProducts: products });
};

let createProduct = async (req, res) => {
  //Create new product
  console.log(req.body);
  const newProduct = await new Products({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  });

  const product = await newProduct.save();
  console.log(product);
  return res.send('create product successful');
};
module.exports = {
  getAllProducts,
  createProduct
};
