/*Set our models route as a constant to initialize it so our controllers will be able to manipulate/use the variable*/
const db = require("../models");

/*"module.exports" export this script it's available in other parts of the app*/ 
module.exports = {
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbBookData => res.json(dbBookData))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbBookData => res.json(dbBookData))
            .catch(err => res.stats(422).json(err));
    },
    create: function(req, res) {
        db.Book
        .create(req.body)
        .then(dbBookData => res.json(dbBookData))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.Book
            .findById({ _id: req.params.id})
            .then(dbBookData => dbBookData.remove())
            .then(dbBookData => res.json(dbBookData))
            .catch(err => res.status(422).json(err));
    }
}