const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Import and use the users route
app.use('/users', require('./routes/users'));

// Start server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
