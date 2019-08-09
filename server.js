const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

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
