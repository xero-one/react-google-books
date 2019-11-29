/*Here is the books api for the books middleware and res req routing*/
const router = require("express").Router();
const booksController = require('../../controllers/booksController');

/*Set our get and post methods using api/books router*/
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

/*We set the router to delete/remove the api/books/:id router based on the books id*/
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

/*"module.exports" export the route so it's available in other parts of the app*/    
module.exports = router;