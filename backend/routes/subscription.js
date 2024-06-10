const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController'); // Adjust the path as necessary

router.post('/', subscriptionController.createSubscription);

// Get all subscription packages
router.get('/', subscriptionController.getAllSubscriptions);

// Get a single subscription package by ID
router.get('/:id', subscriptionController.getSubscriptionById);

// Update a subscription package
router.put('/:id', subscriptionController.updateSubscription);

// Delete a subscription package
router.delete('/:id', subscriptionController.deleteSubscription);

router.post('/user', subscriptionController.updateUserSubscription);

module.exports = router;
