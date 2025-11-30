import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { GLITCH_VGC_TEAM } from './constants'; 
import './VgcTeamReveal.css'; 

const PokemonCard = ({ pokemon }) => {
    // State to manage the flip (true = show back/stats)
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="pokemon-card-wrapper" onClick={() => setIsFlipped(!isFlipped)}>
            <Tilt 
                className="parallax-effect" 
                perspective={1000} 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10}
            >
                <div className={`pokemon-card ${isFlipped ? 'is-flipped' : ''}`}>
                    
                    {/* CARD FRONT */}
                    <div className="card-face card-front">
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.imagePath} alt={pokemon.name} className="pokemon-image" />
                        <p className="pokemon-role">Role: {pokemon.role}</p>
                        
                        <div className="details-moves-row"> 
                        
                        {/* LEFT COLUMN: DETAILS */}
                        <div className="pokemon-details">
                            <h4>Details:</h4>
                            <p><strong>Ability:</strong> {pokemon.details.ability}</p>
                            <p><strong>Item:</strong> {pokemon.details.heldItem}</p>
                            <p><strong>Nature:</strong> {pokemon.details.nature}</p>
                        </div>
                        
                        {/* RIGHT COLUMN: MOVES */}
                        <div className="pokemon-moves"> 
                            <h4>Moves:</h4>
                            <ul>
                                {pokemon.details.moves.map((move, i) => <li key={i}>{move}</li>)}
                            </ul>
                        </div>
                    </div>
                        <p className="flip-prompt">Click to reveal base stats!</p>
                    </div>

                    {/* CARD BACK (Stats) */}
                    <div className="card-face card-back">
                        <h3>Base Stats: {pokemon.name}</h3>
                        <table className="stats-table">
                            <tbody>
                                {Object.entries(pokemon.baseStats).map(([statName, statData]) => ( // 👈 Note statData
                                    <tr key={statName} className={statName === 'Total' ? 'stat-total' : ''}>
                                        <td>{statName}</td>
                                        {/* NEW: Render stat value and a bar */}
                                        <td className="stat-bar-cell"> 
                                            <div className="stat-value">{statData.value}</div>
                                            <div 
                                                className="stat-bar" 
                                                style={{ 
                                                    width: `${statData.value / 2.55}%`, // Max base stat is 255 (Slaking HP), so scale to 100%
                                                    backgroundColor: statData.color 
                                                }}
                                            ></div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="flip-prompt">Click to see details!</p>
                    </div>
                </div>
            </Tilt>
        </div>
    );
};

const VgcTeamReveal = () => {
    return (
        <div className="vgc-team-section">
            <h2>Glitch's VGC Team Reveal (6 Pokémon)</h2>
            <p>Challengers: Study these base stats and team roles to plan your counter-strategy!</p>

            <div className="team-container">
                {GLITCH_VGC_TEAM.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default VgcTeamReveal;