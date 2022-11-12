const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const User = mongoose.model('User', UserSchema); //creating this user will help us enable CRUD functionality

module.exports = User;
//exporting our User info will help us connect it to any file needed