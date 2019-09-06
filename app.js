const express = require('express');
const app = express();

const productsRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')

app.use('/products', productsRoutes);
app.use('/orders', orderRoutes);

module.exports = app;