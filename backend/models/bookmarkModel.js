const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  bookId:{
    type: String
  },
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
  }
});

const Bookmark = mongoose.model('bookmark', BookmarkSchema);

module.exports = Bookmark;
