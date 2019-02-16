// DEPENDENCIES
const express = require('express');
const app = express();

// PORT REQUIREMENT
const PORT = process.env.PORT || 8080;

// SERVE STATIC CONTENT
app.use(express.static('public'));

// PARSE APPLICATION BODY AS JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTE IMPORT
const routes = require('./controllers/pageController');

app.use(routes);

// SERVER LISTENER
app.listen(PORT, function() {
    console.log(`Listening on localhost port ${PORT}`);
});