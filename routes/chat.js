const express = require('express');
const Message = require('../models/message');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'chat.html'));
});

router.post('/send-message', (req, res, next) => {
    const username = req.cookies.username;
    const messageText = req.body.message;
    const message = new Message({ username, message: messageText });
    message.save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.error(err));
});

router.get('/messages', (req, res, next) => {
    Message.find()
        .then(messages => {
            res.json(messages);
        })
        .catch(err => console.error(err));
});

module.exports = router;
