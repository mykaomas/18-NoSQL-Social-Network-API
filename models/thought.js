const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reactions: [{
    type: String,
  }],
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;