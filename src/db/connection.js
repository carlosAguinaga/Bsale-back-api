const { Sequelize } = require('sequelize');

// reemplazar valores por variables de entorno
const db = new Sequelize('bsale_test', 'bsale_test', 'bsale_test', {
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  dialect: 'mysql',
});

module.exports = { db };
