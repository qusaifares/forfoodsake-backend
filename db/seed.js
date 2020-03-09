// Models
const Vendor = require('../models').Vendor;
const Listing = require('../models').Listing;

// Data
const vendors = require('./vendors.json');
const listings = require('./listings.json');

// Seeding

for (let i = 0; i < vendors.length; i++) {
  Vendor.create(vendors[i]).then(vendor => {
    vendor.createListing(listings[Math.min(listings.length - 1, i)]);
  });
}
