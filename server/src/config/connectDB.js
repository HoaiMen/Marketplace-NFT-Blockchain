import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/marketplace');
    console.log('connect successfully !!!!');
  } catch (err) {
    console.log('connect fail !!!');
  }
}
module.exports = { connect };
