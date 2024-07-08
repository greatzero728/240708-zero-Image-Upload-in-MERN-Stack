// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const Item = require('./models/Item.jsx'); // Ensure you import the Item model

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB using Mongoose
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Route to handle file upload and save to MongoDB
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { name, symbol, description, percentOfPresale, amountOfBuy } = req.body;
    const newItem = new Item({
      name,
      symbol,
      description,
      image: req.file.path,
      percentOfPresale,
      amountOfBuy,
    });
    await newItem.save();
    res.status(201).send('File uploaded and item saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading file and saving item');
  }
});

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
