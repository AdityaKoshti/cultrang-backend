// Installing some npm packages
var createErrors = require('http-errors');
var express = require('express');
require('./apis/db')();

var app = express();

// Installing the routes 
var index = require('./routes/index.js');
var users = require('./routes/users.js');
var compsRegistration = require('./routes/compsRegistration.js');
var eventsRegistration = require('./routes/eventsRegistration.js');

app.set('view engine', 'ejs');


// Using the routes sequentially
app.use('/', index);
app.use('/users', users);
app.use('/comps', compsRegistration);
app.use('/events', eventsRegistration);

// Handling the errors
app.use(function(err, req, res, next){
    console.log(err);
    next(createErrors(404));
});

app.use(function(err, req, res, next){
    console.log(err);
    res.render('error', {error: err.status});
});

// Listening on port 3000
// app.listen(3000, function(err){
//     if (err) console.log("Error in server setup")
//     console.log("Server listening on Port: ", 3000);
// });

module.exports = app;