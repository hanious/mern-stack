const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MERN Stack API!' });
});

// Import and use routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mernstack');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

// Connect to database and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
  });
}).catch(() => {
  // Start server even if MongoDB connection fails
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} (without MongoDB)`);
    console.log(`Visit: http://localhost:${PORT}`);
  });
});
