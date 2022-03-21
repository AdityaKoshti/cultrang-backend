
var express = require('express');
var createErrors = require('http-errors');

var app = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res){
    res.send("<h1> Hello World</h1>");
});

app.get("/users", function(req, res, next){
    res.send("<h1> This is the users page</h1>");
});

app.get("/comps", function(req, res, next){
    res.send("<h1> This is the comps page</h1>");
});

app.get("/events", function(req, res, next){
    res.send("<h1> This is the events page</h1>");
});

app.use(function(req, res, next){
    next(createErrors(404));
});


app.use(function(err, req, res, next){
    res.render('error', {error: err.status});
});

app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port: ", 3000);
});