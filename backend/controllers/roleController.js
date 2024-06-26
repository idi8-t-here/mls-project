const Role = require('../models/Role');

// Create a new role
exports.createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json({ success: true, data: role });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({ success: true, data: roles });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get roles by name
exports.getRolesByName = async (req, res) => {
  try {
    const { name } = req.params;
    const regex = new RegExp(name, 'i'); // Create a case-insensitive regular expression
    const roles = await Role.find({ name: regex }); // Find roles where the name matches the regex
    res.status(200).json({ success: true, data: roles });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


// Update a role by ID
exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
    if (!role) {
      return res.status(404).json({ success: false, error: 'Role not found' });
    }
    res.status(200).json({ success: true, data: role });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a role by ID
exports.deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      return res.status(404).json({ success: false, error: 'Role not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
