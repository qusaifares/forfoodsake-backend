const express = require('express');
const router = express.Router();
const Vendor = require('../../models').Vendor;
const Listing = require('../../models').Listing;

router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.findAll({
      include: [Listing]
    });
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
  console.log(req.body);
  let vendorToCreate = {
    name: req.body.name,
    type: 'Restaurant',
    phone: '1234567890',
    email: 'dolly@do.nut',
    password: req.body.password,
    closing_time: '12:00 AM',
    street: '123',
    city: 'rerwe',
    state: 'FL',
    zip_code: '33211',
    description: 'Big Mac Yummy',
    image: 'asldkfna;sldkf'
  };
  const newVendor = await Vendor.create(vendorToCreate);
  res.json(newVendor);
});

router.post('/login', async (req, res) => {
  // req.body should be {name, password}
  let vendorList = await Vendor.findAll({
    where: {
      name: req.body.name
    }
  });
  if (vendorList.length === 0) {
    // if query finds nothing
    res.send('User not found');
  } else {
    vendor = vendorList[0];
    if (vendor.password === req.body.password) {
      res.json(vendor);
    } else {
      // if password doesn't match
      res.status(500).send('Incorrect password');
    }
  }
});

router.put('/:id/edit', async (req, res) => {
  // req.body should look like this: { field: field being edited e.g.'email', value: 'new_email@gmail.com' }
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
