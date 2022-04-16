var express = require('express');
var router = express.Router();

// Home page GET 
router.get('/', function(req, res, next){
    res.send("This page is loaded successfully");
});

module.exports = router;
