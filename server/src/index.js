import express from 'express';
import configViewEngine from './config/viewEngine';
require('dotenv').config();
const app = express();
const port = process.env.PORT;

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('Home.ejs');
});

app.listen(port, () => {
  console.log('Server is running on post 3000');
});
