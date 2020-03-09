// Models
const Vendor = require('../models').Vendor;
const Listing = require('../models').Listing;

// Data
const vendors = require('./vendors.json');
const listings = require('./listings.json');

// Seeding
Vendor.create(vendors[0]).then(vendor => {
  vendor.createListing(listings[0]);
});

Vendor.create(vendors[1]).then(vendor => {
  vendor.createListing(listings[1]);
});
