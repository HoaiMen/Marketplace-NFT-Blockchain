import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Products = new Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  }
});
module.exports = mongoose.model('Products', Products);
