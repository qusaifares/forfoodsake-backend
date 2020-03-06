const express = require('express');
const app = express();

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
