const express = require('express');
const router = express.Router();
const Vendor = require('../../models').Vendor;
const Listing = require('../../models').Listing;
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.findAll({
      include: [Listing],
    });
    res.json(vendors);
  } catch (err) {
    res.send(err);
  }
});

router.get('/:id', async (req, res) => {
  const vendor = await Vendor.findByPk(req.params.id, {
    include: [Listing],
  });
  return res.json(vendor);
});

router.post('/new', async (req, res) => {
  // new vendor info
  let vendorToCreate = req.body;
  try {
    // hashing password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // replacing password with hashed password
    vendorToCreate.password = hashedPassword;

    const newVendor = await Vendor.create(vendorToCreate);
    res.json(newVendor);
  } catch {
    res.status(500).send();
  }

  // req.body should be the vendor object
});

router.post('/login', async (req, res) => {
  // req.body should be {email, password}
  let vendorList = await Vendor.findAll({
    include: [Listing],
    where: {
      email: req.body.email,
    },
  });
  if (vendorList.length === 0) {
    // if query finds nothing
    res.statusMessage = 'User not found';
    res.status(400).end();
  } else {
    try {
      vendor = vendorList[0];
      if (await bcrypt.compare(req.body.password, vendor.password)) {
        res.json(vendor);
      } else {
        // if password doesn't match
        console.log('bad password');
        res.statusMessage = 'Current password does not match';
        res.status(403).end();
      }
    } catch {
      res.status(500).send('Forbidden');
    }
  }
});

router.put('/:id/edit', async (req, res) => {
  const vendorToUpdate = await Vendor.update(req.body, {
    where: { id: req.params.id },
  });
  return res.json(vendorToUpdate);
});

router.delete('/:id/delete', async (req, res) => {
  const vendorToDelete = await Vendor.findByPk(req.params.id);
  await vendorToDelete.destroy();
  res.statusMessage = 'Deleted vendor with id ' + req.params.id;
  res.status(200).end();
});

module.exports = router;
