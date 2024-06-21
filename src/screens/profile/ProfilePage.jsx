import React, { useState } from 'react';
import axios from 'axios';
import { MdOutlineMenu } from "react-icons/md";


const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make request to backend endpoint to update user profile
      const response = await axios.put('/api/profile', {
        name,
        email,
        password
      });
      // Assuming the backend returns updated user data, update local state
      const updatedUser = response.data;
      setName(updatedUser.name);
      setEmail(updatedUser.email);
      // Clear password field after successful update
      setPassword('');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
         <button
          className="sidebar-open-btn"
          type="button"
          onClick={() => dispatch({ type: "SIDEBAR_OPEN", payload: true })}
        >
          <MdOutlineMenu size={24} />
        </button>
      <h1 className="area-top-title">Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="line-input">
          <label>Name:</label>
          <input
            type="text"/>
        </div>
        <div className="line-input">
          <label>Email:</label>
          <input
            type="email"  />
        </div>
        <div className="line-input">
          <label>Password:</label>
          <input
            type="password"  />
        </div>
        <button type="submit" className='save-button'>Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
