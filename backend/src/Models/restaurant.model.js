// Restarent Model
// name, location, category of dish
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    categoryofdish: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

const restaurant = new mongoose.model('restaurant', restaurantSchema);

module.exports = restaurant;
