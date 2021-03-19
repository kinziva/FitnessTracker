// Import required dependencies 
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const API = require("./public/api");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("seeders"));

// Set mongoose connection and environment
mongoose.connect(process.env.MONGODB_URI || 
    "mongodb://localhost/workout", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
     }
);

// require express routes
require("./routes/html-routes")(app);
require("./routes/workout-routes")(app);

// listen on port 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});