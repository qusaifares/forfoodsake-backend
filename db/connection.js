const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
  'forfoodsake',
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

// // Option 2: Passing a connection URI
// const sequelize = new Sequelize(
//   'localhost:8000/forfoodsake'
//   // `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@example.com:5432/forfoodsake`
// );

module.exports = sequelize;
