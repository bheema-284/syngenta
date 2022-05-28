// Books Model
// title,description, labels, author, etc.

const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    labels: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

const book = new mongoose.model('book', booksSchema);

module.exports = book;
