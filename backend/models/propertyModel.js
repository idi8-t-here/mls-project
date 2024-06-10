const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  price: {
    type: Number
  },
  bedrooms: {
    type: Number
  },
  bathrooms: {
    type: Number
  },
  squareFeet: {
    type: Number
  },
  description: {
    type: String
  },
  title: {
    type: String
  },
  status: {
    type: String
  },
  image1: {
    type: String
  },
  image2: {
    type: String
  },
  image3: {
    type: String
  },
  agentId: {
    type: String
  },
  approvalStatus: {
    type: String
  },
  reported: {
    type: Boolean,
  },
  location: {
    type: String
  }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
