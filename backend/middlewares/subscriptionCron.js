const cron = require('node-cron');
const User = require('../models/User');

// Scheduled task to check and update expired subscriptions
cron.schedule('0 0 * * *', async () => {
  try {
    const now = new Date();
    const users = await User.find({
      'subscription.validUntil': { $lt: now },
      'subscription.tier': { $ne: 'Free' },
    });

    const updatePromises = users.map(user => {
      user.subscription.tier = 'Free';
      user.subscription.validUntil = null;
      return user.save();
    });

    await Promise.all(updatePromises);
    console.log('Expired subscriptions updated to Free tier');
  } catch (error) {
    console.error('Error updating subscriptions:', error);
  }
});