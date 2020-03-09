const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const models = require('../../models');
const Listing = models.Listing;
const Vendor = models.Vendor;

router.get('/id', async (req, res) => {
  const listings = await Listing.findAll();
  return res.json(listings);
});

module.exports = router;
