// This is the file we will use to connect to MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/name_of_your_DB', { // do i need to link the db name here?
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));