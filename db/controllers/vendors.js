const express = require('express');
const router = express.Router();
const db = require('../connection');
const Vendor = require('../models/Vendor')

router.get('/', (req, res) => {
  Vendor.findAll().then(data => res.json(data))
});

module.exports = router;
