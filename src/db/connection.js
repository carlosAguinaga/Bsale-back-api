const { Sequelize } = require('sequelize');


const { USER_DB, PASSWORD_DB, DB_NAME, HOSTDB } = process.env;

const db = new Sequelize(DB_NAME, USER_DB, PASSWORD_DB, {
  host: HOSTDB,
  dialect: 'mysql',
});

module.exports = { db };
