const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
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
    description: {
      type: String,
      require: true,
    },
    owner: {
      type: String,
      require: true,
    },
    itemAddress: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Product', Product);
