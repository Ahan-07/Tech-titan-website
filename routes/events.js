const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// Create an event
router.post('/create', async (req, res) => {
    const { title, description, date, location } = req.body;
    
    try {
        const newEvent = new Event({ title, description, date, location });
        await newEvent.save();
        res.json(newEvent);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
