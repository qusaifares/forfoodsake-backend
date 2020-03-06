const express = require('express');
const router = express.Router();
const db = require('../connection');
const Vendor = require('../models/Vendor');

router.get('/', (req, res) => {
  Vendor.findAll()
    .then(data => res.json(data))
    .catch(err => console.error(err));
});

router.get('/:id', (req, res) => {
  Vendor.findByPk(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.error(err));
});

router.post('/new', (req, res) => {
  // req.body should be the vendor object
  Vendor.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.error(err));
});

router.put('/:id/edit', async (req, res) => {
  // req.body should look like this: { field: 'whatever field is being edited e.g.(email)', value: 'new_email@gmail.com' }
  const vendorToUpdate = await Vendor.findByPk(req.params.id);
  vendorToUpdate[req.body.field] = req.body.value;
  vendorToUpdate.save();
  return res.json(vendorToUpdate);
});

router.delete('/:id/delete', async (req, res) => {
  const vendorToDelete = await Vendor.findByPk(req.params.id);
  await vendorToDelete.destroy();
  res
    .send('Deleted user with id ' + req.params.id)
    .catch(err => console.error(err));
});

module.exports = router;
