const express = require('express');
const cors = require('cors')
const { productsRouter } = require('./routers/products.router');
const { categoriesRouter } = require('./routers/categories.router');
const { db } = require('./db/connection');


class Application {

  constructor(){
    this.app = express()
    this.port = process.env.PORT || 4000;

    this.paths = {
      products: "/api/v1/products",
      categories: "/api/v1/categories"
    };

    // Conenctar base de datos
    this.connetDB();

    // Middelwares
    this.middlewares();

    this.app.get('/api/v1', (req, res)=> {
      res.json({mesagge: "Bsale api Ecommerce"})
    })

     // Rutas de mi aplicación
     this.routes();
    
  }

  async connetDB() {
    try {
      await db.authenticate();
      console.log('Base de datos online');
    } catch (error) {
      throw new Error(error);
    }
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //lectura y parseo del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.products, productsRouter);
    this.app.use(this.paths.categories, categoriesRouter);
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`run server on http://localhost:${this.port}`)
    );
  }

}

module.exports = {
  Application
}
