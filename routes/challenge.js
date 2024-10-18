const express = require('express');
const Challenge = require('../models/challenge');
const router = express.Router();

// Get coding challenge by difficulty
router.get('/:difficulty', async (req, res) => {
    const { difficulty } = req.params;
    try {
        const challenge = await Challenge.findOne({ difficulty });
        res.json(challenge);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
