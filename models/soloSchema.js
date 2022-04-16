var mongoose = require("mongoose");

const soloSchema = new mongoose.Schema({
    name: String,
    mailid: String,
    comp: String
});

SoloComps = mongoose.model('SoloComp', soloSchema);

module.export = SoloComps;
