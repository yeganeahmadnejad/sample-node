
// Load the express module.
var express = require('express');
var app = express();

// Respond to requests for / with 'Hello World'.
app.get('/', function(req, res){
    res.send('bye World!');
});

// Listen on port 80 (like a true web server).
app.listen(81);
console.log('Express server started successfully.');
