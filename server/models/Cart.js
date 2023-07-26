const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema(
  {
    image: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    owner: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Cart', Cart);
