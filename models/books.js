/*Here we call mongoose or initialize it by setting it to a constant variable*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*We organize our schema to parse the data retreived form the api through these options from our object*/
const bookSchema = new Schema({
    bookId: {
        type: String
    },
    title: {
        type: String
    },
    authors: {
        type: Array
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

/*Set our book schema to equal a constant variable so we can have our mongoose middle ware do work*/
const Book = mongoose.model("Book", bookSchema)

/*"module.exports" export this script it's available in other parts of the app*/ 
module.exports = Book;