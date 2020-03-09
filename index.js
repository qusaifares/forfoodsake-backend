const express = require('express');
const app = express();
// import models, { sequelize } from './models';

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const vendorsController = require('./db/controllers/vendors');

const listingsController = require('./db/controllers/listings');
app.use('/api/vendors', vendorsController);
app.use('/api/listings', listingsController);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
