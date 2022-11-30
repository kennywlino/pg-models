'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const customersSchema = require('./customers.schema');

// 'postgres://localhost:5432/api-app
// 'postgres://username:password@localhost:5432/api-app' <--- if using username/password
// using a ternary to set up sqlite for testing

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL;


// instantiate the sequelize connection to our database

const sequelizeDB = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// create a customer model with the schema

const CustomerModel = customersSchema(sequelizeDB, DataTypes);

module.exports = {
  sequelizeDB,
  CustomerModel,
};
