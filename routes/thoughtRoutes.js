const express = require('express');
const Thought = require('../models/thought');

const router = express.Router();

// GET all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new thought
router.post('/', async (req, res) => {
    try {
      const thought = new Thought(req.body);
      await thought.save();
      res.status(201).json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;