import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProfilePage() {
  // Initial state for user profile
  const [userProfile, setUserProfile] = useState({
    name: '',
    dob: '',
    mobile: '',
    email: '',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  // Handle profile picture change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfile({
          ...userProfile,
          profilePicture: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleSave = () => {
    console.log('User profile updated:', userProfile);
   
    alert('Profile updated successfully!');
  };

  return (
    <div style={{
        backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center">
                <h3>User Profile</h3>
              </div>
              <div className="card-body">
                {/* Profile Picture */}
                <div className="d-flex justify-content-center">
                  <img
                    src={userProfile.profilePicture}
                    alt="Profile"
                    className="img-fluid rounded-circle"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="profilePicture">Change Profile Picture</label>
                  <input
                    type="file"
                    className="form-control"
                    id="profilePicture"
                    onChange={handleProfilePicChange}
                  />
                </div>

                {/* Name */}
                <div className="form-group my-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={userProfile.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Date of Birth */}
                <div className="form-group my-3">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={userProfile.dob}
                    onChange={handleChange}
                  />
                </div>

                {/* Mobile Number */}
                <div className="form-group my-3">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    value={userProfile.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                  />
                </div>

                {/* Email */}
                <div className="form-group my-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                {/* Save Button */}
                <button onClick={handleSave} className="btn btn-primary w-100 mt-3">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
