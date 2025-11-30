export const GLITCH_PICKS = [
    { name: "Pokemon VGC Format", reason: "When you're hot you're hot", imagePath: "/images/p-logo.png" },
    { name: "2XKO", reason: "A rolling golem gathers no rust.", imagePath: "/images/2x-logo.png" },
    { name: "Mario Kart 8 Deluxe", reason: "Wah, heh, heh! Waluigi is number one!", imagePath: "/images/mk8-logo.png" },
];

export const GLITCH_VGC_TEAM = [
    {
        name: "Rotom-Wash",
        imagePath: "/images/rotom.png", 
        role: "Bulky Sweeper",
        
        // --- FRONT CARD DETAILS ---
        details: {
            moves: ["Hydro Pump", "Will-O-Wisp", "Thunderbolt", "Protect"],
            nature: "Calm",
            heldItem: "Sitrus Berry",
            ability: "Levitate"
        },
        
        // --- BACK CARD DETAILS ---
        baseStats: {
            
            HP: { value: 78, color: "#FF776C" },
            Attack: { value: 65, color: "#F08030" },
            Defense: { value: 107, color: "#F8D030" },
            SpAtk: { value: 105, color: "#6890F0" },
            SpDef: { value: 107, color: "#78C850" },
            Speed: { value: 86, color: "#F85888" },
        }
    },
    {
        name: "Landorus",
        imagePath: "/images/landorus.png", 
        role: "Special Sweeper",
        
        // --- FRONT CARD DETAILS ---
        details: {
            moves: ["Protect", "Stone Edge", "Hidden Power (Ice)", "Earth Power"],
            nature: "Timid",
            heldItem: "Expert Belt",
            ability: "Sand Force"
        },
        
        // --- BACK CARD DETAILS ---
        baseStats: {
            
            HP: { value: 89, color: "#F8D030" },
            Attack: { value: 125, color: "#78C850" },
            Defense: { value: 90, color: "#a4c850ff" },
            SpAtk: { value: 115, color: "#a4c850ff" },
            SpDef: { value: 80, color: "#F8D030" },
            Speed: { value: 101, color: "#a4c850ff" },
        }
    },
    {
        name: "Amoonguss",
        imagePath: "/images/am.png", 
        role: "Defensive Pivot",
        
        // --- FRONT CARD DETAILS ---
        details: {
            moves: ["Protect", "Spore", "Rage Powder", "Giga Drain"],
            nature: "Relaxed",
            heldItem: "Rocky Helmet",
            ability: "Regenerator"
        },
        
        // --- BACK CARD DETAILS ---
        baseStats: {
            
            HP: { value: 114, color: "#78C850" },
            Attack: { value: 85, color: "#F8D030" },
            Defense: { value: 70, color: "#F8D030" },
            SpAtk: { value: 85, color: "#F8D030" },
            SpDef: { value: 80, color: "#F8D030" },
            Speed: { value: 30, color: "#f8a058ff" },
        }
    },
    {
        name: "Salamence",
        imagePath: "/images/sal.png", 
        role: "Mega User",
        
        // --- FRONT CARD DETAILS ---
        details: {
            moves: ["Hyper Voice", "Draco Meteor", "Double-Edge", "Protect"],
            nature: "Naive",
            heldItem: "Salamencite",
            ability: "Intimidate"
        },
        
        // --- BACK CARD DETAILS ---
        baseStats: {
            
            HP: { value: 95, color: "#a4c850ff" },
            Attack: { value: 135, color: "#78C850" },
            Defense: { value: 80, color: "#F8D030" },
            SpAtk: { value: 110, color: "#a4c850ff" },
            SpDef: { value: 80, color: "#F8D030" },
            Speed: { value: 100, color: "#a4c850ff" },
        }
    },
    {
        name: "Tyranitar",
        imagePath: "/images/ty.png", 
        role: "One Trick",
        
        // --- FRONT CARD DETAILS ---
        details: {
            moves: ["Superpower", "Ice Beam", "Assurance", "Rock Slide"],
            nature: "Jolly",
            heldItem: "Choice Scarf",
            ability: "Sand Stream"
        },
        
        // --- BACK CARD DETAILS ---
        baseStats: {
            
            HP: { value: 100, color: "#a4c850ff" },
            Attack: { value: 134, color: "#78C850" },
            Defense: { value: 110, color: "#a4c850ff" },
            SpAtk: { value: 95, color: "#a4c850ff" },
            SpDef: { value: 100, color: "#78C850" },
            Speed: { value: 61, color: "#F8D030" },
        }
    },
    {
        name: "Aegislash",
        imagePath: "/images/ae.png", 
        role: "Physical Pivot",
        
        // --- FRONT CARD DETAILS ---
        details: {
            moves: ["Wide Guard", "Flash Cannon", "Shadow Ball", "King's Shield"],
            nature: "Modest",
            heldItem: "Life Orb",
            ability: "Stance Change"
        },
        
        // --- BACK CARD DETAILS ---
        baseStats: {
            
            HP: { value: 60, color: "#F8D030" },
            Attack: { value: 50, color: "#F08030" },
            Defense: { value: 140, color: "#78C850" },
            SpAtk: { value: 50, color: "#F08030" },
            SpDef: { value: 140, color: "#78C850" },
            Speed: { value: 60, color: "#F8D030" },
        }
    },
];

export const CAM_PICKS = [
    { name: "Ultimate Smash Bros. (3 Stock, Omega)", reason: "Decades of skill in one arena.", imagePath: "/images/ss-logo.png" },
    { name: "Halo Infinite", reason: "A perfect mix of mechanics and strategy.", imagePath: "/images/h-logo.png" },
    { name: "League of Legends", reason: "?", imagePath: "/images/l-logo.png" }
];

export const GRAND_PRIZE = "A trophy with your name engraved and a 1 of 1 title - First To Ever Do It";