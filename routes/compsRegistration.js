var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
// var SoloComps = require("../models/soloSchema");
var router = express.Router();

var mailer = require("../apis/mailingService");

router.use(bodyParser.urlencoded({ extended: false }))

router.use(bodyParser.json());

const soloSchema = new mongoose.Schema({
    name: String,
    mailid: String,
    comp: String
});

const SoloComps = mongoose.model('SoloComp', soloSchema);

// Competitions Registration page 
router.route('/:comp')
    .post((req, res, next) => {
        var comp = req.params.comp;
        var name = req.body.name;
        var mail = req.body.mail;

        SoloComps.insertMany({
            name: name,
            mailid: mail,
            comp : comp
        });
        console.log(name);
        

        console.log('Mail Sent Successfully');
            res.status(200);
            res.json({msg: "Mail Sent Successfully", success: true});


        // mailer(comp, mail).then(() => {
        //     console.log('Mail Sent Successfully');
        //     res.status(200);
        //     res.json({msg: "Mail Sent Successfully", success: true});
        // }).catch((err) => {
        //     console.log(err);
        //     res.status(500);
        //     res.json({msg: "Error in Sending the Mail", success: false});
        // });
    });


module.exports = router;