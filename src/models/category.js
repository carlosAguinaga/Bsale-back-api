const { DataTypes } = require('sequelize');
const { db } = require('../db/connection');

const Category = db.define(
  'category',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = { Category };
