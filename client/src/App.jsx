// client/src/App.jsx

import { useState } from "react";
import SignUpForm from "./SignUpForm";
import Roster from "./Roster";
import GamePicks from "./GamePicks";
import BackgroundParticles from "./BackgroundParticles";
import "./App.css";

function App() {
  // State to manage which view is active
  const [activeView, setActiveView] = useState("signup");

  const renderContent = () => {
    switch (activeView) {
      case "roster":
        return <Roster />;
      case "games":
        return <GamePicks />;
      case "signup":
      default:
        return <SignUpForm />;
    }
  };

  return (
    <>
      <BackgroundParticles />
      <div className="gauntlet-app">
        <header>
          <h1>⚔️ The Aussem Brothers' Gauntlet 🛡️</h1>
          <p>A Best-of-Five 1v1 Annual Gaming Showdown</p>
          <nav className="nav-tabs">
            <button
              onClick={() => setActiveView("signup")}
              className={activeView === "signup" ? "active" : ""}
            >
              Sign Up & Rules
            </button>
            <button
              onClick={() => setActiveView("roster")}
              className={activeView === "roster" ? "active" : ""}
            >
              Challenger Roster & Results
            </button>
            <button
              onClick={() => setActiveView("games")}
              className={activeView === "games" ? "active" : ""}
            >
              The Game Reveals
            </button>
          </nav>
        </header>

        <main className="main-content">{renderContent()}</main>

        <footer>
          <p>
            © {new Date().getFullYear()} The Aussem Brothers' Gauntlet. Do you
            accept the challenge?
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
