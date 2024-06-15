import React, { useState } from 'react';
import axios from 'axios';
import AreaTop from '../../components/dashboard/areaTop/AreaTop';

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
      <AreaTop />
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
