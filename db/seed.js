const sequelize = require('sequelize');
const vendors = require('./vendors.json');
const Vendor = require('./models/Vendor');
const Listing = require('./models/Listing');
const listings = require('./listings.json');


const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    seedData();
  }
});

const seedData = () => {
    vendors.forEach(vendor => {
        Vendor.create(vendor);
        console.log(vendor)
    });
    
    listings.forEach(listing => {
      Listing.create(listing);
      console.log(listing);
    });
}

