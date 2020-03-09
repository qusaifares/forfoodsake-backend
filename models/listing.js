'use strict';

module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define(
    'Listing',
    {
      listing_name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      vegan: DataTypes.BOOLEAN,
      vegetarian: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.belongsTo(models.Vendor, { foreignKey: 'vendorId' });
  };
  return Listing;
};
