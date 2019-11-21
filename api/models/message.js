const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Message', messageSchema);
