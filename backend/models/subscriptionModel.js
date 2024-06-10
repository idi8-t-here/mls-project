const mongoose = require('mongoose');
const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    smallText: {
        type: String,
      },
    price: {
        type: String,
      },
    duration: {
        type: String,
      },
      offers: {
        type: String,
      },

      subscriptionType: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      }
  });
  
  const Subscription = mongoose.model('Subscription', subscriptionSchema);
  module.exports=Subscription;