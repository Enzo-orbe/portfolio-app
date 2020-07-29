const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())

const port = process.env.PORT  || 8080

//Routes
const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");

app.get("/about", (req, res) => {
    res.json(about)
});

app.get("/portfolio", (req, res) => {
    res.json(portfolio)
});


app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
});