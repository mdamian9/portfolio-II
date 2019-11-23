const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Message = require('../models/message');

router.get('/', (req, res, next) => {
    Message.find().then(messages => {
        if (!messages) {
            return res.status(404).json({
                message: 'No messages found'
            });
        };
        res.status(200).json({
            count: messages.length,
            messages: messages
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    // res.status(200).json({
    //     message: 'posted /message',
    //     req: req.body
    // });
    const message = new Message({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    message.save().then(message => {
        console.log(message);
        res.status(201).json({
            message: 'Successfully created new message',
            newMessage: message
        });
    });
});

module.exports = router;