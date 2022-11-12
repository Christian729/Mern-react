const { response } = require('express');
const Author = require('../models/author.models');


module.exports = {
    create: (request, response)=> {
        const { fullName } = request.body;
        Author.create({
            fullName : fullName
        })
            .then(author => response.json(author))
            .catch(err => response.status(400).json(err))
    }
}

module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then((author )=> response.json(author))
        .catch((err) => {
            response.status(400).json({ err });
        });
}

module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => {
            response.json(authors)
            console.log(authors)
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id: request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
    .then(updateAuthor => response.json(updateAuthor))
    .catch((err) => {
        response.status(400).json({ err }); // make sure you have this so
        // your update page has validations too
    });
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}

// const createNewAuthor = (req, res) => {
//     res.send("gets here");
// };

// module.exports = {createNewAuthor}