'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define(
    'Vendor',
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      closing_time: DataTypes.STRING,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip_code: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {}
  );
  Vendor.associate = function(models) {
    // associations can be defined here
    Vendor.hasMany(models.Listing);
  };
  return Vendor;
};
