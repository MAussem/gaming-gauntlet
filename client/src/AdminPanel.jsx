// client/src/AdminPanel.jsx

import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from './config';
import './AdminPanel.css'; // We will create this next

function AdminPanel() {
  const [challengers, setChallengers] = useState([]);
  const [editValues, setEditValues] = useState({}); // Store temp edits

  // Fetch data on load
  useEffect(() => {
    fetchChallengers();
  }, []);

  const fetchChallengers = async () => {
    const res = await fetch(`${API_BASE_URL}/challengers`);
    const data = await res.json();
    setChallengers(data);
  };

  // Handle typing in the input box
  const handleInputChange = (id, value) => {
    setEditValues({ ...editValues, [id]: value });
  };

  // Save the new status to the database
  const saveStatus = async (id) => {
    const newStatus = editValues[id];
    if (!newStatus) return; // Don't save empty

    try {
      await fetch(`${API_BASE_URL}/challengers/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      alert('Updated!');
      fetchChallengers(); // Refresh list
    } catch (err) {
      alert('Error updating.');
    }
  };

  return (
    <div className="admin-container">
      <h2>⚙️ Tournament Admin Panel</h2>
      <div className="admin-list">
        {challengers.map((c) => (
          <div key={c._id} className="admin-row">
            <div className="admin-name">{c.name}</div>
            <div className="admin-actions">
              <input 
                type="text" 
                placeholder={c.status} 
                value={editValues[c._id] || ''}
                onChange={(e) => handleInputChange(c._id, e.target.value)}
              />
              <button onClick={() => saveStatus(c._id)}>Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;