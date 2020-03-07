const Sequelize = require('sequelize');
const db = require('../connection');
const Vendor = require('./Vendor');


const Listing = db.define(
    'listing',
    {
    listing_name: {
    type: Sequelize.STRING
    },
    price: {
      type: Sequelize.FLOAT
    },
    quanity: {
      type: Sequelize.INTEGER
    },
    // vendor_id: {
    //   type: Sequelize.STRING
    // },
    vegan: {
      type: Sequelize.STRING
    },
    vegetarian: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    }
    }
)

Vendor.hasMany(Listing)
Listing.belongsTo(Vendor)

module.exports = Listing;