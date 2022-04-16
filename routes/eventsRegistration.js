var express = require('express');
var bodyParser = require('body-parser');
// var EventModels = require("../models/eventSchema");
var mongoose = require("mongoose");
var router = express.Router();

var mailer = require("../apis/mailingService");

router.use(bodyParser.urlencoded({ extended: false }))

router.use(bodyParser.json());

const eventSchema = new mongoose.Schema({
    name: String,
    mailid: String,
    event: String
},{
    timestamps:true
});

EventModels = mongoose.model('Event', eventSchema);

// Competitions Registration page 
router.post('/:event', function(req, res, next){
        var event = req.params.event;
        var name = req.body.name;
        var mail = req.body.mail;

        EventModels.insertMany({
            name: name,
            mailid: mail,
            event : event
        });
        
        mailer(event, mail).then(() => {
            console.log('Mail Sent Successfully');
            res.status(200);
            res.setHeader('Content-Type', 'application/json');
            res.json({msg: "Mail Sent Successfully", success: true});
        }).catch((err) => {
            console.log(err);
            res.status(500);
            res.setHeader('Content-Type', 'application/json');
            res.json({msg: "Error in Sending the Mail", success: false});
        });
    });


module.exports = router;