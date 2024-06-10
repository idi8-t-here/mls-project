const Property = require("../models/propertyModel");
const multer = require("multer");
const path = require("path")




exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json({
      status: "success",
      data: {
        properties,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        property,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Property not found",
    });
  }
};

exports.getPropertyByAgentId = async (req, res) => {
  try {
    const properties = await Property.find({ agentId: req.params.agentId });
    if (properties.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No properties found for this agent",
      });
    }
    res.status(200).then((req, res) => {
      Property.findById(properties.data.properties._id)
      res.status(200).json({
        status: "success",
      data: {
        property,
      },
      })
    }
    )
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Error retrieving properties",
    });
  }
};

// Create a new property

exports.createProperty = async (req, res) => {
  try {
    // Destructure required fields from request body
    const {
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
      location,
    } = req.body;
    

    // Create a new Property instance
    const property = new Property({
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
      location,
    });

    

    // If files are uploaded, save their paths to the property object
    if (req.files) {
      property.image1 = req.files['image1'] ? req.files['image1'][0].path : undefined;
      property.image2 = req.files['image2'] ? req.files['image2'][0].path : undefined;
      property.image3 = req.files['image3'] ? req.files['image3'][0].path : undefined;
    }

    // Save the property to the database
    await property.save();

    // Send success response
    res.status(201).json({
      status: "success",
      data: {
        property,
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

// Update a property by ID
exports.updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        property,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};


exports.updateApprovalStatus = async (req, res) => {
  try {
    const propertyId = req.params.id;
    await Property.findByIdAndUpdate(propertyId,{approvalStatus: "approved"},{new: true, runValidators: true})
    .then(updatedProperty => res.json(updatedProperty))
    .catch(err => res.status(400). json(err));
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
exports.updateRejectStatus = async (req, res) => {
  try {
    const propertyId = req.params.id;
    await Property.findByIdAndUpdate(propertyId,{reported: false},{new: true, runValidators: true})
    .then(updatedProperty => res.json(updatedProperty))
    .catch(err => res.status(400). json(err));
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};


// Delete a property by ID
exports.deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
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
