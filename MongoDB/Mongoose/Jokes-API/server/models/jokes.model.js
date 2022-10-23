const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({

    setup: {
        type: String
    },
    punchline: {
        type: String
    },
    setup: {
        type: String
    }
    // we want to make an id, setup, punchline, createdat,updatedat, and something called __v
    
}, { timestamps: true }); // this little time stamps section allows us to have an automatic createdat and updated at

const Joke = mongoose.model('Joke', JokeSchema); //creating this user will help us enable CRUD functionality

module.exports = Joke;
//exporting our User info will help us connect it to any file needed