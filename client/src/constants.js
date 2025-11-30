export const GLITCH_PICKS = [
    { name: "Pokemon VGC Format", reason: "When you're hot you're hot" },
    { name: "2XKO", reason: "A rolling golem gathers no rust." },
    { name: "Mario Kart 8 Deluxe", reason: "Wah, heh, heh! Waluigi is number one!" }
];

export const GLITCH_VGC_TEAM = [
    {
        name: "Rotom-Wash",
        imagePath: "/images/rotom.png", 
        role: "Defensive Pivot",
        
        // --- NEW FRONT CARD DETAILS ---
        details: {
            moves: ["Hydro Pump", "Will-O-Wisp", "Thunderbolt", "Protect"],
            nature: "Calm",
            heldItem: "Sitrus Berry",
            ability: "Levitate"
        },
        
        // --- BACK CARD DETAILS (Base Stats) ---
        baseStats: {
            HP: 78,
            Attack: 84,
            Defense: 78,
            SpAtk: 109,
            SpDef: 85,
            Speed: 100,
            Total: 534
        }
    },
];

export const CAM_PICKS = [
    { name: "Ultimate Smash Bros. (2 Stock, Final Destination)", reason: "Decades of skill in one arena." },
    { name: "Rocket League (1v1, Standard Map)", reason: "A perfect mix of mechanics and strategy." },
    { name: "Tetris Effect: Connected (Score Attack)", reason: "A pure test of pressure and speed." }
];

export const GRAND_PRIZE = "A trophy with your name engraved and a 1 of 1 title - First To Ever Do It";