const path = require("path");

module.exports = app => {
// Get request which sends exercise.html to browser when exercise page visited   
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
// Get request which sends index.html to browser when homepage visited
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
// Get request which sends stats.html to browser when stats visited
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

}