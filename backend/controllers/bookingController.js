const Bookmark = require("../models/bookmarkModel");
const multer = require("multer");
const path = require("path")




exports.getAllBookmarks = async (req, res) => {
  try {
    const bookmark = await Bookmark.find();
    res.status(200).json({
      status: "success",
      data: {
        bookmark,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getBookmark = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ bookId: req.params.id });
    if (bookmarks.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No bookmarks found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        bookmarks,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};





// Create a new bookmark

exports.createBookmark = async (req, res) => {
  try {
    // Destructure required fields from request body
    const {
      bookId,
      address,
      agentId,
      bedrooms,
      bathrooms,
      squareFeet,
      city,
      description,
      price,
      state,
      title,
      approvalStatus,
      reported,
      status,
      image1,
      image2,
      image3,
    } = req.body;
    

    // Create a new Bookamrk instance
    const bookmark = new Bookmark({
      bookId,
      address,
      agentId,
      bedrooms,
      bathrooms,
      squareFeet,
      city,
      description,
      price,
      state,
      title,
      approvalStatus,
      reported,
      status,
      image1,
      image2,
      image3
    });

  
    // Save the bookamrk to the database
    await bookmark.save();

    // Send success response
    res.status(201).json({
      status: "success",
      data: {
        bookmark,
      },
    });
  } catch (err) {
    // Send error response
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};



// Delete a bookamrk by ID
exports.deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
