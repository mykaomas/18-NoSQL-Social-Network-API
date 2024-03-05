const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Mongoose Models
const User = require('./models/User');
const Thought = require('./models/Thought');

//Routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

//Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});