
const Product = require('../models/product.models');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})// this is basically the same as saying find all products in the empty array
        .then(products => {
            response.json(products)
            console.log(products);

        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err));
}
