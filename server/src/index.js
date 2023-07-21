import express from 'express';
import configViewEngine from './config/viewEngine';
import route from './routes';
import db from './config/connectDB';
require('dotenv').config();
const app = express();
const port = process.env.PORT;
configViewEngine(app);

db.connect();

route(app);

app.listen(port, () => {
  console.log('Server is running on post 3000');
});
