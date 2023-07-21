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

server.post("/add-review", async (req, res) => {
    const { name, rating, comment } = req.body;

    try {
        await db.none(`
            INSERT INTO reviews (name, rating, comment)
            VALUES ($1, $2, $3)
        `, [name, rating, comment]);

        res.status(200).json({message: "Review added successfully"});
        
    } catch (err) {
        console.error("Error,", err);
        res.status(500).json({error: "Something went wrong"});
    }
});

server.listen(8080, () => {
    console.log("The server is running at PORT 8080");
});

