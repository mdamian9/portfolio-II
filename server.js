const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const indexRoutes = require('./api/routes/');

app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
