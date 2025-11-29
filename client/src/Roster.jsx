// client/src/Roster.jsx

import React, { useState, useEffect } from 'react';

function Roster() {
  const [challengers, setChallengers] = useState([]);

  useEffect(() => {
    const fetchChallengers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/challengers');
        const data = await response.json();
        setChallengers(data);
      } catch (error) {
        console.error('Failed to fetch roster:', error);
      }
    };
    fetchChallengers();
  }, []);

  return (
    <div>
      <h2>Current Challengers & Status</h2>
      {challengers.length === 0 ? (
        <p>No challengers signed up yet. Be the first!</p>
      ) : (
        <ul>
          {challengers.map(c => (
            <li key={c.id}>
              <strong>{c.name}</strong> - Status: {c.status}
              {c.status.includes('WON') && <span> 🎉 FINALIST!</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Roster;