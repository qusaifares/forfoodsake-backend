const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');

router.get('/', (req, res) => {
  res.send('hello world');
});

module.exports = router;
