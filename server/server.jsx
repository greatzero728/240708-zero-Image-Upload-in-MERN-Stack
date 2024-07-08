// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config(); // Load environment variables

// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Set up mongoose connection
const mongoURI = process.env.MONGODB_URI; // Use the environment variable
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  description: String,
  image: String,
  percentOfPresale: Number,
  amountOfBuy: Number,
});
const Item = mongoose.model('Item', itemSchema);

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Route to handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    symbol: req.body.symbol,
    description: req.body.description,
    image: req.file.path,
    percentOfPresale: req.body.percentOfPresale,
    amountOfBuy: req.body.amountOfBuy,
  });
  newItem.save((err, item) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(item);
  });
});

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
