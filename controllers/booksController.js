/*Set our models route as a constant to initialize it so our controllers will be able to manipulate/use the variable*/
const db = require("../models");

/*"module.exports" export this script it's available in other parts of the app*/ 
const findAll = (req, res) => {
    db.Book
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  };

  const findById = (req, res) => {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  };


  const create = (req, res) => {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  };

  const update = (req, res) => {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  };


  const remove = (req, res) => {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  };
  
  module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
  };