// server/models/Item.jsx
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  description: String,
  image: String,
  percentOfPresale: Number,
  amountOfBuy: Number,
});

module.exports = mongoose.model('Item', itemSchema);
