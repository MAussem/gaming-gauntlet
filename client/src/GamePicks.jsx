import React, { useState } from 'react';
import VgcTeamReveal from './VgcTeamReveal';
import { GLITCH_PICKS, CAM_PICKS, GRAND_PRIZE } from './constants'; 

function GamePicks() {
  const [isTeamVisible, setIsTeamVisible] = useState(false); 

  const renderPicks = (picks, owner) => (
    <div className="picks-section">
      <h3>{owner}'s Picks ({picks.length} Games)</h3> 
      <ul className="aussem-game-list">
        {picks.map((pick, index) => (
          <li key={index}>
            <div className="game-item-content">
              <img src={pick.imagePath} alt={`${pick.name} logo`} className="game-logo" />
              <div className="game-info">
                <p>Reason: <em>{pick.reason}</em></p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="game-picks-container">
      <h2>The Aussem Brothers' Challenge</h2>
      <p>These are the games we're best at. Overcome these, and you stand a chance!</p>

      {/* -------------------- VIDEO CARD SECTION -------------------- */}
      <div className="video-card">
        <video 
          autoPlay // FIXED: Must be autoPlay (camelCase) for JSX
          loop
          muted
          playsInline
          className="reveal-video"
          src="/my-reveal.mp4" 
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {/* ----------------------------------------------------------- */}
      
      
      {renderPicks(GLITCH_PICKS, "Glitch")}

      {/* -------------------- VGC TEAM REVEAL SECTION -------------------- */}
      <button 
        className="vgc-reveal-button"
        onClick={() => setIsTeamVisible(!isTeamVisible)} // This toggle should now work
      >
        {isTeamVisible ? 'Hide Glitch\'s VGC Team' : '🚨 REVEAL GLITCH\'S VGC TEAM 🚨'}
      </button>

      {/* Conditional Rendering: Only show the VgcTeamReveal component if isTeamVisible is true */}
      {isTeamVisible && <VgcTeamReveal />}

      <hr />
      
      {/* Renders Cameron's 3 Picks */}
      {renderPicks(CAM_PICKS, "Cameron")}

      <hr />

      <h3>Challenger Picks (2 Games)</h3>
      <p>Each Challenger must submit two of their own games upon sign-up to complete their personalized Bo5 series (3 Aussem + 2 Challenger).</p>

      <hr />

      <h2>The Grand Prize</h2>
      <p className="prize-reveal">
        {GRAND_PRIZE}
        <br/>
        **PLUS:** The right to run the tournament as the **Gauntlet Director** next year!
      </p>
    </div>
  );
}

export default GamePicks;