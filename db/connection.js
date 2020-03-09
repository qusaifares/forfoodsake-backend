// const Sequelize = require('sequelize');

// // Option 1: Passing parameters separately
// const sequelize = new Sequelize(
//   'forfoodsake',
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'postgres'
//   }
// );

// // // Option 2: Passing a connection URI
// // const sequelize = new Sequelize(
// //   'localhost:8000/forfoodsake'
// //   // `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@example.com:5432/forfoodsake`
// // );

// // Repo for reference for the following code https://github.com/lorenseanstewart/sequelize-crud-101/blob/master/server/config/db.js
// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.vendor = require('../models/Vendor')(sequelize, Sequelize);
// db.listing = require('../models/Listing')(sequelize, Sequelize);

// db.listing.belongsTo(db.vendor);
// db.vendor.hasMany(db.listing);

// module.exports = db;
// module.exports = sequelize;
