const sequelize = require('./connection');
const vendors = require('./vendors.json');
const Vendor = require('./models/Vendor');
const Listing = require('./models/Listing');
const listings = require('./listings.json');


// const eraseDatabaseOnSync = true;

// sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
//   if (eraseDatabaseOnSync) {
//     seedData();
//   }
// });

// const seedData = () => {
//     vendors.forEach(vendor => {
//         Vendor.create(vendor);
//         console.log(vendor)
//     });
    
//     listings.forEach(listing => {
//       Listing.create(listing);
//       console.log(listing);
//     });
// }


// const createVendorsWithListings = async () => {
//     await Vendor.create(
//       {
//         vendor_name: 'Dollys Donuts',
//         vendor_type: 'Restaurant',
//         phone: '1234567890',
//         email: 'dolly@do.nut',
//         vendor_password: 'ronniemcdonnie',
//         closing_time: '12:00 AM',
//         street: '123',
//         city: 'rerwe',
//         address_state: 'FL',
//         zip_code: '33211',
//         vendor_description: 'Big Mac Yummy',
//         vendor_image: 'asldkfna;sldkf'
//       },
//       {
//         listings: [
//         {
//           listing_name: 'fries',
//           price: 1.59,
//           quanity: 20,
//           vegan: true,
//           vegetarian: true,
//           description: 'satisfy your salty craving & clog your arteries with our fresh-ish sea salt fries',
//           image: 'lskdfnasldfnsldnlk',
//         },
//       ]
//     },
//       {
//         include: [Listing],
//       }
//     );
// }

// createVendorsWithListings();
