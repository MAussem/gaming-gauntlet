// server/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Challenger = require('./models/Challenger');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

// --- DATABASE CONNECTION ---
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

// --- MIDDLEWARE ---
app.use(cors()); 
app.use(express.json());

// --- ROUTES ---

// 1. GET: Get all challengers (for the Roster Page)
app.get('/api/challengers', async (req, res) => {
    try {
        const challengers = await Challenger.find().select('-__v'); // Exclude mongoose internal field
        res.json(challengers);
    } catch (error) {
        console.error("Error fetching challengers:", error);
        res.status(500).json({ message: "Failed to load challenger data." });
    }
});

// 2. POST: Sign up a new challenger (for the Sign-Up Page)
app.post('/api/signup', async (req, res) => {
    const { name, email, gamesPicked } = req.body;

    if (!name || !email || !gamesPicked || gamesPicked.length !== 2) {
        return res.status(400).json({ message: "Missing required sign-up fields or incorrect number of games." });
    }

    try {
        const newChallenger = new Challenger({ name, email, gamesPicked });
        await newChallenger.save();

        res.status(201).json({ 
            message: "Sign-up successful! Check your email for your match time.", 
            challenger: newChallenger 
        });
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error (email is unique)
            return res.status(409).json({ message: "This email is already signed up for the Gauntlet." });
        }
        console.error("Error processing sign-up:", error);
        res.status(500).json({ message: "An internal error occurred during sign-up." });
    }
});

// --- SERVER START ---
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});