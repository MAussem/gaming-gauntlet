// client/src/Rules.jsx

import React from 'react';
import './Rules.css'; 

function Rules() {
  return (
    <div className="rules-container">
      <h2>📜 Official Rules: The Aussem Brothers' Gauntlet</h2>
      <p className="rules-intro">
        Welcome, Challenger. These are the laws of the Gauntlet. Read them carefully before you sign up.
      </p>

      <hr />

      <section>
        <h3>I. Tournament Structure (The League)</h3>
        <ul>
          <li><strong>The Matchup:</strong> Each Challenger faces <strong>ONE</strong> of the Aussem Brothers (Glitch or Cameron) in a single **Best-of-Five (Bo5)** $1v1$ series.</li>
          <li><strong>League Format:</strong> Losing the Bo5 series does <strong>not</strong> eliminate you. Your ranking is based on performance points.</li>
          <li><strong>Victory Condition:</strong> The Challenger attempts to win 3 of the 5 games to maximize their score.</li>
        </ul>
      </section>

      <section>
        <h3>II. The Point System</h3>
        <p>Challengers earn points based on their performance in the Bo5 series:</p>
        <table className="points-table">
          <thead>
            <tr>
              <th>Match Result</th>
              <th>Points Awarded</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 - 0 Victory</td>
              <td><strong>3 Points</strong> (Dominating)</td>
            </tr>
            <tr>
              <td>3 - 1 Victory</td>
              <td><strong>2 Points</strong> (Clear Win)</td>
            </tr>
            <tr>
              <td>3 - 2 Victory</td>
              <td><strong>1 Point</strong> (Narrow Win)</td>
            </tr>
            <tr>
              <td>2 - 3 Loss (or worse)</td>
              <td><strong>0 Points</strong></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>III. Game Selection (5 Games Total)</h3>
        <ul>
          <li><strong>Aussem Brother's Picks (3 Games):</strong> You will play the 3 games designated by the Brother you chose to challenge (Glitch or Cameron).</li>
          <li><strong>Challenger Picks (2 Games):</strong> You select your 2 preferred games upon sign-up.</li>
        </ul>
      </section>

      <section>
        <h3>IV. The Final Gauntlet (Playoffs)</h3>
        <ul>
          <li><strong>Qualification:</strong> The top <strong>8 Challengers</strong> with the highest scores advance to the Finals.</li>
          <li><strong>Bracket Format:</strong> A single-elimination tournament resolved via <strong>Best-of-Three (Bo3) Rock, Paper, Scissors</strong> matches.</li>
          <li><strong>Elimination:</strong> Lose the RPS match, and you are out. Win, and you move on to the next round.</li>
        </ul>
      </section>

      <section>
        <h3>V. Conduct and Provisions</h3>
        <ul>
          <li><strong>Time Limits:</strong> Max 10 minutes per game. The whole series must finish in 60 minutes.</li>
          <li><strong>NO Cheats:</strong> Use of cheats or exploits results in immediate forfeit.</li>
          <li><strong>Paid Games:</strong> If you pick a paid game, you must ensure two legal copies are available for play.</li>
        </ul>
      </section>
    </div>
  );
}

export default Rules;