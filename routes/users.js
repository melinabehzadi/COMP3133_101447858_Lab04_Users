const express = require('express');
const router = express.Router();
const User = require('../models/User');
const fs = require('fs');
const path = require('path');

// POST endpoint to insert a user
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// POST endpoint to insert multiple users (bulk insert)
router.post('/bulk-insert', async (req, res) => {
    try {
        // Read the UsersData.json file
        const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../UsersData.json'), 'utf-8'));

        // Insert multiple users into the database
        await User.insertMany(usersData);
        res.status(201).json({ message: 'Users inserted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
