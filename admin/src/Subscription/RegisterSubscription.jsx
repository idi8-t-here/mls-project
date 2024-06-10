import React, { useState, useEffect } from 'react';

function SubscriptionComponent() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');  // Assume you get the userId from somewhere, like user context or props

  useEffect(() => {
    fetch('/api/subscriptions')
      .then(response => response.json())
      .then(data => setSubscriptions(data));
  }, []);

  const handleRegister = () => {
    const registrationData = {
      userId,
      subscriptionTier: selectedSubscription,
      durationInDays: 30  // Assume a fixed duration, or you can make it dynamic
    };

    fetch('http://localhost:3000/api/subscription/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registrationData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Subscription updated successfully') {
        alert('Registered successfully!');
      } else {
        alert('Registration failed');
      }
    });
  };

  return (
    <div>
      <h1>Register for a Subscription</h1>
      <form onSubmit={e => { e.preventDefault(); handleRegister(); }}>
        <div className="form-group">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            id="userName"
            className="form-control"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subscription">Select Subscription</label>
          <select
            id="subscription"
            className="form-control"
            value={selectedSubscription}
            onChange={e => setSelectedSubscription(e.target.value)}
            required
          >
            <option value="">Choose...</option>
            {subscriptions.map(sub => (
              <option key={sub._id} value={sub.subscriptionType}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <div className="card text-center mt-3">
        {subscriptions.map((sub, index) => (
          <div key={index} className="card mb-3">
            <div className="card-header">
              {sub.subscriptionType}
            </div>
            <div className="card-body">
              <h5 className="card-title">{sub.name}</h5>
              <p className="card-text">
                Start Date: {new Date(sub.startDate).toLocaleDateString()}<br />
                End Date: {new Date(sub.endDate).toLocaleDateString()}
              </p>
              <a
                href="javascript:void(0)"
                className="btn btn-primary waves-effect waves-light"
              >
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionComponent;
