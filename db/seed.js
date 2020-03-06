const sequelize = require('sequelize');
const data = require('./seed.json');
const Vendor = require('./models/Vendor');
const Listing = require('./models/Listing');



// Vendor.destroy({
//   where: {},
//   truncate: true
// }).then(() => {
//   data.forEach(vendor => {
//     Vendor.create(vendor);
//   });
// });

data.forEach(vendor => {
    Vendor.create(vendor);
    console.log(vendor)
});