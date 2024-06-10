const Subscription = require('../models/subscriptionModel'); 


exports.updateUserSubscription = async (req, res) => {
  const { userId, subscriptionTier, durationInDays } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + durationInDays);

    user.subscription.tier = subscriptionTier;
    user.subscription.validUntil = validUntil;

    await user.save();

    res.status(200).json({ message: 'Subscription updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Create a new subscription package

exports.createSubscription = async (req, res) => {
  try {
    console.log(req.body);
    const { name, subscriptionType, startDate, endDate, smallText, price, offers } = req.body;

    // Create a new subscription instance
    const newSubscription = new Subscription({
      name,
      subscriptionType,
      smallText,
      price,
      offers,
      startDate,
      endDate,
    });

    // Save the subscription to the database
    await newSubscription.save();

    res.status(201).json({ message: 'Subscription created successfully', subscription: newSubscription });
  } catch (error) {
    res.status(500).json({ message: 'Error creating subscription', error });
  }
};

// Get all subscription packages
exports.getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single subscription package by ID
exports.getSubscriptionById = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a subscription package
exports.updateSubscription = async (req, res) => {
  try {
    const { name, subscriptionType, startDate, endDate } = req.body;
    const subscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      { name, subscriptionType, startDate, endDate },
      { new: true, runValidators: true }
    );
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json(subscription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a subscription package
exports.deleteSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findByIdAndDelete(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json({ message: 'Subscription deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
