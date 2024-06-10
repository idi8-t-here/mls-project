import React, { useState } from 'react';

function CreateProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null); // State to store the uploaded image

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = ({
      firstName,
      lastName,
      email,
      phone,
      state,
      address,
      image,
    });
    await fetch("http://localhost:3000/createUser", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(userData)
    })
    console.log("userCreated")
    
  };

  return (
    <div className="contact-us section" style={{ width: "80%", margin: 'auto', marginTop: '10vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="contact-form">
              <h3 className="form-title">Profile Details</h3>
              <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="First Name*"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Last Name*"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        type="phone"
                        placeholder="Phone Number*"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="State*"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Address*"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button">
                      <button type="submit" className="btn">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* Display all fields including the uploaded image */}
              <div className="user-profile-info">
                <h3>User Profile Information:</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {phone}</p>
                <p>State: {state}</p>
                <p>Address: {address}</p>
                <p>Image:</p>
                {image && (
                  <img src={URL.createObjectURL(image)} alt="Uploaded" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
