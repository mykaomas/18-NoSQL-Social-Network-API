const mongoose = require('mongoose');
const Thought = require('../models/thought');

const thoughtData = [
  { content: 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.' },
  { content: 'Whenever I\'m about to do something, I think, \'Would an idiot do that?\' And if they would, I do not do that thing' }
];

mongoose.connect('mongodb://localhost:27017/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('MongoDB connected');

  await Thought.deleteMany({});

  await Thought.create(thoughtData);

  console.log('Thought data seeded successfully');
  process.exit(0);
})
.catch((error) => {
  console.error('MongoDB connection error:', error.message);
  process.exit(1);
});