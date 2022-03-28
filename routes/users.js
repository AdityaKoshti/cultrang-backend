var express = require('express');
var router = express.Router();

// Users page
router.get("/users", function(req, res, next){
    res.send('This program has responded users');
});


module.exports = router;
