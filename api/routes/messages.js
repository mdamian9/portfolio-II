const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Message = require('../models/message');

router.get('/', (req, res, next) => {
    Message.find().select('firstName lastName email subject message').then(messages => {
        if (messages.length < 1) {
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
        res.status(500).json({ error: err });
    });
});

router.post('/', (req, res, next) => {
    const newMessage = new Message({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    newMessage.save().then(message => {
        sgMail.send({
            to: process.env.MY_EMAIL,
            from: 'md-site@donotreply.com',
            subject: `[MD Site] - ${message.firstName} ${message.lastName}: ${message.subject}`,
            text: message.message,
            html: `<p>${message.message}<p>`,
        }).catch(err => {
            console.log(err);
        });
        res.status(201).json({
            message: 'Successfully sent new message',
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
});

module.exports = router;
