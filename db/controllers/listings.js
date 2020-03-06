const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const Vendor = require('../models/Vendor');

// router
//   .get('/', (req, res) => {
//     Vendor.findAll().then(vendors => res.json(vendors));
//   })
//   .catch(err => console.error(err));

module.exports = router;
