import Products from '../models/products';

let getAllProducts = async (req, res) => {
  const products = await Products.find();
  //   console.log(products);

  return res.render('Home.ejs', { dataProducts: products });
};

let createProduct = async (req, res) => {
  //Create new product
  const newProduct = await new Products({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  });

  const product = await newProduct.save();
  //   console.log(product);
  return res.redirect('/product');
};

let detailProduct = async (req, res) => {
  const products = await Products.findById(req.params.id);
  return res.send(JSON.stringify(products));
};

let deleteProduct = async (req, res) => {
  console.log(req.body.id);
  let productId = req.body.productId;
  await Products.findByIdAndDelete(productId);
  return res.redirect('/product');
};
module.exports = {
  getAllProducts,
  createProduct,
  detailProduct,
  deleteProduct
};
