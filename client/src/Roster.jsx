// client/src/Roster.jsx

import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { API_BASE_URL } from './config'; // Use your config file!
import './Roster.css'; // Import the new styles

function Roster() {
  const [challengers, setChallengers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallengers = async () => {
      try {
        // Use the config URL instead of hardcoded localhost
        const response = await fetch(`${API_BASE_URL}/challengers`);
        const data = await response.json();
        setChallengers(data);
      } catch (error) {
        console.error('Failed to fetch roster:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchChallengers();
  }, []);

return (
    <div className="roster-container">
      <h2>🏆 Challenger Roster</h2>
      <p className="roster-subtitle">See who has stepped up to face the Aussem Brothers.</p>

      {loading ? (
        <div className="loading-spinner">Loading Roster...</div>
      ) : challengers.length === 0 ? (
        <div className="empty-roster">
          <p>No challengers yet.</p>
          <p>Be the first to sign up!</p>
        </div>
      ) : (
        <div className="roster-grid">
          {challengers.map((c) => (
            // 👈 2. Wrap with Tilt and move KEY here
            <Tilt 
                key={c._id || c.id} 
                className="roster-tilt-wrapper"
                perspective={1000}
                scale={1.02} //Adds a slight pop effect on hover
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
            >
                <div className={`challenger-card ${c.status.includes('WON') ? 'winner-card' : ''}`}>
                
                <div className="card-header">
                    <h3>{c.name}</h3>
                    <span className="status-badge">
                    {c.status.includes('Pending') ? '⏳ Pending' : '📅 Scheduled'}
                    </span>
                </div>

                <div className="card-body">
                    <h4>Challenger Picks:</h4>
                    <div className="game-tags">
                    {c.gamesPicked.map((game, index) => (
                        <span key={index} className="game-tag">{game}</span>
                    ))}
                    </div>
                </div>

                <div className="card-footer">
                    <strong>Match Status:</strong>
                    <p className="status-text">{c.status}</p>
                    
                    {c.status.includes('WON') && <div className="winner-banner">👑 FINALIST 👑</div>}
                </div>

                </div>
            </Tilt>
          ))}
        </div>
      )}
    </div>
  );
}

export default Roster;