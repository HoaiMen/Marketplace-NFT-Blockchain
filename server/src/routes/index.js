import productRoute from './products';
function route(app) {
  app.use('/product', productRoute);
}
export default route;
