/* Here is the body api or "index" for the routing dir*/

const path = require("path");

/*Set express to a constant global variable and init the npm express to run with this route body javascript code*/
const router = require("express").Router();

/*Set constant variable to call all api information from directory at "/api"*/
const apiRoutes = require("./api");

/*api routes*/
router.use("/api", apiRoutes);

/*We set the default route - if no routs hit send home page (*)*/
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


/*"module.exports" export the route so it's available in other parts of the app*/
module.exports = router;