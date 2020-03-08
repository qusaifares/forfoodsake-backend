'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define(
    'Listing',
    {
      listing_name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      vegan: DataTypes.INTEGER,
      vegetarian: DataTypes.INTEGER,
      description: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {}
  );
  Listing.associate = models => {
    Listing.hasOne(models.Vendor, { onDelete: 'CASCADE' });
  };
  return Listing;
};
