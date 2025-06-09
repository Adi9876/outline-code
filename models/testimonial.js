const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: String,
  company: String,
  content: {
    type: String,
    required: true,
    maxlength: 1000
  },
  avatar: {
    url: String,
    filename: String
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Testimonial', testimonialSchema);

