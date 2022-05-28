const Books = require('../Models/book.model');
const express = require('express');

const router = express.Router();

router.post('', async (req, res) => {
  try {
    const books = await Books.create(req.body);
    return res.status(200).send(books);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get('', async (req, res) => {
  try {
    const books = await Books.find().lean().exec();
    return res.status(200).send(books);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const books = await Books.findById(req.params.id);
    return res.status(200).send(books);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const Books = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(Books);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const books = await Books.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(books);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
