const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bsale api',
      version: '1.0.0',
      description: 'Bsale API ecommerce V1',
    },
    servers: [
      {
        url: 'http://localhost:4001',
      },
      {
        url: 'https://bsalebackapi.herokuapp.com',
      },
    ],
  },
  apis: ['./src/routes/*.js']
};

module.exports = {
  swaggerOptions,
};
