import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

const RoleForm = () => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/roles', { name, permissions });
      console.log('New role created:', response.data);
      // Reset form fields after successful submission
      setName('');
      setPermissions('');
    } catch (error) {
      console.error('Error creating role:', error);
    }
  };

  return (
    <div>
      <h2>Create New Role</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Permissions:</label>
          <input type="text" value={permissions} onChange={(e) => setPermissions(e.target.value)} required />
        </div>
        <button type="submit">Create Role</button>
      </form>
    </div>
  );
};

export default RoleForm;
