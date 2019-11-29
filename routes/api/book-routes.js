/*Here is the books api for the books middleware and res req routing*/
const router = require("express").Router();
const {
    fetchSavedBooks,
    saveBook,
    deleteBook
  } = require('../../controllers/booksController');

/*Set our get and post methods using api/books router*/
router
    .route("/")
    .get(fetchSavedBooks)
    .post(saveBook);

/*We set the router to delete/remove the api/books/:id router based on the books id*/
router.route("/:id")
    .delete(deleteBook);

/*"module.exports" export the route so it's available in other parts of the app*/    
module.exports = router;