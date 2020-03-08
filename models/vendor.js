'use strict';

module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define(
    'Vendor',
    {
      vendor_name: DataTypes.STRING,
      vendor_type: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      vendor_password: DataTypes.STRING,
      closing_time: DataTypes.STRING,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      address_state: DataTypes.STRING,
      zip_code: DataTypes.STRING,
      vendor_description: DataTypes.STRING,
      vendor_image: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Vendor.associate = function(models) {
    console.log(`mindy:${models}`);
    console.log('Qusai', models);
    Vendor.hasMany(models.Listing, {
      foreignKey: 'listings'
    });
    // associations can be defined here
  };
  return Vendor;
};
