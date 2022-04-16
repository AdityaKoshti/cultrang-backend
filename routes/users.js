var express = require('express');
var router = express.Router();

// Users page GET
router.get('/', function(req, res, next){
    res.send("This program has responded users");
});

module.exports = router;
