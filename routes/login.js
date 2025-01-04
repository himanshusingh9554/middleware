const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'));
});

router.post('/login', (req, res, next) => {
    const username = req.body.username;
    res.cookie('username', username); // Store username in cookie
    res.redirect('/');
});

module.exports = router;