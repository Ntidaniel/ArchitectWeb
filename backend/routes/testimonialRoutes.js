const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new testimonial
router.post('/', async (req, res) => {
  const testimonial = new Testimonial({
    name: req.body.name,
    position: req.body.position,
    quote: req.body.quote,
    image: req.body.image,
  });

  try {
    const newTestimonial = await testimonial.save();
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
