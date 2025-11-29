// client/src/GamePicks.jsx
import { AUSSEM_PICKS, GRAND_PRIZE } from './constants'; // Import from constants file

function GamePicks() {
  return (
    <div className="game-picks-container">
      <h2>The Game Reveals</h2>
      
      <h3>The Aussem Brothers' Picks (3 Games)</h3>
      <p>These are the games we're best at. Overcome these, and you stand a chance!</p>
      
      <ul className="aussem-game-list">
        {AUSSEM_PICKS.map((pick, index) => (
          <li key={index}>
            <strong>{pick.name}</strong>: <em>{pick.reason}</em>
          </li>
        ))}
      </ul>
      
      <h3>Challenger Picks (2 Games)</h3>
      <p>Each Challenger must submit their two games upon sign-up to complete their personalized Bo5 series.</p>

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