const mongoose = require('mongoose');
const User = require('../models/user');

const userData = [
  { username: 'World\'s Best Boss', email: 'michaelscott@dundermifflin.com' },
  { username: 'World\'s Best Employee', email: 'dwightschrute@dundermifflin.com' }
];

mongoose.connect('mongodb://localhost:27017/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('MongoDB connected');

  await User.deleteMany({});

  await User.create(userData);

  console.log('User data seeded successfully');
  process.exit(0);
})
.catch((error) => {
  console.error('MongoDB connection error:', error.message);
  process.exit(1);
});