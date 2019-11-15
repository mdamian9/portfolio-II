const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err);
});
mongoose.set('useCreateIndex', true);

const msgRoutes = require('./api/routes/messages');

app.use('/message', msgRoutes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// Send every request to the React app
// Define any API routes before this runs
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
