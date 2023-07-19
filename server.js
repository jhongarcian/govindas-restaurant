const express = require("express");
const server = express();
const es6Renderer = require("express-es6-template-engine")
const pgp = require("pg-promise")()
require("dotenv").config()
const db = pgp(process.env.URL)

server.get('/heartbeat', (req, res) => {
    res.json({
        "message": "Heartbeat"
    });
});

server.listen(8080, () => {
    console.log("The server is running at PORT 8080");
});

