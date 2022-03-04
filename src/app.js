const express = require('express');
const { productsRouter } = require('./routers/products.router');
const { db } = require('./db/connection');

const app = express();

const conectarDB = async () => {
  try {
      await db.authenticate();
      console.log('Base de datos online')
  } catch (error) {
      throw new Error(error)
  }
};

conectarDB();

app.get('/api/v1', (req, res) => {
  res.send('hola mundo');
});

app.use('/api/v1/products', productsRouter);

module.exports = { app };
