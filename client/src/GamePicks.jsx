// client/src/GamePicks.jsx

import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt'; // Import Tilt for the Prize Card
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
      <h2>The Aussem Brothers' Game Pool</h2>
      <p>These are the games we're best at. Overcome these, and you stand a chance!</p>

      {/* Video Card */}
      <div className="video-card">
        <video 
          autoPlay 
          loop
          muted
          playsInline
          className="reveal-video"
          src="/my-reveal.mp4" 
        >
          Your browser does not support the video tag.
        </video>
      </div>
      
      {renderPicks(GLITCH_PICKS, "Glitch")}

      <button 
        className="vgc-reveal-button"
        onClick={() => setIsTeamVisible(!isTeamVisible)}
      >
        {isTeamVisible ? 'Hide Glitch\'s VGC Team' : '🚨 REVEAL GLITCH\'S VGC TEAM 🚨'}
      </button>

      {isTeamVisible && <VgcTeamReveal />}

      <div className="video-card">
        <video 
          autoPlay 
          loop
          muted
          playsInline
          className="reveal-video"
          src="/my-reveal1.mp4" 
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {renderPicks(CAM_PICKS, "Cameron")}

      <hr />

      {/* --- CHALLENGER PICKS SECTION --- */}
      <div className="challenger-section">
        <h3>Challenger Picks (2 Games)</h3>
        <p>You choose the battleground. Pick 2 games to complete your Bo5 series.</p>
        
        <div className="mystery-cards-container">
           <div className="mystery-card">
              <span className="question-mark">?</span>
              <p>Your Pick 1</p>
           </div>
           <div className="mystery-card">
              <span className="question-mark">?</span>
              <p>Your Pick 2</p>
           </div>
        </div>
      </div>

      <hr />

      {/* --- GRAND PRIZE SECTION --- */}
      <h2>The Grand Prize</h2>
      
      <Tilt 
        className="prize-tilt-wrapper"
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div className="prize-card">
          <div className="trophy-icon">🏆</div>
          <h3>The "First To Ever Do It" Trophy</h3>
          <p className="prize-subtext">Engraved with your name.</p>
          
          <div className="bonus-prize">
            <span>PLUS</span>
            <h4>The Title of <strong>Gauntlet Director</strong></h4>
            <p>You run the show next year.</p>
          </div>
        </div>
      </Tilt>

    </div>
  );
}

export default GamePicks;