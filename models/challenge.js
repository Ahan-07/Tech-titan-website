const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true
    },
    question: {
        type: String,
        required: true
    },
    solution: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
