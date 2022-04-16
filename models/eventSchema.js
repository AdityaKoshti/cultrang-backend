var mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: String,
    mailid: String,
    event: String
},{
    timestamps:true
})

module.export = mongoose.model('Event', eventSchema);