const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Coffee making server is running");
});

// listening port
app.listen(port, () => {
    console.log("coffee making server listening on port " + port);
});