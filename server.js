require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3030;
const path = require("path");

const {giftCardsRouter, sessionIdRetrieves, today_menu, insertReview} = require("./routes");



server.use(cors({
    origin: ["http://localhost:5173", "*"],
    methods: ["GET", "POST", "DELETE", 'UPDATE','PUT','PATCH'],
    credentials: true
}));
server.use(express.json());
server.use(cookieParser());

server.get('/api/heartbeat', (req, res) => {
    res.json({
        "is": "working"
    });
});

server.post("/gift-card", async (req, res) => {
    const inputFields = req.body;
    console.log(inputFields)

    res.json({"message": "added successfully"})
    // try {
    //     await db.none(`
    //         INSERT INTO buyers (id, first_name, last_name, email, phone_number, amount)
    //         VALUES ($1, $2, $3, $4, $5, $6)
    //     `, [])
    // } catch (error) {
        
    // }
})


// Routes

server.use("/", giftCardsRouter);
server.use("/", sessionIdRetrieves);
server.use("/", today_menu);
server.use("/", insertReview);


server.listen(PORT, () => {
    console.log(`The server is running at PORT ${PORT}`);
});