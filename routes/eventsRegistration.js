var express = require('express');
var router = express.Router();

// Events Registration page 
router.get("/", function(req, res, next){
    res.send('Events Registration');
});


module.exports = router;