// server/models/Item.jsx
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String },
  symbol: { type: String },
  description: { type: String },
  image: String,
  percentOfPresale: { type: Number },
  amountOfBuy: { type: [Number] }, // Default array of 24 zeros
});

module.exports = mongoose.model('Item', itemSchema);
