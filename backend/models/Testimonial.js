const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  review: { type: String, required: true },
//   image: { type: String, required: true },
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
