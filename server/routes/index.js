const productRouter = require('./product.api');
const cartRouter = require('./cart.api');
function route(app) {
  app.use('/api', productRouter);
  app.use('/api', cartRouter);
}
module.exports = route;
