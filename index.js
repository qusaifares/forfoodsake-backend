const express = require('express');
const app = express();
// import models, { sequelize } from './models';

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const vendorsController = require('./db/controllers/vendors');

const listingsController = require('./db/controllers/listings');
app.use('/vendors', vendorsController);
app.use('/listings', listingsController);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



// const createVendorsWithListings = async () => {
//   await models.Vendor.create(
//     {
//       vendor_name: 'Dollys Donuts',
//       vendor_type: 'Restaurant',
//       phone: '1234567890',
//       email: 'dolly@do.nut',
//       vendor_password: 'ronniemcdonnie',
//       closing_time: '12:00 AM',
//       street: '123',
//       city: 'rerwe',
//       address_state: 'FL',
//       zip_code: '33211',
//       vendor_description: 'Big Mac Yummy',
//       vendor_image: 'asldkfna;sldkf'
//     },
//     {
//       listings: [
//         {
//           listing_name: 'fries',
//           price: 1.59,
//           quanity: 20,
//           vegan: true,
//           vegetarian: true,
//           description:
//             'satisfy your salty craving & clog your arteries with our fresh-ish sea salt fries',
//           image: 'lskdfnasldfnsldnlk'
//         }
//       ]
//     },
//     {
//       include: [models.Listing]
//     }
//   );
// };

// createVendorsWithListings();
