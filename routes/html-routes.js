// Import required path dependency
const path = require("path");

module.exports = (app) => {

    // home route
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
    //exercises  route
    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });
    // stats route
    app.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
}