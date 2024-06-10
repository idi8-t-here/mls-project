const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  properties: {
    type: Boolean,
  },
  users: {
    type: Boolean
  },
  content: {
    type: Boolean,
  },
  viewProperties: {
    type: Boolean,
  },
  waitingApproval: {
    type: Boolean,
  },
  ownProperty: {
    type: Boolean,
  },
  reportedProperty: {
    type: Boolean,
  },
  viewUsers: {
    type: Boolean,
  },
  subscribedUsers: {
    type: Boolean,
  },
  unverifiedUsers: {
    type: Boolean,
  },
  suspendedUsers: {
    type: Boolean,
  },
  manageRoles: {
    type: Boolean,
  },
  manageSubscription: {
    type: Boolean,
  },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
