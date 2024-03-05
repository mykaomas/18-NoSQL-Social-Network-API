const express = require('express');
const connectDB = require('./config/connection');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

//Connect to MongoDB
connectDB()
  .then(() => {
    //Mongoose Models
    const User = require('./models/user');
    const Thought = require('./models/thought');

    //Routes
    app.use('/api/users', userRoutes);
    app.use('/api/thoughts', thoughtRoutes);

    //Start Server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection error:', error.message);
    process.exit(1);
  });
