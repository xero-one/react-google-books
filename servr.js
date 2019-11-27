/*Begin our constant defines and require calls==================================================*/

/*Dependencies set as constant variables*/

const express = require("express");

const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

/*End of our constant defines and require calls=================================================*/







/*Begin our calls to program our app from the varibales/constants we defined above==============*/

/*Use "app" to define middleware*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*This line is to set a static server up for static assets calibrated for heroku*/
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

/*We set our "app" to use routes for API calls*/
app.use(routes);

/*We set the connection to our Mongo database*/
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks")

/*Set the "app" to listen to PORT set above*/
app.listen(PORT, () => {
  console.log(`Hello 🌎 ==> Server now on port ${PORT}!`);
});

/*End our calls to program our app from the varibales/constants we defined above==============*/