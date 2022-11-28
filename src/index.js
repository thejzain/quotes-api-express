const express  = require("express")
const app = express();
const port = 3000;
const quotes = require("../src/quotes.json")

app.get("/quotes", (req, res) => {
    res.json(quotes)
})

app.listen(port, () => {
    console.log("Example app listening on port ${port}")
})