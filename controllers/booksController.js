/*Set our models route as a constant to initialize it so our controllers will be able to manipulate/use the variable*/
const db = require("../models");

/*"module.exports" export this script it's available in other parts of the app*/ 
const fetchSavedBooks = (req, res) => {
    db.Book.find({})
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  };
  
  const saveBook = (req, res) => {
    db.Book.create(req.body)
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  };
  
  const deleteBook = (req, res) => {
    db.Book.remove({
      _id: req.params.id
    })
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  };
  
  module.exports = {
    fetchSavedBooks,
    saveBook,
    deleteBook
  };