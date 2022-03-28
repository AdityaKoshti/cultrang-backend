var createErrors = require('http-errors');
var express = require('express');


var app = express();


var index = require('./routes/index');
var users = require('./routes/users');
var compsRegistration = require('./routes/compsRegistration');
var eventsRegistration = require('./routes/eventsRegistration');


app.set('view engine', 'ejs');


app.use('/' , index);
app.use('/users', users);
app.use('/comps', compsRegistration);
app.use('/events', eventsRegistration);


app.use(function(err, req, res, next){
    console.log(err);
    next(createErrors(404));
});

app.use(function(err, req, res, next){
    console.log(err);
    res.render('error', {error: err.status});
});

app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port: ", 3000);
});