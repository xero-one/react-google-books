/*Here is the body api or "index" for the books routing*/ 

/*We use the "express.router" class to create route handlers, basically init a routing system*/
const router = require("express").Router();

const bookRoutes = require("./books");

/*api routes for the books*/
router.use("/books", bookRoutes);

/*"module.exports" export the route so it's available in other parts of the app*/
module.exports = router;