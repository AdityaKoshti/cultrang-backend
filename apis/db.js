var mongoose = require('mongoose');

mongoose.connect(mongoose.connect('mongodb://localhost:27017/myapp'));

const userSchema = {
    name: String,
    email: String
}

const 