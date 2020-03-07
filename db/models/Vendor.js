const Sequelize = require('sequelize');
const db = require('../connection');

const Vendor = db.define(
  'vendor',
  {
    listing_id: {
      type: DataTypes.UUID,
      allowNum: false
    },
    vendor_name: {
      type: Sequelize.STRING
    },
    vendor_type: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    vendor_password: {
      type: Sequelize.STRING
    },
    closing_time: {
      type: Sequelize.STRING
    },
    street: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    address_state: {
      type: Sequelize.STRING
    },
    zip_code: {
      type: Sequelize.STRING
    },
    vendor_description: {
      type: Sequelize.STRING
    },
    vendor_image: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.DATE
    },
    updated_at: {
      type: Sequelize.DATE
    },
    deleted_at: {
      type: Sequelize.DATE
    }
  },
  {
    paranoid: true,
    underscored: true
  }
);

module.exports = Vendor;
