const express = require('express');
const router = express.Router();
const db = require('../../seeders/connection');
const models = require('../../models');
const Vendor = models.Vendor;

router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    res.json(vendors);
  } catch (err) {
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  const vendor = await Vendor.findByPk(req.params.id);
  return res.json(vendor);
});

router.post('/new', async (req, res) => {
  // req.body should be the vendor object
  const newVendor = await Vendor.create(req.body);
  return res.json(newVendor);
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
  res.send('Deleted vendor with id ' + req.params.id);
});

module.exports = router;
