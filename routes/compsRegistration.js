var express = require('express');
var router = express.Router();

// Competitions Registration page 
router.get("/", function(req, res, next){
    res.send('Comps Registration');
});


module.exports = router;