const express = require('express');
const mongoose = require('mongoose');
const connect = require('./src/Configs/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const RestaurantController = require('./src/Controllers/restaurant.controller');
const BookController = require('./src/Controllers/book.controller');

app.use('/restaurant', RestaurantController);
app.use('/book', BookController);

module.exports = app;
