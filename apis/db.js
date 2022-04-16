var mongoose = require('mongoose');
var keys = require("./keys.json");

// Change the password that is here

module.exports = async () => {
    try{
        mongoose.connect(keys.mongoURI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("Successfully Connected to Database");
    }
    catch(err){
        console.error("Failed to Connect to Database");
        process.exit(1);
    }   
};
