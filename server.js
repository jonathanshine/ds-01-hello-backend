// Import Express
const express = require("express");
const cors = require('cors');

// Generate an API instance
const app = express();

// Add cors to project
app.use( cors() );

// An array of the course modules
const modulesArr = [
    'HTML/CSS',
    'JavaScript',
    'DOM',
    'SPA',
    'Backend',
    'Fullstack',
    'Final Projects'
];

// Setup Express server on 5000
app.listen( 5000, () => {
    console.log('API is running successfully on PORT 5000');
});

// Setup a route called /json
app.get('/json', (request, response) => {
    console.log('You are on the json route');
    response.json(modulesArr);
});

// Setup a route called /text
app.get('/text', (request, response) => {
    response.send(modulesArr.join(', '))
});

// Route /html
app.get('/html', (req, res) => {
    arrAsHTML = modulesArr.map(item => {
        if (item === 'Backend') {
            return `<li><strong>${item}</strong></li>`;
        } else {
            return `<li>${item}</li>`;
        }}).join('');

    res.send(`<ul>${arrAsHTML}</ul>`);
});

