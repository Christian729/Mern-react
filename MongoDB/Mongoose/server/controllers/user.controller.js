// here we will not require the mongoose, we only need to export the user information and use it here
// this allows us to perform CRUD functions on the user
const User = require('../models/user.model');

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allDaUsers) => {// the .then function will execute when the data is successful at whatever it does.
            res.json({ users: allDaUsers })
        })
        .catch((err) => {// the .catch function is here in case there is an error
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => {
            res.json({ user: oneSingleUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => {
            res.json({ user: newlyCreatedUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.json({ user: updatedUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}