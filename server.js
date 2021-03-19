// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

// Setting up Express App ans setting up port
const app = express();
const PORT = process.env.PORT || 8080;


// Sets up the Express app 
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("seeders"));

// Connecting to  mongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/myFirstDatabase";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// Creating and importing routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}!`);
});