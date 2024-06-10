const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: {
        users
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

exports.getUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          user
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'error',
        message: 'Property not found'
      });
    }
  };


  exports.updateUserStatus = async (req, res) => {
    try {
      const userId = req.params.id;
      await User.findByIdAndUpdate(userId,{userStatus: "verified"},{new: true, runValidators: true})
      .then(updatedUser => res.json(updatedUser))
      .catch(err => res.status(400). json(err));
    } catch (err) {
      res.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  };
  exports.rejectUserStatus = async (req, res) => {
    try {
      const userId = req.params.id;
      await User.findByIdAndUpdate(userId,{userStatus: "rejected"},{new: true, runValidators: true})
      .then(updatedUser => res.json(updatedUser))
      .catch(err => res.status(400). json(err));
    } catch (err) {
      res.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  };

  exports.getUserByEmail = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.params.email });
      if (!user) {
        return res.status(404).json({
          status: 'error',
          message: 'User not found'
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          user
        }
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      });
    }
  };

  
  // Create a new property
  exports.createUser = async (req, res) => {
    try {
      // Create a new user object from the request body
      const user = new User(req.body);
  
      // If there are uploaded files, assign the image path to the user
      if (req.files && req.files['image']) {
        user.image = req.files['image'][0].path;
      }
  
      // Save the user to the database
      await user.save();
  
      // Send a successful response
      res.status(201).json({
        status: 'success',
        data: {
          user
        }
      });
    } catch (err) {
      // Handle any errors
      res.status(400).json({
        status: 'error',
        message: err.message
      });
    }}
  
  
  // Update a property by ID
  exports.updateUser = async (req, res) => {
    try {
      // Extract the files from the request
      const files = req.files;
  
      // Create an object to hold the updates
      const updates = { ...req.body };
  
      // If files are uploaded, add their paths to the updates object
      if (files.licenceFront) {
        updates.licenceFront = files.licenceFront[0].path;
      }
      if (files.licenceBack) {
        updates.licenceBack = files.licenceBack[0].path;
      }
  
      // Update the user document in the database
      const user = await User.findByIdAndUpdate(req.params.id, updates, {
        new: true,
        runValidators: true, // Ensure any schema validation rules are applied
      });
  
      res.status(200).json({
        status: 'success',
        data: {
          user,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };
  
  // Delete a property by ID
  exports.deleteUser = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (err) {
      res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
  };