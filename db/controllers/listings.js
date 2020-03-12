const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const Listing = require('../../models').Listing;
const Vendor = require('../../models').Vendor;
const upload = require('./aws');

//Important to specify that you are a uploading a single 'image'
const singleUpload = upload.single('image');

router.get('/', async (req, res) => {
  const listings = await Listing.findAll();
  res.json(listings);
});

router.get('/:id', async (req, res) => {
  const listing = await Listing.findByPk(req.params.id);
  res.json(listing);
});

router.post('/:vendorId/new/', async (req, res) => {
  singleUpload(
    (req, res) =>
      function(err) {
        if (req.file === undefined) {
          console.log('Error: No file selected');
          res.json('Error: no file selected');
        } else {
          const imageURL = req.file.location;
          return imageURL;
        }
      }
  );
  //Pass the imageURL to the newly created vendor
  // req.body should be listing minus VendorId/timestamps
  const timestamp = Date.now();
  const vendor = await Vendor.findByPk(req.params.vendorId);
  const listing = await vendor.createListing({
    ...req.body,
    createdAt: timestamp,
    updatedAt: timestamp
  });
  listing.image = imageURL;
  res.json(listing);
});

router.put('/:id/edit', async (req, res) => {
  // req.body should look like this: { field: field being edited e.g.'price', value: 5.99 }
  const listingToUpdate = await Listing.findByPk(req.params.id);
  listingToUpdate[req.body.field] = req.body.value;
  listingToUpdate.save();
  return res.json(listingToUpdate);
});

router.delete('/:id/delete', async (req, res) => {
  const listingToDelete = await Listing.findByPk(req.params.id);
  await listingToDelete.destroy();
  res.send('Deleted listing with id ' + req.params.id);
});

module.exports = router;
