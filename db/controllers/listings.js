const express = require('express');
const router = express.Router();
const Listing = require('../../models').Listing;
const Vendor = require('../../models').Vendor;
// const upload = require('./aws');

router.get('/', async (req, res) => {
  try {
    console.log('hello');
    const listings = await Listing.findAll();
    console.log(listings);
    if (!listings) throw new Error('No listings found');
    res.json(listings);
  } catch (error) {
    res.send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByPk(req.params.id);
    if (!listing) throw new Error('Listing not found');
    res.json(listing);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/:vendorId/new/', async (req, res) => {
  try {
    // req.body should be listing minus VendorId/timestamps
    const timestamp = Date.now();
    const vendor = await Vendor.findByPk(req.params.vendorId);
    const listing = await vendor.createListing({
      ...req.body,
      createdAt: timestamp,
      updatedAt: timestamp,
    });
    res.json(listing);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id/edit', async (req, res) => {
  try {
    // req.body should look like this: { field: field being edited e.g.'price', value: 5.99 }
    const listingToUpdate = await Listing.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(listingToUpdate);
  } catch (error) {
    res.send(error);
  }
});

router.delete('/:id/delete', async (req, res) => {
  try {
    const listingToDelete = await Listing.findByPk(req.params.id);
    await listingToDelete.destroy();
    res.send('Deleted listing with id ' + req.params.id);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
