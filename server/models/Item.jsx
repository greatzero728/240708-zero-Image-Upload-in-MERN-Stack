// server/models/Item.jsx
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, default: 'zero' }, // Default value for name
  symbol: { type: String, default: '19990728' }, // Default value for symbol
  description: { type: String, default: 'ICPC' }, // Default value for description
  image: String,
  percentOfPresale: { type: Number, default: 0 }, // Default value for percentOfPresale
  amountOfBuy: { type: [Number], default: Array.from({ length: 24 }, () => 0) }, // Default array of 24 zeros
});

module.exports = mongoose.model('Item', itemSchema);
