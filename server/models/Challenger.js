const mongoose = require('mongoose');

const ChallengerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    gamesPicked: {
        type: [String],
        required: true,
        validate: [arrayLimit, '{PATH} must have exactly 2 games'],
    },
    status: {
        type: String,
        default: 'Pending Schedule' // Initial status
    },
    signedUpDate: {
        type: Date,
        default: Date.now
    }
});

function arrayLimit(val) {
    return val.length === 2;
}

const Challenger = mongoose.model('Challenger', ChallengerSchema);
module.exports = Challenger;